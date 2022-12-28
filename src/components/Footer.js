import { Container, Row, Col } from "react-bootstrap";
import navIcon1 from "../assets/img/nav-icon1.svg";
import myPicture from '../assets/img/my-picture.png';

export const Footer = () => {
    return (
        <footer className="footer">
      <Container>
        <Row className="align-items-center">
          <Col size={12} sm={6}>
            <img src={myPicture} alt="Logo" />
          </Col>
          <Col size={12} sm={6} className="text-center text-sm-end">
            <div className="social-icon">
              <a href="http://www.linkedin.com/in/igor-augusto-5353a8191" target="_blank" rel="noreferrer"><img src={navIcon1} alt="Icon" /></a>
            </div>
            <p>Copyright 2022. All Rights Reserved</p>
          </Col>
        </Row>
      </Container>
    </footer>
    )
}

export default Footer;