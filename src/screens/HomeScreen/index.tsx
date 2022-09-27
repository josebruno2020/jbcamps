import Footer from '../../patterns/Footer'
import styles from './HomeScreen.module.css'
import Image from '../../components/Image'
import SocialMedia from '../../components/SocialMedia'
import PersonalContact from '../../patterns/PersonalContact'
import HeadTitle from '../../components/HeadTitle'
import Title from '../../components/Title'

export default function HomeScreen(): JSX.Element {
  

  return (
    <>
      <HeadTitle>JBcamps DEV - Home</HeadTitle>
      <div className={styles.container}>

        <main className={styles.main}>
          <Title>Olá 👋</Title>

          <span className={styles.image}>
            <Image alt="Jbcamps" height={300}  width={300} src="/images/jbcamps.png" />
          </span>

          <PersonalContact />
          
          <div className={styles.socialMedia}>
            <SocialMedia link="https://github.com/josebruno2020" name="Git Hub" src="/images/social/github.png" />
            <SocialMedia link="https://www.linkedin.com/in/jos%C3%A9-bruno-campanholi-dos-santos-354502204/" name="Linkedin" src="/images/social/linkedin.png" />
          </div>

         
        </main>
        
      </div>
      
    </>
  )
}