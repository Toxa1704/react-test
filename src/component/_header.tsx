import Link from "next/link"
import styles from "../css/header.module.css"

export default function Header () {
    return (
        <div className={styles.header}>
            
        <Link href="/" className={styles.btnEditUsers}>Edit Users</Link>

        <Link href="/users" className={styles.btnUsers}>Users</Link>
        </div>
    )
}