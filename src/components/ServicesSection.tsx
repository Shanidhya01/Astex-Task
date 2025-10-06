import { Globe, Home, Building2, Truck, Star } from 'lucide-react';

export default function ServicesSection() {
  return (
    <section className="py-16 md:py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="relative">
            <div className="absolute -top-6 -left-6 bg-white rounded-2xl shadow-lg p-6 z-10">
              <div className="flex items-center gap-3">
                <div className="text-4xl font-bold text-orange-600">4.8</div>
                <div>
                  <div className="flex gap-1 mb-1">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-orange-400 text-orange-400" />
                    ))}
                  </div>
                  <div className="text-xs text-gray-600 font-medium">Reviewed on</div>
                  <div className="text-xs font-bold text-gray-900">Google Business</div>
                </div>
              </div>
            </div>

            <div className="pt-12 pl-8">
              <img
                src="https://images.pexels.com/photos/5025516/pexels-photo-5025516.jpeg?auto=compress&cs=tinysrgb&w=800"
                alt="Professional mover"
                className="rounded-2xl shadow-2xl w-full h-auto object-cover"
              />
            </div>
          </div>

          <div>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-6 leading-tight">
              Professional Service Ready For Your Moving Plan
            </h2>

            <p className="text-gray-600 text-lg leading-relaxed mb-10">
              Nulla nec id velit urna rhoncus porta tellus tinidut egestas. Ornare arcu in consequat sit magna
              efficitur gravimen. Tellus forlor tellus ueda maurttis primium dui or di se orem.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <div className="group bg-white p-6 rounded-xl shadow-md hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
                <div className="w-12 h-12 bg-orange-100 rounded-full flex items-center justify-center mb-4 group-hover:bg-orange-500 transition-colors">
                  <Globe className="w-6 h-6 text-orange-600 group-hover:text-white transition-colors" />
                </div>
                <h3 className="font-bold text-gray-900 text-lg mb-2">International Moves</h3>
                <p className="text-gray-600 text-sm mb-4">
                  Condimentum cursus facilisis adipiscing pellentqu aviutor aulam justo tokm arcu morexes da.
                </p>
                <button className="w-8 h-8 bg-orange-500 rounded-full flex items-center justify-center text-white hover:bg-orange-600 transition-colors">
                  <span className="text-lg">→</span>
                </button>
              </div>

              <div className="group bg-white p-6 rounded-xl shadow-md hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
                <div className="w-12 h-12 bg-orange-100 rounded-full flex items-center justify-center mb-4 group-hover:bg-orange-500 transition-colors">
                  <Home className="w-6 h-6 text-orange-600 group-hover:text-white transition-colors" />
                </div>
                <h3 className="font-bold text-gray-900 text-lg mb-2">Domestic Moves</h3>
                <p className="text-gray-600 text-sm mb-4">
                  Condimentum cursus facilisis adipiscing pellentqu aviutor aulam justo tokm arcu morexes da.
                </p>
                <button className="w-8 h-8 bg-orange-500 rounded-full flex items-center justify-center text-white hover:bg-orange-600 transition-colors">
                  <span className="text-lg">→</span>
                </button>
              </div>

              <div className="group bg-white p-6 rounded-xl shadow-md hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
                <div className="w-12 h-12 bg-orange-100 rounded-full flex items-center justify-center mb-4 group-hover:bg-orange-500 transition-colors">
                  <Building2 className="w-6 h-6 text-orange-600 group-hover:text-white transition-colors" />
                </div>
                <h3 className="font-bold text-gray-900 text-lg mb-2">Office Moves</h3>
                <p className="text-gray-600 text-sm mb-4">
                  Condimentum cursus facilisis adipiscing pellentqu aviutor aulam justo tokm arcu morexes da.
                </p>
                <button className="w-8 h-8 bg-orange-500 rounded-full flex items-center justify-center text-white hover:bg-orange-600 transition-colors">
                  <span className="text-lg">→</span>
                </button>
              </div>

              <div className="group bg-white p-6 rounded-xl shadow-md hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
                <div className="w-12 h-12 bg-orange-100 rounded-full flex items-center justify-center mb-4 group-hover:bg-orange-500 transition-colors">
                  <Truck className="w-6 h-6 text-orange-600 group-hover:text-white transition-colors" />
                </div>
                <h3 className="font-bold text-gray-900 text-lg mb-2">Vehicle Transfer</h3>
                <p className="text-gray-600 text-sm mb-4">
                  Condimentum cursus facilisis adipiscing pellentqu aviutor aulam justo tokm arcu morexes da.
                </p>
                <button className="w-8 h-8 bg-orange-500 rounded-full flex items-center justify-center text-white hover:bg-orange-600 transition-colors">
                  <span className="text-lg">→</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
