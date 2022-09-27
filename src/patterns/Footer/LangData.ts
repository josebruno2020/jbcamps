import { LangDataInterface } from "../../lang/LangData"

export interface FooterLangData {
  description: string
}

export const LangData: LangDataInterface<FooterLangData> = {
  "en-US": {
    description: 'Powered with ❤️'
  },
  "pt-BR": {
    description: 'Desenvolvido com ❤️'
  }
}