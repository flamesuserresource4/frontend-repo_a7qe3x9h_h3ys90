import { CheckCircle, Flag } from "lucide-react";

export default function LearnSection() {
  const items = [
    "Unlock the H-1B Fee Exemption Advantage",
    "Why U.S. Degrees Beat Global Competition",
    "F-1 → OPT → H-1B: Your Complete Pathway",
    "Flexible Intakes & Faster Starts",
    "Campus Life, Scholarships & Support",
    "Real Costs & Smarter Funding Options",
    "Avoid Common Pitfalls",
    "2026: The Indian Student Advantage",
  ];

  return (
    <section
      id="learn"
      className="relative py-20 text-white"
      style={{
        background: "linear-gradient(180deg, #001B5A 0%, #003A8C 100%)",
      }}
    >
      {/* Subtle star/flag floaters */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <div className="absolute -right-10 top-10 opacity-20 blur-sm animate-pulse">
          <Flag className="w-24 h-24 text-white" />
        </div>
        <div className="absolute left-6 bottom-10 opacity-10 blur-[2px] animate-pulse">
          <Flag className="w-16 h-16 text-red-400" />
        </div>
      </div>

      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-12">
          <span className="inline-block text-sm tracking-widest uppercase text-blue-200">Section Two</span>
          <h2 className="mt-2 text-3xl md:text-4xl font-semibold leading-tight">What You’ll Learn in This Webinar</h2>
          <p className="mt-4 text-blue-100 max-w-3xl mx-auto">
            Gain real clarity and confidence about your U.S. study and career journey — not just theory, but practical steps that can change your path in 2026.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          {items.map((text, idx) => (
            <div
              key={idx}
              className="group rounded-2xl bg-white/5 backdrop-blur-sm border border-white/10 p-5 transition-shadow duration-300 hover:shadow-[0_0_40px_rgba(255,79,125,0.25)]"
            >
              <div className="flex items-start gap-3">
                <span className="mt-1 inline-flex items-center justify-center rounded-full bg-white/10 p-2 ring-1 ring-white/20">
                  <CheckCircle className="h-5 w-5 text-green-300" />
                </span>
                <p className="text-blue-50 leading-relaxed">
                  <span className="font-medium text-white">{text.split(":")[0]}</span>
                  {text.includes(":") ? <span className="text-blue-100">: {text.split(":")[1]}</span> : null}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Why Attend Now Callout */}
        <div className="mt-14 rounded-3xl bg-gradient-to-r from-[#041B5F] to-[#0B3C88] p-1">
          <div className="rounded-3xl bg-[#071F68]/80 p-8 border border-white/10">
            <div className="flex items-center gap-3">
              <div className="h-2 w-2 rounded-full bg-[#FF4F7D] shadow-[0_0_12px_3px_rgba(255,79,125,0.6)]" />
              <p className="uppercase tracking-wider text-xs text-blue-200">Why Attend Now</p>
            </div>
            <h3 className="mt-2 text-2xl md:text-3xl font-semibold">2026: Your Advantage Window is Open 🇺🇸</h3>
            <ul className="mt-6 space-y-3">
              {[
                "The U.S. is waiving the H-1B fee for F-1/OPT students inside the country.",
                "Early applicants (Fall/Spring 2025–26) gain 3–5 years of protected work rights.",
                "Global competition is rising — those who apply later will pay more & wait longer.",
              ].map((pt, i) => (
                <li key={i} className="flex items-start gap-3">
                  <span className="mt-1 inline-flex h-6 w-6 items-center justify-center rounded-full bg-green-500/20 text-green-300 ring-1 ring-green-400/30">
                    <CheckCircle className="h-4 w-4" />
                  </span>
                  <span className="text-blue-50">{pt}</span>
                </li>
              ))}
            </ul>
            <p className="mt-6 text-blue-100">Start early. Stay protected. Study smart in the USA.</p>
            <div className="mt-6">
              <button
                className="group relative inline-flex items-center gap-2 rounded-xl bg-[#FF4F7D] px-6 py-3 font-medium text-white shadow-lg shadow-pink-500/30 transition hover:-translate-y-0.5 hover:shadow-pink-500/50"
              >
                Reserve My Seat Now
                <span className="absolute inset-0 rounded-xl ring-2 ring-white/30 opacity-0 group-hover:opacity-100 transition" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
