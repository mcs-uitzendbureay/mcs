import { useState } from 'react';

export default function ContactForm() {
  const [formData, setFormData] = useState({
    naam: '',
    email: '',
    telefoon: '',
    onderwerp: '',
    bericht: '',
    type: 'werkzoekende',
  });
  const [status, setStatus] = useState({ state: 'idle', message: '' });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus({ state: 'sending', message: '' });

    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });
      const data = await res.json().catch(() => ({}));
      if (!res.ok) {
        throw new Error(data.error || 'Er ging iets mis. Probeer het later opnieuw.');
      }
      setStatus({ state: 'success', message: 'Bedankt voor uw bericht! Wij nemen zo snel mogelijk contact op.' });
      setFormData({
        naam: '',
        email: '',
        telefoon: '',
        onderwerp: '',
        bericht: '',
        type: formData.type,
      });
    } catch (err) {
      setStatus({ state: 'error', message: err.message });
    }
  };

  const isSending = status.state === 'sending';

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      {/* Type Selection */}
      <div className="p-1.5 bg-dark-100 rounded-xl inline-flex">
        <button
          type="button"
          onClick={() => setFormData(prev => ({ ...prev, type: 'werkzoekende' }))}
          className={`px-5 py-2.5 rounded-lg text-sm font-semibold transition-all duration-300 ${
            formData.type === 'werkzoekende'
              ? 'bg-white text-dark-950 shadow-sm'
              : 'text-dark-500 hover:text-dark-700'
          }`}
        >
          Werkzoekende
        </button>
        <button
          type="button"
          onClick={() => setFormData(prev => ({ ...prev, type: 'werkgever' }))}
          className={`px-5 py-2.5 rounded-lg text-sm font-semibold transition-all duration-300 ${
            formData.type === 'werkgever'
              ? 'bg-white text-dark-950 shadow-sm'
              : 'text-dark-500 hover:text-dark-700'
          }`}
        >
          Werkgever
        </button>
      </div>

      {/* Name & Email Row */}
      <div className="grid sm:grid-cols-2 gap-5">
        {/* Name */}
        <div>
          <label htmlFor="naam" className="form-label">
            Naam <span className="text-accent-500">*</span>
          </label>
          <div className="relative">
            <span className="absolute left-4 top-1/2 -translate-y-1/2 text-dark-400">
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
              </svg>
            </span>
            <input
              type="text"
              id="naam"
              name="naam"
              required
              value={formData.naam}
              onChange={handleChange}
              className="form-input pl-12"
              placeholder="Uw volledige naam"
            />
          </div>
        </div>

        {/* Email */}
        <div>
          <label htmlFor="email" className="form-label">
            E-mailadres <span className="text-accent-500">*</span>
          </label>
          <div className="relative">
            <span className="absolute left-4 top-1/2 -translate-y-1/2 text-dark-400">
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
              </svg>
            </span>
            <input
              type="email"
              id="email"
              name="email"
              required
              value={formData.email}
              onChange={handleChange}
              className="form-input pl-12"
              placeholder="uw@email.nl"
            />
          </div>
        </div>
      </div>

      {/* Phone & Subject Row */}
      <div className="grid sm:grid-cols-2 gap-5">
        {/* Phone */}
        <div>
          <label htmlFor="telefoon" className="form-label">
            Telefoonnummer
          </label>
          <div className="relative">
            <span className="absolute left-4 top-1/2 -translate-y-1/2 text-dark-400">
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
              </svg>
            </span>
            <input
              type="tel"
              id="telefoon"
              name="telefoon"
              value={formData.telefoon}
              onChange={handleChange}
              className="form-input pl-12"
              placeholder="06 12345678"
            />
          </div>
        </div>

        {/* Subject */}
        <div>
          <label htmlFor="onderwerp" className="form-label">
            Onderwerp
          </label>
          <div className="relative">
            <span className="absolute left-4 top-1/2 -translate-y-1/2 text-dark-400">
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M7 7h.01M7 3h5c.512 0 1.024.195 1.414.586l7 7a2 2 0 010 2.828l-7 7a2 2 0 01-2.828 0l-7-7A1.994 1.994 0 013 12V7a4 4 0 014-4z" />
              </svg>
            </span>
            <input
              type="text"
              id="onderwerp"
              name="onderwerp"
              value={formData.onderwerp}
              onChange={handleChange}
              className="form-input pl-12"
              placeholder="Waar kunnen we u mee helpen?"
            />
          </div>
        </div>
      </div>

      {/* Message */}
      <div>
        <label htmlFor="bericht" className="form-label">
          Bericht <span className="text-accent-500">*</span>
        </label>
        <textarea
          id="bericht"
          name="bericht"
          required
          rows={5}
          value={formData.bericht}
          onChange={handleChange}
          className="form-input resize-none"
          placeholder="Vertel ons meer over uw vraag of situatie..."
        />
      </div>

      {/* Submit Button */}
      <button
        type="submit"
        disabled={isSending}
        className="btn-primary w-full justify-center py-4 disabled:opacity-60 disabled:cursor-not-allowed"
      >
        {isSending ? 'Bezig met versturen...' : 'Verstuur bericht'}
        {!isSending && (
          <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
          </svg>
        )}
      </button>

      {status.state === 'success' && (
        <div role="status" className="rounded-xl border border-success-200 bg-success-50 p-4 text-sm text-success-800">
          {status.message}
        </div>
      )}
      {status.state === 'error' && (
        <div role="alert" className="rounded-xl border border-accent-200 bg-accent-50 p-4 text-sm text-accent-800">
          {status.message}
        </div>
      )}
    </form>
  );
}
