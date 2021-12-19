import React from "react";
import { Inbox, LocalOffer, People } from "@material-ui/icons";

const Type = () => {
  return (
    <div className="type">
      <div className="type__options type__options--active">
        <Inbox />
        <p>Primary</p>
      </div>

      <div className="type__options">
        <People />
        <p>Social</p>
      </div>

      <div className="type__options">
        <LocalOffer />
        <p>Promotions</p>
      </div>
    </div>
  );
};

export default Type;
