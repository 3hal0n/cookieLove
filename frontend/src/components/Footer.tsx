import { Facebook, Instagram, Mail, Phone, MapPin } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-primary text-primary-foreground">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Brand Section */}
          <div>
            <h3 className="text-2xl font-display font-bold mb-4">Cookie Love</h3>
            <p className="text-primary-foreground/80 mb-4">
              Baked with Love, Shared with Joy
            </p>
            <p className="text-sm text-primary-foreground/60">
              Follow us: <span className="font-semibold">#cookielove</span>
            </p>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-display font-semibold mb-4">Contact Us</h4>
            <div className="space-y-3">
              <div className="flex items-center space-x-2 text-primary-foreground/80">
                <Phone className="h-4 w-4" />
                <div>
                  <p>0777892323</p>
                  <p>0776305624</p>
                </div>
              </div>
              <div className="flex items-center space-x-2 text-primary-foreground/80">
                <Mail className="h-4 w-4" />
                <p>info@cookielove.lk</p>
              </div>
            </div>
          </div>

          {/* Locations */}
          <div>
            <h4 className="text-lg font-display font-semibold mb-4">Our Stores</h4>
            <div className="space-y-3 text-primary-foreground/80">
              <div className="flex items-start space-x-2">
                <MapPin className="h-4 w-4 mt-1 flex-shrink-0" />
                <div>
                  <p className="font-medium">Kochchikade</p>
                  <p className="text-sm">St.Mary's Road, Pallansena</p>
                  <p className="text-xs">8.00 AM – 8.00 PM</p>
                </div>
              </div>
              <div className="flex items-start space-x-2">
                <MapPin className="h-4 w-4 mt-1 flex-shrink-0" />
                <div>
                  <p className="font-medium">CafeQ, Palangathure</p>
                  <p className="text-sm">111 St Anns Rd, Negombo</p>
                  <p className="text-xs">9.00 AM – 10.00 PM</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-primary-foreground/20 mt-8 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <p className="text-sm text-primary-foreground/60">
              © {new Date().getFullYear()} Cookie Love. All rights reserved.
            </p>
            
            <div className="flex items-center space-x-4">
              <p className="text-sm text-primary-foreground/80">
                Online Ordering Coming Soon – UberEats / PickMe Food
              </p>
            </div>
            
            <div className="flex space-x-4">
              <a
                href="https://facebook.com/cookielove"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-accent transition-smooth"
              >
                <Facebook className="h-5 w-5" />
              </a>
              <a
                href="https://instagram.com/cookielove"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-accent transition-smooth"
              >
                <Instagram className="h-5 w-5" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
