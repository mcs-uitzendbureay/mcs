import Head from 'next/head';
import Link from 'next/link';

export default function Diensten() {
  const diensten = [
    {
      id: 'uitzenden',
      title: 'Uitzenden',
      subtitle: 'Flexibele arbeidskrachten wanneer u ze nodig heeft',
      description:
        'Met uitzenden levert MCS Uitzendbureau flexibele arbeidskrachten voor korte of langere periodes. Of het nu gaat om seizoenswerk, piekdrukte of vervanging bij ziekte, wij zorgen voor de juiste mensen op het juiste moment.',
      forEmployers: [
        'Snelle beschikbaarheid van gekwalificeerd personeel',
        'Geen administratieve rompslomp - wij regelen alles',
        'Flexibel op- en afschalen naar behoefte',
        'Uitgebreide screening van kandidaten',
        'Vaste contactpersoon voor al uw vragen',
      ],
      forJobseekers: [
        'Snel aan het werk bij diverse opdrachtgevers',
        'Flexibele werktijden en contracten',
        'Doorgroeimogelijkheden naar vast dienstverband',
        'Begeleiding en ondersteuning van MCS',
        'Eerlijk salaris en goede arbeidsvoorwaarden',
      ],
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
        </svg>
      ),
    },
    {
      id: 'detachering',
      title: 'Detachering',
      subtitle: 'Specialisten voor langdurige projecten',
      description:
        'Detachering is de ideale oplossing wanneer u voor langere tijd een specialist nodig heeft. Onze gedetacheerden werken op locatie bij de opdrachtgever en worden volledig onderdeel van uw team, terwijl zij in dienst blijven bij MCS.',
      forEmployers: [
        'Toegang tot gespecialiseerde kennis en ervaring',
        'Langdurige inzet zonder vaste dienstverbanden',
        'Wij zorgen voor begeleiding en ontwikkeling',
        'Flexibiliteit in contractduur',
        'Mogelijkheid tot overname na detacheringsperiode',
      ],
      forJobseekers: [
        'Werken aan uitdagende projecten',
        'Vast dienstverband bij MCS met zekerheid',
        'Persoonlijke ontwikkeling en opleidingsmogelijkheden',
        'Variatie in werkzaamheden en werkomgevingen',
        'Goede primaire en secundaire arbeidsvoorwaarden',
      ],
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
        </svg>
      ),
    },
    {
      id: 'werving-selectie',
      title: 'Werving & Selectie',
      subtitle: 'De perfecte match voor uw vaste vacature',
      description:
        'Op zoek naar een nieuwe medewerker voor een vaste positie? MCS neemt het volledige wervings- en selectieproces uit handen. Van vacaturetekst tot eindgesprek, wij vinden de kandidaat die perfect past bij uw organisatie.',
      forEmployers: [
        'Volledig ontzorgd in het recruitmentproces',
        'Uitgebreide screening en assessment',
        'Presentatie van voorgeselecteerde kandidaten',
        'Garantieregeling op geplaatste kandidaten',
        'Marktconforme tarieven',
      ],
      forJobseekers: [
        'Toegang tot exclusieve vacatures',
        'Persoonlijke begeleiding tijdens sollicitatieproces',
        'Eerlijk advies over carrièremogelijkheden',
        'Ondersteuning bij onderhandelingen',
        'Langdurige relatie ook na plaatsing',
      ],
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
        </svg>
      ),
    },
  ];

  return (
    <>
      <Head>
        <title>Diensten | MCS Uitzendbureau</title>
        <meta
          name="description"
          content="Ontdek onze diensten: uitzenden, detachering en werving & selectie. MCS Uitzendbureau biedt oplossingen voor werkgevers én werkzoekenden."
        />
      </Head>

      {/* Header */}
      <section className="relative overflow-hidden">
        <div className="section-dark pt-32 pb-20 md:pt-40 md:pb-28">
          <div className="container-xl relative">
            <div className="max-w-3xl">
              <span className="badge bg-white/10 text-white/90 mb-6">
                Wat wij bieden
              </span>
              <h1 className="text-display-lg md:text-display-xl font-display text-white mb-6">
                Onze diensten
              </h1>
              <p className="text-xl text-dark-300 leading-relaxed">
                MCS Uitzendbureau biedt diverse HR-oplossingen voor zowel werkgevers
                als werkzoekenden. Ontdek welke dienst het beste bij uw situatie past.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Services */}
      {diensten.map((dienst, index) => (
        <section
          key={dienst.id}
          id={dienst.id}
          className={`section-py ${index % 2 === 1 ? 'bg-dark-50/50' : 'bg-white'} relative overflow-hidden`}
        >
          <div className="container-xl relative">
            <div className={`grid lg:grid-cols-2 gap-16 items-start ${index % 2 === 1 ? 'lg:flex-row-reverse' : ''}`}>
              {/* Service Info */}
              <div className={index % 2 === 1 ? 'lg:order-2' : ''}>
                {/* Icon */}
                <div className="w-16 h-16 bg-dark-950 rounded-2xl flex items-center justify-center text-white mb-6">
                  {dienst.icon}
                </div>

                <span className="badge-dark mb-4">
                  {dienst.subtitle}
                </span>

                <h2 className="text-display-sm md:text-display-md font-display text-dark-950 mb-4">
                  {dienst.title}
                </h2>

                <p className="text-lg text-dark-500 leading-relaxed mb-8">
                  {dienst.description}
                </p>

                <Link href="/contact" className="btn-primary">
                  Meer informatie aanvragen
                  <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </Link>
              </div>

              {/* Benefits Cards */}
              <div className={`space-y-6 ${index % 2 === 1 ? 'lg:order-1' : ''}`}>
                {/* For Employers */}
                <div className="card p-6 md:p-8">
                  <div className="flex items-center gap-3 mb-6">
                    <div className="w-10 h-10 bg-dark-100 rounded-xl flex items-center justify-center">
                      <svg className="w-5 h-5 text-dark-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                      </svg>
                    </div>
                    <h3 className="text-xl font-display font-bold text-dark-950">
                      Voor werkgevers
                    </h3>
                  </div>
                  <ul className="space-y-3">
                    {dienst.forEmployers.map((item, i) => (
                      <li key={i} className="flex items-start gap-3 text-dark-600">
                        <span className="w-5 h-5 bg-success-100 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                          <svg className="w-3 h-3 text-success-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                          </svg>
                        </span>
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>

                {/* For Jobseekers */}
                <div className="card p-6 md:p-8">
                  <div className="flex items-center gap-3 mb-6">
                    <div className="w-10 h-10 bg-accent-100 rounded-xl flex items-center justify-center">
                      <svg className="w-5 h-5 text-accent-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                      </svg>
                    </div>
                    <h3 className="text-xl font-display font-bold text-dark-950">
                      Voor werkzoekenden
                    </h3>
                  </div>
                  <ul className="space-y-3">
                    {dienst.forJobseekers.map((item, i) => (
                      <li key={i} className="flex items-start gap-3 text-dark-600">
                        <span className="w-5 h-5 bg-success-100 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                          <svg className="w-3 h-3 text-success-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                          </svg>
                        </span>
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>
      ))}

      {/* CTA Section */}
      <section className="section-dark">
        <div className="container-xl py-20 md:py-28 relative text-center">
          <h2 className="text-display-md md:text-display-lg font-display text-white mb-5">
            Niet zeker welke dienst bij u past?
          </h2>
          <p className="text-lg text-dark-300 mb-10 max-w-2xl mx-auto">
            Neem vrijblijvend contact met ons op. Wij denken graag met u mee over
            de beste oplossing voor uw situatie.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Link href="/contact" className="btn-white">
              Contact opnemen
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
