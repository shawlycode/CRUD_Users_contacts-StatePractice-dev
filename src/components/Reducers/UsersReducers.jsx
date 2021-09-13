
const initialState = {
    data: []
};

const usersReducers = (state = initialState, action) => {
    switch (action.type) {

        case "ADD_USER":
            // console.log(action.payload)

            return { ...state, data:[ ...state.data, action.payload ] };

            default:return state;
    }
}


export default usersReducers;
