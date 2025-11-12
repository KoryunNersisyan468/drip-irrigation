import React, { useState } from "react";
import { ClipboardIcon, CheckIcon, MailIcon, PhoneIcon } from "lucide-react";
import Map from "./Map";

const Contact: React.FC = () => {
  const [copiedEmail, setCopiedEmail] = useState(false);
  const [copiedPhone, setCopiedPhone] = useState(false);

  const email = "hovsepyan-93@mail.ru";
  const phone = "+37491220295";

  const copyToClipboard = (text: string, type: "email" | "phone") => {
    navigator.clipboard.writeText(text);
    if (type === "email") {
      setCopiedEmail(true);
      setTimeout(() => setCopiedEmail(false), 2000);
    } else {
      setCopiedPhone(true);
      setTimeout(() => setCopiedPhone(false), 2000);
    }
  };

  return (
    <section className="max-w-6xl mx-auto px-6 py-16 bg-gradient-to-r from-[#d1fae5] to-[#f0fdfa] rounded-3xl text-center shadow-lg">
      <h2 className="text-3xl font-bold mb-8">Կապ</h2>

      <div className="flex flex-col sm:flex-row justify-center items-center gap-4 mb-6">
        <p className="text-slate-700 font-medium">Էլ․ փոստ: {email}</p>
        <div className="flex gap-2">
          <button
            onClick={() => copyToClipboard(email, "email")}
            className="flex items-center gap-2 px-4 py-2 bg-[#0ea5a4] text-white rounded-lg hover:bg-[#059ca0] transition"
          >
            {copiedEmail ? (
              <CheckIcon size={18} />
            ) : (
              <ClipboardIcon size={18} />
            )}
            {copiedEmail ? "Կրկնօրինակված!" : "Կրկնօրինակել"}
          </button>
          <a
            href={`mailto:${email}`}
            className="flex items-center gap-2 px-4 py-2 bg-[#10b981] text-white rounded-lg hover:bg-[#0fa36e] transition"
          >
            <MailIcon size={18} /> Ուղարկել
          </a>
        </div>
      </div>

      <div className="flex flex-col sm:flex-row justify-center items-center gap-4 mb-6">
        <p className="text-slate-700 font-medium">Հեռախոս: {phone}</p>
        <div className="flex gap-2">
          <button
            onClick={() => copyToClipboard(phone, "phone")}
            className="flex items-center gap-2 px-4 py-2 bg-[#0ea5a4] text-white rounded-lg hover:bg-[#059ca0] transition"
          >
            {copiedPhone ? (
              <CheckIcon size={18} />
            ) : (
              <ClipboardIcon size={18} />
            )}
            {copiedPhone ? "Կրկնօրինակված!" : "Կրկնօրինակել"}
          </button>
          <a
            href={`tel:${phone}`}
            className="flex items-center gap-2 px-4 py-2 bg-[#10b981] text-white rounded-lg hover:bg-[#0fa36e] transition"
          >
            <PhoneIcon size={18} /> Զանգահարել
          </a>
        </div>
      </div>

      <p className="text-slate-700 mt-4">
        Հասցե: Հայաստան քաղաք Աբովյանի Խաչատուր Աբովյանի անվան թիվ 1 ավագ դպրոց
      </p>
      <Map />
    </section>
  );
};

export default Contact;
