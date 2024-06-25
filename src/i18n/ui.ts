export const languages = {
  en: "English",
  "pt-br": "Portuguese",
};

export const defaultLang = "en";

export const englishTranslation = {
  "navbar.about": "About",
  "navbar.tools": "Tools",
  "home.title": "Hi, I'm Luiz Normanha",
  "home.description":
    "I’m a Software Engineer with a passion for learning and having fun developing new things.",
  "home.learning": "Currently in the process of learning Go.",
  "home.skills.title": "Skills and Experience",
  "home.skills.description":
    "I have 6+ years working as a Software developer and my main experience revolves around JavaScript and TypeScript, React and React Native, in both Front-end and Back-end development.",
  "home.featured.projects": "Featured Projects",
  "home.featured.articles": "Featured Articles",
  "about.title": "About me",
  "about.description": [
    "Hi! I’m Luiz Normanha, I’m a Software Engineer based in Brazil, currently living in Porto Alegre, Rio Grande do Sul.",
    "I started working professionally as a Software Engineer in 2018, but since 2016 I’m actively doing software development. Before working professionally I mainly developed games in Unity with C#.",
    "On my day-to-day work I use React, JavaScript and TypeScript with 6 years using them as my main stack, doing different types of projects.",
    "In my free time I like to learn new thing, be it for Software Development or other fields. My hobbies consist of playing digital games on PC when I have the time, watching movies or series, or just chilling with my cats"
  ],
  "about.career": "Career",
  'tools.title': "Tools and Apps",
  'tools.description': 'Tools and apps that I use on my work and personal projects. I like to share them with others, so I list them all here for ease of access.',
  'coming.soon': "Coming soon"
};

export const portugueseTranslation = {
  "navbar.about": "Sobre",
  "navbar.tools": "Ferramentas",
  "home.title": "Olá, eu sou o Luiz Normanha",
  "home.description":
    "Eu sou um Engenheiro de Software com uma paixão de aprender e me divertir desenvolvendo novas coisas.",
  "home.learning": "Atualmente aprendendo Go.",
  "home.skills.title": "Skills e Experiência",
  "home.skills.description":
    "Eu tenho mais de 6 anos trabalhando como Engenheiro de Software e minha experiência princípal envolve em torno de JavaScript e TypeScript, React e React Native, tanto no Front-end e Back-end.",
  "home.featured.projects": "Projetos em Destaque",
  "home.featured.articles": "Artigos em Destaque",
  "about.title": "Sobre mim",
  "about.description": [
    "Olá! Eu sou Luiz Normanha e sou Engenheiro de Software baseado no Brasil, atualmente vivendo em Porto Alegre, Rio Grande do Sul.",
    "Eu iniciei trabalhando profissionalmente como Desenvolvedor de Software em 2018, mas desde 2016 eu escrevo e desenvolvo softwares. Antes de começar a trabalhar profissionalmente eu desenvolvi jogos em Unity com C#.",
    "No meu dia-a-dia eu trabalho com React, JavaScript e TypeScript principalmente, com 6 anos usando eles como minha principal stack, fazendo projetos de diferentes tipos.",
    "No meu tempo livre eu gosto de aprender novas coisas, seja para o desenvolvimento de software ou outras áreas. Meus hobbies consistem de jogar jogos digitais no PC quando tenho o tempo, assistir séries ou filmes, ou apenas ficar relaxando com meus gatos."
  ],
  "about.career": "Carreira",
  'tools.title': "Ferramentas e Aplicativos",
  'tools.description': 'Aplicativos e ferramentas que e uso no meu trabalho e projetos pessoais. Eu gosto de compartilhar eles com os outros, então eu listo todos aqui para facilitar o acesso.',
  'coming.soon': "Em breve"
};

export const showDefaultLang = false;


export const ui = {
  en: englishTranslation,
  "pt-br": portugueseTranslation,
} as const;
