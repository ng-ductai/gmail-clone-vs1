import React, { useEffect, useState } from "react";
import Body from "../Body/Body";
import "./index.css";
import ListSetting from "./ListSetting";
import Type from "./Type";
import { db } from "../../firebase";

const List = () => {
  const [emails, setEmails] = useState([]);

  useEffect(() => {
    db.collection('emails').orderBy('timestamp','desc').onSnapshot(snapshot => {
        setEmails(snapshot.docs.map(doc=>({
            id: doc.id,
            data:doc.data()
        })))
    })
  }, []); 



  return (
    <div className="list">
        <ListSetting />
        <Type />
        {
            emails.map(({ id, data }) => {
                return (
                <Body
                    key={id}
                    name={data.fromName}
                    email={data.from}
                    subject={data.subject}
                    message={data.message}
                    time={new Date(data.timestamp?.seconds*1000).toLocaleTimeString()}
                />
                );
            })
        }
    
    </div>
  );
};

export default List;
