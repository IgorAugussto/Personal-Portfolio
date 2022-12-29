import { Container, Row, Col, Tab, Nav } from "react-bootstrap";
import flatLogo from '../assets/img/flat-logo.png';
import financeLogo from '../assets/img/finance-logo.png';
import ProjectCard from "./ProjectCard";
import colorSharp2 from "../assets/img/color-sharp2.png";
import 'animate.css';
import TrackVisibility from 'react-on-screen';

export const Projects = () => {

    const projects = [
        {
            title: "Coming Soon...",
            description: "",
            imgUrl: flatLogo,
        },
        {
            title: "Coming Soon...",
            description: "",
            imgUrl: financeLogo,
        },
    ]

    return (
        <section className="project" id="projects">
            <Container>
                <Row>
                    <Col>
                        <TrackVisibility>
                            {({ isVisible }) =>
                                <div className={isVisible ? "animate__animated animate__bounce" : ""}>
                                    <h2>Projects</h2>
                                    <p>These are my projects, the first one is a personal project about
                                        a flat on the beach that my family has, so I decided to make
                                        a landing page to increase the publicity. The second one is
                                        a study project to practice full stack with cloud integration
                                        that I’m learning with Dougllas Sousa (Udemy) and it is
                                        about financial care.</p>
                                    <Tab.Container id="projects-tabs" defaultActiveKey="first">
                                        <Nav variant="pills" className="nav-pills mb-5 
                                        justify-content-center align-items-center" id="pills-tab">
                                            <Nav.Item>
                                                <Nav.Link eventKey="first">Tab 1</Nav.Link>
                                            </Nav.Item>
                                            <Nav.Item>
                                                <Nav.Link eventKey="second">Tab 2</Nav.Link>
                                            </Nav.Item>
                                        </Nav>
                                        <Tab.Content >
                                            <Tab.Pane eventKey="first">
                                                <Row>
                                                    {
                                                        projects.map((project, index) => {
                                                            return (
                                                                <ProjectCard
                                                                    key={index}
                                                                    {...project}
                                                                />
                                                            )
                                                        })
                                                    }
                                                </Row>
                                            </Tab.Pane>
                                            <Tab.Pane eventKey="second">
                                                <p>This is a space for future projects.</p>
                                            </Tab.Pane>
                                        </Tab.Content>
                                    </Tab.Container>
                                </div>}
                        </TrackVisibility>
                    </Col>
                </Row>
            </Container>
            <img className="background-image-right" src={colorSharp2} alt=""></img>
        </section >
    )
}

export default Projects;