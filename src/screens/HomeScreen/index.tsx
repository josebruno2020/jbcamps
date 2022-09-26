import Footer from '../../patterns/Footer'
import styles from './HomeScreen.module.css'
import Image from '../../components/Image'
import SocialMedia from '../../components/SocialMedia'

export default function HomeScreen(): JSX.Element {
  

  return (
    <>
      <div className={styles.container}>

        <main className={styles.main}>
          <h1 className={styles.title}>
            Olá 👋
          </h1>

          <span className={styles.image}>
            <Image alt="Jbcamps" height={300}  width={300} src="/images/jbcamps.png" />
            
          </span>
          <p className={styles.name}>José Bruno Campanholi dos Santos</p>

          <div className={styles.personalInformation}>
            <p>Telefone: ---</p>
            <p>E-mail: <a href="mailto:josebrunocampanholi@gmail.com?subject=Vim do site">josebrunocampanholi@gmail.com</a></p>
          </div>

          <div className={styles.socialMedia}>
            <SocialMedia link="https://github.com/josebruno2020" name="Git Hub" src="/images/github.png" />
            <SocialMedia link="https://www.linkedin.com/in/jos%C3%A9-bruno-campanholi-dos-santos-354502204/" name="Linkedin" src="/images/linkedin.png" />
          </div>

         
        </main>
        
      </div>
      <Footer>
        <a
          href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by JB
        </a>
      </Footer>
    </>
  )
}