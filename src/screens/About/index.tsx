import HeadTitle from '../../components/HeadTitle'
import Technologies from '../../patterns/Technologies'
import styles from './About.module.css'
import { age } from './AboutData'

export default function About(): JSX.Element {
  return (
    <>
      <HeadTitle>JBcamps DEV - Sobre Mim</HeadTitle>
      <main  className={styles.container}>
        <h3 className={styles.title}>Sobre mim</h3>
        <p className={styles.description}>Natural cidade de Maringá, estado do Paraná, Brasil. Tenho {age()} anos e estou sempre em busca de novos desafios.</p>
        <p className={styles.description}>Sou um Desenvolvedor Backend apaixonado em tecnologia, adquirindo novos conhecimentos. Atualmente trabalho com Node.js e Typescript. Possuo uma paixão pela linguagem PHP, a primeira que aprendi.</p>
        <p className={styles.description}>Gosto de testes unitários, de código limpo e de seguir regra dos escoteiros: &quot;Sempre deixe mais limpo do que encontrou&quot;. Isso tento fazer em meus códigos e projetos.</p>
      
        <Technologies />
      </main>
    </>
    
  )
}