import React, { useEffect, useState } from 'react';
import '../App.css';
import { useNavigate } from 'react-router-dom';
import { url } from '../common/constants';

const Signup = () => {
    const [name, setName] = useState();
    const [email, setEmail] = useState();
    const [password, setPassword] = useState();
    const navigate = useNavigate();

    useEffect(() => {
        const auth = localStorage.getItem("user");

        if (auth) {
            navigate("/");
        }
    }, [])

    const Signup = async () => {
        const body = {
            username: name,
            email: email,
            password: password
        }
        let result = await fetch(url + "auth/register", {
            method: 'POST',
            body: JSON.stringify(body),
            headers: {
                "Content-Type": "application/json"
            },
        })
        const data = await result.json();
        localStorage.setItem('user', data)
        navigate("/login")
    }

    return (
        <div className='containerRegister'>
            <h1>Sign Up screen</h1>
            <input
                className='inputTxt'
                type='text'
                placeholder='Enter the name'
                value={name}
                onChange={(e) => setName(e.target.value)}
            />
            <input
                className='inputTxt'
                type='text'
                placeholder='Enter the Email'
                value={email}
                onChange={(e) => setEmail(e.target.value)}
            />
            <input
                className='inputTxt'
                type="password"
                placeholder='Enter the password'
                value={password}
                onChange={(e) => setPassword(e.target.value)}
            />
            <button
                className='button'
                type='button'
                onClick={Signup}>
                Sign Up
            </button>

        </div>
    )
}

export default Signup;