import React from "react";
import "./labels.css";
import { Label, Input, Button } from "reactstrap";

const Labels = () => {
  return (
    <div>
      <div className="layerone">
        <div className="minimize_icon">
          <i className="fa fa-minus-circle minimize_icon_element"></i>
        </div>
        <div className="layerone_items">
          <Label for="episode">Episode Type</Label>
          <Input
            type="select"
            name="episode"
            id="episode"
            className="layerone_input_items"
            // onChange={changeGender}
          >
            <option>Industrial</option>
            <option>Orthopedic</option>
            <option>Mechanical</option>
            <option>Wound</option>
          </Input>
        </div>
        <div className="layerone_items">
          <Label for="bodypart">Body Part</Label>
          <Input
            type="select"
            name="bodypart"
            id="bodypart"
            className="layerone_input_items"
            // onChange={changeGender}
          >
            <option>Shoulder</option>
            <option>Knee</option>
            <option>Elbow</option>
            <option>Hip</option>
            <option>Foot</option>
            <option>Ankle</option>
          </Input>
        </div>
        <div className="layerone_items ">
          <Button className="buttonsubmit">Save</Button>
        </div>
      </div>
      <br />
      <br />
      <br />
    </div>
  );
};

export default Labels;
