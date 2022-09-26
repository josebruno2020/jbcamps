import Link from '../../components/Link'
import styles from './Menu.module.css'

export default function Menu(): JSX.Element {
  return (
    <nav className={styles.navBar}>
      <Link href="/">Home</Link>
      <Link href="/about">Sobre Mim</Link>
    </nav>
  )
}