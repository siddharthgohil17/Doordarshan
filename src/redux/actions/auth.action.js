import { getAuth, signInWithPopup, GoogleAuthProvider } from "firebase/auth";
import { auth } from "../../firebase";
import {
    LOAD_PROFILE,
    LOGIN_FAIL,
    LOGIN_REQUEST,
    LOGIN_SUCCESS,

} from '../actionType'

export const login = () => async (dispatch) => {
    try {

        dispatch({
            type: LOGIN_REQUEST,
        })


        const authProvider = new GoogleAuthProvider();
        const authInstance = getAuth();
        const res = await signInWithPopup(authInstance, authProvider);
        console.log(res);

        const accessToken = res.credential.accessToken;
        console.log(accessToken);

        const profile = {
            name: res.additionalUserInfo.profile.displayName,
            photoURL: res.additionalUserInfo.profile.photoURL,

        }
    

        dispatch({

            type: LOGIN_SUCCESS,
            payload: accessToken,

        })
        dispatch({
            type: LOAD_PROFILE,
            payload: profile,
        })


    } catch (error) {
        // Handle the error
        console.log(error.message);
        dispatch({
            type: LOGIN_FAIL,
            payload: error.message,
        })
    }
};