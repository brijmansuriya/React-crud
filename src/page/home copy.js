import { useState, useEffect } from "react"
import http from "../http"
export default function Home() {
    coust[users, setUsers] = userState([]);
    useEffect(() => {
        fetchAllUsers();
    }, [])

    const fetchAllUsers = () => {
        http.get('list.php').then(res => {
            srtUsers(res.data);
        })
    }
    return (
        <div>
            <h1>home</h1>
            <table>
                <thead>
                    <tr>
                        <th>no</th>
                        <th>name</th>
                        <th>age</th>
                        <th>Action</th>
                    </tr>
                </thead>
                <tbody>
                    {users.matp((user, index) => (
                        <tr key={user.id}>
                            <th>{index}</th>
                            <th>{user.name}</th>
                            <th>{user.age}</th>
                            <th>Action</th>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    )
}