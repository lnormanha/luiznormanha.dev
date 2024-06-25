interface Projects {
  name: string;
  description: string;
  url: string;
}

const enProjects: Projects[] = [
  {
    name: 'luiznormanha.dev',
    description: "Personal portfolio made using Figma and Astro for learning purposes.",
    url: "#"
  },
  {
    name: "Negotiation 7.0 App",
    description: "App for the Negotiation 7.0 methodology for negotiations made using React Native and Expo.",
    url: "https://www.negotiation7app.com"
  }
]
const ptBrProjects: Projects[] = [
  {
    name: "luiznormanha.dev",
    description: "Portfolio pessoal feito com Figma e Astro com fins de aprendizagem.",
    url: "#"
  },
  {
    name: "Negotiation 7.0 App",
    description: "App da metodologia de Negociação 7.0 para negociações, feito usando React Native e Expo.",
    url: "https://play.google.com/store/apps/details?id=com.negotiation70&hl=en&gl=US"
  }
]

export const projects = {
  en: enProjects,
  "pt-br": ptBrProjects
}
