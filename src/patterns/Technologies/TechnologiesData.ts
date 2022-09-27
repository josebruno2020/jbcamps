import { LangDataInterface } from "../../lang/LangData";
import { differenceInYears } from "../../utils/years";

export interface Technology {
  file: string;
  title: string;
  description: string;
}

export const technologiesData: Technology[] = [
  {
    title: "PHP",
    file: "php.png",
    description: `PHP - ${differenceInYears("2019")}`,
  },
  {
    title: "NodeJS",
    file: "nodejs.png",
    description: `NodeJS - ${differenceInYears("2020")}`,
  },
  {
    title: "Typescript",
    file: "typescript.png",
    description: `TS - ${differenceInYears("2020")}`,
  },
  {
    title: "Laravel",
    file: "laravel.png",
    description: `Laravel - ${differenceInYears("2019")}`,
  },
  {
    title: "Vue",
    file: "vue.png",
    description: `Vue - ${differenceInYears("2020")}`,
  },
];


export interface TechnologiesLangData {
  title: string
  time: string
}

export const LangData: LangDataInterface<TechnologiesLangData> = {
  'en-US': {
    title: 'Technologies',
    time: 'years'
  },
  "pt-BR": {
    title: 'Tecnologias',
    time: 'anos'
  }
}
