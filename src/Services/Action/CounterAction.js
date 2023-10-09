export function counterIncAsync() {
    return dispatch => {

        dispatch(loading());

        setTimeout(() => {
            // Yay! Can invoke sync or async actions with `dispatch`
            dispatch(error())
          }, 2000)

      setTimeout(() => {
        // Yay! Can invoke sync or async actions with `dispatch`
        dispatch(increment())
      }, 5000)
    }
}

const loading = ()=>{
    return{
        type : "loading"
    }
}

const increment = ()=>{
    return{
        type : "success"
    }
}

const error = ()=>{
    return{
        type : "error"
    }
}