import styles from './About.module.css'

export default function About(): JSX.Element {
  return (
    <main  id="about" className={styles.container}>
      <h3 className={styles.title}>Sobre mim</h3>
      <p className={styles.description}>Sou um Desenvolvedor Fullstack apaixonado em tecnologia, buscando sempre novos conhecimentos e novos desafios.</p>
      <p className={styles.description}>Sou um Desenvolvedor Fullstack apaixonado em tecnologia, buscando sempre novos conhecimentos e novos desafios.</p>
    </main>
  )
}