import './App.css';
import AboutMe from './components/AboutMe';
import WhatIDo from './components/WhatIDo';
import Portfolio from './components/Portfolio';
import { Container } from 'react-bootstrap';
import { ThemeProvider } from './context/ThemeContext';
import PortfolioNavbar from './components/Navbar';

function App() {
  return (
    <ThemeProvider>
      <div className="App" data-bs-theme="dark">
        <Container fluid className='p-0'>
          <PortfolioNavbar />
        <WhatIDo />
          <hr />
        <Portfolio />
          <hr />
        <AboutMe />
        </Container>
    </div>
    </ThemeProvider>
  );
}

export default App;