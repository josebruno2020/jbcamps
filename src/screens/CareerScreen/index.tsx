import HeadTitle from '../../components/HeadTitle'
import { Text } from '../../components/Text'
import Career from '../../patterns/Career'
import styles from './CareerScreen.module.css'

export default function CareerScreen(): JSX.Element {
  return (
    <>
      <HeadTitle>JBcamps DEV - Portfólio</HeadTitle>
      <main className={styles.container}>
        <h3 className={styles.title}>Carreira</h3>
        <Text isCenter={true}>Aqui vou mostrar minha trajetória e alguns projetos que realizei como freelancer 😉</Text>
        <Career />
      </main>
    </>
  )
}