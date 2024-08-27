

async function fetchData() {
    try {
        const response = await fetch("https://github.com/Toxa1704/testdb/blob/main/db")
        if (!response.ok) {
            throw new Error('Дані не отримано')
        }
        const data = await response.json()
        console.log(data);
        // data.forEach(user => {
        //     const listItem = document.createElement('li')
        //     listItem.textContent = `Name: ${user.name} | Username: ${user.username} | Email: ${user.email}`
        //     userList.appendChild(listItem)
        // });
    } catch (error) {
        // const listItem = document.createElement('li')
        // listItem.textContent = `Помилка виконання запиту ${error}`
        // userList.appendChild(listItem)
    }
}
 export default fetchData