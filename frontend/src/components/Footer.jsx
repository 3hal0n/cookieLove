import { Facebook, Instagram, Mail, Phone, MapPin } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-amber-800 text-amber-50 relative pt-24 pb-10 mt-10">
      {/* Top Wave */}
      <div className="absolute top-0 left-0 w-full overflow-hidden leading-none">
        <svg className="relative block w-[calc(100%+1.3px)] h-[60px]" data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
          <path d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z" fill="#ffffff"></path>
        </svg>
      </div>

      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-4 gap-8 mb-10">
          <div className="col-span-1 md:col-span-1">
            <h3 className="font-display text-2xl mb-4 text-yellow-400">Cookie Love</h3>
            <p className="text-sm opacity-80 leading-relaxed">Spreading joy one crumb at a time. The happiest place on the internet for sweet tooths.</p>
            <div className="flex gap-4 mt-6">
              <a href="https://facebook.com/cookielove" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-yellow-400 hover:text-amber-800 transition">
                <Facebook className="h-5 w-5" />
              </a>
              <a href="https://instagram.com/cookielove" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-yellow-400 hover:text-amber-800 transition">
                <Instagram className="h-5 w-5" />
              </a>
            </div>
          </div>
          
          <div>
            <h4 className="font-display text-xl mb-4">Shop</h4>
            <ul className="space-y-2 text-sm opacity-80">
              <li><a href="#" className="hover:text-yellow-400">All Cookies</a></li>
              <li><a href="#" className="hover:text-yellow-400">Gift Boxes</a></li>
              <li><a href="#" className="hover:text-yellow-400">Merchandise</a></li>
              <li><a href="#" className="hover:text-yellow-400">Gift Cards</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-display text-xl mb-4">Help</h4>
            <ul className="space-y-2 text-sm opacity-80">
              <li><a href="#" className="hover:text-yellow-400">Shipping & Delivery</a></li>
              <li><a href="#" className="hover:text-yellow-400">FAQ</a></li>
              <li><a href="#" className="hover:text-yellow-400">Contact Us</a></li>
              <li><a href="#" className="hover:text-yellow-400">Privacy Policy</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-display text-xl mb-4">Visit Us</h4>
            <div className="text-sm opacity-80 space-y-3">
              <div className="flex items-start space-x-2">
                <MapPin className="h-4 w-4 mt-1 flex-shrink-0" />
                <div>
                  <p className="font-medium">Kochchikade</p>
                  <p>St.Mary's Road, Pallansena</p>
                  <p className="text-xs">8.00 AM – 8.00 PM</p>
                </div>
              </div>
              <div className="flex items-center space-x-2">
                <Phone className="h-4 w-4" />
                <p>(555) 123-4567</p>
              </div>
              <div className="flex items-center space-x-2">
                <Mail className="h-4 w-4" />
                <p>hello@cookielove.com</p>
              </div>
            </div>
          </div>
        </div>
        
        <div className="border-t border-white/10 pt-6 text-center text-sm opacity-60">
          &copy; {new Date().getFullYear()} Cookie Love Bakery. All rights reserved. Designed with love.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
