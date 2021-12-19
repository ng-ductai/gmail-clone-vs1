import { Link } from "@material-ui/core";
import {
  ArrowDropDown,
  AttachFile,
  Close,
  Create,
  Delete,
  FormatColorText,
  Height,
  InsertEmoticon,
  MoreVert,
  NoteAdd,
  PhonelinkLock,
  Photo,
  Remove,
} from "@material-ui/icons";
import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { closeSendMessage } from "../../features/mailSlice";
import "./index.css";
import { db } from "../../firebase";
import firebase from "firebase";
import { selectUser } from "../../features/userSlice";

const Compose = () => {
  const [to, setTo] = useState("");
  const [subject, setSubject] = useState("");
  const [message, setMessage] = useState("");
  const dispatch = useDispatch();

  const user = useSelector(selectUser)

  const formSubmit = (e) => {
    e.preventDefault();
    if (to === "") {
      return alert("To is required");
    }
    if (subject === "") {
      return alert("Subject is required");
    }
    if (message === "") {
      return alert("Message is required");
    }
    
    db.collection('emails').add({
        to,
        subject,
        message,
        from: user.email,
        fromName: user.displayName,
        timestamp: firebase.firestore.FieldValue.serverTimestamp()
    })

    setTo('')
    setSubject('')
    setMessage('')
    alert('Email sent successfully')
    dispatch(closeSendMessage())
  };

  return (
    <div className="compose">
      <div className="compose__header">
        <div className="compose__header-left">
          <span>New message</span>
        </div>
        <div className="compose__header-right">
          <Remove />
          <Height />
          <Close onClick={() => dispatch(closeSendMessage())} />
        </div>
      </div>
      <form onSubmit={formSubmit}>
        <div className="compose__body">
          <div className="compose__body-form">
            <input
              type="email"
              placeholder="Reciepents"
              value={to}
              onChange={(e) => setTo(e.target.value)}
            />
            <input
              type="text"
              placeholder="Subject"
              value={subject}
              onChange={(e) => setSubject(e.target.value)}
            />
            <textarea rows="20" onChange={(e) => setMessage(e.target.value)} value={message}>
              
            </textarea>
          </div>
        </div>

        <div className="compose__footer">
          <div className="compose__footer-left">
            <button type="submit">
              Send <ArrowDropDown />
            </button>
          </div>
          <div className="compose__footer-right">
            <FormatColorText />
            <AttachFile />
            <Link />
            <InsertEmoticon />
            <NoteAdd />
            <Photo />
            <PhonelinkLock />
            <Create />
            <MoreVert />
            <Delete />
          </div>
        </div>
      </form>
    </div>
  );
};

export default Compose;
