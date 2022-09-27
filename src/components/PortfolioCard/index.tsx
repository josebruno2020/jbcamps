import Image from '../Image'
import { Text } from '../Text'
import styles from './PortfolioCard.module.css'

export default function PortfolioCard(): JSX.Element {
  return (
    <article className={styles.portfolioCard}>
      <a href="https://monintox.online/" target="_blank"><h3>Monintox</h3></a>

      <div className={styles.reposRow}>
        <p className={styles.description}>Sistema de gerenciamento da Clínica de desintoxicação de Sarandi/PR, emitindo notificações seguindo o padrão do Governo. Existe um chat interno dentro do sistema. (Ainda em fase final de desevolvimento).</p>
        {/* <div className={styles.repos}>
          <a href="https://github.com/josebruno2020/pwa-api" >
            <Image alt="PHP" height={50} width={50} src="/images/lang/php.png" />
            Backend
          </a>
        </div>
        
        <a href="https://github.com/josebruno2020/pwa-front">
          <Image alt="VueJs" height={50} width={50} src="/images/lang/vue.png" />
          Frontend
        </a> */}
      </div>

    </article>
  )
}