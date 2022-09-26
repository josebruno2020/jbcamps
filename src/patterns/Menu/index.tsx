import { useRouter } from 'next/router'
import Link from '../../components/Link'
import styles from './Menu.module.css'
import { menuData } from './MenuData'

export default function Menu(): JSX.Element {
  const {route} = useRouter()
  return (
    <nav className={styles.navBar}>
      {menuData.map((item, index) => (
        <div className={route === item.path ? styles.active : ''} key={index}>
          <Link href={item.path}>{item.name}</Link>
        </div>
      ))}      
    </nav>
  )
}