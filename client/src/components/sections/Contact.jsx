import { FileText, Mail, MapPin, MessageCircle, Phone, Send, User } from "lucide-react";
import { useState } from "react";

export default function Contact({ lang }) {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [sendEmail, setSendEmail] = useState(true);
  const [sendWhatsapp, setSendWhatsapp] = useState(false);

  const L = {
    fr: {
      label: "Entrer en contact",
      title: "Échangeons sur une collaboration utile.",
      subtitle:
        "Pour une mission de conseil, un programme jeunesse, une initiative communautaire ou un échange professionnel, envoyez un message directement.",
      name: "Nom",
      email: "Email",
      message: "Message",
      placeholderName: "Votre nom",
      placeholderEmail: "Votre email",
      placeholderMessage: "Décrivez brièvement votre opportunité ou votre message...",
      destination: "Destination",
      send: "Envoyer le message",
      emailLabel: "Email",
      whatsappLabel: "WhatsApp",
      direct: "Coordonnées",
      response: "Réponse professionnelle et rapide selon le canal choisi.",
    },
    en: {
      label: "Get in touch",
      title: "Let's start a useful conversation.",
      subtitle:
        "For a consulting mission, youth program, community initiative, or professional conversation, send a direct message.",
      name: "Name",
      email: "Email",
      message: "Message",
      placeholderName: "Your name",
      placeholderEmail: "Your email",
      placeholderMessage: "Briefly describe your opportunity or message...",
      destination: "Destination",
      send: "Send message",
      emailLabel: "Email",
      whatsappLabel: "WhatsApp",
      direct: "Direct details",
      response: "Professional, timely response through the channel you choose.",
    },
  }[lang];

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const buildMessage = () =>
    `Hello, my name is ${form.name || "[name]"}\n\nEmail: ${
      form.email || "[email]"
    }\n\nMessage:\n${form.message || "[message]"}`;

  const handleSubmit = (event) => {
    event.preventDefault();

    if (sendWhatsapp) {
      window.open(
        `https://wa.me/256760325737?text=${encodeURIComponent(buildMessage())}`,
        "_blank",
        "noopener,noreferrer"
      );
    }

    if (sendEmail) {
      window.location.href = `mailto:julienzigabe10@gmail.com?subject=${encodeURIComponent(
        "New Contact Message"
      )}&body=${encodeURIComponent(buildMessage())}`;
    }
  };

  const canSend = sendEmail || sendWhatsapp;

  return (
    <section id="contact" className="bg-white px-5 py-24 lg:px-8">
      <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-[0.9fr_1.1fr]">
        <div>
          <p className="section-kicker">
            <Send size={16} />
            {L.label}
          </p>
          <h2 className="section-title mt-4">{L.title}</h2>
          <p className="mt-5 text-base leading-8 text-slate-600">{L.subtitle}</p>

          <div className="mt-10 rounded-lg bg-slate-950 p-6 text-white">
            <h3 className="font-bold">{L.direct}</h3>
            <div className="mt-5 grid gap-4 text-sm text-slate-200">
              <a className="flex items-center gap-3 hover:text-white" href="mailto:julienzigabe10@gmail.com">
                <Mail size={17} className="text-orange-400" />
                julienzigabe10@gmail.com
              </a>
              <p className="flex items-center gap-3">
                <Phone size={17} className="text-orange-400" />
                +254 119 526 770 / +256 760 325 737
              </p>
              <p className="flex items-center gap-3">
                <MapPin size={17} className="text-orange-400" />
                Nairobi, Kenya
              </p>
            </div>
            <p className="mt-6 rounded-lg bg-white/10 p-4 text-sm leading-6 text-slate-200">
              {L.response}
            </p>
          </div>
        </div>

        <form onSubmit={handleSubmit} className="premium-card">
          <div className="grid gap-5 sm:grid-cols-2">
            <label className="block">
              <span className="text-sm font-semibold text-slate-700">{L.name}</span>
              <span className="mt-2 flex items-center gap-3 rounded-lg border border-slate-200 bg-slate-50 px-4 py-3 transition-within">
                <User size={17} className="text-slate-400" />
                <input
                  name="name"
                  value={form.name}
                  onChange={handleChange}
                  className="w-full bg-transparent text-sm text-slate-950 outline-none placeholder:text-slate-400"
                  placeholder={L.placeholderName}
                />
              </span>
            </label>

            <label className="block">
              <span className="text-sm font-semibold text-slate-700">{L.email}</span>
              <span className="mt-2 flex items-center gap-3 rounded-lg border border-slate-200 bg-slate-50 px-4 py-3 transition-within">
                <Mail size={17} className="text-slate-400" />
                <input
                  type="email"
                  name="email"
                  value={form.email}
                  onChange={handleChange}
                  className="w-full bg-transparent text-sm text-slate-950 outline-none placeholder:text-slate-400"
                  placeholder={L.placeholderEmail}
                />
              </span>
            </label>
          </div>

          <label className="mt-5 block">
            <span className="text-sm font-semibold text-slate-700">{L.message}</span>
            <span className="mt-2 flex items-start gap-3 rounded-lg border border-slate-200 bg-slate-50 px-4 py-3 transition-within">
              <FileText size={17} className="mt-1 text-slate-400" />
              <textarea
                name="message"
                value={form.message}
                onChange={handleChange}
                className="min-h-36 w-full resize-none bg-transparent text-sm text-slate-950 outline-none placeholder:text-slate-400"
                placeholder={L.placeholderMessage}
              />
            </span>
          </label>

          <div className="mt-6 rounded-lg border border-slate-200 bg-slate-50 p-4">
            <p className="text-sm font-semibold text-slate-700">{L.destination}</p>
            <div className="mt-3 grid gap-3 sm:grid-cols-2">
              <label className="flex cursor-pointer items-center justify-between rounded-lg border border-blue-100 bg-white p-4">
                <span className="flex items-center gap-2 text-sm font-semibold text-slate-700">
                  <Mail size={17} className="text-blue-600" />
                  {L.emailLabel}
                </span>
                <input
                  type="checkbox"
                  checked={sendEmail}
                  onChange={() => setSendEmail((value) => !value)}
                  className="size-4 accent-blue-600"
                />
              </label>
              <label className="flex cursor-pointer items-center justify-between rounded-lg border border-green-100 bg-white p-4">
                <span className="flex items-center gap-2 text-sm font-semibold text-slate-700">
                  <MessageCircle size={17} className="text-green-600" />
                  {L.whatsappLabel}
                </span>
                <input
                  type="checkbox"
                  checked={sendWhatsapp}
                  onChange={() => setSendWhatsapp((value) => !value)}
                  className="size-4 accent-green-600"
                />
              </label>
            </div>
          </div>

          <button
            type="submit"
            disabled={!canSend}
            className="mt-6 inline-flex w-full items-center justify-center gap-2 rounded-lg bg-blue-600 px-6 py-4 text-sm font-bold text-white shadow-lg shadow-blue-600/20 transition hover:-translate-y-0.5 hover:bg-blue-700 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 disabled:cursor-not-allowed disabled:bg-slate-300 disabled:shadow-none"
          >
            <Send size={18} />
            {L.send}
          </button>
        </form>
      </div>
    </section>
  );
}
