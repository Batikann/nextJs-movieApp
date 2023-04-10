import Link from 'next/link'
import styles from './style.module.css'

function Footer() {
  return (
    <footer className={styles.footer}>
      Made with ❤️ by&nbsp;
      <Link href="https://twitter.com/_mehmetpekcan" target="_blank">
        Emir Batıkan UÇAR
      </Link>
    </footer>
  )
}
export default Footer
