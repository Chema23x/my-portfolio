import { Container, Row, Col } from "react-bootstrap";
import logo from "../assets/img/logo.svg";
import navIcon1 from "../assets/img/nav-icon1.svg";
import navIcon2 from "../assets/img/nav-icon2.svg";
import navIcon3 from "../assets/img/nav-icon3.svg";

export const Footer = () => {
  return (
    <footer className="footer">
      <Container>
        <Row className="align-items-center">
          <Col size={12} sm={6}>
            <img src={logo} alt="Logo" />
          </Col>
          <Col size={12} sm={6} className="text-center text-sm-end">
            <div className="social-icon">
            <a className ="linkedIn" href="https://www.linkedin.com/in/jos%C3%A9-manuel-hern%C3%A1ndez-ben%C3%ADtez/"><img src={navIcon1} alt="" /></a>
                <a className ="facebook" href="https://www.facebook.com/chema.hndz/"><img src={navIcon2} alt="" /></a>
                <a className ="instagram" href="https://www.instagram.com/chema__h/"><img src={navIcon3} alt="" /></a>
            </div>
            <p>Copyright 2022. All Rights Reserved</p>
          </Col>
        </Row>
      </Container>
    </footer>
  )
}
