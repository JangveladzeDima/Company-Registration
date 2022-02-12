
const UserSectionReducer = (state = "Login", action) =>{
    switch (action.type){
        case "Register":
            return "Register";
        default :
            return state;
    }
}

export default UserSectionReducer;