const reducer=(state=[],action) =>{
    switch (action.type) {
        case "FETCH_ALL":
        case "ADD_POST":
        case "UPDATE_POST":
        case "DELETE_POST":
            return action.payload;
        
        default:
            return state;
    }
}
export default reducer