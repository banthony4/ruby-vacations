import React from 'react';
import './UserProfile.css';

function UserProfile({user}) {

    const { avatar, name, username, email } = user

    return (
        <div className="outer-div">
            <div className="profile-card">
                <div className="profile-content">
                    <div>
                        <img src={avatar} className='profile-picture' alt="avatar" />
                    </div>
                    <div className=''>
                        <h1 className='profile-name'>{name}</h1>
                        <h1 className='profile-username'>{username}</h1>
                        <h1 className='profile-email'>{email}</h1>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default UserProfile;