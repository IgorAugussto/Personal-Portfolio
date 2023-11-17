import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import colorSharp from '../assets/img/color-sharp.png';
import { Col, Container, Row } from "react-bootstrap";

export const Skills = () => {
    const responsive = {
        superLargeDesktop: {
            // the naming can be any, depends on you.
            breakpoint: { max: 4000, min: 3000 },
            items: 5
        },
        desktop: {
            breakpoint: { max: 3000, min: 1024 },
            items: 3
        },
        tablet: {
            breakpoint: { max: 1024, min: 464 },
            items: 2
        },
        mobile: {
            breakpoint: { max: 464, min: 0 },
            items: 1
        }
    };

    return (
        <section className="skill" id="skills">
            <Container>
                <Row>
                    <Col>
                        <div className="container">
                            <div className="row">
                                <div className="col-12">
                                    <div className="skill-bx wow zoomIn">
                                        <h2>Skills</h2>
                                        <p>Here we have the languages and frameworks that I’ve been
                                            studied. I have Java as my first language and because of
                                            that it is the one that I have the most ease and
                                            familiarity with, but I believe that since you have
                                            the base you can easily change.</p>
                                        <Carousel responsive={responsive} infinite={true}
                                            className="owl-carousel owl-theme skill-slider">
                                            <div className="item">
                                                <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/csharp/csharp-original.svg" alt="CSharp" />
                                            </div>
                                            <div className="item">
                                                <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg" alt="TypeScript" />
                                            </div>
                                            <div className="item">
                                                <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg" alt="JavaScript" />
                                            </div>
                                            <div className="item">
                                                <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original-wordmark.svg" alt="React" />
                                            </div>
                                            <div className="item">
                                                <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg" alt="Html" />
                                            </div>
                                            <div className="item">
                                                <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg" alt="Css" />
                                            </div>
                                        </Carousel>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <img className="background-image-left" src={colorSharp} alt="Color-bg" />
                    </Col>
                </Row>
            </Container>
        </section>
    )
}

export default Skills;