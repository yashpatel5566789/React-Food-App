import React, { Component } from "react";
import CartNavigation from "./CartNavigation";
import BottomBar from "./BottomBar";
import HomeNavigation from "./HomeNavigation";
import { Container } from "react-bootstrap";
import { Card } from "react-bootstrap";
import "./Style.css";
import Button from "./Button";
export class Cart extends Component {
  render() {
    return (
      <div>
        <CartNavigation />
        <Container fluid="xl " className="my-2">
          <Card border="light" style={{ width: "18rem" , margin:'mb-0'}}>
            <div className="row no-gutters ">
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
                  </div>
                  <div className="button">
                    <Button />
                  </div>
                </Card.Body>
              </div>
            </div>
          </Card>
          <div>
              <h5>Bill Details</h5><hr/>    
              <h5>Iteam Total<h5 className="elem">100</h5></h5><br/><br/><hr/> 
              <h5>To Pay<h5 className="elem">100</h5></h5> 
          </div>
        </Container>
        <BottomBar />
      </div>
    );
  }
}
