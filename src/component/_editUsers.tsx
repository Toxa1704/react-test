"use client";

import React, { useState } from 'react';
import styles from "../css/editUsers.module.css";
import { usersData } from "@/app/users/page";
import MenuDropdownDepartment from "@/component/_addUserDepartment";
import MenuDropdownContry from "@/component/_addUserCountry";
import MenuDropdownStatus from "@/component/_addUserStatus";




export default function EditUsers() {
    const [selectedUser, setSelectedUser] = useState(usersData[0]);
    const [selectedDepartment, setSelactedDepartment] = useState(usersData[0].department);
    const [selectedStatus, setSelectedStatus] = useState(usersData[0].status);
    const [selectedCountry, setSelectedCountry] = useState(usersData[0].country);



    const handleUserChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
        const user = usersData.find(user => user.full_name === event.target.value);
        if (user) {
            setSelectedUser(user);
            setSelactedDepartment(user.department);
            setSelectedCountry(user.country)
            setSelectedStatus(user.status)
        } else {
            console.error("User not found");
        }
    };

    const handleCancel = () => {
        setSelactedDepartment("Select department");
    };

    return (
        <div className={styles.wrapper}>
            <h1 className={styles.title}>Edit Users</h1>
            <form className={styles.formUsers}>
                <label htmlFor="users" className={styles.labelUser}>User</label>
                <select id="users" className={styles.users} onChange={handleUserChange}>
                    {usersData.map((user, index) => (
                        <option key={index} value={user.full_name}>{user.full_name}</option>
                    ))}
                </select>
            </form>
            <div className={styles.userInfoWrapper}> 
                <div className={styles.userInfoTitle}>User Information</div>
                <div className={styles.userInfo}>
                    <form>
                        <label>Full Name</label>
                        <input type="text" value={selectedUser.full_name} readOnly />
                    </form>
                    <form>
                        <label htmlFor="department">Department</label>
                        <MenuDropdownDepartment selectedDepartment={selectedDepartment} setSelactedDepartment={setSelactedDepartment} onCancel={handleCancel} />
                    </form>
                    <form>
                        <label htmlFor="country">Country</label>
                        <MenuDropdownContry selectedCountry={selectedCountry} setSelectedCountry={setSelectedCountry} 
                        onCancel={handleCancel}/>
                    </form>
                    <form>
                        <label htmlFor="status">Status</label>
                        <div className={styles.select}>
                        <MenuDropdownStatus selectedStatus={selectedStatus} setSelectedStatus={setSelectedStatus}
                        onCancel={handleCancel}  />
                        </div>
                    </form>
                </div>
            </div>
            <div className={styles.btnBlock}>
                <button className={styles.btnUndo}>Undo</button>
                <button className={styles.btnSave}>Save</button>
            </div>
        </div>
    );
}
