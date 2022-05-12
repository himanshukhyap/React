import React from "react";
import { Col, Row, Card } from "react-bootstrap";
import { HiStar } from "react-icons/hi";
import { OverlayTrigger, Tooltip } from "react-bootstrap";
import TooltipRight from "../../OtherComponents/ToolTip/TooTipRIght/TooltipRight";
import "./CategoryPageComponent.css";
export default function CategoryPageComponent() {
  return (
    <div className="CategoryPageComponent">
      <Row className="CategoryPageComponentRow">
        <h3 className="CategoryPageComponentSubHeading">JavaScript</h3>
        <Col>
          {["right"].map((placement) => (
            <OverlayTrigger
              key={placement}
              placement={placement}
              overlay={
                <Tooltip show="any" id={`tooltip-${placement}`}>
                  <TooltipRight />
                </Tooltip>
              }
            >
              <Card className="CategoryPageComponentCard shadow ">
                <Card.Img
                  variant="top"
                  src="https://img-c.udemycdn.com/course/240x135/851712_fc61_6.jpg"
                  srcset="https://img-c.udemycdn.com/course/240x135/851712_fc61_6.jpg 1x, https://img-c.udemycdn.com/course/480x270/851712_fc61_6.jpg 2x"
                />
                <Card.Body className="CategoryPageComponentCArdBody">
                  <Card.Title className="CategoryPageComponentCardTitle">
                    2021 Complete Python Bootcamp From Zero to Hero in Python
                  </Card.Title>
                  <Card.Text className="CategoryPageComponentCardText1">
                    Jose Portilla
                  </Card.Text>
                  <Card.Text className="CategoryPageComponentCardText2">
                    <span>4.6</span>
                    <span>
                      <HiStar color="#b4690e" />
                      <HiStar color="#b4690e" />
                      <HiStar color="#b4690e" />
                      <HiStar color="#b4690e" />
                      <HiStar color="#b4690e" />
                    </span>
                    <span>(37562)</span>
                  </Card.Text>
                  <Card.Text className="CategoryPageComponentCardText3">
                    ₹5,120
                  </Card.Text>
                </Card.Body>
              </Card>
            </OverlayTrigger>
          ))}
        </Col>
      </Row>
    </div>
  );
}
