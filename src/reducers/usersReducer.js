import { ADD_USER } from "../actions/userActions";

const initialState = {
  users: [
    {
      name: "Zakyyyyyy",
      email: "zak@email.com",
      gen: 23,
      id: "84379843.fsdjhj",
    },
    { name: "Kobi", email: "kobu@email.com", gen: 3, id: "skdlj4839483" },
  ],
};

const usersReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_USER:
      return { ...state.users, users: [...state.users, action.payload] };

    default:
      return state;
  }
};

export default usersReducer;
