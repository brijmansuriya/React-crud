import { useState, useEffect } from "react";
import http from "../http";
export default function Home() {
    const [user, setUsers] = useState([]);

    useEffect(() => {
        fetchAllUsers();
    }, []);

    const fetchAllUsers = () => {
        http.get('list.php').then(res => {
            setUsers(res.data);
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
                    {user.map((user, index) => (
                        <tr key={user.id}>
                            <th>{++index}</th>
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