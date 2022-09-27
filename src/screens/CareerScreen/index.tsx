import HeadTitle from '../../components/HeadTitle'
import PortfolioCard from '../../components/PortfolioCard'
import { Text } from '../../components/Text'
import Title from '../../components/Title'
import Career from '../../patterns/Career'
import styles from './CareerScreen.module.css'

export default function CareerScreen(): JSX.Element {
  return (
    <>
      <HeadTitle>JBcamps DEV - Portfólio</HeadTitle>
      <main >
        <Title>Carreira</Title>
        <Text isCenter={true}>Aqui vou mostrar minha trajetória </Text>
        <Career />

        <Title isSubtitle={true} as="h3">Portfólio</Title>

        <Text isCenter={true} >Alguns projetos que realizei como freelancer 😉</Text>

        <section className={styles.portfolio}>
          
          <PortfolioCard />
          <PortfolioCard />
          
          
        </section>
      </main>
    </>
  )
}