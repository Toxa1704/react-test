"use client";

import { useState } from "react";
import styles from "@/css/popUpAddUser.module.css";
import MenuDropdownDepartment from "@/component/_addUserDepartment";
import MenuDropdownStatus from "@/component/_addUserStatus";
import MenuDropdownCountry from "@/component/_addUserCountry";

const PopUpAddUser = () => {
    const [selectedStatus, setSelectedStatus] = useState("Select status");
    const [selectedDepartment, setSelactedDepartment] = useState("Select department");

    const handleCancel = () => {
        setSelectedStatus("Select status");
        setSelactedDepartment("Select department");
        // Додайте інші дії, які потрібно виконати при натисканні на "Cancel"
    };

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
                            <MenuDropdownDepartment selectedDepartment={selectedDepartment} setSelactedDepartment={setSelactedDepartment} onCancel={handleCancel}/>
                        </div>
                        <div className={styles.inputForm}>
                            <div className={styles.inputFormTitle}>Country</div>
                            <MenuDropdownCountry />
                        </div>
                        <div className={styles.inputForm}>
                            <div className={styles.inputFormTitle}>Status</div>
                            <MenuDropdownStatus selectedStatus={selectedStatus} setSelectedStatus={setSelectedStatus} onCancel={handleCancel} />
                        </div>
                    </div>
                    <div className={styles.btnForm}>
                        <input type="reset" className={`${styles.popUpAddUser} ${styles.cansel}`} value={"Cancel"} onClick={handleCancel} />
                        <input type="submit" className={`${styles.popUpAddUser} ${styles.addUser}`} value={"Add User"} />
                    </div>
                </form>
            </div>
        </div>
    );
};

export default PopUpAddUser;
