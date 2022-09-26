import { differenceInYears } from "../../utils/years";

export interface Technology {
  src: string;
  title: string;
  description: string;
}

export const technologiesData: Technology[] = [
  {
    title: "PHP",
    src: "/images/php.png",
    description: `PHP - ${differenceInYears("2019")} anos`,
  },
  {
    title: "NodeJS",
    src: "/images/nodejs.png",
    description: `NodeJS - ${differenceInYears("2020")} anos`,
  },
  {
    title: "Typescript",
    src: "/images/typescript.png",
    description: `TS - ${differenceInYears("2020")} anos`,
  },
  {
    title: "Laravel",
    src: "/images/laravel.png",
    description: `Laravel - ${differenceInYears("2019")} anos`,
  },
  {
    title: "Vue",
    src: "/images/vue.png",
    description: `Vue - ${differenceInYears("2020")} anos`,
  },
];
