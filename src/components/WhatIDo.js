import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { DiCode } from "react-icons/di";
import { HiDevicePhoneMobile } from "react-icons/hi2";
import { FaCogs } from "react-icons/fa";
import ThreeDPrinterIcon from './ThreeDPrinterIcon';

const WhatIDoCard = ({ icon, title, description }) => {
  return (
    <Col xs={12} md={6} lg={3} className="mb-4">
      <div className="text-center">
        <div className="icon-circle">
          {icon}
        </div>
        <h4>{title}</h4>
        <p>{description}</p>
      </div>
    </Col>
  )
}

const WhatIDo = () => {
  const whatidoItems = [
    {
      icon: <DiCode size={70} />,
      title: "Web Applikáció fejlesztés",
      description: "Gyors, érzékeny és lebilincselő alkalmazások, amelyek életre keltik ötleteidet",
    },
    {
      icon: <HiDevicePhoneMobile size={70} />,
      title: "Mobilalkalmazás-fejlesztés",
      description: "Keresztplatform alkalmazások, hatékonysággal és sebességgel az Android, iOS és Web számára."
    },
    {
      icon: <FaCogs size={70} />,
      title: "API fejlesztés",
      description: "REST API-k, amelyek az igényeidhez igazodnak, és a legjobb gyakorlatokat követik a teljesítmény és biztonság terén."
    },
    {
      icon: <ThreeDPrinterIcon
        width={70}
        height={70}
        lightColor="#333333"
        darkColor="#CCCCCC"
      />,
      title: "3D nyomtatás",
      description: "3D modellek nyomtatása FDM és SLA nyomtataókkal"
    },
  ];

  return (
    <Container id="whatido">
      <div className="section-title text-center mb-5">
        <h1>Mit csinálok</h1>
        <p>Amikhez értek, és amikért lelkesedem</p>
      </div>
      <Row>
        {whatidoItems.map((item, index) => (
          <WhatIDoCard key={index} {...item} />
        ))}
      </Row>
    </Container>
  );
}

export default WhatIDo;