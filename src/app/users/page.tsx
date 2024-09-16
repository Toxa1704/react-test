'use client'

import usersData from "@/component/_usersData";
import { addUser } from "@/component/_popUpAddUser"
import styles from "@/css/usersData.module.css"
import DropDown from "@/component/_menuDropdown";
import MenuDropdownContry from "@/component/_menuDropdownCountry";
import MenuDropdownStatus from "@/component/_menuDropdownStatus";
import PopUpAddUser from "@/component/_popUpAddUser";
import React, { useState } from "react";


interface Filters {
  fullname: boolean;
  department: boolean;
  country: boolean;
  status: boolean;
  selectedCountries: { [key: string]: boolean };
  selectedStatus: { [key: string]: boolean };
}

interface User {
  full_name: string;
  country: string;
  department: string;
  status: string;
}

const parentElement = document.getElementById('parent');
const childElement = document.getElementById('child');

if (parentElement && childElement) {
  parentElement.removeChild(childElement);
} else {
  console.error('Parent or child element does not exist.');
}



const Users: React.FC = () => {
  console.log(usersData);

  const [filters, setFilters] = useState<Filters>({
    fullname: true,
    department: true,
    country: true,
    status: true,
    selectedCountries: {},
    selectedStatus: {},
  });

  const [reset, setReset] = useState(false);
  const [isOpen, setOpen] = useState(false);

  const handleFilterChange = (newFilters: Partial<Filters>) => {
    setFilters(prevFilters => ({
      ...prevFilters,
      ...newFilters,
    }));
  };

  const resetFilters = () => {
    setFilters({
      fullname: true,
      department: true,
      country: true,
      status: true,
      selectedCountries: {},
      selectedStatus: {},
    });
    setReset(true);
    setTimeout(() => setReset(false), 0);
  };

  function updateUsersData(usersData: User[], addUser: User[]): User[] {
    addUser.forEach(newUser => {
      const index = usersData.findIndex(u => u.full_name === newUser.full_name && u.country === newUser.country && u.department === newUser.department);

      if (index !== -1) {
        if (JSON.stringify(usersData[index]) !== JSON.stringify(newUser)) {
          usersData[index] = newUser;
        }
      } else {
        usersData.push(newUser);
      }
    });

    return usersData;
  }

  JSON.stringify(updateUsersData(usersData, addUser));


  const filteredUsers = usersData.filter(user => {
    const selectedCountries = Object.keys(filters.selectedCountries).filter(country => filters.selectedCountries[country]);
    const selectedStatus = Object.keys(filters.selectedStatus).filter(status => filters.selectedStatus[status]);

    if (selectedCountries.length === 0 && selectedStatus.length === 0) {
      return true;
    }

    const countryMatch = selectedCountries.length === 0 || selectedCountries.includes(user.country);
    const statusMatch = selectedStatus.length === 0 || selectedStatus.includes(user.status);

    return countryMatch && statusMatch;
  });

  return (
    <>
      <div className={`${styles.userDataWrapper} ${isOpen ? styles.activeted : ""}`}>
        <h1 className={styles.userDataTitle}>Users</h1>
        <div className={styles.userDataText}>Please add at least 3 departments to be able to proceed next steps.</div>
        <div className={styles.dropDownMenu}>
          <DropDown onFilterChange={handleFilterChange} />
          <MenuDropdownContry onFilterChange={selectedCountries => handleFilterChange({ selectedCountries })} reset={reset} />
          <MenuDropdownStatus onFilterChange={selectedStatus => handleFilterChange({ selectedStatus })} reset={reset} />
          <a href="#" className={styles.basket} onClick={resetFilters}>
            <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#5E626B"><path d="M280-120q-33 0-56.5-23.5T200-200v-520h-40v-80h200v-40h240v40h200v80h-40v520q0 33-23.5 56.5T680-120H280Zm400-600H280v520h400v-520ZM360-280h80v-360h-80v360Zm160 0h80v-360h-80v360ZM280-720v520-520Z" /></svg>
          </a>

          <button className={styles.popUpAddUser} onClick={() => { setOpen(!isOpen) }}>Add User</button>
        </div>
        <div>
          <table className={styles.usersList}>
            <thead className={styles.usersListThead}>
              <tr>
                {filters.fullname && <th>Full Name</th>}
                {filters.department && <th>Department</th>}
                {filters.country && <th>Country</th>}
                {filters.status && <th>Status</th>}
                <th></th>
              </tr>
            </thead>
            <tbody>
              {filteredUsers.map((user, index) => (
                <tr key={index}>
                  {filters.fullname && <td>{user.full_name}</td>}
                  {filters.department && <td>{user.department}</td>}
                  {filters.country && <td>{user.country}</td>}
                  {filters.status && <td>{user.status}</td>}
                  <td>
                    <div className={styles.deleteUser}>
                    <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#5E626B">
                      <path d="M280-120q-33 0-56.5-23.5T200-200v-520h-40v-80h200v-40h240v40h200v80h-40v520q0 33-23.5 56.5T680-120H280Zm400-600H280v520h400v-520ZM360-280h80v-360h-80v360Zm160 0h80v-360h-80v360ZM280-720v520-520Z" />
                    </svg>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
      <div className={`${styles.popWrapper} ${isOpen ? styles.active : ""}`}>
        <PopUpAddUser />
      </div>
    </>
  );
};

export default Users;
