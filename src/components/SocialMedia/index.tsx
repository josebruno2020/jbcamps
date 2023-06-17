import Image from "../Image";
import { SocialMediaProps } from "./SocialMediaProps";
import styles from './SocialMedia.module.css'

export default function SocialMedia({name, link, src}: SocialMediaProps) {
  return (
    <>
      <a className={styles.link} href={link} target="_blank" rel="noreferrer" title={name}>
        <Image alt={name} height={40} width={40} src={src}/>
      </a>
    </>
  )

}