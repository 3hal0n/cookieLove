const Hero = () => {
  return (
    <header className="relative min-h-screen flex items-center justify-center pt-20 pb-24 overflow-hidden">
      {/* Background Doodles (Absolute Positioned) - More playful */}
      <div className="absolute top-24 left-10 text-yellow-400 opacity-30 text-6xl animate-bounce" style={{animationDelay: '0.5s'}}>
        <svg className="w-20 h-20" fill="currentColor" viewBox="0 0 20 20">
          <path d="M10 2a6 6 0 00-6 6v3.586l-.707.707A1 1 0 004 14h12a1 1 0 00.707-1.707L16 11.586V8a6 6 0 00-6-6zM10 18a3 3 0 01-3-3h6a3 3 0 01-3 3z" />
        </svg>
      </div>
      <div className="absolute bottom-48 right-16 text-orange-300 opacity-30 text-5xl animate-pulse">
        <svg className="w-16 h-16" fill="currentColor" viewBox="0 0 20 20">
          <path fillRule="evenodd" d="M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z" clipRule="evenodd" />
        </svg>
      </div>
      <div className="absolute top-1/3 left-1/4 text-amber-800 opacity-15 text-4xl animate-spin" style={{animationDuration: '20s'}}>
        <svg className="w-12 h-12" fill="currentColor" viewBox="0 0 20 20">
          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
        </svg>
      </div>
      {/* Additional doodles for more playfulness */}
      <div className="absolute top-1/4 right-1/3 text-pink-300 opacity-25 text-3xl animate-bounce" style={{animationDelay: '1s'}}>
        <svg className="w-10 h-10" fill="currentColor" viewBox="0 0 20 20">
          <path fillRule="evenodd" d="M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z" clipRule="evenodd" />
        </svg>
      </div>
      <div className="absolute bottom-1/3 left-16 text-cyan-300 opacity-20 text-4xl animate-pulse" style={{animationDelay: '2s'}}>
        <span className="font-display font-bold">★</span>
      </div>

      <div className="container mx-auto px-6 md:px-8 lg:px-12 grid md:grid-cols-2 gap-12 lg:gap-16 items-center relative z-10">
        {/* Left Text */}
        <div className="text-center md:text-left space-y-6">
          <div className="inline-block bg-gradient-to-r from-orange-100 to-yellow-100 text-orange-600 px-5 py-2 rounded-full font-bold text-sm mb-2 transform -rotate-2 shadow-md">
            <span className="mr-2">🔥</span> Freshly Baked Daily!
          </div>
          <h1 className="font-display text-5xl sm:text-6xl md:text-6xl lg:text-7xl xl:text-8xl font-extrabold text-gray-900 leading-[1.1] tracking-tight">
            The Best <br />
            <span className="text-amber-800 relative inline-block mt-2">
              Bakery
              <svg className="absolute w-full h-4 -bottom-2 left-0 text-yellow-400" viewBox="0 0 120 12" preserveAspectRatio="none">
                <path d="M0 6 Q 30 12 60 6 T 120 6" stroke="currentColor" strokeWidth="10" fill="none" strokeLinecap="round" />
              </svg>
            </span>
            <br />
            <span className="block mt-2">in Town</span>
          </h1>
          <p className="text-base md:text-lg lg:text-xl text-gray-600 leading-relaxed max-w-lg mx-auto md:mx-0 font-body">
            Hand-crafted, gooey, chocolatey goodness baked with love and the finest ingredients. One bite and you're in love.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start pt-4">
            <button className="bg-yellow-400 text-gray-900 font-display font-bold text-lg md:text-xl px-10 py-4 rounded-full shadow-[5px_5px_0px_0px_rgba(93,64,55,1)] hover:shadow-[2px_2px_0px_0px_rgba(93,64,55,1)] hover:translate-x-[3px] hover:translate-y-[3px] transition-all duration-200 border-2 border-gray-900 transform hover:scale-105">
              See Menu
            </button>
            <button className="text-gray-900 font-display font-bold text-lg md:text-xl px-8 py-4 rounded-full hover:bg-white/60 transition-all duration-200 flex items-center justify-center border-2 border-transparent hover:border-gray-900 group">
              <span className="w-8 h-8 mr-2 bg-gray-900 rounded-full flex items-center justify-center group-hover:bg-amber-800 transition">
                <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M6.3 2.841A1.5 1.5 0 004 4.11V15.89a1.5 1.5 0 002.3 1.269l9.344-5.89a1.5 1.5 0 000-2.538L6.3 2.84z" />
                </svg>
              </span>
              Watch Video
            </button>
          </div>
        </div>

        {/* Right Image (Illustration/Collage) */}
        <div className="relative mt-8 md:mt-0">
          {/* Main hero illustration container */}
          <div className="relative z-10">
            <div className="relative transform hover:scale-105 transition duration-500 ease-out">
              <img 
                src="/images/hero1.png" 
                alt="Delicious Cookie Bakery Illustration" 
                className="rounded-[2.5rem] shadow-2xl w-full max-w-2xl mx-auto object-contain drop-shadow-2xl"
                onError={(e) => {
                  e.target.onerror = null;
                  e.target.src = 'https://placehold.co/600x500/FFF8E1/5D4037?text=Cookie+Love+Bakery&font=raleway';
                }}
              />
              {/* Decorative border effect */}
              <div className="absolute inset-0 rounded-[2.5rem] border-4 border-amber-800/10 -rotate-2 -z-10"></div>
            </div>
          </div>
          
          {/* Decorative Elements behind image - Enhanced */}
          <div className="absolute -top-12 -right-12 w-40 h-40 bg-yellow-300 rounded-full mix-blend-multiply filter blur-2xl opacity-60 animate-pulse"></div>
          <div className="absolute -bottom-12 -left-12 w-40 h-40 bg-orange-300 rounded-full mix-blend-multiply filter blur-2xl opacity-60 animate-pulse" style={{animationDelay: '1s'}}></div>
          <div className="absolute top-1/2 -right-8 w-32 h-32 bg-pink-200 rounded-full mix-blend-multiply filter blur-xl opacity-50 animate-pulse" style={{animationDelay: '0.5s'}}></div>
          
          {/* Floating badge - Enhanced */}
          <div className="absolute -bottom-4 md:-bottom-8 right-4 md:right-16 bg-white px-6 py-4 rounded-2xl shadow-xl border-3 border-gray-900 transform rotate-6 hover:rotate-3 transition-all duration-300 animate-bounce z-20" style={{animationDuration: '3s'}}>
            <div className="font-display font-extrabold text-center leading-tight">
              <span className="text-4xl md:text-5xl text-amber-800 block">100%</span>
              <span className="text-xs md:text-sm text-gray-600 font-bold tracking-wide">Organic</span>
            </div>
          </div>
          
          {/* Additional fun doodles around image */}
          <div className="absolute -top-6 left-8 text-4xl animate-bounce" style={{animationDelay: '0.3s', animationDuration: '2s'}}>
            ⭐
          </div>
          <div className="absolute bottom-12 -left-6 text-3xl animate-pulse" style={{animationDelay: '0.7s'}}>
            💛
          </div>
          <div className="absolute top-1/3 -right-4 text-2xl animate-spin" style={{animationDuration: '15s'}}>
            ✨
          </div>
        </div>
      </div>

      {/* Bottom Wave Divider - More pronounced */}
      <div className="absolute bottom-0 left-0 w-full overflow-hidden leading-none transform rotate-180 z-10">
        <svg className="relative block w-[calc(150%+1.3px)] h-[80px] md:h-[100px]" data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
          <path d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z" className="fill-amber-900"></path>
        </svg>
      </div>
    </header>
  );
};

export default Hero;
