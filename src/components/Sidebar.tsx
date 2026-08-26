import styles from './Sidebar.module.css'

export default function Sidebar() {
  return(
    <aside className={styles.sidebar}>
      <div className={styles.logo}>Norsk</div>
      <nav className={styles.nav}>
        <div className={styles.navItemActive}>Vocabulary</div>
        <div className={styles.navItem}>Practice</div>
      </nav> 
    </aside>
  )
}