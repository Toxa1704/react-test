import usersData from "@/component/_usersData";
import styles from "@/css/usersData.module.css"
import Image from "next/image";






const test: React.FC = () => {
  return (
    <div>
      <h1>Users</h1>
      <div className={styles.usersList}>
        <table className={styles.usersList}>
          <tr>
            <th>Full Name</th>
            <th>Department</th>
            <th>Country</th>
            <th>Status</th>
            <th></th>
          </tr>
            {usersData.map((user, index) => (
              <tr>
              <td key={index}>{user.full_name}</td>
              <td key={index}>{user.department}</td>
              <td key={index}>{user.country}</td>
              <td key={index}>{user.status}</td>
              <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#5E626B"><path d="M280-120q-33 0-56.5-23.5T200-200v-520h-40v-80h200v-40h240v40h200v80h-40v520q0 33-23.5 56.5T680-120H280Zm400-600H280v520h400v-520ZM360-280h80v-360h-80v360Zm160 0h80v-360h-80v360ZM280-720v520-520Z"/></svg>
              </tr>
            ))}
        </table>
      </div>
    </div>
  );
};

export default test;

