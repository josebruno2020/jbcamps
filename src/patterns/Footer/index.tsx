import { FooterProps } from "./FooterProps";
import styles from './footer.module.css'

export default function Footer({as, children, ...props}: FooterProps): JSX.Element {
  const Tag = as || 'footer'
  return (
    <Tag className={styles.footer}>{children}</Tag>
    
  )
}