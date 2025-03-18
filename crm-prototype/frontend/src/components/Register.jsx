import React, { useState } from 'react';
import axios from 'axios';

const Register = () => {
    const [username, setUsername] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            const response = await axios.post('http://127.0.0.1:8000/register', {
                username,
                email,
                password
            });

            alert('User registered successfully!');
        } catch (error) {
            alert('Error registering user.');
        }
    };

    return (
        <div className="flex justify-center items-center h-screen">
            <form onSubmit={handleSubmit} className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4 w-96">
                <h2 className="text-2xl mb-4">Register</h2>
                <input 
                    type="text" 
                    placeholder="Username" 
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                    className="mb-4 p-2 w-full border"
                />
                <input 
                    type="email" 
                    placeholder="Email" 
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="mb-4 p-2 w-full border"
                />
                <input 
                    type="password" 
                    placeholder="Password" 
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    className="mb-4 p-2 w-full border"
                />
                <button type="submit" className="bg-blue-500 text-white p-2 w-full">Register</button>
            </form>
        </div>
    );
}

export default Register;
