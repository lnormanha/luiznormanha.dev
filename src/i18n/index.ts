import en from "./en.json";
import ptBr from "./pt-br.json";

interface LocaleStrings {
  [key: string]: {
    tabs: {
      home: string;
      work: string;
      about: string;
    };
  };
}

const translationStrings: LocaleStrings = {
  en: en,
  pt: ptBr,
};

export default translationStrings;
