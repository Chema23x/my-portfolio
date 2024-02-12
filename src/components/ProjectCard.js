import React from "react";
import { Col } from "react-bootstrap";

const links = [
  "https://github.com/Chema23x/ARVIDEYS_ecommerce",
  "https://github.com/Chema23x/HangMan",
  "https://github.com/Chema23x/Weather-app"
];

export const ProjectCard = ({ title, description, imgUrl, index }) => {
  return (
    <Col size={12} sm={6} md={4}>
      <div className="proj-imgbx">
        <img src={imgUrl} alt=''/>
        <div className="proj-txtx">
          <h4>{title}</h4>
          <a href={links[index]}>
            <span className="proyect-description">{description}</span>
          </a>
        </div>
      </div>
    </Col>
  )
}