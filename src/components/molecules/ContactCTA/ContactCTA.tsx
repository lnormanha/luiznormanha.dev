import React, { Fragment } from "react";

import i18nStrings from "@i18n";
import { iconPaths } from "@theme/IconPaths";
import "./ContactCTA.css";
import ContactModal from "../ContactModal/ContactModal";

import { PaperPlaneTilt } from "@phosphor-icons/react";

export default function ContactCTA() {
  const [locale, setLocale] = React.useState("");
  const [isModalOpen, setIsModalOpen] = React.useState(false);
  React.useEffect(() => {
    const windowLocale =
      window.location.pathname.slice(1, 3) === "pt" ? "pt" : "en";

    setLocale(windowLocale);
  }, []);

  if (!locale) return null;

  return (
    <>
      <aside>
        <h2>{i18nStrings[locale].footer.tagline}</h2>
        <a className="contact-cta" onClick={() => setIsModalOpen(true)}>
          {i18nStrings[locale].buttons["send-message"]}
          <PaperPlaneTilt size={32} />
        </a>
      </aside>
      <ContactModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
      />
    </>
  );
}
