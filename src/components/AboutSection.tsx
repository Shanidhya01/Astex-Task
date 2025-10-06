import { TrendingUp, Package } from "lucide-react";

export default function AboutSection() {
  return (
    <section className="py-16 md:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 md:grid-cols-12 gap-10 md:gap-12 items-center">
        {/* Image + badge */}
        <div className="md:col-span-6 relative">
          <div className="hidden md:flex absolute -top-6 -left-6 w-28 h-28 rounded-full bg-gradient-to-br from-orange-500 to-orange-600 text-white shadow-xl z-10 ring-8 ring-white/70 flex-col items-center justify-center">
            <div className="text-3xl font-extrabold leading-none">17+</div>
            <div className="text-[11px] font-medium mt-0.5 text-center">
              Years of
              <br />Experience
            </div>
          </div>

          <div className="rounded-2xl overflow-hidden shadow-2xl">
            <img
              src="https://images.pexels.com/photos/4569340/pexels-photo-4569340.jpeg?auto=compress&cs=tinysrgb&w=800"
              alt="About"
              className="w-full h-auto object-cover"
            />
          </div>

          <div className="md:hidden mt-4 w-24 h-24 rounded-full bg-gradient-to-br from-orange-500 to-orange-600 text-white shadow-lg mx-auto flex flex-col items-center justify-center">
            <div className="text-2xl font-extrabold leading-none">17+</div>
            <div className="text-[10px] font-medium mt-0.5 text-center">
              Years of
              <br />Experience
            </div>
          </div>
        </div>

        {/* Content */}
        <div className="md:col-span-6">
          <div className="flex items-center gap-2 mb-3">
            <div className="flex gap-1">
              <span className="w-8 h-0.5 bg-orange-500" />
              <span className="w-2 h-0.5 bg-orange-500" />
            </div>
            <span className="text-orange-600 font-semibold tracking-wider uppercase text-xs md:text-sm">
              Who We Are
            </span>
          </div>

          <h2 className="text-[28px] md:text-4xl lg:text-5xl font-extrabold leading-tight text-slate-900 mb-4">
            We Are Leader In Moving
            <br className="hidden sm:block" />
            <span className="block md:inline"> Company</span>
          </h2>

          <p className="text-slate-600 md:text-[17px] leading-relaxed mb-8">
            Gravida accumsan turpis condimentum nulla et a dis et ultricies odio.
            Suscipit volutpat dolor augue pellentesque habitasse aliquet quam
            malesuada.
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-8">
            <div className="flex gap-4">
              <div className="flex-shrink-0 w-12 h-12 rounded-full bg-orange-100 flex items-center justify-center">
                <TrendingUp className="w-6 h-6 text-orange-600" />
              </div>
              <div>
                <h3 className="font-bold text-slate-900 text-lg mb-1">Broad Reach</h3>
                <p className="text-slate-600 text-sm">
                  Reach more destinations with our optimized moving network.
                </p>
              </div>
            </div>
            <div className="flex gap-4">
              <div className="flex-shrink-0 w-12 h-12 rounded-full bg-orange-100 flex items-center justify-center">
                <Package className="w-6 h-6 text-orange-600" />
              </div>
              <div>
                <h3 className="font-bold text-slate-900 text-lg mb-1">Fast, Neat and Safe</h3>
                <p className="text-slate-600 text-sm">
                  Professional handling to keep your items secure and tidy.
                </p>
              </div>
            </div>
          </div>

          <button className="inline-flex items-center bg-gradient-to-r from-orange-500 to-orange-600 text-white px-6 md:px-8 py-3 rounded-full font-semibold hover:from-orange-600 hover:to-orange-700 transition-all shadow-md hover:shadow-lg">
            More About Us
          </button>
        </div>
      </div>
    </section>
  );
}
