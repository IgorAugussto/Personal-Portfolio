/*

*********** FUNCIONALIDADE AINDA EM PRODUÇÃO ***********

import { useState } from "react";
import { Container, Row, Col } from "react-bootstrap";
import contactImg from '../assets/img/contact-img.svg';
import 'animate.css';
import TrackVisibility from 'react-on-screen';
import emailjs from '@emailjs/browser';


export const Contact = () => {

  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessege] = useState('');
  const [send, setSend] = useState('')

  function sendEmail(e) {
    e.preventDefault();

    if (name === '' || email === '' || message === '') {
      alert("Preencha todos os campos");
      return;
    }

    const templateParams = {
      from_name: name,
      message: message,
      email: email
    }

    emailjs.send("service_n3tpp5f", "template_mzjt4tj", templateParams, "cG_sFzoWR3gz2datc")
      .then((response) => {
        console.log("EMAIL ENVIADO", response.status, response.text)
        setName('')
        setEmail('')
        setMessege('')
      }, (err) => {
        console.log("ERRO: ", err)
      });
  }

  return (
    <section className="contact" id="connect">
      <Container>
        <Row className="align-items-center">
          <Col size={12} md={6}>
            <TrackVisibility>
              {({ isVisible }) =>
                <img className={isVisible ? "animate__animated animate__zoomIn" : ""} src={contactImg} alt="Contact Us" />
              }
            </TrackVisibility>
          </Col>
          <Col size={12} md={6}>
            <TrackVisibility>
              {({ isVisible }) =>
                <div className={isVisible ? "animate__animated animate__fadeIn" : ""}>
                  <h2>Get In Touch</h2>
                  <form onSubmit={sendEmail}>
                    <Row>
                      <Col size={12} sm={6} className="px-1">
                        <input type="text" value={name} placeholder="Name"
                          onChange={(e) => setName(e.target.value)} />
                      </Col>
                      <Col size={12} sm={6} className="px-email">
                        <input type="email" value={email} placeholder="Email Address"
                          onChange={(e) => setEmail(e.target.value)} />
                      </Col>
                      <Col size={12} className="px-1">
                        <textarea rows="6" value={message} placeholder="Message"
                          onChange={(e) => setMessege(e.target.value)}></textarea>
                        <button type="submit"><span>Send</span></button>
                      </Col>
                    </Row>
                  </form>
                </div>}
            </TrackVisibility>
          </Col>
        </Row>
      </Container>
    </section>
  )
}
export default Contact;*/