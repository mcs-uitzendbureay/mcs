import Link from 'next/link';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const footerLinks = {
    diensten: [
      { href: '/diensten#uitzenden', label: 'Uitzenden' },
      { href: '/diensten#detachering', label: 'Detachering' },
      { href: '/diensten#werving-selectie', label: 'Werving & Selectie' },
    ],
    bedrijf: [
      { href: '/over-ons', label: 'Over Ons' },
      { href: '/contact', label: 'Contact' },
    ],
    contact: [
      { text: 'info@mcs-uitzendbureau.nl', href: 'mailto:info@mcs-uitzendbureau.nl' },
    ],
  };


  return (
    <footer className="relative bg-dark-950 overflow-hidden">
      {/* Subtle Background */}
      <div className="absolute inset-0 bg-gradient-radial-dark opacity-50" />

      <div className="relative container-xl pt-20 pb-10">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12 lg:gap-8 pb-16 border-b border-white/10">
          {/* Brand Column */}
          <div className="lg:col-span-4">
            <Link href="/" className="inline-flex items-center gap-3 mb-6">
              <div className="w-12 h-12 bg-white rounded-xl flex items-center justify-center">
                <span className="text-dark-950 font-display font-bold text-2xl">M</span>
              </div>
              <div>
                <span className="text-xl font-display font-bold text-white">MCS</span>
                <span className="text-sm text-dark-400 ml-2">Uitzendbureau</span>
              </div>
            </Link>
            <p className="text-dark-400 leading-relaxed max-w-sm">
              Uw betrouwbare partner voor uitzenden, detachering en werving & selectie.
              Persoonlijk, professioneel en altijd bereikbaar.
            </p>
          </div>

          {/* Links Columns */}
          <div className="lg:col-span-2">
            <h4 className="text-white font-semibold mb-5 text-sm uppercase tracking-wider">Diensten</h4>
            <ul className="space-y-3">
              {footerLinks.diensten.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-dark-400 hover:text-white transition-colors duration-200 text-[15px]"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="lg:col-span-2">
            <h4 className="text-white font-semibold mb-5 text-sm uppercase tracking-wider">Bedrijf</h4>
            <ul className="space-y-3">
              {footerLinks.bedrijf.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-dark-400 hover:text-white transition-colors duration-200 text-[15px]"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Column */}
          <div className="lg:col-span-4">
            <h4 className="text-white font-semibold mb-5 text-sm uppercase tracking-wider">Contact</h4>
            <ul className="space-y-4">
              {footerLinks.contact.map((item, index) => (
                <li key={index} className="flex items-start gap-4">
                  <div className="w-10 h-10 bg-white/5 rounded-xl flex items-center justify-center flex-shrink-0 border border-white/10">
                    <svg className="w-5 h-5 text-primary-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                  </div>
                  <div>
                    <a
                      href={item.href}
                      className="text-dark-300 hover:text-white transition-colors duration-200 text-[15px]"
                    >
                      {item.text}
                    </a>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-10 flex flex-col md:flex-row justify-between items-center gap-4">
          <div className="text-dark-500 text-sm">
            &copy; {currentYear} MCS Uitzendbureau B.V. Alle rechten voorbehouden.
          </div>
          <div className="flex items-center gap-6 text-sm text-dark-500">
            <span>KvK: 98832689</span>
            <span className="w-1 h-1 bg-dark-600 rounded-full" />
            <span>BTW: NL868662574B01</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
