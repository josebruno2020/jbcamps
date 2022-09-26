import { useRouter } from 'next/router'
import Link from '../../components/Link'
import styles from './Menu.module.css'

export default function Menu(): JSX.Element {
  const {route} = useRouter()
  return (
    <nav className={styles.navBar}>
      <div className={route === '/' ? styles.active : ''}>
        <Link href="/" >Home</Link>
      </div>
      <div className={route === '/about' ? styles.active : ''}>
        <Link href="/about">Sobre Mim</Link>
      </div>
      
    </nav>
  )
}