import { PortfolioCompany } from '../../components/PortfolioCompany';
import styles from './Portfolio.module.css';
import { portfolioData } from './PortfolioData';

export default function Portfolio(): JSX.Element {
  return (
    <section className={styles.portfolio}>
      {portfolioData.map((row, index) => (
        <PortfolioCompany title={row.title} start={row.start} finish={row.finish} skilss={row.skilss} key={index} align={row.align} />
      ))}
    </section>
  )
}