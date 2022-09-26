import HeadTitle from '../../components/HeadTitle'
import { PortfolioCompany } from '../../components/PortfolioCompany'
import { Text } from '../../components/Text'
import Portfolio from '../../patterns/Portfolio'
import styles from './PortfolioScreen.module.css'

export default function PortfolioScreen(): JSX.Element {
  return (
    <>
      <HeadTitle>JBcamps DEV - Portfólio</HeadTitle>
      <main className={styles.container}>
        <h3 className={styles.title}>Carreira</h3>
        <Text isCenter={true}>Aqui vou mostrar minha trajetória e alguns projetos que realizei como freelancer 😉</Text>
        <Portfolio />
      </main>
    </>
  )
}