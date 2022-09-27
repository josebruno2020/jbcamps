import { PortfolioCardProps } from "../../components/PortfolioCard/PortfolioCardProps"
import { LangDataInterface } from "../../lang/LangData"

export interface CareerLangData {
  title: string
  subtitle: string
  portfolio: string
  description: string
  portfolios: PortfolioCardProps[]
}

export const LangData: LangDataInterface<CareerLangData> = {
  "en-US": {
    title: 'Career',
    subtitle: 'Here I will show my trajectory',
    portfolio: 'Portfolio',
    description: `Some projects that I've done as a freelancer 😉`,
    portfolios: [
      {
        title: 'Monintox',
        link: 'https://monintox.online/',
        description: 'Management system of the Detoxification Clinic of Sarandi/PR, issuing notifications following the Government standard. There is an internal chat within the system. (Still in the final stage of development).'
      }
    ]
  },
  "pt-BR": {
    title: 'Carreira',
    subtitle: 'Aqui vou mostrar minha trajetória',
    portfolio: 'Portfólio',
    description: 'Alguns projetos que realizei como freelancer 😉',
    portfolios: [
      {
        title: 'Monintox',
        link: 'https://monintox.online/',
        description: 'Sistema de gerenciamento da Clínica de desintoxicação de Sarandi/PR, emitindo notificações seguindo o padrão do Governo. Existe um chat interno dentro do sistema. (Ainda em fase final de desevolvimento).'
      }
    ]
  }
}