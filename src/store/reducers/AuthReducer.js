import { LOGIN, LOGOUT } from "../types/Type";




const initialState = {
    // we will use isUserLoggedIn in Navigation to check weather user signIn or not //
    isUserLoggedIn : false,
    user: null ,
 }
 
 
 function AuthReducer(state=initialState, action) {
     switch (action.type) {
         case LOGIN:{
        // If User login Than What Happened //

           return {
               ...state,
               isUserLoggedIn: true,
               user: action.payload
           };
            
         }

         case LOGOUT:{
            // If User logout Than What Happened //
    
               return {
                   ...state,
                   isUserLoggedIn: false,
                   user: null
               };
                
             }

         default:
         return state;
     }
 }
 
 export default AuthReducer;