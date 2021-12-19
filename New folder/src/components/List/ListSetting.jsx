import React from "react";
import { IconButton } from "@material-ui/core";
import {
  ArrowDropDown,
  CheckBoxOutlineBlank,
  ChevronLeft,
  ChevronRight,
  MoreVert,
  Refresh,
} from "@material-ui/icons";

const ListSetting = () => {
  return (
    <div className="list__settings">
      <div className="list__settings-left">
        <IconButton>
          <CheckBoxOutlineBlank />
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
  );
};

export default ListSetting;
