import en from "./en.json";
import ptBr from "./pt-br.json";

interface LocaleStrings {
  [key: string]: {
    tabs: {
      home: string;
      experience: string;
      about: string;
    };
    buttons: {
      "about-me": string;
      "view-all": string;
      "send-message": string;
    };
    footer: {
      tagline: string;
      "developed-with": string;
    };
    home: {
      title: string;
      subtitle: string;
      "stacks-section": {
        title: string;
        subtitle: string;
        years: string;
        languages: string;
        english: string;
        portuguese: string;
        advanced: string;
        native: string;
      };
      "experiences-section": {
        title: string;
        subtitle: string;
      };
    };
    about: {
      title: string;
      profile: {
        label: string;
        description: string[];
      };
      background: {
        label: string;
        description: string[];
      };
      education: {
        label: string;
        description: string[];
      };
    };
    contact: {
      title: string;
      description: string[];
      form: {
        "e-mail": string;
        name: string;
        subject: string;
        message: string;
        submit: string;
        "email-error": string;
        "email-success": string;
      };
      email: {
        title: string;
        message: string;
      };
    };
  };
}

const translationStrings: LocaleStrings = {
  en: en,
  pt: ptBr,
};

export default translationStrings;
