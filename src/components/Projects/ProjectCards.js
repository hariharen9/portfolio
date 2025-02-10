import React from "react";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import { BiLinkExternal } from "react-icons/bi";

function ProjectCards(props) {
  return (
    <Card className="project-card-view">
      <Card.Img variant="top" src={props.imgPath} alt="card-img" />
      <Card.Body>
        <Card.Title>{props.title}</Card.Title>
        <Card.Text style={{ textAlign: "justify" }}>
          {props.description}
        </Card.Text>

        {/* View Project Button */}
        <Button
          variant="primary"
          href={props.link}
          target="_blank"
          className="custom-btn">
          <BiLinkExternal /> &nbsp;
          {props.isBlog ? "View Blog" : "View Project"}
        </Button>

        {/* Visit Website Button - Below */}
        {props.website && (
          <div className="mt-2">
            <Button
              variant="primary"
              href={props.website}
              target="_blank"
              className="custom-btn">
              <BiLinkExternal /> &nbsp; Visit Website
            </Button>
          </div>
        )}
      </Card.Body>
    </Card>
  );
}

export default ProjectCards;
