async function fetchUsers() {
  try {
    const response = await fetch(
      "https://jsonplaceholder.typicode.com/users"
    );

    if(!response.ok){
      throw new Error("Failed to fetch data");
    }

    const users = await response.json();

    let output = "";

    users.forEach(user => {
      output += `
        <li>
          ${user.name} - ${user.email}
        </li>
      `;
    });

    document.getElementById("userList").innerHTML = output;

  } catch(error){
    console.log(error);
  }
}