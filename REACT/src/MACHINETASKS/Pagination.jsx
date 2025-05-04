import React, { useState } from 'react'
import { ChevronLeft, ChevronRight, User } from 'lucide-react';

const Pagination = () => {
    const users = [
        { id: 1, name: 'Anu', age: 24 },
        { id: 2, name: 'Abin', age: 25 },
        { id: 3, name: 'Rahul', age: 22 },
        { id: 4, name: 'Meera', age: 27 },
        { id: 5, name: 'Kiran', age: 23 },
        { id: 6, name: 'Divya', age: 26 },
        { id: 7, name: 'Arjun', age: 28 },
        { id: 8, name: 'Sneha', age: 24 },
        { id: 9, name: 'Vishnu', age: 29 },
        { id: 10, name: 'Pooja', age: 25 },
        { id: 11, name: 'Ravi', age: 30 },
        { id: 12, name: 'Lekha', age: 21 },
        { id: 13, name: 'Hari', age: 26 },
        { id: 14, name: 'Nisha', age: 22 },
        { id: 15, name: 'Gokul', age: 27 }
    ];

    const [currentPage, setCurrentPage] = useState(0);
    const [usersPerPage, setUsersPerPage] = useState(3);

    const filteredUsers = users.slice(currentPage * usersPerPage, (currentPage * usersPerPage) + usersPerPage);
    //(0,2) - 0
    //(3,5) - 1
    //(6,8) - 2
    // 2 + (cP - 1)2
    // 2cp - 2
    const buttonLength = Math.ceil(users.length / usersPerPage)
    return (
        <>
            <div className='flex'>
                {filteredUsers.map((user) => {
                    return (
                        <div key={user.id} className='border m-2 p-3 h-[120px] w-[120px]'>
                            <p>Sl No : {user.id}</p>
                            <p>NAME : {user.name}</p>
                            <p>AGE : {user.age}</p>
                        </div>
                    )
                })}
                <div>
                </div>
            </div>
            <div className='m-8 p-11'>
                <button onClick={() => setCurrentPage(prev => prev - 1)} disabled={currentPage < 1}>PREV</button>

                {Array(buttonLength).fill(null).map((page, index) => {
                    return <button key={index} onClick={() => setCurrentPage(index)}>{index + 1}</button>
                })}
                <button onClick={() => setCurrentPage(prev => prev + 1)} disabled={currentPage >= buttonLength - 1}>NEXT</button>

            </div>
        </>
    )
}

export default Pagination
