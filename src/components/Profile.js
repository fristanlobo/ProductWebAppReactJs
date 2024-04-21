import React, { useEffect, useState } from 'react'

const Profile = () => {
    const [username, setUsername] = useState("");
    const [email, setEmail] = useState("");


    useEffect(() => {
        let nameObj = JSON.parse(localStorage.getItem('user'));
        setUsername(nameObj.username);
        setEmail(nameObj.email);
    }, [])

    return (
        <div className='containerRegister'>
            <h1>
                Profile Screen
            </h1>

            <input
                className='inputTxt'
                type='text'
                placeholder='Username'
                value={username}
            />
            <input
                className='inputTxt'
                type='text'
                placeholder='Email '
                value={email}
            />

        </div>
    )
}

export default Profile