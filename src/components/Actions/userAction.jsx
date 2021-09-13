export const ADD_USER = "ADD_USER"

export const addNewUser = (user) => {
    console.log("addUser", user);
    user.id = Math.random().toString();
    return {
        type: ADD_USER,
        payload: user
    }
}