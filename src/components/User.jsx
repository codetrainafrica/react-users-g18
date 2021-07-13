import React from "react";
import Card from "react-bootstrap/Card";
import ListGroup from "react-bootstrap/ListGroup";

const User = ({ user, deleteUser }) => {
  const handleDelete = (e) => {
    deleteUser(user.id);
  };
  return (
    <div className="user">
      <Card className="mb-4">
        <Card.Header>{user.name}</Card.Header>
        <ListGroup variant="flush">
          <ListGroup.Item>Email: {user.email}</ListGroup.Item>
          <ListGroup.Item>Gen: {user.gen}</ListGroup.Item>
          <button className="btn btn-primary">Edit</button>
          <button className="btn btn-default" onClick={handleDelete}>
            Delete
          </button>
        </ListGroup>
      </Card>
    </div>
  );
};

export default User;
