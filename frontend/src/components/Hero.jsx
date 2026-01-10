import { Link } from 'react-router-dom';

const Hero = () => {
  return (
    <header className="relative min-h-screen flex flex-col md:flex-row items-start md:items-center justify-start md:justify-center pt-6 md:pt-20 pb-12 md:pb-24 overflow-hidden">
      {/* Background Doodles (Absolute Positioned) - More playful */}
      <div className="hidden md:block absolute top-24 left-10 text-yellow-400 opacity-30 text-6xl animate-bounce" style={{animationDelay: '0.5s'}}>
        <svg className="w-20 h-20" fill="currentColor" viewBox="0 0 20 20">
          <path d="M10 2a6 6 0 00-6 6v3.586l-.707.707A1 1 0 004 14h12a1 1 0 00.707-1.707L16 11.586V8a6 6 0 00-6-6zM10 18a3 3 0 01-3-3h6a3 3 0 01-3 3z" />
        </svg>
      </div>
      <div className="hidden md:block absolute bottom-48 right-16 text-orange-300 opacity-30 text-5xl animate-pulse">
        <svg className="w-16 h-16" fill="currentColor" viewBox="0 0 20 20">
          <path fillRule="evenodd" d="M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z" clipRule="evenodd" />
        </svg>
      </div>
      <div className="hidden lg:block absolute top-1/3 left-1/4 text-amber-800 opacity-15 text-4xl animate-spin" style={{animationDuration: '20s'}}>
        <svg className="w-12 h-12" fill="currentColor" viewBox="0 0 20 20">
          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
        </svg>
      </div>
      {/* Additional doodles for more playfulness */}
      <div className="hidden md:block absolute top-1/4 right-1/3 text-pink-300 opacity-25 text-3xl animate-bounce" style={{animationDelay: '1s'}}>
        <svg className="w-10 h-10" fill="currentColor" viewBox="0 0 20 20">
          <path fillRule="evenodd" d="M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z" clipRule="evenodd" />
        </svg>
      </div>
      <div className="hidden sm:block absolute bottom-1/3 left-16 text-cyan-300 opacity-20 text-4xl animate-pulse" style={{animationDelay: '2s'}}>
        <span className="font-display font-bold">★</span>
      </div>

      <div className="container mx-auto px-6 md:px-8 lg:px-12 grid md:grid-cols-2 gap-12 lg:gap-16 items-center relative z-10">
        {/* Left Text */}
        <div className="order-1 md:order-1 text-center md:text-left space-y-6 pl-4 sm:pl-6 md:pl-12 lg:pl-20">
          <div className="inline-block bg-linear-to-r from-orange-100 to-yellow-100 text-orange-600 px-5 py-2 rounded-full font-bold text-sm mb-2 transform -rotate-2 shadow-md">
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
            
            <span className="block mt-2">in Town</span>
          </h1>
          {/* Mobile-only hero image inserted right after the heading so users see it immediately on small screens */}
          <div className="block md:hidden mt-8">
            <div className="relative w-full flex justify-center px-4">
              {/* Decorative background blob */}
              <div className="absolute inset-0 bg-linear-to-br from-blue-100 via-purple-50 to-blue-50 rounded-4xl transform -rotate-2 scale-95"></div>
              
              <div className="relative z-10 w-full max-w-[420px]">
                <img
                  src="/images/hero1.png"
                  alt="Delicious Cookie Bakery Illustration"
                  className="w-full h-auto object-contain drop-shadow-xl"
                  onError={(e) => {
                    e.target.onerror = null;
                    e.target.src = 'https://placehold.co/600x500/FFF8E1/5D4037?text=Cookie+Love+Bakery&font=raleway';
                  }}
                />
                {/* 100% Fresh badge overlay - positioned at bottom right */}
                <div className="absolute -bottom-4 right-2 bg-white px-4 py-2 rounded-2xl shadow-lg border-2 border-gray-900 transform rotate-6 z-20 flex flex-col items-center">
                  <span className="font-display font-extrabold text-2xl text-amber-800 leading-none">100%</span>
                  <span className="text-xs text-gray-600 font-bold tracking-wide">Fresh</span>
                </div>
              </div>
            </div>
          </div>

          <p className="text-base md:text-lg lg:text-xl text-gray-600 leading-relaxed max-w-lg mx-auto md:mx-0 font-body">
            Hand-crafted, gooey, chocolatey goodness baked with love and the finest ingredients. One bite and you're in love.
          </p>
          <div className="flex flex-row items-center justify-center gap-4 pt-4 w-full max-w-lg mx-auto">
            <Link to="/menu" className="flex-1 bg-yellow-400 text-gray-900 font-display font-bold text-lg px-0 py-4 rounded-full shadow-[6px_6px_0px_0px_rgba(93,64,55,1)] hover:shadow-[3px_3px_0px_0px_rgba(93,64,55,1)] transition-all duration-200 border-2 border-gray-900 transform hover:scale-105 min-w-[140px] max-w-[220px] text-center flex items-center justify-center">
              See Menu
            </Link>
            <button className="flex items-center gap-3 bg-transparent text-gray-900 font-display font-bold text-lg px-4 py-3 rounded-full hover:bg-white/60 transition-all duration-200 border-2 border-transparent hover:border-gray-900 group">
              <span className="w-10 h-10 bg-gray-900 rounded-full flex items-center justify-center text-white group-hover:bg-amber-800 transition">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M6.3 2.841A1.5 1.5 0 004 4.11V15.89a1.5 1.5 0 002.3 1.269l9.344-5.89a1.5 1.5 0 000-2.538L6.3 2.84z" />
                </svg>
              </span>
              <span>Watch Video</span>
            </button>
          </div>
        </div>

        {/* Right Image (Illustration/Collage) */}
        <div className="hidden md:flex md:order-2 relative mt-4 md:mt-0 flex-col items-center">
          {/* Main hero illustration container */}
          <div className="relative z-10">
            <div className="relative transform hover:scale-105 transition duration-500 ease-out">
              <div className="relative w-full flex justify-center">
                <img 
                  src="/images/hero1.png" 
                  alt="Delicious Cookie Bakery Illustration" 
                  className="rounded-4xl md:rounded-4xl shadow-2xl w-full max-w-md md:max-w-2xl mx-auto object-contain drop-shadow-2xl"
                  style={{marginTop: 0, marginBottom: 0}}
                  onError={(e) => {
                    e.target.onerror = null;
                    e.target.src = 'https://placehold.co/600x500/FFF8E1/5D4037?text=Cookie+Love+Bakery&font=raleway';
                  }}
                />
                {/* 100% Fresh badge overlay */}
                <div className="absolute -bottom-6 right-2 sm:-bottom-8 sm:right-8 bg-white px-4 py-2 rounded-2xl shadow-xl border-2 border-gray-900 transform rotate-3 animate-bounce z-20 flex flex-col items-center w-24">
                  <span className="font-display font-extrabold text-2xl text-amber-800 leading-none">100%</span>
                  <span className="text-xs text-gray-600 font-bold tracking-wide">Fresh</span>
                </div>
              </div>
              {/* Decorative border effect */}
              <div className="absolute inset-0 rounded-[2.5rem] border-4 border-amber-800/10 -rotate-2 -z-10"></div>
            </div>
          </div>
          
          {/* Decorative Elements behind image - Enhanced */}
          <div className="hidden md:block absolute -top-12 -right-12 w-40 h-40 bg-yellow-300 rounded-full mix-blend-multiply filter blur-2xl opacity-60 animate-pulse"></div>
          <div className="hidden md:block absolute -bottom-12 -left-12 w-40 h-40 bg-orange-300 rounded-full mix-blend-multiply filter blur-2xl opacity-60 animate-pulse" style={{animationDelay: '1s'}}></div>
          <div className="hidden md:block absolute top-1/2 -right-8 w-32 h-32 bg-pink-200 rounded-full mix-blend-multiply filter blur-xl opacity-50 animate-pulse" style={{animationDelay: '0.5s'}}></div>
          
          {/* Floating badge now overlays image on mobile, see above */}
          
          {/* Additional fun doodles around image */}
          <div className="hidden sm:block absolute -top-6 left-8 text-4xl animate-bounce" style={{animationDelay: '0.3s', animationDuration: '2s'}}>
            ⭐
          </div>
          <div className="hidden sm:block absolute bottom-12 -left-6 text-3xl animate-pulse" style={{animationDelay: '0.7s'}}>
            💛
          </div>
          <div className="hidden md:block absolute top-1/3 -right-4 text-2xl animate-spin" style={{animationDuration: '15s'}}>
            ✨
          </div>
        </div>
      </div>

      {/* Bottom Wave Divider - More pronounced */}
      <div className="absolute bottom-0 left-0 w-full overflow-hidden leading-none transform rotate-180 z-10">
        <svg className="relative block w-[calc(150%+1.3px)] h-20 md:h-24" data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
          <path d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z" className="fill-amber-900"></path>
        </svg>
      </div>
    </header>
  );
};

export default Hero;
