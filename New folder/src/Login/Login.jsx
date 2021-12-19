import React from "react";
import { useDispatch } from "react-redux";
import { signin } from "../features/userSlice";
import { auth, provider } from "../firebase";
import './index.css'

const Login = () => {
    const dispatch = useDispatch()

    const login = () => {
        auth.signInWithPopup(provider).then(({user}) => {
            dispatch(signin({
                displayName: user.displayName,
                photoURL: user.photoURL,
                email: user.email
            }))
        }).catch(err => {
            alert(err)
        })
    }

  return (
    <div className="wrapper">
      <div className="login">
        <img
          src="https://mmgroup.vn/wp-content/uploads/2021/03/Gmail-logo.png"
          alt=""
        />

        <button className="login__gmail" onClick={login}> Login with Gmail </button>
      </div>
    </div>
  );
};

export default Login;
