import Head from 'next/head';
import Link from 'next/link';

export default function OverOns() {
  const kernwaarden = [
    {
      title: 'Betrouwbaar',
      description: 'Wij doen wat we beloven. Transparantie en eerlijkheid staan centraal in al onze relaties.',
      icon: (
        <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
        </svg>
      ),
    },
    {
      title: 'Persoonlijk',
      description: 'Geen nummers, maar mensen. Wij nemen de tijd om u echt te leren kennen.',
      icon: (
        <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
        </svg>
      ),
    },
    {
      title: 'Snel',
      description: 'Tijd is kostbaar. Wij reageren snel en zorgen dat u niet lang hoeft te wachten.',
      icon: (
        <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 10V3L4 14h7v7l9-11h-7z" />
        </svg>
      ),
    },
  ];


  return (
    <>
      <Head>
        <title>Over Ons | MCS Uitzendbureau</title>
        <meta
          name="description"
          content="Leer MCS Uitzendbureau kennen. Ontdek onze missie, visie en kernwaarden. Betrouwbaar, persoonlijk en snel."
        />
      </Head>

      {/* Header */}
      <section className="relative overflow-hidden">
        <div className="section-dark pt-32 pb-20 md:pt-40 md:pb-28">
          <div className="container-xl relative">
            <div className="max-w-3xl">
              <span className="badge bg-white/10 text-white/90 mb-6">
                Wie wij zijn
              </span>
              <h1 className="text-display-lg md:text-display-xl font-display text-white mb-6">
                Over MCS Uitzendbureau
              </h1>
              <p className="text-xl text-dark-300 leading-relaxed">
                Een nieuw uitzendbureau met een frisse kijk op de arbeidsmarkt.
                Persoonlijk, betrouwbaar en altijd met oog voor de mens.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="section-py">
        <div className="container-xl">
          <div className="grid lg:grid-cols-2 gap-8">
            {/* Mission */}
            <div className="card p-8 md:p-10">
              <div className="w-14 h-14 bg-dark-950 rounded-2xl flex items-center justify-center mb-6 text-white">
                <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <h2 className="text-display-xs font-display text-dark-950 mb-4">Onze missie</h2>
              <p className="text-dark-500 leading-relaxed">
                MCS Uitzendbureau zet zich in om werkgevers en werkzoekenden samen
                te brengen op een manier die voor beide partijen waardevol is. Wij
                geloven dat werk meer is dan alleen een inkomen - het is een plek
                waar mensen kunnen groeien. Door onze persoonlijke aanpak zorgen wij
                voor duurzame matches die leiden tot langdurige, succesvolle samenwerkingen.
              </p>
            </div>

            {/* Vision */}
            <div className="card p-8 md:p-10">
              <div className="w-14 h-14 bg-primary-600 rounded-2xl flex items-center justify-center mb-6 text-white">
                <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                </svg>
              </div>
              <h2 className="text-display-xs font-display text-dark-950 mb-4">Onze visie</h2>
              <p className="text-dark-500 leading-relaxed">
                Wij streven ernaar om het meest betrouwbare en persoonlijke
                uitzendbureau te zijn. Een bureau waar zowel werkgevers als
                werkzoekenden zich gehoord en begrepen voelen. Waar kwaliteit
                boven kwantiteit gaat en waar elke plaatsing een succes is.
                Wij investeren continu in onze mensen en relaties.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Core Values */}
      <section className="section-py bg-dark-50/50 relative overflow-hidden">
        <div className="container-xl relative">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="badge-dark mb-4">
              Kernwaarden
            </span>
            <h2 className="text-display-md md:text-display-lg font-display text-dark-950 mb-5">
              Waar wij voor staan
            </h2>
            <p className="text-lg text-dark-500">
              Deze drie waarden vormen de basis van alles wat wij doen.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {kernwaarden.map((waarde, index) => (
              <div
                key={index}
                className="group card p-8 text-center hover:shadow-lg hover:-translate-y-1 transition-all duration-300"
              >
                <div className="w-16 h-16 mx-auto mb-6 rounded-2xl flex items-center justify-center text-white bg-dark-950 group-hover:scale-110 transition-transform duration-300">
                  {waarde.icon}
                </div>
                <h3 className="text-xl font-display font-bold text-dark-950 mb-3">
                  {waarde.title}
                </h3>
                <p className="text-dark-500 leading-relaxed">
                  {waarde.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section-dark">
        <div className="container-xl py-20 md:py-28 relative text-center">
          <h2 className="text-display-md md:text-display-lg font-display text-white mb-5">
            Wilt u meer weten over MCS?
          </h2>
          <p className="text-lg text-dark-300 mb-10 max-w-2xl mx-auto">
            Wij vertellen u graag meer over onze werkwijze en hoe wij u kunnen helpen.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Link href="/contact" className="btn-white">
              Contact opnemen
            </Link>
            <Link href="/diensten" className="btn-outline-white">
              Bekijk onze diensten
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
