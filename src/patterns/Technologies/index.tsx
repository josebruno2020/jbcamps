import Image from '../../components/Image'
import { GetCurrentLang } from '../../utils/GetCurrentLang'
import styles from './Technologies.module.css'
import { LangData, technologiesData } from './TechnologiesData'

export default function Technologies(): JSX.Element {
  const data = LangData[GetCurrentLang()]
  
  return (
    <section className={styles.section}>
      <h4 className={styles.title}>{data.title}</h4>
      <div className={styles.technologies}>          
        {technologiesData.map((tech, index) => (
          <div className={styles.technology} key={index}>
            <Image alt={tech.title} src={`/images/lang/${tech.file}`} height={70} width={70} title={tech.title} />
            <span className={styles.technologyName}>{`${tech.description} ${data.time}`}</span>
          </div>
        ))}
      </div>
    </section>
  )
}