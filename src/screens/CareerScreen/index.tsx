import HeadTitle from '../../components/HeadTitle'
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

        <Title>Portfólio</Title>

        <Text isCenter={true}>Alguns projetos que realizei como freelancer 😉</Text>
      </main>
    </>
  )
}