export interface Tool {
  name: string;
  description: string;
}

export interface ToolsSection {
  title: string;
  tools: Tool[];
}

const toolsEn = [
  {
    title: "OS",
    tools: [
      {
        name: "EndeavourOS",
        description:
          "Arch Linux-based OS with a user-friendly installer. Combines Arch's flexibility with ease of setup. My daily driver for 3 years.",
      },
      {
        name: "Awesome WM",
        description:
          "Highly customizable tiling window manager written in Lua. Offers efficient workspace management and extensive configuration options.",
      },
    ],
  },
  {
    title: "Programming",
    tools: [
      {
        name: "Cursor + VIM Mode",
        description:
          "AI-powered code editor with VIM keybindings. Enhances coding efficiency by combining intelligent suggestions with familiar terminal shortcuts.",
      },
      {
        name: "lazygit",
        description:
          "Terminal UI for Git operations. Streamlines repository management with intuitive Vim-like keybindings, boosting productivity.",
      },
    ],
  },
  {
    title: "Terminal",
    tools: [
      {
        name: "kitty",
        description:
          "Fast, feature-rich, GPU-accelerated terminal emulator. Offers extensive customization and excellent performance.",
      },
      {
        name: "zsh",
        description:
          "Powerful shell with advanced features, extensive plugins, and themes. My preferred shell for its flexibility and user-friendly interface.",
      },
      {
        name: "Starship",
        description:
          "Cross-shell prompt written in Rust. Easily integrates with any terminal, offering extensive customization options and simple configuration.",
      },
      {
        name: "tmux",
        description:
          "Terminal multiplexer enabling multiple windows and sessions in a single terminal. Essential for efficient multitasking and remote work.",
      },
      {
        name: "zoxide",
        description:
          "Smarter cd command with learning capabilities. Remembers frequently and recently accessed directories, streamlining navigation.",
      },
      {
        name: "yazi",
        description:
          "Modern, fast terminal file manager with Vim-like keybindings. Seamlessly integrates into my workflow for efficient file management.",
      },
      {
        name: "fzf",
        description:
          "Versatile command-line fuzzy finder. Enhances searching capabilities and integrates well with other terminal applications like NeoVim and tmux.",
      },
    ],
  },
  {
    title: "Apps",
    tools: [
      {
        name: "Obsidian",
        description:
          "Powerful, markdown-based note-taking app. Used for personal knowledge management and organization, with VIM bindings for quick note-taking.",
      },
      {
        name: "Figma",
        description:
          "Collaborative design tool for creating and prototyping UX/UI in personal projects.",
      },
      {
        name: "ZEN Browser",
        description:
          "Firefox-based browser with enhanced customization options. A great alternative for users who enjoy the features of Arc Browser.",
      },
      {
        name: "Photopea",
        description:
          "Browser-based image editor with Photoshop-like interface. Powerful, free alternative to desktop editing software.",
      },
    ],
  },
];

const toolsPtBr = [
  {
    title: "OS",
    tools: [
      {
        name: "EndeavourOS",
        description:
          "Sistema operacional baseado no Arch Linux com um instalador amigável. Combina a flexibilidade do Arch com facilidade de configuração. Meu sistema principal há 3 anos.",
      },
      {
        name: "Awesome WM",
        description:
          "Gerenciador de janelas em mosaico altamente personalizável, escrito em Lua. Oferece gerenciamento eficiente do espaço de trabalho e amplas opções de configuração.",
      },
    ],
  },
  {
    title: "Programação",
    tools: [
      {
        name: "Cursor + Modo VIM",
        description:
          "Editor de código com IA e atalhos do VIM. Aumenta a eficiência na codificação combinando sugestões inteligentes com atalhos familiares do terminal.",
      },
      {
        name: "lazygit",
        description:
          "Interface de usuário terminal para operações Git. Simplifica o gerenciamento de repositórios com atalhos intuitivos semelhantes ao Vim, aumentando a produtividade.",
      },
    ],
  },
  {
    title: "Terminal",
    tools: [
      {
        name: "kitty",
        description:
          "Emulador de terminal rápido, rico em recursos e acelerado por GPU. Oferece ampla personalização e excelente desempenho.",
      },
      {
        name: "zsh",
        description:
          "Shell poderoso com recursos avançados, extensos plugins e temas. Meu shell preferido pela flexibilidade e interface amigável.",
      },
      {
        name: "Starship",
        description:
          "Prompt multi-shell escrito em Rust. Integra-se facilmente a qualquer terminal, oferecendo extensas opções de personalização e configuração simples.",
      },
      {
        name: "tmux",
        description:
          "Multiplexador de terminal que permite múltiplas janelas e sessões em um único terminal. Essencial para multitarefa eficiente e trabalho remoto.",
      },
      {
        name: "zoxide",
        description:
          "Comando cd mais inteligente com capacidade de aprendizado. Lembra diretórios acessados frequente e recentemente, agilizando a navegação.",
      },
      {
        name: "yazi",
        description:
          "Gerenciador de arquivos moderno e rápido para terminal com atalhos similares ao Vim. Integra-se perfeitamente ao meu fluxo de trabalho para gerenciamento eficiente de arquivos.",
      },
      {
        name: "fzf",
        description:
          "Localizador fuzzy versátil para linha de comando. Melhora as capacidades de busca e integra-se bem com outros aplicativos de terminal como NeoVim e tmux.",
      },
    ],
  },
  {
    title: "Aplicativos",
    tools: [
      {
        name: "Obsidian",
        description:
          "Aplicativo poderoso de anotações baseado em Markdown. Usado para gerenciamento e organização do conhecimento pessoal, com atalhos do VIM para criar notas rapidamente.",
      },
      {
        name: "Figma",
        description:
          "Ferramenta de design colaborativo para criar e prototipar UX/UI em projetos pessoais.",
      },
      {
        name: "ZEN Browser",
        description:
          "Navegador baseado no Firefox com opções de personalização aprimoradas. Uma ótima alternativa para usuários que gostam dos recursos do Arc Browser.",
      },
      {
        name: "Photopea",
        description:
          "Editor de imagens no navegador com interface similar ao Photoshop. Alternativa gratuita e poderosa aos softwares de edição desktop.",
      },
    ],
  },
];

export const tools = {
  en: toolsEn,
  "pt-br": toolsPtBr,
};
