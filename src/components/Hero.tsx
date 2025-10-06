import EstimateForm from "./EstimateForm";

export default function Hero() {
  return (
    <section className="relative mt-[68px]">
      {/* Background image */}
      <div className="relative h-[500px] md:h-[560px] overflow-hidden">
        <img
          className="w-full h-full object-cover"
          src="https://images.pexels.com/photos/7641828/pexels-photo-7641828.jpeg?auto=compress&cs=tinysrgb&w=1920&q=80"
          alt="Hero"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black/50 via-black/30 to-transparent" />
        <div className="absolute inset-0">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-full flex items-center">
            <div className="max-w-2xl text-white">
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
                Move Smarter
                <br />
                With Moveto!
              </h1>
              <p className="text-white text-lg md:text-xl mb-8 opacity-90">
                Commodo placerat massa neque dui molestatie faud et lobortis leo
                elementas.
                <br />
                Luctus habitant arcu justo pharetra suspendisse dis.
              </p>
              <button className="bg-gradient-to-r from-orange-500 to-orange-600 text-white px-8 py-4 rounded-full font-medium text-lg hover:from-orange-600 hover:to-orange-700 transition-all shadow-lg hover:shadow-xl transform hover:-translate-y-0.5">
                DISCOVER MORE
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Floating estimate form: centered under hero */}
      <div className="absolute left-1/2 -translate-x-1/2 bottom-[-28px] md:bottom-[-40px] w-full px-4 z-20">
        <div className="max-w-5xl mx-auto">
          <EstimateForm />
        </div>
      </div>
    </section>
  );
}
