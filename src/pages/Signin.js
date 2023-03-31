import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { UserAuth } from '../context/AuthContext';

const Signin = () => {

    const [enteredEmailAddress, setEnteredEmailAddress] = useState('');
    const [enteredPassword, setEnteredPassword] = useState('');
    const [error, setError] = useState('');
    const navigate = useNavigate()

    const {signIn} = UserAuth();

    const handleSubmit = async (e) => {
        e.preventDefault();
        setError('');
        try {
            await signIn(enteredEmailAddress, enteredPassword);
            navigate('/account');
        } catch (e) {
            setError(e.message)
            console.log(e.message)
        }
    }

    return ( 
        <div>
            <div>
                <h1> 
                    Sign in to your account 
                </h1>
                <p> 
                    Dont have an account yet? <Link to="/signup"> Sign Up. </Link>
                </p>
            </div>
            <form onSubmit={handleSubmit}>
                <div>
                    <label> Email Address: </label>
                    <input type="email" value={enteredEmailAddress} onChange={(e) => {setEnteredEmailAddress(e.target.value)}} />
                </div>
                <div>
                    <label> Password: </label>
                    <input type="password" value={enteredPassword} onChange={(e) => {setEnteredPassword(e.target.value)}} />
                </div>
                <button> Sign Up </button>
            </form>
        </div>
     );
}
 
export default Signin;