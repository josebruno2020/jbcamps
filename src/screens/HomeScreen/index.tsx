import Footer from '../../patterns/Footer'
import styles from './HomeScreen.module.css'
import Image from '../../components/Image'
import Link from '../../components/Link'
import SocialMedia from '../../components/SocialMedia'
import { useEffect, useState } from 'react'
import About from '../../patterns/About'

export default function HomeScreen(): JSX.Element {
  const [activeTheme, setActiveTheme] = useState("dark");
  const inactiveTheme = activeTheme === "light" ? "dark" : "light";
  useEffect(() => {
    document.body.dataset.theme = activeTheme;
  }, [activeTheme]);

  return (
    <>
     <p>
        <button onClick={() => setActiveTheme(inactiveTheme)}>Mudar tema</button>
      </p>
      <div className={styles.container}>

        <main className={styles.main}>
          <h1 className={styles.title}>
            Bem-vindo ao meu portfólio!
          </h1>

          <span className={styles.image}>
            <Image alt="Jbcamps" height={300}  width={300} src="/images/jbcamps.png" />
          </span>

          <div className={styles.socialMedia}>
            <SocialMedia link="https://github.com/josebruno2020" name="Git Hub" src="/images/github.png" />
            <SocialMedia link="https://www.linkedin.com/in/jos%C3%A9-bruno-campanholi-dos-santos-354502204/" name="Linkedin" src="/images/linkedin.png" />
          </div>
          
        </main>
        
      </div>
      <About />
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