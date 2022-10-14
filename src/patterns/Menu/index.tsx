import { useRouter } from 'next/router'
import { useState } from 'react'
import Link from '../../components/Link'
import styles from './Menu.module.css'
import {LangData} from './MenuData'
import {GetCurrentLang} from "../../utils/GetCurrentLang";

export default function Menu(): JSX.Element {
  const {route, locale, locales, asPath} = useRouter()
  const [isShowLangs, setIsShowLangs] = useState(false)
  const data = LangData[GetCurrentLang()]

  return (
    <nav className={styles.navBar}>
      {data.map((item, index) => (
        <div className={route === item.path ? styles.active : ''} key={index}>
          <Link href={item.path}>{item.name}</Link>
        </div>
      ))}
      <div className={styles.langs}>

        <div title="change your language">
          <div onClick={() => setIsShowLangs(!isShowLangs) } >Lang <i className={styles.arrowDown}></i></div>
          <div className={`${styles.langsMap} ${!isShowLangs ? styles.dNone : ''}`}>
            {locales?.map((loc, index) => (
              <div key={index} onClick={() => setIsShowLangs(!isShowLangs)}  className={locale === loc ? styles.langActive : ''}>
                <Link href={asPath} locale={loc}>{loc}</Link>
              </div>
            ))}
          </div>
        </div>

      </div>   
    </nav>
  )
}