import Navbar from 'react-bootstrap/Navbar'
import Container from 'react-bootstrap/Container'
import Nav from 'react-bootstrap/Nav'
import { useEffect, useState } from "react";
import myPicture from '../assets/img/my-picture.png';
import navIcon1 from '../assets/img/nav-icon1.svg';

export const NavBar = () => {
    const [activeLink, setActiveLink] = useState('');
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const onScroll = () => {
            if (window.scrollY > 50) {
                setScrolled(true);
            } else {
                setScrolled(false)
            }
        }

        window.addEventListener("scroll", onScroll);

        return () => window.removeEventListener("scroll", onScroll);
    }, [])

    const onUpdateActiveLink = (value) => {
        setActiveLink(value);
    }

    return (
        <Navbar expand="lg" className={scrolled ? "scrolled" : ""}>
            <Container>
                <Navbar.Brand href="/">
                    <img src={myPicture} alt="Logo" />
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" >
                    <span className="navbar-toggle-icon"></span>
                </Navbar.Toggle>
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="me-auto">
                        <Nav.Link href="#home" className={activeLink === 'home' ? 'active-navbar-link'
                            : 'navbar-link'} onClick={() => onUpdateActiveLink('home')}>Home</Nav.Link>

                        <Nav.Link href="#skills" className={activeLink === 'skills' ? 'active-navbar-link'
                            : 'navbar-link'} onClick={() => onUpdateActiveLink('skills')}>Skills</Nav.Link>

                        <Nav.Link href="#projects" className={activeLink === 'projects' ? 'active-navbar-link'
                            : 'navbar-link'} onClick={() => onUpdateActiveLink('projects')}>Projects</Nav.Link>
                    </Nav>
                    <span className="navbar-text">
                        <div className='social-icon'>
                            <a href="http://www.linkedin.com/in/igor-augusto-5353a8191" target="_blank" rel="noreferrer"><img src={navIcon1} alt="Linkedin" /></a>
                        </div>
                        <Nav.Link href="#connect" className={activeLink === 'connect' ? 'active-navbar-link'
                            : 'navbar-link'} onClick={() => onUpdateActiveLink('connect')}>
                            <button className="vvd" onClick={() => console.log()}>
                                <span>Let's Connect</span>
                            </button>
                        </Nav.Link>
                    </span>
                </Navbar.Collapse>
            </Container>
        </Navbar >
    )
}

export default NavBar;