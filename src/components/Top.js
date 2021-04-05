import React from "react";
import { Button } from "reactstrap";
import "./top.css";

const Top = () => {
  return (
    <div>
      <div className="createbtn_div">
        <p>
          <strong>Episode: Encounter</strong>
        </p>
        <Button>
          <i className="fa fa-plus-circle" /> Add New Episode
        </Button>
      </div>
      <hr />
    </div>
  );
};

export default Top;
