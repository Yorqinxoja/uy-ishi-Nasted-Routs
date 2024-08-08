import React, { useState } from 'react';
import axios from 'axios';
import { toast } from 'react-toastify';

function Login({ setToken }) {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [loading, setLoading] = useState(false);

    const handleLogin = async () => {
        setLoading(true);
        try {
            const response = await axios.post('https://fakeapi.platzi.com/en/rest/auth-jwt/login/', {
                email,
                password
            });
            setToken(response.data.access);
            toast.success('Kirish muvaffaqiyatli!');
        } catch (error) {
            toast.error('Kirishda xatolik yuz berdi!');
        }
        setLoading(false);
    };

    return (
        <div className='login__position'>
            <div className='login__box'>
            <h2 className='login__title'>LOGIN</h2>
            <form action="">
            <input className='login'
                required
                type="email"
                placeholder="Email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                disabled={loading}
            />
            </form>

            <form action="">
            <input className='login'
                required
                type="password"
                placeholder="Parol"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                disabled={loading}
            />
            </form>
            <button onClick={handleLogin} disabled={loading}>
                {loading ? 'Loading...' : 'Login'}
            </button>
        </div>
        </div>
    );
}

export default Login;
