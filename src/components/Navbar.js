import React, { useState, useEffect } from "react";
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { useTheme } from '../context/ThemeContext';

function PortfolioNavbar() {
  const [activeSection, setActiveSection] = useState('');
  const { isDarkMode } = useTheme();

  useEffect(() => {
    const sectionIds = ['whatido', 'portfolio', 'about'];
    const sectionElements = sectionIds.map(id => document.getElementById(id));

    const options = {
      root: null,
      rootMargin: '0px',
      threshold: 0.3,
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setActiveSection(entry.target.id);
        }
      });
    }, options);

    sectionElements.forEach((section) => {
      if (section) observer.observe(section);
    });

    const handleScroll = () => {
      const scrollPosition = window.scrollY;

      for (let i = sectionElements.length - 1; i >= 0; i--) {
        const section = sectionElements[i];
        if (section && section.offsetTop <= scrollPosition + 100) {
          setActiveSection(section.id);
          break;
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Kezdeti állapot beállítása

    return () => {
      sectionElements.forEach((section) => {
        if (section) observer.unobserve(section);
      });
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <Navbar
      collapseOnSelect
      bg={isDarkMode ? "dark" : "light"}
      data-bs-theme={isDarkMode ? "dark" : "light"}
      sticky='top'
      expand="lg"
      className="w-100 shadow p-0 mb-2 rounded"
    >
      <Container>
        <Navbar.Brand href="#whatido">Komornik Antal</Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav"
          // aria-controls="responsive-navbar-nav"
          className={isDarkMode ? 'navbar-dark' : 'navbar-light'}
        />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link
              href="#whatido"
              className={activeSection === 'whatido' ? 'active' : ''}
            >
              Amivel foglalkozom
            </Nav.Link>
            <Nav.Link
              href="#portfolio"
              className={activeSection === 'portfolio' ? 'active' : ''}
            >
              Portfolio
            </Nav.Link>
            <Nav.Link
              href="#about"
              className={activeSection === 'about' ? 'active' : ''}
            >
              Rólam
            </Nav.Link>
          </Nav>
          <Nav>
            <Nav.Link href="/cv.pdf" download="cv.pdf">Letölthető CV</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default PortfolioNavbar;