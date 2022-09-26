import Image from '../../components/Image'
import styles from './Technologies.module.css'
import { technologiesData } from './TechnologiesData'

export default function Technologies(): JSX.Element {
  return (
    <section className={styles.section}>
      <h4 className={styles.title}>Tecnologias</h4>
        <div className={styles.technologies}>          
          {technologiesData.map((tech, index) => (
            <div className={styles.technology} key={index}>
              <Image alt={tech.title} src={tech.src} height={70} width={70} title={tech.title} />
              <span className={styles.technologyName}>{tech.description}</span>
            </div>
          ))}
        </div>
    </section>
  )
}