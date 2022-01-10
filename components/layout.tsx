import MainNav from './MainNav'
import styles from '../styles/layout.module.scss'
export default function Layout({ children }) {
  return (
    <div className={styles.main_container}>
      <MainNav />
      <main className={styles.main}>{children}</main>
    </div>
  )
}