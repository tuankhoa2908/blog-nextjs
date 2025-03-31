"use client";

import { useState, useEffect } from "react";

type User = {
    id: number;
    name: string;
    username: string;
    email: string;
    phone: string;
};

const UsersClient = () => {
    const [users, setUsers] = useState<User[]>([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState<string | null>(null);
    useEffect(() => {
        async function fetchUsers() {
            try {
                const response = await fetch("https://jsonplaceholder.typicode.com/users");
                if (!response.ok) {
                    throw new Error("Network response was not ok");
                }
                const data = await response.json();
                setUsers(data);
            } catch (error) {
                setError("Failed to fetch users");
                if (error instanceof Error) {
                    setError(error.message);
                }
            } finally {
                setLoading(false);
            }
        }
        fetchUsers();
    }, []);

    if (loading) return <p>Loading...</p>;
    if (error) return <p>{error}</p>;
    return (
        <div>
            <ul className="space-y-4 p-4">
                {
                    users.map((user) => (
                        <li key={user.id} className="bg-gray-100 p-4 rounded-md shadow-md">
                            <h2 className="text-gray-900 font-bold">{user.name}</h2>
                            <p className="text-gray-600">Username: {user.username}</p>
                            <p className="text-gray-600">Email: {user.email}</p>
                            <p className="text-gray-600">Phone: {user.phone}</p>
                        </li>
                    ))
                }
            </ul>
        </div>
    )
}


export default UsersClient;