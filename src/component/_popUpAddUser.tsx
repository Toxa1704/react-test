"use client";

import usersData from "./_usersData";
import dataCountries from "./_dataCountries";
import MenuDropdownDepartment from "@/component/_addUserDepartment"
import MenuDropdownContry from "@/component/_addUserCountry";
import styles from "@/css/popUpAddUser.module.css";
import MenuDropdownCountry from "@/component/_addUserCountry";

const PopUpAddUser = () => {

    return (
        <div className={styles.popUpWrapper}>
            <div className={styles.addUserTitle}>Add User</div>
            <div className={styles.addUserForm}>
                <form>
                    <div className={styles.formWrapper}>
                        <div className={styles.inputForm}>
                            <label htmlFor="fullName">Full Name</label>
                            <input type="text" id="fullName" className={styles.formInput} />
                        </div>
                        <div className={styles.inputForm}>
                            <div className={styles.inputFormTitle}>Department</div>
                            <MenuDropdownDepartment />
                        </div>
                        <div className={styles.inputForm}>
                            <div className={styles.inputFormTitle}>Country</div>
                            <MenuDropdownCountry />
                        </div>

                        <div className={styles.inputForm}>
                            <label>Status</label>
                            <input className={styles.formInput} />
                        </div>
                    </div>
                    <div className={styles.btnForm}>
                        <input type="reset" className={`${styles.popUpAddUser} ${styles.cansel}`} value={"Cancel"} />
                        <input type="submit" className={`${styles.popUpAddUser} ${styles.addUser}`} value={"Add User"} />
                    </div>
                </form>
            </div>
        </div>
    );
};

export default PopUpAddUser;
