import { CareerCompany } from '../../components/CareerCompany';
import styles from './Career.module.css';
import { portfolioData } from './CareerData';

export default function Career(): JSX.Element {
  return (
    <section className={styles.career}>
      {portfolioData.map((row, index) => (
        <CareerCompany title={row.title} start={row.start} finish={row.finish} skilss={row.skilss} key={index} align={row.align} />
      ))}
    </section>
  )
}