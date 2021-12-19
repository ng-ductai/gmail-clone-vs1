import React from "react";
import "./index.css";
import "../List/index.css";
import { Avatar, IconButton } from "@material-ui/core";
import {
  ArrowDropDown,
  ChevronLeft,
  ChevronRight,
  MoreVert,
  Refresh,
  ArrowBack,
  Launch,
  Print,
  Star,
  Reply,
} from "@material-ui/icons";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { selectedMail } from "../../features/mailSlice";

const Detail = () => {
  const back = useNavigate()
  const mail = useSelector(selectedMail)

  return (
    <div className="details">
      <div className="list__settings">
        <div className="list__settings-left">
          <IconButton>
            <ArrowBack onClick={() => back('/')}/>
          </IconButton>
          <IconButton>
            <ArrowDropDown />
          </IconButton>
          <IconButton>
            <Refresh />
          </IconButton>
          <IconButton>
            <MoreVert />
          </IconButton>
        </div>

        <div className="list__settings-right">
          <p>1-50 of 100</p>
          <IconButton>
            <ChevronLeft />
          </IconButton>
          <IconButton>
            <ChevronRight />
          </IconButton>
        </div>
      </div>

      <div className="details__message">
        <div className="details__header">
          <div className="details__header-left">
            <h2>{mail.subject}</h2>
          </div>

          <div className="details__header-right">
            <IconButton>
              <Print />
            </IconButton>
            <IconButton>
              <Launch />
            </IconButton>
          </div>
        </div>

        <div className="details__middleHeader">
          <div className="details__middleHeader-left">
            <IconButton>
              <Avatar />
            </IconButton>
            <h4>{mail.name}</h4>
            <p>{mail.email}</p>
          </div>

          <div className="details__middleHeader-right">
            <p>{mail.time}</p>
            <IconButton>
              <Star />
            </IconButton>
            <IconButton>
              <Reply />
            </IconButton>
            <IconButton>
              <MoreVert />
            </IconButton>
          </div>
        </div>

        <div className="details__body">
          <p>{mail.message}</p>
        </div>
      </div>

    </div>
  );
};

export default Detail;
