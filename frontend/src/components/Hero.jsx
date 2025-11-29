const Hero = () => {
  return (
    <header className="relative min-h-screen flex items-center justify-center pt-20 overflow-hidden">
      {/* Background Doodles (Absolute Positioned) */}
      <div className="absolute top-20 left-10 text-yellow-400 opacity-40 text-6xl animate-bounce">
        <svg className="w-16 h-16" fill="currentColor" viewBox="0 0 20 20">
          <path d="M10 2a6 6 0 00-6 6v3.586l-.707.707A1 1 0 004 14h12a1 1 0 00.707-1.707L16 11.586V8a6 6 0 00-6-6zM10 18a3 3 0 01-3-3h6a3 3 0 01-3 3z" />
        </svg>
      </div>
      <div className="absolute bottom-40 right-10 text-orange-300 opacity-40 text-5xl animate-pulse">
        <svg className="w-12 h-12" fill="currentColor" viewBox="0 0 20 20">
          <path fillRule="evenodd" d="M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z" clipRule="evenodd" />
        </svg>
      </div>
      <div className="absolute top-1/3 left-1/4 text-amber-800 opacity-20 text-4xl">
        <svg className="w-10 h-10" fill="currentColor" viewBox="0 0 20 20">
          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
        </svg>
      </div>

      <div className="container mx-auto px-4 grid md:grid-cols-2 gap-8 items-center relative z-10">
        {/* Left Text */}
        <div className="text-center md:text-left">
          <div className="inline-block bg-orange-100 text-orange-600 px-4 py-1 rounded-full font-bold text-sm mb-4 transform -rotate-2">
            <span className="mr-2">🔥</span> Freshly Baked Daily!
          </div>
          <h1 className="font-display text-5xl md:text-7xl font-bold text-gray-900 leading-tight mb-6">
            The Best <br />
            <span className="text-amber-800 relative inline-block">
              Cookies
              <svg className="absolute w-full h-3 -bottom-1 left-0 text-yellow-400" viewBox="0 0 100 10" preserveAspectRatio="none">
                <path d="M0 5 Q 50 10 100 5" stroke="currentColor" strokeWidth="8" fill="none" />
              </svg>
            </span>
            <br />in Town
          </h1>
          <p className="text-lg md:text-xl text-gray-600 mb-8 max-w-md mx-auto md:mx-0">
            Hand-crafted, gooey, chocolatey goodness baked with love and the finest ingredients. One bite and you're in love.
          </p>
          <div className="flex flex-col md:flex-row gap-4 justify-center md:justify-start">
            <button className="bg-yellow-400 text-gray-900 font-display font-bold text-xl px-8 py-3 rounded-full shadow-[4px_4px_0px_0px_rgba(93,64,55,1)] hover:shadow-none hover:translate-x-[2px] hover:translate-y-[2px] transition border-2 border-gray-900">
              See Menu
            </button>
            <button className="text-gray-900 font-display font-bold text-xl px-8 py-3 rounded-full hover:bg-white/50 transition flex items-center justify-center">
              <svg className="w-6 h-6 mr-2" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM9.555 7.168A1 1 0 008 8v4a1 1 0 001.555.832l3-2a1 1 0 000-1.664l-3-2z" clipRule="evenodd" />
              </svg>
              Watch Video
            </button>
          </div>
        </div>

        {/* Right Image (Illustration/Collage) */}
        <div className="relative">
          {/* Using a placeholder for the hero image */}
          <div className="relative z-10 transform rotate-2 hover:rotate-0 transition duration-500">
            <img 
              src="https://images.unsplash.com/photo-1499636138143-bd630f5cf388?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80" 
              alt="Delicious Cookies" 
              className="rounded-3xl shadow-2xl border-4 border-white w-full max-w-md mx-auto object-cover h-[400px]"
            />
          </div>
          {/* Decorative Elements behind image */}
          <div className="absolute -top-10 -right-10 w-32 h-32 bg-yellow-300 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-pulse"></div>
          <div className="absolute -bottom-10 -left-10 w-32 h-32 bg-orange-300 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-pulse"></div>
          
          {/* Floating badge */}
          <div className="absolute -bottom-6 right-10 bg-white p-4 rounded-xl shadow-lg border-2 border-gray-900 transform rotate-6 animate-bounce">
            <p className="font-display font-bold text-center leading-none">
              <span className="text-3xl text-amber-800">100%</span><br />
              <span className="text-sm text-gray-500">Organic</span>
            </p>
          </div>
        </div>
      </div>

      {/* Bottom Wave Divider */}
      <div className="absolute bottom-0 left-0 w-full overflow-hidden leading-none transform rotate-180">
        <svg className="relative block w-[calc(150%+1.3px)] h-[60px]" data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
          <path d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z" fill="#5D4037"></path>
        </svg>
      </div>
    </header>
  );
};

export default Hero;
