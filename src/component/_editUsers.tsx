import styles from "../css/editUsers.module.css";

export default function EditUsers() {
    return (
        <div className={styles.wrapper}>
            <h1 className={styles.title}>Edit Users</h1>
            <form className={styles.formUsers}>
                <label htmlFor="users" className={styles.labelUser}>User</label>
                <select id="users" className={styles.users}>
                    <option>MixerToxa</option>
                    <option>MixerToxa</option>
                    <option>MixerToxa</option>
                    <option>MixerToxa</option>
                    <option>MixerToxa</option>
                    <option>MixerToxa</option>
                </select>
            </form>
            <div className={styles.userInfoWrapper}> 
                <div className={styles.userInfoTitle}>User Information</div>
                <div className={styles.userInfo}>
                    <form>
                        <label>Full Name</label>
                        <input type="text" value={"MixerToxa"} />
                    </form>
                    <form>
                        <label htmlFor="department">Department</label>
                        <select id="department">
                            <option>Digital Marceting</option>
                            <option>Digital Marceting</option>
                            <option>Digital Marceting</option>
                            <option>Digital Marceting</option>
                            <option>Digital Marceting</option>
                            <option>Digital Marceting</option>
                        </select>
                    </form>
                    <form>
                        <label htmlFor="country">Country</label>
                        <select id="country">
                            <option>United State</option>
                            <option>United State</option>
                            <option>United State</option>
                            <option>United State</option>
                            <option>United State</option>
                            <option>United State</option>
                        </select>
                    </form>
                    <form>
                        <label htmlFor="status">Status</label>
                        <select id="status">
                            <option>Active</option>
                            <option>Inactive</option>
                        </select>
                    </form>
                </div>
            </div>
            <div className={styles.btnBlock}>
                <button className={styles.btnUndo}>Undo</button>
                <button className={styles.btnSave}>Save</button>
            </div>
        </div>
    )
}
