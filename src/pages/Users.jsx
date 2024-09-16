import React from 'react';
import { useState } from 'react';
// import DataTable from 'react-data-table-component';

const Users = () => {
    // const columns = [
    //     {
    //         name: "Name",
    //         selector: row => row.name,
    //         sortable: true
    //     },
    //     {
    //         name: "Email",
    //         selector: row => row.email,
    //         sortable: true
    //     }, 
    //     {
    //         name: "Age",
    //         selector: row => row.age,
    //         sortable: true
    //     }
    // ]

    // const users = [
    //     {
    //         id: 1,
    //         name: "Amjad",
    //         email: "amjad@gmail.com",
    //         age: 20,
    //     },
    //     {
    //         id: 2,
    //         name: "Sarah",
    //         email: "sarah@example.com",
    //         age: 25,
    //     },
    //     {
    //         id: 3,
    //         name: "John",
    //         email: "john.doe@example.com",
    //         age: 30,
    //     },
    //     {
    //         id: 4,
    //         name: "Emily",
    //         email: "emily.smith@example.com",
    //         age: 28,
    //     },
    //     {
    //         id: 5,
    //         name: "Michael",
    //         email: "michael.jones@example.com",
    //         age: 35,
    //     },
    //     {
    //         id: 6,
    //         name: "Alice",
    //         email: "alice.wonder@example.com",
    //         age: 22,
    //     },
    //     {
    //         id: 7,
    //         name: "David",
    //         email: "david.brown@example.com",
    //         age: 27,
    //     },
    //     {
    //         id: 8,
    //         name: "Sophia",
    //         email: "sophia.wilson@example.com",
    //         age: 24,
    //     },
    //     {
    //         id: 9,
    //         name: "James",
    //         email: "james.lee@example.com",
    //         age: 33,
    //     },
    //     {
    //         id: 10,
    //         name: "Olivia",
    //         email: "olivia.martin@example.com",
    //         age: 29,
    //     },
    // ]; 
    
    const [users, setUsers] = useState([
        { id: 1, name: 'John Doe', email: 'john@example.com', role: 'User' },
        { id: 2, name: 'Jane Smith', email: 'jane@example.com', role: 'Admin' },
        { id: 3, name: 'Bob Johnson', email: 'bob@example.com', role: 'User' },
        // Add more dummy users as needed
    ]);

    return (
        <>
        <div className='pt-20'>

            {/* <div className='my-4 mx-4'>
                <DataTable
                    columns = {columns}
                    data = {users}
                    selectableRows
                    fixedHeader
                    pagination
                >
                </DataTable>
            </div> */}

            <div>
                <h2>All Users</h2>
                <table>
                    <thead>
                    <tr>
                        <th>ID</th>
                        <th>Name</th>
                        <th>Email</th>
                        <th>Role</th>
                        <th>Actions</th>
                    </tr>
                    </thead>
                    <tbody>
                    {users.map((user) => (
                        <tr key={user.id}>
                        <td>{user.id}</td>
                        <td>{user.name}</td>
                        <td>{user.email}</td>
                        <td>{user.role}</td>
                        <td>
                            <button onClick={() => onViewDetails(user.id)}>Detail</button>
                            <button onClick={() => onDelete(user.id)}>Delete</button>
                        </td>
                        </tr>
                    ))}
                    </tbody>
                </table>
                </div>
        </div>
        </>
    );
};

export default Users;
