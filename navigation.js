import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollTo = (id: string) => {
    setIsOpen(false);
    const element = document.getElementById(id);
    element?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <header className={`${isScrolled ? "floating-header py-4" : "py-6"}`}>
      <nav className="container mx-auto px-6 flex items-center justify-between">
        <a href="#" className="text-2xl font-light">
          EXODUS
        </a>

        {/* Desktop Navigation */}
        <div className="hidden md:flex space-x-8">
          <button onClick={() => scrollTo("about")} className="nav-link">
            About
          </button>
          <button onClick={() => scrollTo("artists")} className="nav-link">
            Artists
          </button>
          <button onClick={() => scrollTo("sponsors")} className="nav-link">
            Sponsors
          </button>
        </div>

        {/* Mobile Navigation */}
        <button
          className="md:hidden"
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle menu"
        >
          {isOpen ? (
            <X className="h-6 w-6" />
          ) : (
            <Menu className="h-6 w-6" />
          )}
        </button>
      </nav>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="fixed inset-0 bg-white z-50 md:hidden animate-fade-in">
          <div className="container mx-auto px-6 py-8">
            <div className="flex justify-end">
              <button
                onClick={() => setIsOpen(false)}
                className="text-exhibition"
                aria-label="Close menu"
              >
                <X className="h-6 w-6" />
              </button>
            </div>
            <div className="flex flex-col space-y-8 items-center justify-center h-[80vh]">
              <button
                onClick={() => scrollTo("about")}
                className="text-3xl nav-link"
              >
                About
              </button>
              <button
                onClick={() => scrollTo("artists")}
                className="text-3xl nav-link"
              >
                Artists
              </button>
              <button
                onClick={() => scrollTo("sponsors")}
                className="text-3xl nav-link"
              >
                Sponsors
              </button>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};

export default Navigation;
