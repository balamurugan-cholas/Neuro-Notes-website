import { useState, useEffect } from 'react';
import { Moon, Sun } from 'lucide-react';
import { Button } from './ui/button';
import letterN from '../../assets/letter-n.png';

export function Navbar() {
  const [isDark, setIsDark] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    // Check system preference or saved preference
    const darkMode = window.matchMedia('(prefers-color-scheme: dark)').matches;
    setIsDark(darkMode);
    if (darkMode) {
      document.documentElement.classList.add('dark');
    }

    // Scroll detection
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleTheme = () => {
    setIsDark(!isDark);
    document.documentElement.classList.toggle('dark');
  };

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    element?.scrollIntoView({ behavior: 'smooth' });
    setIsMenuOpen(false);
  };

  return (
    <>
      <nav
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          isScrolled ? 'bg-background/80 backdrop-blur-lg border-b border-border shadow-sm' : 'bg-transparent'
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            {/* Logo */}
            <button 
              onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
              className="flex items-center gap-2 hover:opacity-80 transition-all duration-300"
            >
              <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-primary to-primary/60 flex items-center justify-center shadow-lg">
              <img
                src={letterN}
                alt="Neuro Notes logo"
                className="w-4 h-4 object-contain"
              />
              </div>
              <span className="font-semibold">Neuro Notes</span>
            </button>

            {/* Desktop Navigation - Centered */}
            <div className="hidden md:flex items-center gap-8 absolute left-1/2 -translate-x-1/2">
              <button
                onClick={() => scrollToSection('features')}
                className="text-sm text-muted-foreground hover:text-foreground transition-all duration-300 relative group"
              >
                Features
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary transition-all duration-300 group-hover:w-full"></span>
              </button>
              <button
                onClick={() => scrollToSection('screenshots')}
                className="text-sm text-muted-foreground hover:text-foreground transition-all duration-300 relative group"
              >
                Screenshots
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary transition-all duration-300 group-hover:w-full"></span>
              </button>
              <button
                onClick={() => scrollToSection('about')}
                className="text-sm text-muted-foreground hover:text-foreground transition-all duration-300 relative group"
              >
                About
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary transition-all duration-300 group-hover:w-full"></span>
              </button>
            </div>

            {/* Theme Toggle - Desktop */}
            <div className="hidden md:block">
              <Button
                variant="ghost"
                size="icon"
                onClick={toggleTheme}
                className="rounded-full hover:scale-110 transition-transform duration-300"
              >
                {isDark ? (
                  <Sun className="w-5 h-5" />
                ) : (
                  <Moon className="w-5 h-5" />
                )}
              </Button>
            </div>

            {/* Mobile Actions */}
            <div className="flex items-center gap-2 md:hidden">
              <Button
                variant="ghost"
                size="icon"
                onClick={toggleTheme}
                className="rounded-full hover:scale-110 transition-transform duration-300"
              >
                {isDark ? (
                  <Sun className="w-5 h-5" />
                ) : (
                  <Moon className="w-5 h-5" />
                )}
              </Button>

              {/* Custom Hamburger Menu */}
              <button
                className="md:hidden p-2 rounded-full hover:bg-accent transition-colors duration-300"
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                aria-label="Toggle menu"
              >
                <div className="w-5 h-4 flex flex-col justify-between">
                  <span 
                    className={`block h-0.5 bg-foreground rounded-full transition-all duration-300 ${
                      isMenuOpen ? 'rotate-50 translate-y-1.5 w-5' : 'w-5'
                    }`}
                  />
                  <span 
                    className={`block h-0.5 bg-foreground rounded-full transition-all duration-300 ${
                      isMenuOpen ? 'opacity-0' : 'w-3 opacity-100'
                    }`}
                  />
                  <span 
                    className={`block h-0.5 bg-foreground rounded-full transition-all duration-300 ${
                      isMenuOpen ? '-rotate-45 -translate-y-1.5 w-5' : 'w-5'
                    }`}
                  />
                </div>
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* Mobile Off-Canvas Menu */}
      <div
        className={`fixed inset-0 z-40 md:hidden transition-opacity duration-300 ${
          isMenuOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
        }`}
      >
        {/* Backdrop */}
        <div
          className="absolute inset-0 bg-background/80 backdrop-blur-sm"
          onClick={() => setIsMenuOpen(false)}
        />
        
        {/* Menu Panel */}
        <div
          className={`absolute top-0 right-0 bottom-0 w-64 bg-background border-l border-border shadow-2xl transition-transform duration-500 ease-out ${
            isMenuOpen ? 'translate-x-0' : 'translate-x-full'
          }`}
        >
          <div className="p-6 pt-20 space-y-6">
            <button
              onClick={() => scrollToSection('features')}
              className="block w-full text-left py-0 px-0 text-base text-muted-foreground transition-all duration-300 hover:translate-x-2"
            >
              Features
            </button>
            <button
              onClick={() => scrollToSection('screenshots')}
              className="block w-full text-left py-0 text-base text-muted-foreground transition-all duration-300 hover:translate-x-2"
            >
              Screenshots
            </button>
            <button
              onClick={() => scrollToSection('about')}
              className="block w-full text-left py-0 text-base text-muted-foreground transition-all duration-300 hover:translate-x-2"
            >
              About
            </button>
          </div>
        </div>
      </div>
    </>
  );
}