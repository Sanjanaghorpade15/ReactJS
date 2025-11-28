import React from 'react'
import UserContext from '../context/UserContext'

function Profile() {
    const { user } = React.useContext(UserContext)

    if (!user) return <div className="profile-message">Please Login</div>

    return <div className="profile-message">Welcome {user.username}</div>
}

export default Profile
