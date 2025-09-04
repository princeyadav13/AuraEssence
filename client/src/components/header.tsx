import { useState, useEffect } from "react";
import { Phone, Mail, ShoppingCart, Menu, X } from "lucide-react";
import { useIsMobile } from "@/hooks/use-mobile";

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isSticky, setIsSticky] = useState(false);
  const isMobile = useIsMobile();

  useEffect(() => {
    const handleScroll = () => {
      setIsSticky(window.scrollY > 100);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      {/* Top Bar */}
      <div className="bg-muted py-2 text-sm">
        <div className="container mx-auto px-4 flex justify-between items-center">
          <div className="flex flex-col sm:flex-row sm:space-x-6 space-y-1 sm:space-y-0 text-muted-foreground text-xs sm:text-sm">
            <span className="flex items-center">
              <Phone className="w-3 h-3 sm:w-4 sm:h-4 mr-1 sm:mr-2" />
              +012 345 6789
            </span>
            <span className="flex items-center">
              <Mail className="w-3 h-3 sm:w-4 sm:h-4 mr-1 sm:mr-2" />
              info@example.com
            </span>
          </div>
          <div className="text-muted-foreground text-xs hidden md:block">
            Free Shipping on Orders Above ₹499
          </div>
        </div>
      </div>

      {/* Navigation */}
      <nav className={`bg-background shadow-sm transition-all duration-300 ${isSticky ? "navbar-sticky" : ""}`}>
        <div className="container mx-auto px-4">
          <div className="flex justify-between items-center py-4">
            {/* Logo */}
            <div className="flex items-center space-x-2" data-testid="logo">
              <div className="w-8 h-8 sm:w-10 sm:h-10 rounded-full bg-primary flex items-center justify-center">
                <span className="text-primary-foreground font-bold text-sm sm:text-lg">M</span>
              </div>
              <span className="font-serif text-xl sm:text-2xl font-semibold text-foreground">MellowMoon</span>
            </div>

            {/* Desktop Menu */}
            <div className="hidden lg:flex space-x-8">
              <a href="#" className="text-foreground font-medium nav-link" data-testid="nav-home">Home</a>
              <a href="#" className="text-foreground font-medium nav-link" data-testid="nav-about">About</a>
              <a href="#" className="text-foreground font-medium nav-link" data-testid="nav-products">Products</a>
              <a href="#" className="text-foreground font-medium nav-link" data-testid="nav-educate">Educate Yourself</a>
              <a href="#" className="text-foreground font-medium nav-link" data-testid="nav-contact">Contact</a>
            </div>

            {/* Mobile Menu Button */}
            <button 
              className="lg:hidden"
              onClick={() => setIsMenuOpen(true)}
              data-testid="mobile-menu-button"
            >
              <Menu className="w-6 h-6 text-foreground" />
            </button>

            {/* Cart & Account */}
            <div className="hidden lg:flex items-center space-x-4">
              <button className="p-2 hover:text-primary transition-colors" data-testid="cart-button">
                <ShoppingCart className="w-5 h-5" />
              </button>
              <button className="sexy-button text-primary-foreground px-6 py-2 rounded-full font-medium" data-testid="account-button">
                Account
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="fixed inset-0 z-50 lg:hidden">
            <div className="fixed inset-0 bg-black bg-opacity-50" onClick={() => setIsMenuOpen(false)} />
            <div className="fixed top-0 right-0 h-full w-80 sm:w-96 bg-background shadow-2xl glass-effect" data-testid="mobile-menu">
              <div className="p-6">
                <div className="flex justify-between items-center mb-8">
                  <span className="font-serif text-xl font-semibold">Menu</span>
                  <button onClick={() => setIsMenuOpen(false)} data-testid="close-menu-button">
                    <X className="w-6 h-6" />
                  </button>
                </div>
                <div className="space-y-6">
                  <a href="#" className="block text-lg font-medium text-foreground nav-link py-2" data-testid="mobile-nav-home">Home</a>
                  <a href="#" className="block text-lg font-medium text-foreground nav-link py-2" data-testid="mobile-nav-about">About</a>
                  <a href="#" className="block text-lg font-medium text-foreground nav-link py-2" data-testid="mobile-nav-products">Products</a>
                  <a href="#" className="block text-lg font-medium text-foreground nav-link py-2" data-testid="mobile-nav-educate">Educate Yourself</a>
                  <a href="#" className="block text-lg font-medium text-foreground nav-link py-2" data-testid="mobile-nav-contact">Contact</a>
                  <div className="pt-6 border-t">
                    <button className="w-full sexy-button text-primary-foreground py-3 rounded-full font-medium" data-testid="mobile-account-button">
                      Account
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}
      </nav>
    </>
  );
}
