import { FooterProps } from "./FooterProps";
import styles from './footer.module.css'
import Link from "../../components/Link";
import { LangData } from "./LangData";
import { GetCurrentLang } from "../../utils/GetCurrentLang";

export default function Footer({as, children, ...props}: FooterProps): JSX.Element {
  const Tag = as || 'footer'
  const data = LangData[GetCurrentLang()]
  return (
    <Tag className={styles.footer}>
      <Link
          href="/"
        >
          {data.description}
      </Link>
    </Tag>
    
  )
}