import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword } from "firebase/auth";
import { app } from "../FireBase";

const auth = getAuth(app);

export const SignUpAsync = (data) => {

  return dispatch => {
    createUserWithEmailAndPassword(auth, data.email, data.password)
    .then((userCredential) => {
      const user = userCredential.user;
      dispatch (signUp_Suc())
    })
    .catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;
      dispatch (signUp_Err(errorCode))
    });
  }
 
 
}

export const SignInAsync = (data) =>{

  return dispatch =>{
    signInWithEmailAndPassword(auth, data.email, data.password)
    .then((userCredential) => {
      const user = userCredential.user;
      dispatch (signIn_Suc())
  
    })
    .catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;
      dispatch (signIn_Err(errorCode))
  
    });
  }

 

}

const signUp_Suc = () =>{

  return {
    type : "SignUp_suc"
  }
}

const signUp_Err = (msg) =>{

  return {
    type : "SignUp_err",
    payload : msg
  }
}

const signIn_Suc = () =>{

  return {
    type : "SignIn_suc"
  }
}

const signIn_Err = (msg) =>{

  return {
    type : "SignIn_err",
    payload : msg
  }
}