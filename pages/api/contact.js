import nodemailer from 'nodemailer';

export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  const { naam, email, telefoon, onderwerp, bericht, type } = req.body || {};

  if (!naam || !email || !bericht) {
    return res.status(400).json({ error: 'Naam, e-mail en bericht zijn verplicht.' });
  }

  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
    return res.status(400).json({ error: 'Ongeldig e-mailadres.' });
  }

  const {
    SMTP_HOST,
    SMTP_PORT,
    SMTP_USER,
    SMTP_PASSWORD,
    SMTP_FROM,
    CONTACT_TO,
  } = process.env;

  if (!SMTP_HOST || !SMTP_USER || !SMTP_PASSWORD || !CONTACT_TO) {
    return res.status(500).json({ error: 'Mailserver is niet geconfigureerd.' });
  }

  const port = Number(SMTP_PORT) || 587;
  const transporter = nodemailer.createTransport({
    host: SMTP_HOST,
    port,
    secure: port === 465,
    auth: { user: SMTP_USER, pass: SMTP_PASSWORD },
  });

  const typeLabel = type === 'werkgever' ? 'Werkgever' : 'Werkzoekende';
  const subject = onderwerp?.trim() || `Contactformulier MCS — ${typeLabel}`;

  const text =
    `Naam: ${naam}\n` +
    `E-mail: ${email}\n` +
    `Telefoon: ${telefoon || '-'}\n` +
    `Type: ${typeLabel}\n` +
    `Onderwerp: ${subject}\n\n` +
    `Bericht:\n${bericht}\n`;

  const escape = (s) => String(s).replace(/[&<>"']/g, (c) => ({
    '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;',
  }[c]));

  const html =
    `<h2>Nieuw bericht via contactformulier</h2>` +
    `<p><strong>Naam:</strong> ${escape(naam)}<br/>` +
    `<strong>E-mail:</strong> ${escape(email)}<br/>` +
    `<strong>Telefoon:</strong> ${escape(telefoon || '-')}<br/>` +
    `<strong>Type:</strong> ${escape(typeLabel)}<br/>` +
    `<strong>Onderwerp:</strong> ${escape(subject)}</p>` +
    `<p><strong>Bericht:</strong><br/>${escape(bericht).replace(/\n/g, '<br/>')}</p>`;

  try {
    await transporter.sendMail({
      from: SMTP_FROM || SMTP_USER,
      to: CONTACT_TO,
      replyTo: email,
      subject: `[MCS Contact] ${subject}`,
      text,
      html,
    });
    return res.status(200).json({ ok: true });
  } catch (err) {
    console.error('Contact form mail error:', err);
    return res.status(500).json({ error: 'Versturen mislukt. Probeer het later opnieuw.' });
  }
}
