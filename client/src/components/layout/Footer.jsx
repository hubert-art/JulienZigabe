import { ArrowUp, Mail, MapPin, MessageCircle, Phone } from "lucide-react";

function LinkedInIcon({ size = 18 }) {
  return <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M6.5 8.25H3V21h3.5V8.25ZM4.75 3A2.02 2.02 0 1 0 4.75 7.04 2.02 2.02 0 0 0 4.75 3ZM21 13.69c0-3.84-2.05-5.63-4.79-5.63-2.2 0-3.19 1.21-3.74 2.06V8.25H9V21h3.47v-6.31c0-1.66.32-3.27 2.38-3.27 2.03 0 2.05 1.9 2.05 3.38V21H21v-7.31Z" /></svg>;
}

function InstagramIcon({ size = 18 }) {
  return <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><rect width="18" height="18" x="3" y="3" rx="5" /><circle cx="12" cy="12" r="4" /><circle cx="17.5" cy="6.5" r="1" fill="currentColor" stroke="none" /></svg>;
}

function XIcon({ size = 17 }) {
  return <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24h-6.657l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231 5.45-6.231Zm-1.161 17.52h1.833L7.084 4.126H5.117L17.083 19.77Z" /></svg>;
}

function TikTokIcon({ size = 18 }) {
  return <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M16.6 3c.3 2.4 1.7 3.9 4.4 4.1v3.2a8.6 8.6 0 0 1-4.4-1.2v6.1a6.2 6.2 0 1 1-5.4-6.1v3.3a3 3 0 1 0 2.2 2.8V3h3.2Z" /></svg>;
}

function FacebookIcon({ size = 18 }) {
  return <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M13.7 21v-8h2.7l.4-3.1h-3.1v-2c0-.9.3-1.5 1.6-1.5H17V3.6c-.3 0-1.3-.1-2.5-.1-2.5 0-4.2 1.5-4.2 4.3v2.1H7.5V13h2.8v8h3.4Z" /></svg>;
}

export default function Footer({ lang = "en" }) {
  const L = lang === "fr"
    ? { tagline: "Conseil, développement et prise de parole pour transformer le potentiel en résultats.", connect: "Restons en contact", locations: "Adresses", kampala: "Kampala, Uganda", nairobi: "Nairobi, Kenya", rights: "Tous droits réservés.", top: "Retour en haut" }
    : { tagline: "Consulting, development, and public speaking that turn potential into outcomes.", connect: "Let’s connect", locations: "Locations", kampala: "Kampala, Uganda", nairobi: "Nairobi, Kenya", rights: "All rights reserved.", top: "Back to top" };

  const socialClass = "inline-flex size-10 items-center justify-center rounded-lg bg-white/10 text-white transition hover:bg-blue-600";

  return (
    <footer className="bg-slate-950 px-5 pt-16 text-white lg:px-8">
      <div className="mx-auto grid max-w-7xl gap-10 pb-12 md:grid-cols-[1.2fr_0.8fr_0.8fr]">
        <div>
          <h2 className="text-3xl font-black tracking-tight">Julien <span className="text-orange-400">Zigabe</span></h2>
          <p className="mt-4 max-w-md text-sm leading-7 text-slate-300">{L.tagline}</p>
        </div>

        <div>
          <h3 className="text-sm font-bold uppercase tracking-[0.16em] text-blue-200">{L.connect}</h3>
          <div className="mt-5 grid gap-3 text-sm text-slate-300">
            <a className="flex items-center gap-3 hover:text-white" href="mailto:julienzigabe10@gmail.com"><Mail size={16} className="text-orange-400" />julienzigabe10@gmail.com</a>
            <a className="flex items-center gap-3 hover:text-white" href="tel:+256760325737"><Phone size={16} className="text-orange-400" />+256 760 325 737</a>
            <a className="flex items-center gap-3 hover:text-white" href="https://wa.me/256760325737" target="_blank" rel="noreferrer"><MessageCircle size={16} className="text-orange-400" />WhatsApp</a>
          </div>
        </div>

        <div>
          <h3 className="text-sm font-bold uppercase tracking-[0.16em] text-blue-200">{L.locations}</h3>
          <div className="mt-5 grid gap-3 text-sm text-slate-300">
            <p className="flex items-center gap-3"><MapPin size={16} className="shrink-0 text-orange-400" />{L.kampala}</p>
            <p className="flex items-center gap-3"><MapPin size={16} className="shrink-0 text-orange-400" />{L.nairobi}</p>
          </div>
          <div className="mt-6 flex gap-3">
            <a href="https://www.linkedin.com/in/julienz24/" target="_blank" rel="noreferrer" className={socialClass} aria-label="Julien Zigabe on LinkedIn"><LinkedInIcon /></a>
            <a href="https://www.instagram.com/julienzigabe1" target="_blank" rel="noreferrer" className={socialClass} aria-label="Julien Zigabe on Instagram"><InstagramIcon /></a>
            <a href="https://x.com/julienzigabe1" target="_blank" rel="noreferrer" className={socialClass} aria-label="Julien Zigabe on X"><XIcon /></a>
            <a href="https://www.tiktok.com/@julienzigab" target="_blank" rel="noreferrer" className={socialClass} aria-label="Julien Zigabe on TikTok"><TikTokIcon /></a>
            <a href="https://www.facebook.com/julien.zigabe.5" target="_blank" rel="noreferrer" className={socialClass} aria-label="Julien Zigabe on Facebook"><FacebookIcon /></a>
          </div>
        </div>
      </div>

      <div className="border-t border-white/10 py-5">
        <div className="mx-auto flex max-w-7xl items-center justify-between text-xs text-slate-400">
          <span>© {new Date().getFullYear()} Julien Zigabe. {L.rights}</span>
          <button type="button" onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })} className="inline-flex items-center gap-2 text-slate-300 hover:text-white">{L.top}<ArrowUp size={15} /></button>
        </div>
      </div>
    </footer>
  );
}
