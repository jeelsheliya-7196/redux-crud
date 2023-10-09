import { Add, Delete, EDITSTU, Update } from "../Actiontype/Actiontype"

export const StuAction = (Data) =>{

    // console.log(Data);
    return{
        type : Add,
        payload : Data
    }

}

export const singleStu = (data,index) =>{
    

    console.log("sd",data, index);
    return{
        type : EDITSTU,
        payload : {data,index}
    }
}

export const update = (data,index) =>{

    return{
        type: Update,
        payload: {data,index}
    }
}

export const delete_stu = (id) =>{

    return{
        type: Delete,
        payload: id
    }
}