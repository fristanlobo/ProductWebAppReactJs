import React, { useEffect, useState } from 'react';
import '../App.css';
import { useNavigate } from 'react-router-dom';

const Login = () => {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const navigate = useNavigate();
    
    useEffect(() => {
        const auth = localStorage.getItem("user");
        if (auth) {
            navigate("/");
        }
    }, [])

    const handleLogin = async () => {
        const header = new Headers();
        header.append("Content-Type", "application/json");
        const body = {
            email: username,
            password: password
        }
        let result = await fetch("http://localhost:8001/api/auth/login", {
            method: 'POST',
            body: JSON.stringify(body),
            headers: header
        })
        const data = await result.json();
        if (data.status === true) {
            //console.log(JSON.stringify(data.user));
            localStorage.setItem("user", JSON.stringify(data.user));
            navigate("/")
        }
        else {
            alert(data.message);
        }
    }

    return (
        <div className='login'>
            <h2 className=''>Login Page !</h2>
            <input
                className='inputTxt'
                type='text'
                placeholder='Email'
                onChange={(e) => setUsername(e.target.value)}

            />
            <input
                className='inputTxt'
                type='password'
                placeholder='password'
                onChange={(e) => setPassword(e.target.value)}
            />

            <button
                className='button'
                onClick={handleLogin}>
                Login
            </button>
        </div>
    )
}

export default Login