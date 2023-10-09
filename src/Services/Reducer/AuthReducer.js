const initialstate = {
    SUC: "",
    ERR: "",
    ID: "",
    Islogin : false
}

export const Authreducer = (state = initialstate, action) => {

    switch (action.type) {

        case "SignUp_suc":
            return {
                ...state,
                SUC: "SignUp successfully"
            }

        case "SignUp_err":
            return {
                ...state,
                ERR: action.payload
            }

        case "SignIn_suc":
            return {
                ...state,
                Islogin :true,
                SUC: "SignIn successfully"
            }

        case "SignIn_err":
            return {
                ...state,
                ERR: action.payload
            }


        default:
            return state
    }

}