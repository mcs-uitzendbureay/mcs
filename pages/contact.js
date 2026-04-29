import Head from 'next/head';
import ContactForm from '../components/ContactForm';

export default function Contact() {
  const contactInfo = [
    { title: 'E-mail', content: 'info@mcs-uitzendbureau.nl', href: 'mailto:info@mcs-uitzendbureau.nl' },
  ];

  const openingstijden = [
    { dag: 'Maandag - Donderdag', tijd: '08:30 - 17:30' },
    { dag: 'Vrijdag', tijd: '08:30 - 17:00' },
    { dag: 'Weekend', tijd: 'Gesloten' },
  ];

  return (
    <>
      <Head>
        <title>Contact | MCS Uitzendbureau</title>
        <meta name="description" content="Neem contact op met MCS Uitzendbureau. Bel, mail of kom langs." />
      </Head>

      {/* Header */}
      <section className="relative overflow-hidden">
        <div className="section-dark pt-32 pb-20 md:pt-40 md:pb-28">
          <div className="container-xl relative">
            <div className="max-w-3xl">
              <span className="badge bg-white/10 text-white/90 mb-6">
                Neem contact op
              </span>
              <h1 className="text-display-lg md:text-display-xl font-display text-white mb-6">Contact</h1>
              <p className="text-xl text-dark-300 leading-relaxed">
                Heeft u vragen of wilt u meer informatie? Wij staan klaar om u te helpen.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="section-py">
        <div className="container-xl">
          <div className="grid lg:grid-cols-3 gap-12">
            {/* Contact Form */}
            <div className="lg:col-span-2">
              <div className="card p-8 md:p-10">
                <h2 className="text-display-xs font-display text-dark-950 mb-2">Stuur ons een bericht</h2>
                <p className="text-dark-500 mb-8">Vul het formulier in en wij nemen zo snel mogelijk contact met u op.</p>
                <ContactForm />
              </div>
            </div>

            {/* Contact Info Sidebar */}
            <div className="space-y-6">
              {/* Contact Cards */}
              {contactInfo.map((info, index) => (
                <div key={index} className="card p-6">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-dark-100 rounded-xl flex items-center justify-center flex-shrink-0">
                      <svg className="w-6 h-6 text-dark-600" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" /></svg>
                    </div>
                    <div>
                      <h3 className="font-semibold text-dark-950 mb-1">{info.title}</h3>
                      <a href={info.href} className="text-primary-600 hover:text-primary-700 font-medium">{info.content}</a>
                    </div>
                  </div>
                </div>
              ))}

              {/* Openingstijden */}
              <div className="card p-6">
                <h3 className="font-semibold text-dark-950 mb-4 flex items-center">
                  <svg className="w-5 h-5 mr-2 text-dark-500" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
                  Openingstijden
                </h3>
                <ul className="space-y-2">
                  {openingstijden.map((item, index) => (
                    <li key={index} className="flex justify-between text-sm">
                      <span className="text-dark-500">{item.dag}</span>
                      <span className={item.tijd === 'Gesloten' ? 'text-accent-600 font-medium' : 'text-dark-950 font-medium'}>{item.tijd}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Company Info */}
              <div className="bg-dark-50 rounded-2xl p-6">
                <h3 className="font-semibold text-dark-950 mb-3">Bedrijfsgegevens</h3>
                <ul className="space-y-2 text-sm text-dark-600">
                  <li><span className="text-dark-400">Bedrijfsnaam:</span> MCS Uitzendbureau B.V.</li>
                  <li><span className="text-dark-400">KvK:</span> 98832689</li>
                  <li><span className="text-dark-400">BTW:</span> NL868662574B01</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
