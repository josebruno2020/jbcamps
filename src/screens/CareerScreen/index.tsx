import HeadTitle from '../../components/HeadTitle'
import PortfolioCard from '../../components/PortfolioCard'
import { Text } from '../../components/Text'
import Title from '../../components/Title'
import Career from '../../patterns/Career'
import { GetCurrentLang } from '../../utils/GetCurrentLang'
import styles from './CareerScreen.module.css'
import { LangData } from './LangData'

export default function CareerScreen(): JSX.Element {
  const data = LangData[GetCurrentLang()]
  return (
    <>
      <HeadTitle>JBcamps DEV - Portfólio</HeadTitle>
      <main >
        <Title>{data.title}</Title>
        <Text isCenter={true}>{data.subtitle}</Text>
        <Career />

        <Title isSubtitle={true} as="h3">{data.portfolio}</Title>

        <Text isCenter={true} >{data.description}</Text>

        <section className={styles.portfolio}>
          
          {data.portfolios.map((port, index) => (
            <PortfolioCard title={port.title} link={port.link} description={port.description} key={index} />
          ))}
          
        </section>
      </main>
    </>
  )
}