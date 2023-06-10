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
    authProvider.addScope("https://www.googleapis.com/auth/youtube.force-ssl")
    const authInstance = getAuth();

    try {
      const res = await signInWithPopup(authInstance, authProvider);

      const accessToken = await res.user.getIdToken();

      const profile = {
        name: res.user.displayName,
        photoURL: res.user.photoURL,
      };

      sessionStorage.setItem('ytc-access-token', accessToken);
      sessionStorage.setItem('ytc-user', JSON.stringify(profile));

      dispatch({
        type: LOGIN_SUCCESS,
        payload: accessToken,
      });

      dispatch({
        type: LOAD_PROFILE,
        payload: profile,
      });
    } catch (error) {
      if (error.code === "auth/popup-closed-by-user") {
        // Handle the popup closed by the user error
        console.log("Login cancelled by the user");
        // You can display an error message to the user or handle it in any other way.
      } else {
        throw error; // Re-throw other errors for general error handling
      }
    }
  } catch (error) {
    console.log("Login error:", error.message);

    dispatch({
      type: LOGIN_FAIL,
      payload: error.message,
    });
  }
};

export const log_out = () => async (dispatch) => {
  await auth.signOut();
  dispatch({
    type: LOG_OUT
  });
  sessionStorage.removeItem('ytc-access-token');
  sessionStorage.removeItem('ytc-user');
};
