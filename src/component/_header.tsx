import Link from "next/link"
import styles from "../css/header.module.css"

export default function Header () {
    return (
        <div className={styles.header}>
            
        <button className={styles.btnEditUsers}>Edit Users</button>

        <button className={styles.btnUsers}>Users</button>
        </div>
    )
}