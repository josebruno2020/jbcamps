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
    description: `PHP - ${differenceInYears("2019")} anos`,
  },
  {
    title: "NodeJS",
    file: "nodejs.png",
    description: `NodeJS - ${differenceInYears("2020")} anos`,
  },
  {
    title: "Typescript",
    file: "typescript.png",
    description: `TS - ${differenceInYears("2020")} anos`,
  },
  {
    title: "Laravel",
    file: "laravel.png",
    description: `Laravel - ${differenceInYears("2019")} anos`,
  },
  {
    title: "Vue",
    file: "vue.png",
    description: `Vue - ${differenceInYears("2020")} anos`,
  },
];
