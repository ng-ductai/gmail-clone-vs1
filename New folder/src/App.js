import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import Compose from "./components/Compose/Compose";
import Detail from "./components/Detail/Detail";
import Header from "./components/Header/Header";
import List from "./components/List/List";
import Sidebar from "./components/Sidebar/Sidebar";
import { selectSendMessageIsOpen } from "./features/mailSlice";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from "./Login/Login";
import { selectUser, signin, signout } from "./features/userSlice";
import { auth } from "./firebase";

function App() {
  const isMessageOpen = useSelector(selectSendMessageIsOpen);
  const user = useSelector(selectUser)
  const dispatch = useDispatch()

  useEffect(() => {
    auth.onAuthStateChanged((user) => {
      if(user){
        dispatch(signin({
          displayName: user.displayName,
          photoURL: user.photoURL,
          email: user.email
        }))
      } else {
        dispatch(signout())
      }
    })
  },[])

  return (
    <Router>
      {
        user && (
          <div className="App">
            <Header />

            <div className="app__body">
              <Sidebar />
              <Routes>
                <Route path="/" exact element={<List />} />
                <Route path="/email" element={<Detail />} />
              </Routes>
            </div>

            {
              isMessageOpen && <Compose />
            }

          </div>
        )} : {
        <Login/>
      }
    </Router>
  );
}

export default App;
