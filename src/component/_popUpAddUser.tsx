"use client";

import usersData from "./_usersData";
import { useState } from "react";
import styles from "@/css/popUpAddUser.module.css";
import MenuDropdownDepartment from "@/component/_addUserDepartment";
import MenuDropdownStatus from "@/component/_addUserStatus";
import MenuDropdownCountry from "@/component/_addUserCountry";

interface User {
  full_name: string;
  country: string;
  department: string;
  status: string;
}

let addUser: User[] = [];



const PopUpAddUser = () => {
    const [selectedDepartment, setSelactedDepartment] = useState("Select department");
    const [selectedStatus, setSelectedStatus] = useState("Select status");
    const [selectedCountry, setSelectedCountry] = useState("Select country");
    const [inputFullName, setInputFullName] = useState("");
    const [users, setUsers] = useState(usersData);
    const [isOpen, setOpen] = useState(false);


    const handleCancel = () => {
        setSelectedStatus("Select status");
        setSelactedDepartment("Select department");
        setSelectedCountry("Select country");
        setInputFullName("");
    };

    const handleReset = (event: { preventDefault: () => void; }) => {
        event.preventDefault();
        handleCancel();
    };

    const handleSubmit = (event: { preventDefault: () => void; }) => {
        event.preventDefault();
        const userData: User = {
            full_name: inputFullName,
            department: selectedDepartment,
            country: selectedCountry,
            status: selectedStatus,
        };
        setUsers([...users, userData]);
        addUser = [...users, userData];
        handleCancel();
        console.log(addUser);
        return addUser
        
    };
    console.log(addUser);


      
      return (
        
        
        <div className={styles.popUpWrapper}>
            <div className={styles.addUserTitle}>Add User</div>
            <div className={styles.addUserForm}>
                <form onReset={handleReset} onSubmit={handleSubmit}>
                    <div className={styles.formWrapper}>
                        <div className={styles.inputForm}>
                            <label htmlFor="fullName">Full Name</label>
                            <input
                                type="text"
                                id="fullName"
                                className={styles.formInput}
                                placeholder="Enter your full name (A-z)"
                                value={inputFullName}
                                onChange={(e) => setInputFullName(e.target.value)}
                            />
                        </div>
                        <div className={styles.inputForm}>
                            <div className={styles.inputFormTitle}>Department</div>
                            <MenuDropdownDepartment selectedDepartment={selectedDepartment} setSelactedDepartment={setSelactedDepartment} onCancel={handleCancel} />
                        </div>
                        <div className={styles.inputForm}>
                            <div className={styles.inputFormTitle}>Country</div>
                            <MenuDropdownCountry selectedCountry={selectedCountry} setSelectedCountry={setSelectedCountry} onCancel={handleCancel} />
                        </div>
                        <div className={styles.inputForm}>
                            <div className={styles.inputFormTitle}>Status</div>
                            <MenuDropdownStatus selectedStatus={selectedStatus} setSelectedStatus={setSelectedStatus} onCancel={handleCancel} />
                        </div>
                    </div>
                    <div className={styles.btnForm}>
                        <input type="reset" className={`${styles.popUpAddUser} ${styles.cansel}`} value="Cancel" onClick={handleCancel} />
                        <input type="submit" className={`${styles.popUpAddUser} ${styles.addUser}`} value="Add User" onClick={handleSubmit} />
                        
                    </div>
                </form>
            </div>
        </div>
    );
};

export default  PopUpAddUser ;
export { addUser };
