import { getAuth, signInWithPopup, GoogleAuthProvider } from "firebase/auth";
import { auth } from "../../firebase";
import {
  LOAD_PROFILE,
  LOGIN_FAIL,
  LOGIN_REQUEST,
  LOGIN_SUCCESS,
  LOG_OUT,
} from '../actionType';


export const login = () => async (dispatch) => {
  try {
    dispatch({
      type: LOGIN_REQUEST,
    });

    const authProvider = new GoogleAuthProvider();
    // authProvider.addScope("https://www.googleapis.com/auth/youtube.force-ssl")
    const authInstance = getAuth();

    const res = await signInWithPopup(authInstance, authProvider);
    // console.log("Sign-in response:", res);

    const accessToken = await res.user.getIdToken();

    // console.log("Access token:", accessToken);

    const profile = {
      name: res.user.displayName,
      photoURL: res.user.photoURL,
    };
    // console.log("Profile:", profile);

    sessionStorage.setItem('ytc-access-token',accessToken)
    sessionStorage.setItem('ytc-user',JSON.stringify(profile))
    dispatch({
      type: LOGIN_SUCCESS,
      payload: accessToken,
    });

    dispatch({
      type: LOAD_PROFILE,
      payload: profile,
    });
  } catch (error) {
    console.log("Login error:", error.message);

    dispatch({
      type: LOGIN_FAIL,
      payload: error.message,
    });
  }
};



export const log_out=()=>async (dispatch)=>{

    await auth.signOut()
    dispatch({
        type:LOG_OUT
    })
    sessionStorage.removeItem('ytc-access-token')
    sessionStorage.removeItem('ytc-user')


}