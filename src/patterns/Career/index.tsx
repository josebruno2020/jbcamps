import { CareerCompany } from '../../components/CareerCompany';
import { GetCurrentLang } from '../../utils/GetCurrentLang';
import styles from './Career.module.css';
import { LangData } from './CareerData';

export default function Career(): JSX.Element {
  const data = LangData[GetCurrentLang()]

  return (
    <section className={styles.career}>
      {data.map((row, index) => (
        <CareerCompany title={row.title} start={row.start} finish={row.finish} skilss={row.skilss} key={index} align={row.align} link={row.link} />
      ))}
    </section>
  )
}