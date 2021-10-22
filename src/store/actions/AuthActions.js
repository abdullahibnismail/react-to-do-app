import { LOGIN, LOGOUT } from "../types/Type";
import { auth, db } from "../../config/Firebase"

export const doLogin = (email, password) => async (dispatch) => {

    try {

        // FireBase Login //

        const userCredential = await auth.signInWithEmailAndPassword(email, password);
        var user = userCredential.user;

        console.log("user", user.uid);

        dispatch({
            type: LOGIN,
            payload: user
        })

    } catch (error) {
        alert(JSON.stringify(error))
        console.log("error", error);
    }


}


export const doLogout = () => async (dispatch) => {

    try {

        // FireBase Logout //

        const res = await auth.signOut();

        console.log("res", res);

        dispatch({
            type: LOGOUT
        })

    } catch (error) {
        alert(JSON.stringify(error))
        console.log("error", error);
    }


}

export const doSignup = (user) => async (dispatch) => {

    try {

        // FireBase Signup //

        const userCredential = await auth.createUserWithEmailAndPassword(user.email, user.password);
        var userData = userCredential.user;

        // Also Store Data in Db FireStore
        await db.collection("users").add({
            ...user,
            uid : userData.uid
        })


        dispatch({
            type: LOGIN,
            payload: userData
        })

    } catch (error) {
        alert(JSON.stringify(error))
        console.log("error", error);
    }


}