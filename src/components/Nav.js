import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import '../App.css'
const Nav = () => {
    const auth = localStorage.getItem("user");
    const navigate = useNavigate();
    const logout = () => {
        localStorage.clear();
        navigate("/signup")
    }
    return (
        <div>

            {
                auth?.length > 0 ?

                    <ul className="nav-ul">
                        <li >
                            <Link to='/'>Products</Link>
                        </li>
                        <li>
                            <Link to='/add'>Add Product</Link>
                        </li>
                        <li>
                            <Link to='/update'>Update Product</Link>
                        </li>
                        <li>
                            <Link to='/profile'>profile</Link>
                        </li>
                        <li>
                            <Link onClick={logout} to='/login'>Logout</Link>
                        </li>
                    </ul>

                    :

                    <ul className="nav-ul nav-right">
                        <li>
                            <Link to='/signup'>Sign Up</Link>
                        </li>
                        <li>
                            <Link to="/login">Login</Link>
                        </li>
                    </ul>

            }




        </div>
    )
}

export default Nav