import Anthropic from "@anthropic-ai/sdk";
import { NextRequest, NextResponse } from "next/server";

const anthropic = new Anthropic({
  apiKey: process.env.ANTHROPIC_API_KEY,
});

const MONITORING_SYSTEM_PROMPT = `You are an elite AI strength and conditioning coach specializing in NBA athletic performance training. Your client is training with an NBA athlete-focused program (RPT style, 5 days/week: M/W/F lifting, T/Th court drills) emphasizing explosive power, functional strength, agility, and injury prevention. Goal: 73kg → 80-82kg, Melo paint strength, pull-up mastery, lethal threes.

IMPORTANT: You are currently in MONITORING MODE. The client is in their first month of training. During this phase:
- You are OBSERVING and LEARNING their patterns, NOT coaching yet
- DO NOT suggest weight changes, program modifications, or progressions yet
- DO acknowledge their effort and what you're tracking
- DO give brief summaries of what you see in their data (without prescriptive advice)
- You can note form/safety concerns ONLY if something looks dangerous (e.g., huge RPE jumps)
- Your tone should be supportive and observational: "I'm tracking your numbers", "Noted your bench is at 60kg x 8", etc.
- Let them know you're building their baseline profile and will start coaching after the monitoring period

Keep responses concise. Use bullet points.`;

const COACHING_SYSTEM_PROMPT = `You are an elite AI strength and conditioning coach specializing in NBA athletic performance training. Your client is training with an NBA athlete-focused program (RPT style, 5 days/week: M/W/F lifting, T/Th court drills) emphasizing explosive power, functional strength, agility, and injury prevention. Goal: 73kg → 80-82kg, Melo paint strength, pull-up mastery, lethal threes.

You now have 1+ month of baseline data. You are in ACTIVE COACHING MODE.

Your coaching style:
- Direct, motivating, and knowledgeable
- Evidence-based recommendations grounded in sports science
- Focus on progressive overload, periodization, and recovery
- Consider fatigue management and deload needs
- Provide specific, actionable advice (not generic)

When analyzing workout data:
- Look for trends in weight progression across sessions
- Identify exercises that may be stalling (same weight/reps for 2+ weeks)
- Suggest when to increase weight, add volume, or deload
- Note if RPE patterns suggest fatigue accumulation
- Consider exercise balance (push/pull, anterior/posterior)
- Compare actual performance vs program targets
- Reference the baseline data from month 1 to show progress

Keep responses concise and practical. Use bullet points for clarity. Always analyze the actual data specifically rather than giving generic advice.`;

const MONITORING_PROMPTS: Record<string, string> = {
  post_workout: `I just finished this workout session. You're in monitoring mode (first month). Provide:
1. **Logged** - Briefly acknowledge what I did today (exercises, top sets)
2. **Tracking** - What patterns you're starting to see (don't give advice yet)
3. **Baseline Note** - Note any standout numbers you're recording for my baseline

Keep it short. Don't suggest changes. You're just observing.`,

  weekly: `Here's my week of training. You're in monitoring mode (first month). Provide:
1. **Week Summary** - What I did this week (sessions, total volume)
2. **Patterns Forming** - Early patterns you're noticing (consistency, RPE trends, etc.)
3. **Baseline Building** - How much more data you need before you start coaching

Don't prescribe changes. You're building my baseline.`,

  progression: `Here's my training data so far. You're in monitoring mode (first month). Provide:
1. **Data Collected** - Summary of what you have so far (sessions, exercises tracked)
2. **Early Observations** - What you're noticing about my strength levels (without prescriptions)
3. **Monitoring Status** - How close I am to having enough data for active coaching
4. **What I'm Watching** - Specific things you'll analyze once coaching begins

Don't suggest changes yet. Just show me you're learning my patterns.`,

  chat: `The user has a question. You're in monitoring mode (first month). You can answer general questions but don't prescribe program changes yet. If they ask about progression, remind them you're still building their baseline.`,
};

