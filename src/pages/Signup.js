import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { UserAuth } from '../context/AuthContext';

const Signup = () => {

    const [enteredEmailAddress, setEnteredEmailAddress] = useState('');
    const [enteredPassword, setEnteredPassword] = useState('');
    const [error, setError] = useState('');
    const navigate = useNavigate()

    const {createUser} = UserAuth();

    const handleSubmit = async (e) => {
        e.preventDefault();
        setError('');
        try {
            await createUser(enteredEmailAddress, enteredPassword);
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
                    Sign up for a free account
                </h1>
                <p> 
                    Already have an account? <Link to="/"> Sign In. </Link>
                </p>
            </div>
            <form onSubmit={handleSubmit}>
                <div>
                    <label> Email Address: </label>
                    <input type="email" value={enteredEmailAddress} onChange={(e) => {setEnteredEmailAddress(e.target.value)}}/>
                </div>
                <div>
                    <label> Password: </label>
                    <input type="password" value={enteredPassword} onChange={(e) => {setEnteredPassword(e.target.value)}}/>
                </div>
                <button> Sign Up </button>
            </form>
        </div>
     );
}
 
export default Signup;