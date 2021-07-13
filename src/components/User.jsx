import React from 'react';
import Card from 'react-bootstrap/Card'
import ListGroup from 'react-bootstrap/ListGroup'

const User = ({ user }) => {
    return (
        <div className="user">
            <Card>
                <Card.Header>{user.name}</Card.Header>
                <ListGroup variant="flush">
                    <ListGroup.Item>Email: {user.email}</ListGroup.Item>
                    <ListGroup.Item>Gen: {user.gen}</ListGroup.Item>
                </ListGroup>
            </Card>
        </div>
    );
}

export default User;
