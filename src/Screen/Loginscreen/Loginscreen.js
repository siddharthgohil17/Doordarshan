import React, { useEffect } from "react";
import './Loginscreen.scss';
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from 'react-router-dom';
import { login } from "../../redux/actions/auth.action";

const LoginScreen = () => {
  const dispatch = useDispatch();
  const accessToken = useSelector(state => state.auth.accessToken);
  const navigate = useNavigate();

  const handleLogin = () => {
    dispatch(login());
  }

  useEffect(() => {
    if (accessToken) {
      navigate('/');
    }
  }, [accessToken, navigate]);

  return (
    <div className="login">
      <div className="login__container">
        <img src="http://pngimg.com/uploads/youtube/youtube_PNG2.png" alt="" />
        <button onClick={handleLogin}>Login with Google</button>
        <p>A youtube clone made using Youtube-Api</p>
      </div>
    </div>
  );
}

export default LoginScreen;
