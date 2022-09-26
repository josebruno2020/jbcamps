import Image from "../Image";
import { SocialMediaProps } from "./SocialMediaProps";
import styles from './SocialMedia.module.css'

export default function SocialMedia({name, link, src}: SocialMediaProps) {
  return (
    <>
      <a className={styles.link} href={link} target="_blank" rel="noreferrer">
        <Image alt={name} height={50} width={50} src={src}/>
      </a>
    </>
  )

}