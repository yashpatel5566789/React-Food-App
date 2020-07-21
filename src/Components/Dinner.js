import React, { Component } from "react";
import DinnerNavigation from "./DinnerNavigation";
import lunchimage from "./lunchimage.jpg";
import Button from "react-bootstrap/Button";
const title = "DINNER";
const Sabji = "200";
const Roti = 6;
const Dal = "200";
const Rice = "200";
export class Dinner extends Component {
  render() {
    return (
      <div>
        <DinnerNavigation />
        <h6>{title}</h6>
        <img src={lunchimage} alt="lunch"></img>
        <p>Sabji: {Sabji} ml</p>
        <p>Roti: {Roti} pieces</p>
        <p>Dal: {Dal} ml</p>
        <p>Rice: {Rice} gm</p>
        <Button variant="danger">Submit</Button>
      </div>
    );
  }
}
