export default function Host() {
  return (
    <section className="relative py-20 text-white" style={{ background: "linear-gradient(180deg, #003A8C 0%, #001B5A 100%)" }}>
      <div className="max-w-6xl mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-10 items-center">
          <div className="rounded-3xl overflow-hidden border border-white/10 shadow-xl shadow-blue-900/30">
            <img
              src="https://res.cloudinary.com/dcanp1tls/image/upload/v1752237088/WhatsApp_Image_2025-05-05_at_11.44.51_AM_2_.remini-enhanced_allfgr.jpg"
              alt="Darshan Shah"
              className="w-full h-full object-cover"
            />
          </div>
          <div>
            <div className="text-sm uppercase tracking-wider text-blue-200">About the Webinar Host</div>
            <h3 className="mt-2 text-3xl md:text-4xl font-semibold">Darshan Shah</h3>
            <p className="text-blue-100">Founder & CEO, D-Vivid Consultant | MBA – USA</p>
            <p className="mt-4 text-blue-50 leading-relaxed">
              With 9+ years in international education consulting, Darshan Shah has guided 7500+ students to top universities across the UK, USA, Canada, Australia and Europe. Under his leadership, D-Vivid has enabled $2M+ in scholarships with a 99% visa success rate.
              As India’s trusted voice in overseas education, he’s now revealing how Indian students can leverage the new 2026 U.S. policies to study smarter, stay longer, and work without paying the new H-1B fee.
            </p>

            <div className="mt-6 grid grid-cols-2 sm:grid-cols-4 gap-3">
              {[
                { k: "Students Guided", v: "7500+" },
                { k: "Scholarships", v: "$2M+" },
                { k: "Visa Success", v: "99%" },
                { k: "Experience", v: "9+ yrs" },
              ].map((s, i) => (
                <div key={i} className="rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-center">
                  <div className="text-white text-xl font-semibold">{s.v}</div>
                  <div className="text-blue-200 text-xs">{s.k}</div>
                </div>
              ))}
            </div>

            <blockquote className="mt-8 rounded-2xl bg-white/5 border border-white/10 p-5 text-blue-50 italic">
              “The $100K H-1B fee doesn’t close doors — it opens a once-in-a-decade advantage for Indian students who start in the USA. I’ll show you exactly how to use it.”
            </blockquote>
          </div>
        </div>
      </div>
    </section>
  );
}
