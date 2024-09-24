import '../App.css';
import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';
import { useTheme } from '../context/ThemeContext';

const PortfolioItem = ({ image, title, description, url, tech, isDarkMode }) => (

  <Col xs={12} md={6} lg={3} className='d-flex align-items-stretch justify-content-sm-center shadow p-0 mb-2 rounded mx-auto my-3 '>
    <a href={url} target="_blank" rel="noreferrer" className="text-decoration-none ">
      {/* <Container> */}
      <Card
        className="h-100"
        text={isDarkMode ? 'white' : 'dark'}
        bg={isDarkMode ? 'dark' : 'light'}
      >
        <Card.Img variant="top" src={image} />
        <Card.Body  >
          <Card.Title >
            {title}
          </Card.Title>
          <Card.Text >
            {description}
          </Card.Text>
        </Card.Body>
        <Card.Footer >
          <ListGroup variant="flush">
            {tech.map((item, index) => (
              <ListGroup.Item key={index}
                className={isDarkMode ? "bg-dark text-white" : "bg-light text-dark"}
              >{item}</ListGroup.Item>
            ))}
          </ListGroup>


        </Card.Footer>
      </Card>
      {/* </Container> */}
  </a>
  </Col >
);

const Portfolio = () => {
  const { isDarkMode } = useTheme();

  const portfolioItems = [
    {
      image: "/meetapp.png",
      title: "MeetApp",
      description: "Egyetemi közösség építése, a hallgatók által.",
      url: "https://meetapp.komornikantal.hu",
      tech: ["React Native", "Django"]
    },
    {
      image: "/foodDelivery.png",
      title: "Restaurant Delivery App",
      description: "étterem menü oldala",
      url: "https://dev.komornikantal.hu",
      tech: ["Django"]
    },
    {
      image: "/kaszk.png",
      title: "Kerpely Antal Szakkollégiumok",
      description: "egyesített szakkollégiumi oldal",
      url: "http://szakkollegium.uniduna.hu/",
      tech: ["WordPress"]
    },

  ];

  return (
    <Container id="portfolio" >
      <h1 className="text-center">Portfolio</h1>
      <p className="text-center  mb-2">
        Néhány munkám <br />
        {/* github profil: <a href="https://github.com/antal-komornik/" target="_blank" rel="noreferrer">https://github.com/antal-komornik/</a> */}
      </p>
      <Container className='d-flex p-0 justify-content-center'>

        <Row className=' d-flex w-100 gap-1 justify-content-center'>
        {portfolioItems.map((item, index) => (
          <PortfolioItem key={index} {...item} isDarkMode={isDarkMode} />
        ))}
        </Row>
      </Container>
    </Container >
  );
}

export default Portfolio;