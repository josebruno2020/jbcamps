import styles from './CareerCompany.module.css';
import { CareerCompanyProps } from './CareerCompanyProps';

export function CareerCompany({title, start, finish, skilss, align, link}: CareerCompanyProps): JSX.Element {
  function divComponent () {
    return (
      <div style={{
        textAlign: align
      }}>
        {link ? (
          <a href={link} target="_blank" rel="noreferrer"><h2>{title}</h2></a>
        ) : (
          <h2>{title}</h2>
        )}
        
        <span><strong>{start}</strong>{' - '}{finish}</span>
        <ul className={styles.skillList}>
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