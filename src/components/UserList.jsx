import React from "react";
import User from "./User";

const UserList = ({ users, deleteUser }) => {
  const userList = users.map((user) => {
    return <User user={user} key={user.id} deleteUser={deleteUser} />;
  });
  return <div className="user-list">{userList}</div>;
};

export default UserList;
