import React from "react";
import "./ContactModal.css";
import i18nStrings from "@i18n";
import { X } from "@phosphor-icons/react";

interface ContactModalProps {
  isOpen: boolean;
  onClose(): void;
}

export default function ContactModal({ isOpen, onClose }: ContactModalProps) {
  const [locale, setLocale] = React.useState("");
  const [isToasterOpen, setIsToasterOpen] = React.useState(false);
  const [toasterMessage, setToasterMessage] = React.useState("");

  React.useEffect(() => {
    const windowLocale =
      window.location.pathname.slice(1, 3) === "pt" ? "pt" : "en";

    setLocale(windowLocale);
  }, []);

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const data = new FormData(event.currentTarget);
    const values = Object.fromEntries(data.entries());

    const emailRegex = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/g;

    if (!emailRegex.test(String(values.email))) {
      setIsToasterOpen(true);
      setToasterMessage(i18nStrings[locale].contact.form["email-error"]);
      setTimeout(() => {
        setIsToasterOpen(false);
      }, 5000);
      return;
    }

    const resendBody = {
      // from: `luiznormanha.dev - ${values.name} <onboarding@resend.dev>`,
      from: `luiznormanha.dev - ${values.name} <${values.email}>`,
      to: "luiznormanha@gmail.com",
      subject: values.subject,
      html: `<h2>${i18nStrings[locale].contact.email.title}</h5>
      </br>
      <h5>${i18nStrings[locale].contact.email.message}</h5>
      </br>
      <p>${values.message}</p>`,
    };

    const emailResponse = await fetch(`/api/send-email.json`, {
      method: "POST",
      body: JSON.stringify(resendBody),
      headers: {
        "Content-Type": "application/json",
      },
    });

    if (emailResponse.status === 200) {
      setIsToasterOpen(true);
      setToasterMessage(i18nStrings[locale].contact.form["email-success"]);
      setTimeout(() => {
        setIsToasterOpen(false);
        onClose();
      }, 5000);
    }
  };

  if (!locale) return null;

  return (
    <div className="modal-overlay" aria-hidden={Boolean(!isOpen)}>
      <div className="modal" aria-hidden={Boolean(!isOpen)}>
        <div className="modal-header">
          <h5>{i18nStrings[locale].contact.title}</h5>
          <button onClick={onClose}>
            <X size={32} weight="bold" color="var(--gray-0)" />
          </button>
        </div>
        {i18nStrings[locale].contact.description.map((text) => (
          <p>{text}</p>
        ))}

        <form onSubmit={handleSubmit}>
          <div className="input-container">
            <label>{i18nStrings[locale].contact.form["e-mail"]}</label>
            <input type="email" name="email" />
          </div>

          <div className="input-container">
            <label>{i18nStrings[locale].contact.form.name}</label>
            <input type="text" name="name" />
          </div>

          <div className="input-container">
            <label>{i18nStrings[locale].contact.form.subject}</label>
            <input type="text" name="subject" />
          </div>

          <div className="input-container">
            <label>{i18nStrings[locale].contact.form.message}</label>
            <textarea name="message" />
          </div>

          <div className="button-container">
            <button type="submit">
              {i18nStrings[locale].contact.form.submit}
            </button>
          </div>
        </form>
        <div className="toaster" aria-hidden={!isToasterOpen}>
          <p>{toasterMessage}</p>
        </div>
      </div>
    </div>
  );
}
