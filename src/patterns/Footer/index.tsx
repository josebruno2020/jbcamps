import { FooterProps } from "./FooterProps";
import styles from './footer.module.css'
import Link from "../../components/Link";

export default function Footer({as, children, ...props}: FooterProps): JSX.Element {
  const Tag = as || 'footer'
  return (
    <Tag className={styles.footer}>
      <Link
          href="/"
        >
          Powered by JB
      </Link>
    </Tag>
    
  )
}