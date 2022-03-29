import { useState, useEffect } from "react";
import http from "../http";
export default function Home() {
    const [user, setUsers] = useState([]);

    useEffect(() => {
        fetchAllUsers();
    }, []);

    const fetchAllUsers = () => {
        http.get('user').then(res => {
            setUsers(res.data.data);
        })
    }
    return (
        <div>
            <div className="row">
            <h1>home</h1>
            <table className="table">
                <thead>
                    <tr>
                        <th>No</th>
                        <th>Name</th>
                        <th>Email</th>
                        <th>Action</th>
                    </tr>
                </thead>
                <tbody>
                    {user.map((user, index) => (
                        <tr key={user.id}>
                            <th>{++index}</th>
                            <th>{user.name}</th>
                            <th>{user.email}</th>
                            <th>Action</th>
                        </tr>
                    ))}
                </tbody>
            </table>
            </div>
        </div>
    )
}