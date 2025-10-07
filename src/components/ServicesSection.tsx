import { Globe2, Home, Building2, Truck } from "lucide-react";

export default function ServicesSection() {
  const services = [
    { title: "International Moves", desc: "Condimentum cursus facilisis aliquam porttitor dictum justo ipsum auctor mattis." },
    { title: "Domestic Moves", desc: "Condimentum cursus facilisis aliquam porttitor dictum justo ipsum auctor mattis." },
    { title: "Office Moves", desc: "Condimentum cursus facilisis aliquam porttitor dictum justo ipsum auctor mattis." },
    { title: "Vehicle Transfer", desc: "Condimentum cursus facilisis aliquam porttitor dictum justo ipsum auctor mattis." },
  ];

  const icons = [Globe2, Home, Building2, Truck];

  return (
    <section className="bg-slate-50 py-16 md:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 md:grid-cols-12 gap-10 md:gap-12 items-center">
        {/* Left: image with rating chip */}
        <div className="md:col-span-5 relative">
          {/* Rating chip with reviews + stars */}
          <div className="absolute -top-8 left-5 bg-white rounded-xl border shadow-md ring-8 ring-white/80 px-4 py-2 flex items-center gap-3">
            <span className="text-2xl md:text-3xl font-extrabold text-orange-600 leading-none">4.8</span>

            <div className="leading-tight">
              <div className="flex items-center gap-2">
                <span className="text-[11px] md:text-xs text-slate-500">(729 Reviews)</span>
                <div className="flex items-center gap-[2px] text-yellow-400">
                  {Array.from({ length: 5 }).map((_, i) => (
                    <svg key={i} className="w-3.5 h-3.5 fill-current" viewBox="0 0 20 20" aria-hidden="true">
                      <path d="M10 15.27 16.18 18l-1.64-7.03L20 6.24l-7.19-.61L10 0 7.19 5.63 0 6.24l5.46 4.73L3.82 18z" />
                    </svg>
                  ))}
                </div>
              </div>
              <div className="text-[12px] md:text-[13px] font-extrabold text-slate-900 leading-tight">From Google</div>
              <div className="text-[12px] md:text-[13px] font-extrabold text-slate-900 leading-tight">Business</div>
            </div>
          </div>

          <img
            className="rounded-2xl shadow-2xl w-full object-cover"
            src="https://images.pexels.com/photos/6169056/pexels-photo-6169056.jpeg?auto=compress&cs=tinysrgb&w=1200"
            alt="Professional mover"
          />
        </div>

        {/* Right: headline + two-column bullets with icons */}
        <div className="md:col-span-7">
          <h3 className="text-[28px] md:text-[38px] lg:text-4xl font-extrabold text-slate-900 leading-[1.15] mb-4">
            Professional Service Ready For
            <br /> Your Moving Plan
          </h3>

          <p className="text-slate-600 md:text-[16px] leading-relaxed mb-6">
            Nulae ac id velit neque rhoncus porta tellus ultrices sociis. Orci consequat ad magna efficitur
            praesent. Tellus duis luctus pretium pulvinar massa in et eu quam.
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-10 gap-y-6">
            {services.map((s, idx) => {
              const Icon = icons[idx % icons.length];
              return (
                <div key={s.title} className="flex items-start gap-3">
                  <div className="mt-0.5 w-9 h-9 rounded-full bg-orange-100 text-orange-600 flex items-center justify-center flex-shrink-0">
                    <Icon className="w-5 h-5" />
                  </div>
                  <div>
                    <div className="font-semibold text-slate-900">{s.title}</div>
                    <p className="text-sm text-slate-600">{s.desc}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
