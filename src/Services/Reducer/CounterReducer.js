const initialState = {
    isload: false,
    count: 0,
    error: null
}

export const counter_Reducer = (state = initialState, action) => {

    switch (action.type) {

        case "loading" :
            return {
                ...state,
                isload : true
            }

        case "success" :
            return {
                ...state,
                isload : false,
                count : state.count + 1,
                erroe : null
            }

        case "error" :
            return{
                ...state,
                isload : false,
                error : "Something Wrong"
            }
        default :
            return state
    }

}