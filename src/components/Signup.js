import React from 'react';
import '../App.css'

const Signup = () => {
    return (
        <div className='containerRegister'>
            <h1>Sign Up screen</h1>
            <input
                className='inputTxt'
                type='text'
                placeholder='Enter the name'
            />
            <input
                className='inputTxt'
                type='text'
                placeholder='Enter the Email'
            />
            <input
                className='inputTxt'
                type='pasword'
                placeholder='Enter the password'
            />
            <button type='button'>
                Sign Up
            </button>

        </div>
    )
}

export default Signup