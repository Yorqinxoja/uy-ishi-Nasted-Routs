import React, { useEffect, useState } from 'react';
import axios from 'axios';

function Profile({ token }) {
    const [profile, setProfile] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchProfile = async () => {
            try {
                const response = await axios.get('https://fakeapi.platzi.com/en/rest/auth-jwt/profile/', {
                    headers: {
                        Authorization: `Bearer ${token}`
                    }
                });
                setProfile(response.data);
            } catch (error) {
                console.error('Profile ma\'lumotlarini olishda xatolik yuz berdi:', error);
            }
            setLoading(false);
        };
        fetchProfile();
    }, [token]);

    if (loading) {
        return <p>Yuklanmoqda...</p>;
    }

    return (
        <div className='profile__box'>
            <h2>Profil</h2>
            {profile ? (
                <div>
                    <p>Email: {profile.email}</p>
                    <p>Ism: {profile.name}</p>
                </div>
            ) : (
                <p>Profil ma'lumotlari yuklanmadi.</p>
            )}
        </div>
    );
}

export default Profile;
