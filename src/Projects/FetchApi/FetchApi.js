import React from 'react'
import './fetchApi.css'
import { useState } from 'react'


export default function FetchApi() {

    const [users, setUsers] = useState([])


    const getUsers = (e) => {
        e.preventDefault();

        fetch("http://127.0.0.1:5500/data/users.json")
            .then((response) => {
                return response.json();
            })
            .then((data) => {

                setUsers(data)
            })


    }




    const ListItems = (user) => {


        return (<>
            <li>ID: {user.id}</li>
            <li>Name: {user.name}</li>
            <li>Age: {user.age}</li>
            <li>Email: {user.email}</li>

        </>)

    }


    return (
        <div className="container">
            <div className="user">
                <button onClick={getUsers} id="btn">Get Users</button>
                <hr />
                <h2>Users</h2>

                {(!users.length) ? "no data" :

                    (<ul id="users">

                        {users.map((user) => {



                            return (<ListItems key={user.id} {...user} />)



                        })}


                    </ul>)

                }
            </div>
        </div>
    )
}
