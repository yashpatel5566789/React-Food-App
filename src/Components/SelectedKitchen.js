import React, { Component } from "react";
import SelectedKitchenNavigation from "./SelectedKitchenNavigation";
import { Container, Button } from "react-bootstrap";
import { Card } from "react-bootstrap";
import StarHalfIcon from "@material-ui/icons/StarHalf";
import "./Style.css";
import { Link } from "react-router-dom";
export class SelectedKitchen extends Component {
  render() {
    return (
      <div>
        <SelectedKitchenNavigation />
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
          <Card border="light" style={{ width: "10rem" }}>
            <div className="row no-gutters">
              <div className="col-md-4">
                <Card.Img
                  className="img-fluid"
                  variant="top"
                  src="https://content.jdmagicbox.com/comp/nagpur/z7/0712px712.x712.190722115711.s2z7/catalogue/sakshi-tifin-and-mess-services-nagpur-1cphiq3a0q.jpg?clr=5c5c0a"
                />
                <Card.Body>
                  <h4 className="h4alginment">Lunch</h4>
                  <div className="buttonalignment">
                    <Link to="/lunch">
                      <Button variant="danger">Add</Button>
                    </Link>
                  </div>
                </Card.Body>
              </div>
            </div>
          </Card>
          <div className="dinneralignment">
            <Card border="light" style={{ width: "10rem" }}>
              <div className="row no-gutters">
                <div className="col-md-4">
                  <Card.Img
                    className="img-fluid"
                    variant="top"
                    src="https://content.jdmagicbox.com/comp/nagpur/z7/0712px712.x712.190722115711.s2z7/catalogue/sakshi-tifin-and-mess-services-nagpur-1cphiq3a0q.jpg?clr=5c5c0a"
                  />
                  <Card.Body>
                    <h4 className="h4alginment">Dinner</h4>
                    <div className="buttonalignment">
                      <Link to="/dinner">
                        <Button variant="danger">Add</Button>
                      </Link>
                    </div>
                  </Card.Body>
                </div>
              </div>
            </Card>
          </div>
        </Container>
      </div>
    );
  }
}
