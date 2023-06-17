import Image from '../../components/Image'
import styles from './PersonalContact.module.css'
import { PersonalContactData } from './PersonalContactData'

export default function PersonalContact(): JSX.Element {
  return (
    <>
      <p className={styles.name}>José Bruno Campanholi dos Santos</p>

      <div className={styles.contact}>
        {PersonalContactData.map((contact, index) => (
          <a href={contact.link} target="_blank" key={index} rel="noreferrer">
            <p className={styles.contactIcon}>
              <span>
                <Image alt={contact.title} height={20} width={20} src={`/images/social/${contact.file}`} />
              </span>
              <span className={styles.description}>{contact.description}</span>
            </p>
          </a>
        ))}
      </div>
    </>
  )
}