import React from 'react';
import User from './User'

const UserList = ({users}) => {
    const userList = users.map((user, index) => {
        return (
            <User user={user} index={index} />
        )
    })
    return (
        <div className="user-list">
            {userList}
        </div>
    );
}

export default UserList;
