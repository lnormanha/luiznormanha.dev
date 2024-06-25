export interface Tool {
  name: string;
  description: string;
}

export interface ToolsSection {
  title: string;
  tools: Tool[]
}

const toolsEn = [{
  title: 'OS',
  tools: [
    {
      name: 'EndeavourOS',
      description: "Basically Arch Linux with a very easy to use installer for people that doesn't know too much about Arch Linux, but with all the benefits of Arch Linux. It has been my daily driver for nearly 2 years now."
    },
    {
      name: "Awesome WM",
      description: "Great customizable Tilling Window Manager in Lua. Easy to configure and make it your own."
    },
  ]
},
{
  title: 'Programming',
  tools: [
    {
      name: "NeoVim",
      description: "My main text editor, previously I used Helix as my first Text Editor migrating from VSCode, and now I'm using it with the LazyVim config.",
    },
    {
      name: "VSCode",
      description: "I use occasionally when I need to resolve more complex merge conflicts."
    },
    {
      name: 'lazygit',
      description: "GIT UI for the terminal. As I stay more in the terminal, and use Vim bindings, it's really intuitive and fast to use."
    }
  ]
},
{
  title: "Terminal",
  tools: [
    {
      name: 'kitty',
      description: 'GPU based terminal emulator, with a great variety of customization.'
    },
    {
      name: 'zsh',
      description: 'My main shell, not too much to say here, but I love it.'
    },
    {
      name: 'Starship',
      description: 'Cross-shell prompt in Rust. Can be easily integrated in any terminal and has alot of customization possibilities and easily configurable',

    },
    {
      name: 'tmux',
      description: 'Terminal multiplexer. This enables to have multiple windows and sessions on the same terminal window. Can’t live without it anymore for work.'
    },
    {
      name: 'zoxide',
      description: 'Smarter cd command. It can remember what you previously has accessed in the system so you don’t need to type the same directory all over again.',
    },
    {
      name: 'yazi',
      description: 'A terminal file manager. Very easy to use, has Vim binding so it integrates easily in my workflow when I need to manage files via terminal'
    },
    {
      name: 'fzf',
      description: 'Command line fuzzy finder. I use it for my fuzzy search when needed and it integrates with alot of the other terminal based apps that I user like NeoVim and tmux.'
    }
  ]
},
{
  title: "Apps",
  tools: [
    {
      name: "Obsidian",
      description: 'A markdown based note taking app. I use it for my personal management and organization, and I can access my vault with NeoVim if I need to check something with the Obsidian.nvim plugin.'
    },
    {
      name: 'Figma',
      description: 'For creating UX/UI in my personal projects.'
    },
    {
      name: 'Midori',
      description: 'Firefox based browser with more customization options.',
    },
    {
      name: 'Photopea',
      description: 'I tried using GIMP but it’s not really intuitive for me. Then I found Photopea that is basically Open Source Photoshop in the browser.'
    }
  ]
}
]
const toolsPtBr = [
  {
    title: 'OS',
    tools: [
      {
        name: 'EndeavourOS',
        description: "Basicamente Arch Linux com um ótimo instalador para pessoas que não sabem muito sobre o Arch Linux, mas com todos os benefícios de um Arch Linux. Utilizo como meu OS príncipal por cerca de 2 anos."
      },
      {
        name: "Awesome WM",
        description: "Um Tilling Window Manager customizável em Lua. Fácil de configurar e deixar do seu jeito."
      },
    ]
  },
  {
    title: 'Programação',
    tools: [
      {
        name: "NeoVim",
        description: "Meu editor de texto princípal para programar, anteriormente usava o Helix como primeiro Editor de Texto migrando do VSCode, e agora o estou usando com configuração do LazyVim.",
      },
      {
        name: "VSCode",
        description: "Utilizo ocasionalmente quando eu preciso resolver conflitos de merge mais complexos."
      },
      {
        name: 'lazygit',
        description: "GIT UI para o terminal. Como eu passo mais tempo no terminal e uso os atalhos do Vim, ele é muito intuitivo e rápido de se usar."
      }
    ]
  },
  {
    title: "Terminal",
    tools: [
      {
        name: 'kitty',
        description: 'Emulador de terminal baseado na GPU, com uma grande variedade de opções de customização.'
      },
      {
        name: 'zsh',
        description: 'Meu shell principal, não tenho muito a dizer aqui, mas é o meu favorito no momento.'
      },
      {
        name: 'Starship',
        description: 'Prompt Cross-shell em Rust. Pode ser integrado em qualquer terminal e possui várias opções de customização, além de ser muito fácil realizar as customizações',
      },
      {
        name: 'tmux',
        description: 'Multiplexador de terminal. Isso permite que haja muitas janelas e sessões na mesma instância do terminal. Não consigo ficar sem usar ele no meu dia-a-dia para o trabalho ou programar.',
      },
      {
        name: 'zoxide',
        description: 'Comando de cd mais inteligente. Ele consegue guardar quais lugares você acessou anteriormente no terminal, e com isso não é necessário digitar todo o diretório novamente.',
      },
      {
        name: 'yazi',
        description: 'Gerenciador de arquivos no terminal. Fácil de usar e possuí atalhos do Vim, então é bem integrado ao meu fluxo de trabalho quando eu preciso gerenciar meus arquivos via terminal.'
      },
      {
        name: 'fzf',
        description: 'Fuzzy finder para a linha de comando. Eu uso quando eu preciso realizar buscar via terminal e ele integra em outros apps que eu uso no terminal como NeoVim e tmux.'
      }
    ]
  },
  {
    title: "Aplicativos",
    tools: [
      {
        name: "Obsidian",
        description: 'Aplicativo de anotações baseado em Markdown. Eu uso para gerenciamento e organização pessoal, e também posso acessar meu vault com o NeoVim caso eu precise checar alguma anotação rapidamente via terminal, com o plugin Obsidian.nvim.'
      },
      {
        name: 'Figma',
        description: 'Para criação de UX/UI nos meus projetos pessoais.'
      },
      {
        name: 'Midori',
        description: 'Navegador baseado em Firefox com mais opções de customização.',
      },
      {
        name: 'Photopea',
        description: 'Eu tentei usar GIMP mas não foi muito intuitivo para mim, então eu encontrei o Photopea que é basicamente um Photoshop no navegador.'
      }
    ]
  }
]


export const tools = {
  en: toolsEn,
  'pt-br': toolsPtBr
}
