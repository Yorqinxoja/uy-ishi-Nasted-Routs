import React, { useState } from 'react';
import axios from 'axios';
import { toast } from 'react-toastify';

function Register() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [loading, setLoading] = useState(false);

    const handleRegister = async () => {
        setLoading(true);
        try {
            const response = await axios.post('https://fakeapi.platzi.com/en/rest/auth-jwt/register/', {
                email,
                password
            });
            toast.success('Ro\'yxatdan o\'tish muvaffaqiyatli!');
        } catch (error) {
            toast.error('Ro\'yxatdan o\'tishda xatolik yuz berdi!');
        }
        setLoading(false);
    };

    return (
        <div className="register__position">
                    <div className='register__box'>
            <h2 className='register__title'>REGISTER</h2>
            <form>
            <input
                required
                type="email"
                placeholder="Email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                disabled={loading}
            />
            </form>

            <form>
            <input
                required
                type="password"
                placeholder="Parol"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                disabled={loading}
            />
            </form>
            <button onClick={handleRegister} disabled={loading}>
                {loading ? 'Loading...' : 'Register'}
            </button>
        </div>
        </div>
    );
}

export default Register;
