export default function FAQ() {
  const faqs = [
    {
      q: "Who can attend this webinar?",
      a: "Any Indian student planning to study in the USA for 2025 or 2026 intakes—whether you’re in your final year, recently graduated, or exploring master’s or bachelor’s options.",
    },
    {
      q: "Is the webinar really free?",
      a: "Yes! It’s a 100% free live session hosted by D-Vivid Consultant to help students understand the new U.S. visa and H-1B rules before applying.",
    },
    {
      q: "What’s the ‘No H-1B Fee’ Advantage?",
      a: "From Sept 2025, U.S. employers hiring from abroad must pay a $100K H-1B sponsorship fee—but F-1 and OPT students already in the U.S. are fully exempt. This means studying in the USA first gives you a massive hiring advantage.",
    },
    {
      q: "Do I need IELTS or GRE to study in the USA?",
      a: "Not always. Many U.S. universities accept Medium of Instruction (MOI) certificates or waive GRE for eligible profiles. Our team will explain how to find such universities.",
    },
    {
      q: "Why should I attend now?",
      a: "Because the policy window is closing fast. Students who begin applications for Fall 2025 or Spring 2026 can still qualify for the fee-free advantage. Don’t miss the chance!",
    },
  ];

  return (
    <section className="relative py-20" style={{ background: "linear-gradient(180deg, #001B5A 0%, #003A8C 100%)" }}>
      <div className="max-w-4xl mx-auto px-6">
        <div className="text-center">
          <h2 className="text-3xl md:text-4xl font-semibold text-white">Frequently Asked Questions</h2>
          <p className="mt-3 text-blue-100">Clear answers to help you register with confidence.</p>
        </div>

        <div className="mt-10 space-y-4">
          {faqs.map((f, i) => (
            <details key={i} className="group rounded-2xl bg-white/5 text-white border border-white/10 p-5 open:shadow-[0_0_30px_rgba(255,79,125,0.25)] transition-shadow">
              <summary className="cursor-pointer list-none flex items-center justify-between gap-4">
                <span className="text-lg font-medium">{i + 1}. {f.q}</span>
                <span className="shrink-0 rounded-full bg-[#FF4F7D] text-white px-3 py-1 text-xs shadow-[0_0_15px_rgba(255,79,125,0.6)] group-open:rotate-45 transition">+</span>
              </summary>
              <p className="mt-3 text-blue-100">{f.a}</p>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}
