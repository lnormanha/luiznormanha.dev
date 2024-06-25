export interface Job {
  title: string;
  company: string;
  location: string;
  period: string;
}
const jobsEn: Job[] = [
  {
    title: "FullStack Developer",
    company: "Fleye",
    location: "Rio Grande do Sul, Brazil",
    period: "Sep 2023 - now",
  },
  {
    title: "CEO and Director of Tehcnology",
    company: "DinoCode Technologies",
    location: "Rio Grande do Sul, Brazil",
    period: "Aug 2022 - May 2023",
  },
  {
    title: "Senior Front-end Engineer",
    company: "CWI Software",
    location: "Rio Grande do Sul, Brazil",
    period: "Mar 2022 - Jan 2023"
  },
  {
    title: "Mid/Senior Software Engineer",
    company: "Wine.com.br",
    location: "Espirito Santo, Brazil",
    period: "Mar 2020 - Jan 2022"
  },
  {
    title: 'Mid React Native Engineer',
    company: "Globalsys Soluções em TI",
    location: "Espirito Santo, Brazil",
    period: "Feb 2020 - Jun 2021",
  },
  {
    title: "Mid React Native Engineer",
    company: "9glabs",
    location: 'Espirito Santo, Brazil',
    period: 'May 2019 - Feb 2020'
  },
  {
    title: "Junior React Native Engineer",
    company: "Zaitt",
    location: 'Espirito Santo, Brazil',
    period: 'Jan 2018 - May 2019'
  }
]

const jobsPtBr: Job[] = [
  {
    title: "Desenvolvedor FullStack",
    company: "Fleye",
    location: "Rio Grande do Sul, Brasil",
    period: "Set 2023 - atualmente",
  },
  {
    title: "CEO e Diretor de Tecnologia",
    company: "DinoCode Technologies",
    location: "Rio Grande do Sul, Brasil",
    period: "Ago 2022 - Maio 2023",
  },
  {
    title: "Engenheiro de Software Front-end Sênior",
    company: "CWI Software",
    location: "Rio Grande do Sul, Brasil",
    period: "Mar 2022 - Jan 2023"
  },
  {
    title: "Engenheiro de Software Pleno/Sênior",
    company: "Wine.com.br",
    location: "Espirito Santo, Brasil",
    period: "Mar 2020 - Jan 2022"
  },
  {
    title: 'Engenheiro de Software React Native Pleno',
    company: "Globalsys Soluções em TI",
    location: "Espirito Santo, Brasil",
    period: "Fev 2020 - Jun 2021",
  },
  {
    title: "Engenheiro de Software React Native Pleno",
    company: "9glabs",
    location: 'Espirito Santo, Brasil',
    period: 'Maio 2019 - Fev 2020'
  },
  {
    title: "Engenheiro de Software React Native Júnior",
    company: "Zaitt",
    location: 'Espirito Santo, Brasil',
    period: 'Jan 2018 - Maio 2019'
  }
]
export const jobs = {
  "en": jobsEn,
  "pt-br": jobsPtBr
}
