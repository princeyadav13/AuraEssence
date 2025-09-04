import { MapPin, Phone, Mail, Instagram, Facebook, Twitter, Youtube } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-foreground text-background py-16">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {/* Company Info */}
          <div className="lg:col-span-2">
            <div className="flex items-center space-x-2 mb-6" data-testid="footer-logo">
              <div className="w-10 h-10 rounded-full bg-primary flex items-center justify-center">
                <span className="text-primary-foreground font-bold text-lg">M</span>
              </div>
              <span className="font-serif text-2xl font-semibold">MellowMoon</span>
            </div>
            <p className="text-gray-300 leading-relaxed mb-6 max-w-md" data-testid="footer-description">
              Transforming women's wellness through the ancient wisdom of Ayurveda. Experience natural period care that honors your body's needs.
            </p>
            <div className="space-y-3 text-gray-300">
              <div className="flex items-center space-x-3" data-testid="footer-address">
                <MapPin className="w-5 h-5" />
                <span>005,006 – Jay Vijay Nagar, Vesu Road, Surat - 395007</span>
              </div>
              <div className="flex items-center space-x-3" data-testid="footer-phone">
                <Phone className="w-5 h-5" />
                <span>+012 345 67890</span>
              </div>
              <div className="flex items-center space-x-3" data-testid="footer-email">
                <Mail className="w-5 h-5" />
                <span>care@mellowmoon.in</span>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold text-lg mb-6 text-accent" data-testid="footer-quick-links-title">
              Quick Links
            </h4>
            <ul className="space-y-3">
              <li><a href="#" className="text-gray-300 hover:text-accent transition-colors" data-testid="footer-link-home">Home</a></li>
              <li><a href="#" className="text-gray-300 hover:text-accent transition-colors" data-testid="footer-link-about">About Us</a></li>
              <li><a href="#" className="text-gray-300 hover:text-accent transition-colors" data-testid="footer-link-products">Our Products</a></li>
              <li><a href="#" className="text-gray-300 hover:text-accent transition-colors" data-testid="footer-link-faqs">FAQs</a></li>
              <li><a href="#" className="text-gray-300 hover:text-accent transition-colors" data-testid="footer-link-contact">Contact Us</a></li>
            </ul>
          </div>

          {/* Shop & Account */}
          <div>
            <h4 className="font-semibold text-lg mb-6 text-accent" data-testid="footer-shop-title">
              Shop & Account
            </h4>
            <ul className="space-y-3">
              <li><a href="#" className="text-gray-300 hover:text-accent transition-colors" data-testid="footer-link-shop">Shop & Info</a></li>
              <li><a href="#" className="text-gray-300 hover:text-accent transition-colors" data-testid="footer-link-cart">Cart</a></li>
              <li><a href="#" className="text-gray-300 hover:text-accent transition-colors" data-testid="footer-link-register">Register</a></li>
              <li><a href="#" className="text-gray-300 hover:text-accent transition-colors" data-testid="footer-link-login">Login</a></li>
              <li><a href="#" className="text-gray-300 hover:text-accent transition-colors" data-testid="footer-link-privacy">Privacy Policy</a></li>
              <li><a href="#" className="text-gray-300 hover:text-accent transition-colors" data-testid="footer-link-terms">Terms & Conditions</a></li>
            </ul>
          </div>
        </div>

        {/* Social & Copyright */}
        <div className="border-t border-gray-700 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="flex justify-center md:justify-start space-x-6 mb-4 md:mb-0" data-testid="footer-social">
              <a href="#" className="text-gray-300 hover:text-accent transition-all duration-300 hover:scale-125 hover:rotate-12" data-testid="social-instagram">
                <Instagram className="w-6 h-6" />
              </a>
              <a href="#" className="text-gray-300 hover:text-accent transition-all duration-300 hover:scale-125 hover:rotate-12" data-testid="social-facebook">
                <Facebook className="w-6 h-6" />
              </a>
              <a href="#" className="text-gray-300 hover:text-accent transition-all duration-300 hover:scale-125 hover:rotate-12" data-testid="social-twitter">
                <Twitter className="w-6 h-6" />
              </a>
              <a href="#" className="text-gray-300 hover:text-accent transition-all duration-300 hover:scale-125 hover:rotate-12" data-testid="social-youtube">
                <Youtube className="w-6 h-6" />
              </a>
            </div>
            <div className="text-center md:text-right">
              <p className="text-gray-400 text-sm" data-testid="footer-copyright">
                © 2024 MellowMoon. All rights reserved.
              </p>
              <p className="text-gray-500 text-xs mt-1" data-testid="footer-tagline">
                Made with ❤️ for women's wellness
              </p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
