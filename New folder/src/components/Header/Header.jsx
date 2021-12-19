import React from "react";
import { IconButton, Avatar } from "@material-ui/core";
import {
  Search,
  Reorder,
  ExpandMore,
  HelpOutline,
  Settings,
  Apps,
} from "@material-ui/icons";
import "./index.css";
import { useSelector } from "react-redux";
import { selectUser } from "../../features/userSlice";
import firebase from "firebase";

const Header = () => {
  const user = useSelector(selectUser);

  return (
    <div className="header">
      <div className="header__left">
        <IconButton>
          <Reorder />
        </IconButton>
        <img
          src="https://ssl.gstatic.com/ui/v1/icons/mail/rfr/logo_gmail_lockup_dark_1x_r2.png"
          alt="logo"
        />
      </div>

      <div className="header__middle">
        <div className="search__mail">
          <IconButton>
            <Search />
          </IconButton>
          <input type="text" placeholder="Search" />
          <IconButton>
            <ExpandMore />
          </IconButton>
        </div>
      </div>

      <div className="header__right">
        <IconButton>
          <HelpOutline />
        </IconButton>
        <IconButton>
          <Settings />
        </IconButton>
        <IconButton>
          <Apps />
        </IconButton>

        <Avatar
          src={user?.photoURL}
          onClick={() => firebase.auth().signOut()}
        ></Avatar>
      </div>
    </div>
  );
};

export default Header;
