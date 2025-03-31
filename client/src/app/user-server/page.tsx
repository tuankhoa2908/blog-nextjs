type User = {
    id: number;
    name: string;
    username: string;
    email: string;
    phone: string;
};

export default async function UsersServer() {
    await new Promise((resolve) => setTimeout(resolve, 2000)); // Simulate a delay
    const res = await fetch('https://jsonplaceholder.typicode.com/users');
    const users: User[] = await res.json();

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