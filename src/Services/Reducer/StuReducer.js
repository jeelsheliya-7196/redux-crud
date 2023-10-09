import { Add, Delete, EDITSTU, Update } from "../Actiontype/Actiontype"

const initialstate = ({
    students : [],
    student : null,
    islord : false,
    isIndex : null
})

const StudentReducer = (state = initialstate, action) => {

    // console.log("Action type", action.payload);

    switch(action.type){

        case Add :
            return {
                ...state,
                students : [...state.students, action.payload]
            }

        case EDITSTU :
            return{
                ...state,
                student : action.payload.data,
                isIndex : action.payload.index
            }

        case Update:

            let stu = state.students;

            stu[action.payload.index] = action.payload.data;

            return{
                ...state,
                students: stu,
                student: null,
                isIndex: null
            }
            
        case Delete:

            let de_stu = state.students;
            let del_stu = de_stu.filter((del)=>{
                return(
                    del.id != action.payload
                )
            })

            return{
                ...state,
                students: del_stu
            }

        default : 
        return state
    }
}

export default StudentReducer;