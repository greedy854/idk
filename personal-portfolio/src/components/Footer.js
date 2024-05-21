import { Container, Row, Col } from "react-bootstrap";
import { MailchimpForm } from "./MailchimpForm";
import logo from "../assets/img/lul.png";
import navIcon1 from "../assets/img/nav-icon1.svg";
import navIcon2 from "../assets/img/tiktok.png";
import navIcon3 from "../assets/img/nav-icon3.svg";
import navIcon4 from '../assets/img/communication.png'

export const Footer = () => {
  return (
    <footer className="footer">
      <Container>
        <Row className="align-items-center">
          <MailchimpForm />
          <Col size={12} sm={6}>
            <img src={logo} alt="Logo" />
          </Col>
          <Col size={12} sm={6} className="text-center text-sm-end">
            <div className="social-icon">
              <a href="https://www.linkedin.com/in/greedy-378bb030a/"><img src={navIcon1} alt="Icon" /></a>
              <a href="https://www.tiktok.com/@greedy.2854"><img src={navIcon2} alt="Icon" /></a>
              <a href="https://www.instagram.com/greedy_000/"><img src={navIcon3} alt="Icon" /></a>
              <a href="https://discord.gg/uJnrDxadGD"><img src={navIcon4} alt="Icon" /></a>
            </div>
            <p>Copyright 2024. Greedy</p>
          </Col>
        </Row>
      </Container>
    </footer>
  )
}