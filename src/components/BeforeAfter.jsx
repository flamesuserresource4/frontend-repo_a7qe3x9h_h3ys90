export default function BeforeAfter() {
  const rows = [
    {
      before: "Confused about H-1B and OPT process",
      after: "Clearly understand F-1 → OPT → H-1B flow and fee exemption",
    },
    {
      before: "Unsure if the USA is still worth it",
      after: "Learn why 2026 is the best time to study in the USA",
    },
    {
      before: "Scared of high tuition & living costs",
      after: "Get real numbers, smart budgeting tips, and scholarship insights",
    },
    {
      before: "Think visas are luck-based",
      after: "Discover how genuine students get 99% F-1 visa success",
    },
    {
      before: "Rely on random YouTube advice",
      after: "Get authentic expert guidance from an MBA-USA professional",
    },
    {
      before: "No clarity on intake deadlines",
      after: "Learn how to plan for Fall, Spring, or Summer start dates",
    },
    {
      before: "Fear missing job chances",
      after: "Understand how to secure jobs through OPT & campus hiring",
    },
  ];

  return (
    <section className="relative py-20 bg-[#001B5A] text-white">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(255,79,125,0.15),transparent_40%),radial-gradient(circle_at_70%_80%,rgba(255,255,255,0.08),transparent_40%)] pointer-events-none" />
      <div className="max-w-6xl mx-auto px-6 relative">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-semibold">Before & After Attending This Webinar</h2>
          <p className="text-blue-100 mt-3">See how your U.S. study plan transforms once you understand the real opportunities and rules for 2026.</p>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          {rows.map((r, i) => (
            <div key={i} className="rounded-2xl p-5 border border-white/10 bg-white/5 backdrop-blur-sm">
              <div className="grid grid-cols-2 gap-4 text-sm md:text-base">
                <div>
                  <div className="text-red-300 font-semibold mb-1">Before</div>
                  <div className="text-blue-100">❌ {r.before}</div>
                </div>
                <div>
                  <div className="text-green-300 font-semibold mb-1">After</div>
                  <div className="text-blue-50">✅ {r.after}</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
