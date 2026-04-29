import { useState, useEffect } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/router';

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const router = useRouter();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { href: '/', label: 'Home' },
    { href: '/diensten', label: 'Diensten' },
    { href: '/over-ons', label: 'Over Ons' },
    { href: '/contact', label: 'Contact' },
  ];

  const isActive = (href) => router.pathname === href;

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ease-smooth ${
        isScrolled
          ? 'bg-white/80 backdrop-blur-xl shadow-lg border-b border-dark-100/50 py-3'
          : 'bg-transparent py-5'
      }`}
    >
      <nav className="container-xl" aria-label="Hoofdnavigatie">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-3 group">
            <div className={`w-11 h-11 rounded-xl flex items-center justify-center transition-all duration-300 ${
              isScrolled
                ? 'bg-dark-950'
                : 'bg-white/10 backdrop-blur-sm border border-white/20'
            }`}>
              <span className="font-display font-bold text-xl text-white">M</span>
            </div>
            <div className="flex flex-col">
              <span className={`text-lg font-display font-bold leading-tight transition-colors duration-300 ${
                isScrolled ? 'text-dark-950' : 'text-white'
              }`}>
                MCS
              </span>
              <span className={`text-[11px] font-medium tracking-wide uppercase transition-colors duration-300 ${
                isScrolled ? 'text-dark-400' : 'text-white/60'
              }`}>
                Uitzendbureau
              </span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center gap-1">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={`relative px-4 py-2 rounded-lg text-[15px] font-medium transition-all duration-200 ${
                  isScrolled
                    ? isActive(link.href)
                      ? 'text-dark-950 bg-dark-100'
                      : 'text-dark-600 hover:text-dark-950 hover:bg-dark-50'
                    : isActive(link.href)
                      ? 'text-white bg-white/15'
                      : 'text-white/80 hover:text-white hover:bg-white/10'
                }`}
              >
                {link.label}
              </Link>
            ))}
          </div>

          {/* CTA Buttons Desktop */}
          <div className="hidden lg:flex items-center gap-3">
            <Link
              href="/contact"
              className={`px-5 py-2.5 rounded-xl text-[15px] font-semibold transition-all duration-300 ${
                isScrolled
                  ? 'text-white bg-dark-950 hover:bg-dark-800 shadow-sm hover:shadow-md'
                  : 'text-dark-950 bg-white hover:bg-white/90 shadow-lg'
              } active:scale-[0.98]`}
            >
              Contact opnemen
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            type="button"
            className={`lg:hidden p-2.5 rounded-xl transition-all duration-200 ${
              isScrolled
                ? 'text-dark-700 hover:bg-dark-100'
                : 'text-white hover:bg-white/10'
            }`}
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-expanded={isMenuOpen}
            aria-controls="mobile-menu"
            aria-label={isMenuOpen ? 'Menu sluiten' : 'Menu openen'}
          >
            {isMenuOpen ? (
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            ) : (
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            )}
          </button>
        </div>

        {/* Mobile Menu */}
        <div
          id="mobile-menu"
          className={`lg:hidden overflow-hidden transition-all duration-300 ease-smooth ${
            isMenuOpen ? 'max-h-[500px] opacity-100 mt-4' : 'max-h-0 opacity-0'
          }`}
        >
          <div className={`rounded-2xl p-4 ${
            isScrolled ? 'bg-dark-50' : 'bg-white/10 backdrop-blur-xl border border-white/20'
          }`}>
            <div className="flex flex-col gap-1">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className={`px-4 py-3 rounded-xl text-base font-medium transition-all duration-200 ${
                    isScrolled
                      ? isActive(link.href)
                        ? 'text-dark-950 bg-white'
                        : 'text-dark-700 hover:bg-white'
                      : isActive(link.href)
                        ? 'text-white bg-white/20'
                        : 'text-white/90 hover:bg-white/10'
                  }`}
                  onClick={() => setIsMenuOpen(false)}
                >
                  {link.label}
                </Link>
              ))}
            </div>
            <div className="mt-4 pt-4 border-t border-dark-200/30">
              <Link
                href="/contact"
                className="btn-primary w-full justify-center"
                onClick={() => setIsMenuOpen(false)}
              >
                Contact opnemen
              </Link>
            </div>
          </div>
        </div>
      </nav>
    </header>
  );
}
