import HeadTitle from '../../components/HeadTitle'
import Title from '../../components/Title'
import Technologies from '../../patterns/Technologies'
import { GetCurrentLang } from '../../utils/GetCurrentLang'
import styles from './About.module.css'
import { LangData } from './AboutData'

export default function About(): JSX.Element {
  const data = LangData[GetCurrentLang()]

  const aboutLines = data.about.split(`\n`)

  return (
    <>
      <HeadTitle>JBcamps DEV - Sobre Mim</HeadTitle>
      <main >
        <Title>{data.title}</Title>
        {aboutLines.map((line, index) => (
          <p key={index} className={styles.description}>{line}</p>
        ))}      
        <Technologies />
      </main>
    </>
    
  )
}