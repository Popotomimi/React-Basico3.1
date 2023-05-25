import { useState } from 'react';

const ListRender = () => {

    const [list] = useState(["Roberto", "Cleber", "Debora"]);

    const [users, setUsers] = useState([
        {id: 1, name: "Robério", age: 31},
        {id: 2, name: "Name", age: 80},
        {id: 3, name: "Paralax", age: 45},
    ])

    const deleteRandom = () => {
        const randomNumber = Math.floor(Math.random() * 4);

        setUsers((prevUsers) => {
            console.log(prevUsers);
            return prevUsers.filter((user) => randomNumber !== user.id)

        })
    }

  return (
    <div>
        <ul>
            {list.map((item, i) => (
                <li key={i}>{item}</li>
            ))}
        </ul>
        {users.map((user) => (
            <li key={user.id}>{user.name} - {user.age}</li>
        ))}
        <button onClick={deleteRandom}>Delete random user</button>
    </div>
  )
}

export default ListRender