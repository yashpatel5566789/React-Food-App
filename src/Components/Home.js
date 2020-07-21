import React, { Component } from "react";
import BottomBar from "./BottomBar";
import HomeNavigation from "./HomeNavigation";
import { Container } from "react-bootstrap";
import { Card } from "react-bootstrap";
import StarHalfIcon from "@material-ui/icons/StarHalf";
import "./Style.css";
import SwitchVeg from "./SwitchVeg";
import { Link } from "react-router-dom";
export class Home extends Component {
  render() {
    return (
      <div className="tp">
        <HomeNavigation />
        <div className=" text-right" style={{ right: 150 }}>
          <h6>VEG ONLY</h6>
        </div>
        <Link to="/veg">
          <SwitchVeg />
        </Link>
        <div className="homealigment">
          <a href="/selectedkitchen" style={{ color: "inherit" }}>
            <Container fluid="xl " className="my-2">
              <Card border="light" style={{ width: "18rem" }}>
                <div className="row no-gutters">
                  <div className="col-md-4">
                    <Card.Img
                      className="img-fluid"
                      variant="top"
                      src="https://content.jdmagicbox.com/comp/nagpur/z7/0712px712.x712.190722115711.s2z7/catalogue/sakshi-tifin-and-mess-services-nagpur-1cphiq3a0q.jpg?clr=5c5c0a"
                    />
                  </div>
                  <div className="col-md-8">
                    <Card.Body>
                      <Card.Title className="mb-0">Kaku's kitchen</Card.Title>

                      <div className=" mt-0">
                        Kolhapuri Mess<br></br>
                        Vashi | 2.5 Kms | Rs.100<br></br>
                        <StarHalfIcon /> 3.8 9:am - 9:pm
                      </div>
                    </Card.Body>
                  </div>
                </div>
              </Card>
            </Container>
          </a>
        </div>
        <div className="vegonlyalignment">
          <a href="/selectedkitchen" style={{ color: "inherit" }}>
            <Container fluid="xl " className="my-2">
              <Card border="light" style={{ width: "18rem" }}>
                <div className="row no-gutters">
                  <div className="col-md-4">
                    <Card.Img
                      variant="top"
                      src="https://lh3.googleusercontent.com/Q1e2nL8w8MkpDpfbLr8FvIWpklofw2wKxGwYicr3XAaOcG1VptW7JJyLFUtONHk8wcW5OAqMRxuJl2zk=w768-h768-n-o-v1"
                    />
                  </div>
                  <div className="col-md-8">
                    <Card.Body>
                      <Card.Title className="mb-0">TP kitchen</Card.Title>

                      <div className=" mt-0">
                        Kolhapuri Mess<br></br>
                        Vashi | 2.5 Kms | Rs.100<br></br>
                        <StarHalfIcon /> 3.8 9:am - 9:pm
                      </div>
                    </Card.Body>
                  </div>
                </div>
              </Card>
            </Container>
          </a>
        </div>
        <BottomBar />
      </div>
    );
  }
}
