import { Col, Container, Row } from "react-bootstrap";
import headerImg from '../assets/img/header-img.svg';
import 'animate.css';

export const Banner = () => {
    return (
        <section className="banner" id="home">
            <Container>
                <Row className="align-items-center">
                    <Col xs={12} md={6} xl={7}>
                        <span className="tagline">Welcome to my Portfolio</span>
                        <h1>{`Hi, I'm Igor Augusto `}<span className="wrap"></span></h1>
                        <h2>{`Web Developer / Full Stack `}<span className="wrap"></span></h2>
                        <p>Welcome to my website, this is a simple portfolio to show my projects and
                            abilities as a web developer. I’ve been studying programming about one year
                            and half. I love to do this job and I study all about technology. I always
                            try to stay tuned and know what’s new on the market. I’m very dedicated and
                            I can learn everything that might be necessary and any language or
                            framework. I hope this portfolio convince you to send an email and hire
                            me to your company.</p>
                    </Col>
                    <Col xs={12} md={6} xl={5}>
                        <img src={headerImg} alt="Header Img" />
                    </Col>
                </Row>
            </Container>
        </section>
    )
}
export default Banner;