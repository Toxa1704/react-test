import usersData from "@/component/_usersData";
import styles from "@/css/usersData.module.css"






const test: React.FC = () => {
  return (
    <div>
      <h1>Users</h1>


      
      <div className={styles.usersList}>
      <ul>
        <div>Full Name</div>
        {usersData.map((user, index) => (
          <li key={index}>{user.full_name}</li>
        ))}
      </ul>
      <ul>
      <div>Department</div>
        {usersData.map((user, index) => (
          <li key={index}>{user.department}</li>
        ))}
      </ul>
      <ul>
      <div>Country</div>
        {usersData.map((user, index) => (
          <li key={index}>{user.country}</li>
        ))}
      </ul>
      <ul>
      <div>Status</div>
        {usersData.map((user, index) => (
          <li key={index}>{user.status}</li>
        ))}
      </ul>
      </div>
    </div>
  );
};

export default test;

