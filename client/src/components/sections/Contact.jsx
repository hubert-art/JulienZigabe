import { Mail, MessageCircle, User, FileText, Send } from "lucide-react";
import { useState } from "react";

export default function Contact({ lang }) {
  const [form, setForm] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [sendEmail, setSendEmail] = useState(false);
  const [sendWhatsapp, setSendWhatsapp] = useState(false);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

//   const whatsappMessage = () => {
//     const msg = `Hello, my name is ${form.name}. ${form.message}`;
//     return encodeURIComponent(msg);
//   };

  const canSend = sendEmail || sendWhatsapp;

  return (
    <section id="contact" className="py-14 px-4 bg-white">

      <div className="max-w-5xl mx-auto">

        {/* TITLE */}
        <h2 className="text-3xl font-bold text-slate-900 text-center">
          {lang === "fr" ? "Contact" : "Contact"}
        </h2>

        <p className="mt-2 text-sm text-slate-600 text-center max-w-xl mx-auto">
          {lang === "fr"
            ? "Choisissez où vous souhaitez recevoir votre message avant d'envoyer."
            : "Choose where you want your message to be sent before submitting."}
        </p>

        <div className="mt-10 grid md:grid-cols-2 gap-8">

          {/* FORM */}
          <div className="p-6 border border-slate-200 rounded-xl bg-white shadow-sm">

            {/* NAME */}
            <label className="text-xs text-slate-600">Name</label>
            <div className="flex items-center gap-2 mb-4 mt-1 px-3 py-2 border rounded-lg bg-slate-50">
              <User size={16} className="text-slate-400" />
              <input
                name="name"
                onChange={handleChange}
                className="w-full bg-transparent text-sm text-slate-900 outline-none"
                placeholder="Your name"
              />
            </div>

            {/* EMAIL */}
            <label className="text-xs text-slate-600">Email</label>
            <div className="flex items-center gap-2 mb-4 mt-1 px-3 py-2 border rounded-lg bg-slate-50">
              <Mail size={16} className="text-slate-400" />
              <input
                name="email"
                onChange={handleChange}
                className="w-full bg-transparent text-sm text-slate-900 outline-none"
                placeholder="Email"
              />
            </div>

            {/* MESSAGE */}
            <label className="text-xs text-slate-600">Message</label>
            <div className="flex items-start gap-2 mb-4 mt-1 px-3 py-2 border rounded-lg bg-slate-50">
              <FileText size={16} className="text-slate-400 mt-1" />
              <textarea
                name="message"
                onChange={handleChange}
                className="w-full bg-transparent text-sm text-slate-900 outline-none h-24 resize-none"
                placeholder="Your message..."
              />
            </div>

            {/* DESTINATION BOX (NEW) */}
            <div className="mb-5 p-4 border rounded-xl bg-slate-50">

              <p className="text-xs text-slate-600 mb-3">
                Choose where to send:
              </p>

              {/* OPTIONS */}
              <div className="flex flex-col gap-3">

                {/* EMAIL */}
                <label className="flex items-center justify-between p-3 rounded-lg border border-blue-200 bg-blue-50/50 cursor-pointer">
                  <div className="flex items-center gap-2">
                    <Mail size={16} className="text-blue-600" />
                    <span className="text-sm text-slate-900">Email</span>
                  </div>

                  <input
                    type="checkbox"
                    checked={sendEmail}
                    onChange={() => setSendEmail(!sendEmail)}
                    className="accent-blue-600"
                  />
                </label>

                {/* WHATSAPP */}
                <label className="flex items-center justify-between p-3 rounded-lg border border-green-200 bg-green-50/50 cursor-pointer">
                  <div className="flex items-center gap-2">
                    <MessageCircle size={16} className="text-green-600" />
                    <span className="text-sm text-slate-900">WhatsApp</span>
                  </div>

                  <input
                    type="checkbox"
                    checked={sendWhatsapp}
                    onChange={() => setSendWhatsapp(!sendWhatsapp)}
                    className="accent-green-600"
                  />
                </label>

              </div>

            </div>

            {/* BUTTON */}
            <button
              disabled={!canSend}
              className={`w-full flex items-center justify-center gap-2 py-3 rounded-lg text-sm transition
                ${canSend
                  ? "bg-blue-600 hover:bg-blue-700 text-white"
                  : "bg-slate-300 text-slate-500 cursor-not-allowed"
                }`}
            >
              <Send size={16} />
              {lang === "fr" ? "Envoyer" : "Send"}
            </button>

          </div>

          {/* INFO SIDE */}
          <div className="flex flex-col justify-center text-sm text-slate-600">
            <p className="mb-4">
              {lang === "fr"
                ? "Vous pouvez envoyer votre message à un ou plusieurs canaux simultanément."
                : "You can send your message to one or multiple channels at the same time."}
            </p>

            <div className="p-4 rounded-xl border border-slate-200 bg-white">
              <p className="text-xs text-slate-500">
                • Email = réponse professionnelle
                <br />
                • WhatsApp = réponse rapide
              </p>
            </div>
          </div>

        </div>
      </div>

    </section>
  );
}