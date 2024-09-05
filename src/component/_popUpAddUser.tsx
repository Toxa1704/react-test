'use client'



import usersData from "./_usersData"
import dataDepartments from "./_dataDepartments"
import dataCountries from "./_dataCountries"
import styles from "@/css/popUpAddUser.module.css"

const PopUpAddUser = () => {
    return (
        <div className={styles.popUpWrapper}>
            <div className={styles.addUserTitle}>Add User</div>
            <div className={styles.addUserForm}>
                <form >
                    <div className={styles.formWrapper}>
                        <div className={styles.inputForm}>
                            <label htmlFor="fullName">Full Name</label>
                            <input type="text" id="fullName" className={styles.formInput}/>
                        </div>
                        <div className={styles.inputForm}>
                            <label >Department</label>
                            <input className={styles.formInput}/>
                        </div>
                        <div className={styles.inputForm}>
                            <label>Country</label>
                            <input className={styles.formInput}/>
                        </div>
                        <div className={styles.inputForm}>
                            <label>Status</label>
                            <input className={styles.formInput}/>
                        </div>
                    </div> 
                        <div className={styles.btnForm}>
                            <input type="reset" className={`${styles.popUpAddUser} ${styles.cansel}`} value={"Canсel"} />
                            <input type="submit" className={`${styles.popUpAddUser} ${styles.addUser}`} value={"Add User"} />
                        </div>
                </form>
            </div>
        </div >
    )
}

export default PopUpAddUser