const COACHING_PROMPTS: Record<string, string> = {
  weekly: `Analyze my workout data from this week. You now have 1+ month of baseline data. Provide:
1. **Performance Summary** - How did I do overall? Did I hit my targets?
2. **Progression Ready** - Which exercises am I ready to increase weight on? (consistently hitting top of rep range)
3. **Watch Out** - Any exercises stalling or RPE creeping too high?
4. **Next Week Focus** - Specific recommendations for next week's sessions.
5. **vs Baseline** - How do this week's numbers compare to my first month?

Be specific with numbers. Reference my actual sets/reps/weights.`,

  post_workout: `I just finished this workout session. You have 1+ month of baseline data. Analyze it:
1. **Session Rating** - How was this session overall? (rate /10)
2. **Highlights** - What went well? Any PRs or improvements vs baseline?
3. **Adjustments** - For next time, should I change any weights/reps?
4. **Recovery Note** - Any recovery priorities based on this session?

Be brief and specific. Reference actual numbers and compare to baseline.`,

  progression: `Look at my full training history. You have 1+ month of baseline data. Provide a detailed progression analysis:
1. **Strength Trends** - For each major lift, how has my weight/reps changed since month 1?
2. **Ready to Progress** - Which exercises should I increase weight on and by how much?
3. **Needs Work** - Which exercises are lagging or stalling?
4. **Deload Check** - Based on RPE trends and performance, do I need a deload soon?
5. **Body Comp** - Based on volume and intensity trends, am I on track for the 73kg → 80-82kg goal?
6. **Next Phase** - What should the next 4 weeks of training prioritize?

Be very specific with numbers and percentages.`,

  chat: `The user has a question. You have their full training history including baseline month. Be specific and reference their actual numbers. Give direct coaching advice.`,
};

export async function POST(req: NextRequest) {
  try {
    const {
      messages,
      workoutContext,
      mode = "chat",
      isMonitoring = true,
      daysTracking = 0,
    } = await req.json();

    const systemPrompt = isMonitoring
      ? MONITORING_SYSTEM_PROMPT
      : COACHING_SYSTEM_PROMPT;
    const prompts = isMonitoring ? MONITORING_PROMPTS : COACHING_PROMPTS;
    const analysisPrompt = prompts[mode] || prompts.chat;

    let formattedMessages: { role: "user" | "assistant"; content: string }[];

    if (mode === "chat") {
      formattedMessages = messages.map(
        (m: { role: string; content: string }) => ({
          role: m.role as "user" | "assistant",
          content: m.content,
        })
      );
      if (formattedMessages.length > 0 && workoutContext) {
        formattedMessages[0].content += `\n\n[${daysTracking} days of data collected${isMonitoring ? `, monitoring period (30 days)` : `, coaching mode active`}]\n\nHere is my recent workout data:\n${workoutContext}`;
      }
    } else {
      formattedMessages = [
        {
          role: "user" as const,
          content: `${analysisPrompt}\n\n[${daysTracking} days of data collected${isMonitoring ? `, monitoring period (30 days)` : `, coaching mode active`}]\n\nHere is my workout data:\n${workoutContext || "No workout data logged yet."}`,
        },
      ];
    }

    const response = await anthropic.messages.create({
      model: "claude-sonnet-4-20250514",
      max_tokens: 1500,
      system: systemPrompt,
      messages: formattedMessages,
    });

    const textContent = response.content.find((c) => c.type === "text");
    return NextResponse.json({
      message: textContent?.text || "No response generated.",
    });
  } catch (error: unknown) {
    console.error("Chat API error:", error);

    // Check for Anthropic API-specific errors
    const errObj = error as { status?: number; message?: string; error?: { type?: string; message?: string } };
    const status = errObj.status || 500;
    let message = "Failed to get response from AI coach.";

    if (status === 400 && errObj.error?.type === "invalid_request_error") {
      message = "Invalid request. Please try again.";
    } else if (status === 401) {
      message = "API key is invalid. Check your ANTHROPIC_API_KEY in settings.";
    } else if (status === 403 || (errObj.message && errObj.message.includes("credit balance"))) {
      message = "AI coach is temporarily unavailable — API credits are depleted. Your workout was saved successfully.";
    } else if (status === 429) {
      message = "Too many requests. Please wait a moment and try again.";
    } else if (status === 529 || status === 503) {
      message = "AI service is temporarily overloaded. Try again in a few minutes.";
    } else if (error instanceof Error) {
      message = error.message;
    }

    return NextResponse.json(
      { error: message },
      { status }
    );
  }
}
