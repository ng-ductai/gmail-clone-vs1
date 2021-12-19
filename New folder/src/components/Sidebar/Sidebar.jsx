import React from "react";
import { Button } from "@material-ui/core";
import "./index.css";
import SidebarOptions from "../SidebarOptions.jsx/SidebarOptions";
import {
  Add,
  Inbox,
  Delete,
  Drafts,
  Label,
  LabelImportant,
  Send,
  StarRate,
  WatchLater,
  Videocam,
  Keyboard,
  ExpandMore,
} from "@material-ui/icons";
import { useDispatch } from "react-redux";
import { openSendMessage } from "../../features/mailSlice";

const Sidebar = () => {
  const dispatch = useDispatch();

  return (
    <div className="sidebar">
      <Button
        startIcon={<Add />}
        className="compose__btn"
        onClick={() => dispatch(openSendMessage())}
      >
        Compose
      </Button>

      <SidebarOptions Icon={Inbox} title="Inbox" number="34" isActive={true} />
      <SidebarOptions Icon={StarRate} title="Starred" number="5" />
      <SidebarOptions Icon={WatchLater} title="Snoozed" number="4" />
      <SidebarOptions Icon={LabelImportant} title="Important" number="9" />
      <SidebarOptions Icon={Send} title="Sent" number="2" />
      <SidebarOptions Icon={Drafts} title="Drafts" number="" />
      <SidebarOptions Icon={Label} title="Category" number="" />
      <SidebarOptions Icon={Delete} title="Trash" number="" />
      <SidebarOptions Icon={ExpandMore} title="More" number="" />

      <hr />
      <h3 className="sidebarOptions__heading">Meet</h3>
      <SidebarOptions Icon={Videocam} title={"New meeting"} />
      <SidebarOptions Icon={Keyboard} title={"Join a meeting"} />
    </div>
  );
};

export default Sidebar;
