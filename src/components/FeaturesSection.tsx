import { ShieldCheck, CheckCircle2, Cog, Rocket } from "lucide-react";

const features = [
  {
    title: "Quality & Satisfaction",
    icon: CheckCircle2,
    desc:
      "In interdum fringilla sem primis nunc hendrerit semper sedales blandit justo lectus.",
  },
  {
    title: "Security & Reliability",
    icon: ShieldCheck,
    desc:
      "In interdum fringilla sem primis nunc hendrerit semper sedales blandit justo lectus.",
  },
  {
    title: "Flexibility & Advice",
    icon: Cog,
    desc:
      "In interdum fringilla sem primis nunc hendrerit semper sedales blandit justo lectus.",
  },
  {
    title: "Cutting-edge Solution",
    icon: Rocket,
    desc:
      "In interdum fringilla sem primis nunc hendrerit semper sedales blandit justo lectus.",
  },
];

export default function FeaturesSection() {
  return (
    <section className="py-16 md:py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Heading row */}
        <div className="grid md:grid-cols-2 gap-10 items-start mb-10">
          <div>
            <div className="flex items-center gap-2 mb-3">
              <div className="flex gap-1">
                <span className="w-8 h-0.5 bg-orange-500" />
                <span className="w-2 h-0.5 bg-orange-500" />
              </div>
              <span className="text-orange-600 font-semibold tracking-wider uppercase text-xs md:text-sm">
                Why Choose Us
              </span>
            </div>
            <h3 className="text-2xl md:text-4xl font-extrabold text-slate-900 leading-tight">
              Client Satisfaction Is Our
              <br /> Primary Focus
            </h3>
          </div>
          <p className="text-slate-600 md:text-[16px] leading-relaxed">
            Montes morbi iaculis nec laoreet accumsan metus pretium et himenaeos porta
            et. Finibus iaculis varius semper nec consequat tristique.
          </p>
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map(({ title, icon: Icon, desc }) => (
            <div
              key={title}
              className="rounded-xl border shadow-sm p-6 hover:shadow-md transition bg-white"
            >
              <div className="w-12 h-12 rounded-full bg-orange-100 flex items-center justify-center mb-4">
                <Icon className="w-6 h-6 text-orange-600" />
              </div>
              <h4 className="font-bold text-slate-900 mb-2">{title}</h4>
              <p className="text-slate-600 text-sm">{desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
