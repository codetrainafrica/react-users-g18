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
        .add({...user, timestamp: getFirestore().FieldValue.serverTimestamp()})
        .then((doc)=>{
            console.log("addUser", doc);
        });
        };
    
};

export const deleteUser = (userId) => {
return(dispatch, state, {getFirestore})=>{
    getFirestore().collection('users').doc(userId).delete().then(()=>{

    })

}


    
}

export const editUser = (updatedUser) => {
    console.log(updatedUser)
return(dispatch, state, {getFirestore})=>{
    getFirestore()
    .collection('users')
    .doc(updatedUser.id)
    .set(updatedUser).
    then(()=>{});


}


    // return {
    //     type: EDIT_USER,
    //     payload: updatedUser
    // }
}

export const getAllUsers =()=>{
    return (dispatch, state, {getFirestore})=>{
        getFirestore().collection('users').orderBy('timestamp','desc')
        .onSnapshot((snapshot)=>{
    let users =[];
    snapshot.forEach((doc)=>{
        users.push({...doc.data(), id:doc.id})
        console.log(users, (doc))

    })
    
    dispatch({
        type: 'SET_ALL_USERS',
        payload:users
    })
        },
        (error)=>{}
        )

    };
}

