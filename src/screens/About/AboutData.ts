import { LangDataInterface } from "../../lang/LangData";
import { differenceInYears } from "../../utils/years";

export const age = (): number => {
  return differenceInYears("1997");
};

export interface AboutLangData {
  title: string
  about: string
}

export const LangData: LangDataInterface<AboutLangData> = {
  'en-US': {
    title: 'About me',
    about: `From Maringa city, Parana state, Brazil. I'm ${age()} old and always searching new challenges.\nI'm a Backend Developer passionate about technology, acquiring new knowledge. I currently work with Node.js and Typescript. I have a passion for the PHP language, the first I learned.\nI like unit testing, clean code, and following the Boy Scout rule: "Always leave it cleaner than you find it." This I try to do in my code and projects.`
  },
  'pt-BR': {
    title: 'Sobre mim',
    about: `Natural cidade de Maringá, estado do Paraná, Brasil. Tenho ${age()} anos e estou sempre em busca de novos desafios.\nSou um Desenvolvedor Backend apaixonado em tecnologia, adquirindo novos conhecimentos. Atualmente trabalho com Node.js e Typescript. Possuo uma paixão pela linguagem PHP, a primeira que aprendi.\nGosto de testes unitários, de código limpo e de seguir regra dos escoteiros: "Sempre deixe mais limpo do que encontrou". Isso tento fazer em meus códigos e projetos.`
  }
}


