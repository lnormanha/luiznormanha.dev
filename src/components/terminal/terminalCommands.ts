export interface Command {
  command: string;
  output: string;
}

export const commands: Record<string, Command[]> = {
  en: [
    { command: "wget https://luiznormanha.dev", output: "Entering website..." },
    { command: "", output: "Welcome to my website!" },
    {
      command: "ls -la",
      output:
        "Name: Luiz Normanha Marques Pereira\nLocation: Rio Grande do Sul, Brazil\nTech Stack: React Native, React, TailwindCSS, JavaScript, TypeScript, Node.js, Nest.js, PayloadCMS\nUX/UI: Figma, Photopea \nCloud: AWS, Vercel, DigitalOcean",
    },
  ],
  "pt-br": [
    { command: "wget https://luiznormanha.dev", output: "Entrando no site..." },
    { command: "", output: "Bem-vindo ao meu site!" },
    {
      command: "ls -la",
      output:
        "Nome: Luiz Normanha Marques Pereira\nLocalização: Rio Grande do Sul, Brasil\nStack Tecnológica: React Native, React, TailwindCSS, JavaScript, TypeScript, Node.js, Nest.js, PayloadCMS\nUX/UI: Figma, Photopea \nNuvem: AWS, Vercel, DigitalOcean",
    },
  ],
};
