import Link from 'next/link';
import { useEffect, useRef } from 'react';

export default function Hero() {
  const videoRef = useRef(null);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    // Forceer alle benodigde attributen imperatief — sommige mobiele
    // browsers checken de DOM-attributen, niet de React-props.
    video.muted = true;
    video.defaultMuted = true;
    video.playsInline = true;
    video.setAttribute('muted', '');
    video.setAttribute('playsinline', '');
    video.setAttribute('webkit-playsinline', '');

    const tryPlay = () => {
      const p = video.play();
      if (p && typeof p.catch === 'function') p.catch(() => {});
    };

    tryPlay();

    const onCanPlay = () => tryPlay();
    const onLoadedData = () => tryPlay();
    const onInteract = () => tryPlay();
    const onVisible = () => {
      if (document.visibilityState === 'visible') tryPlay();
    };

    video.addEventListener('canplay', onCanPlay);
    video.addEventListener('loadeddata', onLoadedData);
    document.addEventListener('touchstart', onInteract, { passive: true });
    document.addEventListener('click', onInteract);
    document.addEventListener('scroll', onInteract, { passive: true });
    document.addEventListener('keydown', onInteract);
    document.addEventListener('visibilitychange', onVisible);

    return () => {
      video.removeEventListener('canplay', onCanPlay);
      video.removeEventListener('loadeddata', onLoadedData);
      document.removeEventListener('touchstart', onInteract);
      document.removeEventListener('click', onInteract);
      document.removeEventListener('scroll', onInteract);
      document.removeEventListener('keydown', onInteract);
      document.removeEventListener('visibilitychange', onVisible);
    };
  }, []);

  return (
    <section className="relative min-h-screen flex items-center overflow-hidden">
      {/* Video Background */}
      <div className="absolute inset-0">
        <video
          ref={videoRef}
          autoPlay
          muted
          loop
          playsInline
          preload="auto"
          disableRemotePlayback
          className="absolute inset-0 w-full h-full object-cover"
          poster="/images/hero-large.jpg"
        >
          <source src="/videos/hero-video.mp4" type="video/mp4" />
        </video>
        {/* Elegant Dark Overlay */}
        <div className="absolute inset-0 bg-gradient-to-r from-dark-950 via-dark-950/85 to-dark-950/70" />
        <div className="absolute inset-0 bg-gradient-to-t from-dark-950 via-transparent to-dark-950/30" />
      </div>

      {/* Content */}
      <div className="relative container-xl pt-32 pb-20 lg:pt-40 lg:pb-32">
        <div className="max-w-3xl">
          {/* Badge */}
          <div className="inline-flex items-center gap-2.5 px-4 py-2 bg-white/5 backdrop-blur-sm rounded-full border border-white/10 mb-8">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-success-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-success-400"></span>
            </span>
            <span className="text-white/80 text-sm font-medium">
              Nieuw uitzendbureau in de regio
            </span>
          </div>

          {/* Heading */}
          <h1 className="text-display-lg sm:text-display-xl lg:text-display-2xl font-display text-white mb-6 leading-[1.1]">
            Uw nieuwe partner in{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-white to-white/70">
              personeel & werk
            </span>
          </h1>

          {/* Subheading */}
          <p className="text-lg lg:text-xl text-dark-300 leading-relaxed mb-10 max-w-2xl">
            MCS Uitzendbureau verbindt werkgevers met gemotiveerd talent.
            Persoonlijke aandacht, snelle service en betrouwbare matches.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4">
            <Link href="/contact" className="btn-white group">
              Neem contact op
              <svg className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </Link>
            <Link href="/diensten" className="btn-outline-white">
              Onze diensten
            </Link>
          </div>

          {/* Trust Indicators */}
          <div className="mt-16 pt-8 border-t border-white/10">
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-white/5 backdrop-blur-sm rounded-xl flex items-center justify-center border border-white/10">
                  <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <div>
                  <div className="text-white font-semibold">Snelle reactie</div>
                  <div className="text-dark-400 text-sm">Binnen 24 uur</div>
                </div>
              </div>
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-white/5 backdrop-blur-sm rounded-xl flex items-center justify-center border border-white/10">
                  <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                  </svg>
                </div>
                <div>
                  <div className="text-white font-semibold">Persoonlijk</div>
                  <div className="text-dark-400 text-sm">Geen nummers</div>
                </div>
              </div>
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-white/5 backdrop-blur-sm rounded-xl flex items-center justify-center border border-white/10">
                  <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                  </svg>
                </div>
                <div>
                  <div className="text-white font-semibold">Betrouwbaar</div>
                  <div className="text-dark-400 text-sm">Transparant & eerlijk</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
