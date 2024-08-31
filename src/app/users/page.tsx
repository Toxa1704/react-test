'use client'

import usersData from "@/component/_usersData";
import styles from "@/css/usersData.module.css"
import DropDown from "@/component/_menuDropdown";
import React, { useState } from "react";



const test: React.FC = () => {
  const [filters, setFilters] = useState({
    fullname: true,
    department: true,
    country: true,
    status: true,
  });

  const handleFilterChange = (newFilters: any) => {
    setFilters(newFilters);
  };
  return (
    <div className={styles.userDataWrapper}>
      <h1 className={styles.ueserDataTitle}>Users</h1>
      <p>Please add at least 3 departmetns to be able to proceed next steps.</p>
      <div className={styles.dropDownMenu}>
        <DropDown onFilterChange={handleFilterChange} />
      </div>
      <div >
        <table className={styles.usersList}>
          <thead>
            <tr>
              {filters.fullname && <th>Full Name</th>}
              {filters.department && <th>Department</th>}
              {filters.country && <th>Country</th>}
              {filters.status && <th>Status</th>}
              <th></th>
            </tr>
          </thead>
          {usersData.map((user, index) => (
            <tr key={index}>
              {filters.fullname && <td>{user.full_name}</td>}
              {filters.department && <td>{user.department}</td>}
              {filters.country && <td>{user.country}</td>}
              {filters.status && <td>{user.status}</td>}
              <td>
                <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#5E626B">
                  <path d="M280-120q-33 0-56.5-23.5T200-200v-520h-40v-80h200v-40h240v40h200v80h-40v520q0 33-23.5 56.5T680-120H280Zm400-600H280v520h400v-520ZM360-280h80v-360h-80v360Zm160 0h80v-360h-80v360ZM280-720v520-520Z" />
                </svg>
              </td>
            </tr>
          ))}
        </table>
      </div>
    </div>
  );
};

export default test;

