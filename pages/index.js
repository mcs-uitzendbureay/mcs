import Head from 'next/head';
import Link from 'next/link';
import Hero from '../components/Hero';
import ServiceCard from '../components/ServiceCard';

export default function Home() {
  const services = [
    {
      title: 'Uitzenden',
      description: 'Flexibele inzet van personeel voor korte of langere periodes. Snel, betrouwbaar en volledig ontzorgd.',
      icon: (
        <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
        </svg>
      ),
      href: '/diensten#uitzenden',
    },
    {
      title: 'Detachering',
      description: 'Hoogwaardige professionals voor langdurige projecten. Expertise die naadloos integreert in uw team.',
      icon: (
        <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
        </svg>
      ),
      href: '/diensten#detachering',
    },
    {
      title: 'Werving & Selectie',
      description: 'De perfecte match voor uw vaste vacatures. Grondig, persoonlijk en met garantie.',
      icon: (
        <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
        </svg>
      ),
      href: '/diensten#werving-selectie',
    },
  ];

  const benefits = [
    {
      title: 'Snel schakelen',
      description: 'Binnen 24 uur geschikte kandidaten.',
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 10V3L4 14h7v7l9-11h-7z" />
        </svg>
      ),
    },
    {
      title: 'Persoonlijk contact',
      description: 'Vast aanspreekpunt, altijd bereikbaar.',
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
        </svg>
      ),
    },
    {
      title: '100% Betrouwbaar',
      description: 'Transparant en NEN-gecertificeerd.',
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
        </svg>
      ),
    },
    {
      title: 'Breed netwerk',
      description: 'Toegang tot duizenden professionals.',
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      ),
    },
  ];


  return (
    <>
      <Head>
        <title>MCS Uitzendbureau | Uw partner in personeel en werk</title>
        <meta
          name="description"
          content="MCS Uitzendbureau verbindt werkgevers met gemotiveerd talent. Betrouwbaar, persoonlijk en snel. Ontdek onze diensten: uitzenden, detachering en werving & selectie."
        />
      </Head>

      {/* Hero Section */}
      <Hero />

      {/* Services Section */}
      <section className="section-py bg-dark-50/50 relative overflow-hidden">
        {/* Background Decoration */}
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-primary-500/5 rounded-full blur-[100px] -translate-y-1/2" />
        <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-primary-600/5 rounded-full blur-[100px] translate-y-1/2" />

        <div className="container-xl relative">
          {/* Section Header */}
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="badge-dark mb-4">
              Onze diensten
            </span>
            <h2 className="text-display-md md:text-display-lg font-display text-dark-950 mb-5">
              Flexibele HR-oplossingen voor{' '}
              <span className="text-primary-600">elke situatie</span>
            </h2>
            <p className="text-lg text-dark-500 leading-relaxed">
              Of u nu op zoek bent naar personeel of naar een nieuwe uitdaging,
              MCS Uitzendbureau biedt de oplossing die bij u past.
            </p>
          </div>

          {/* Services Grid */}
          <div className="grid md:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <ServiceCard key={index} {...service} index={index} />
            ))}
          </div>

          {/* CTA */}
          <div className="text-center mt-12">
            <Link href="/diensten" className="btn-secondary">
              Bekijk alle diensten
              <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </Link>
          </div>
        </div>
      </section>

      {/* Why MCS Section */}
      <section className="section-py relative overflow-hidden">
        <div className="container-xl">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            {/* Left Content */}
            <div>
              <span className="badge-accent mb-4">
                Waarom MCS
              </span>
              <h2 className="text-display-md md:text-display-lg font-display text-dark-950 mb-6">
                De kracht van{' '}
                <span className="text-primary-600">persoonlijk</span>{' '}
                contact
              </h2>
              <p className="text-lg text-dark-500 leading-relaxed mb-8">
                Bij MCS staat de mens centraal. Wij geloven dat de juiste match
                tussen werkgever en werknemer leidt tot succes voor beide partijen.
                Met onze persoonlijke aanpak en frisse blik zorgen wij voor
                duurzame arbeidsrelaties.
              </p>

              {/* Benefits Grid */}
              <div className="grid sm:grid-cols-2 gap-4">
                {benefits.map((benefit, index) => (
                  <div
                    key={index}
                    className="group flex items-start gap-4 p-4 rounded-xl hover:bg-dark-50 transition-colors duration-300"
                  >
                    <div className="w-12 h-12 bg-dark-100 rounded-xl flex items-center justify-center flex-shrink-0 text-dark-600 group-hover:bg-dark-950 group-hover:text-white transition-all duration-300">
                      {benefit.icon}
                    </div>
                    <div>
                      <h3 className="font-display font-semibold text-dark-950 mb-1">
                        {benefit.title}
                      </h3>
                      <p className="text-sm text-dark-500">{benefit.description}</p>
                    </div>
                  </div>
                ))}
              </div>

              <div className="mt-8">
                <Link href="/over-ons" className="btn-primary">
                  Meer over MCS
                  <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </Link>
              </div>
            </div>

            {/* Right Content - CTA Card */}
            <div className="relative">
              <div className="card p-8 lg:p-10">
                <div className="w-14 h-14 bg-dark-950 rounded-2xl flex items-center justify-center mb-6">
                  <svg className="w-7 h-7 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                </div>

                <h3 className="text-display-xs font-display text-dark-950 mb-3">
                  Direct aan de slag?
                </h3>
                <p className="text-dark-500 mb-6">
                  Wij staan klaar om u te helpen. Als werkzoekende vindt u bij ons
                  de baan die bij u past. Als werkgever leveren wij snel het juiste personeel.
                </p>

                <div className="space-y-3">
                  <Link href="/contact" className="btn-primary w-full justify-center">
                    Contact opnemen
                  </Link>
                  <Link href="/diensten" className="btn-outline w-full justify-center">
                    Onze diensten
                  </Link>
                </div>

                {/* Trust Indicators */}
                <div className="mt-8 pt-6 border-t border-dark-100 grid grid-cols-2 gap-4">
                  <div className="flex items-center gap-2 text-sm text-dark-500">
                    <svg className="w-5 h-5 text-success-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    <span>Reactie binnen 24u</span>
                  </div>
                  <div className="flex items-center gap-2 text-sm text-dark-500">
                    <svg className="w-5 h-5 text-success-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    <span>Gratis inschrijven</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-dark">
        <div className="container-xl relative py-20 md:py-28 text-center">
          <h2 className="text-display-md md:text-display-lg font-display text-white mb-5">
            Klaar om te starten?
          </h2>
          <p className="text-lg md:text-xl text-dark-300 mb-10 max-w-2xl mx-auto">
            Neem vandaag nog contact met ons op en ontdek wat MCS Uitzendbureau
            voor u kan betekenen.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Link href="/contact" className="btn-white">
              Neem contact op
              <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
