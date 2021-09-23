import { getFirestore } from "redux-firestore"

export const ADD_USER = "ADD_USER"
export const DELETE_USER = "DELETE_USER"
export const EDIT_USER = "EDIT_USER"




export const addUser = (user) => {
    // console.log("addUser", user);
    // user.id = Math.random().toString();
    return (dispach, state, {getfirestore})=>{
        getFirestore()
        .collection('users')
        .add(user)
        .then((doc)=>{
            console.log("addUser", doc);
        });
        };
    
};

// {type: ADD_USER,
//     payload: user,
// }




export const deleteUser = (userId) => {
    return {
        type: DELETE_USER,
        payload: userId
    }
}

export const editUser = (updatedUser) => {
    return {
        type: EDIT_USER,
        payload: updatedUser
    }
}

export const getAllusers =()=>{
return( dispatch, state, {getfirestore})=>{
getFirestore().collection('users').onSnapshot((snapshot)=>{
let users =[];
snapshot.forEach((doc)=>{
    users.push(doc.data())
    })
  
    dispatch({
        type: 'SET_ALL_USERS',
        payload: users
    })
})



};

};