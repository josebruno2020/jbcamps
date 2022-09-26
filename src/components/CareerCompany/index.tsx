import styles from './CareerCompany.module.css';
import { CareerCompanyProps } from './CareerCompanyProps';

export function CareerCompany({title, start, finish, skilss, align}: CareerCompanyProps): JSX.Element {
  function divComponent () {
    return (
      <div>
        <h4>{title}</h4>
        <span><strong>{start}</strong>{' '}{finish}</span>
        <ul>
          {skilss.map((skill, index) => (
            <ul className={styles.skill} key={index}>{skill}</ul>
          ))}
        </ul>
      </div>
    )
  }

  return (
    <div className={styles.careerRow}>
      {align === 'left' ? (
        divComponent()
      ) : (<></>)}
      
      <span style={{
        height: 'auto',
        borderLeft: '3px solid white'
      }}></span>
      {align === 'right' ? (
        divComponent()
      ) : (<></>)}
      
    </div>
  )
}