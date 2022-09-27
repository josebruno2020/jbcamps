import styles from './PortfolioCard.module.css'
import { PortfolioCardProps } from './PortfolioCardProps'

export default function PortfolioCard({title, link, description}: PortfolioCardProps): JSX.Element {
  return (
    <article className={styles.portfolioCard}>
      <a href={link} target="_blank" rel="noreferrer"><h3>{title}</h3></a>

      <div className={styles.reposRow}>
        <p className={styles.description}>{description}</p>
      </div>

    </article>
  )
}