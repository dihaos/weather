import { useState } from 'react';
import './App.css';
import "bootstrap/dist/css/bootstrap.css";
import { Navbar, NavItem, Container, Row, Col } from "react-bootstrap";
import WeatherDisplay from './WeatherDisplay'

function App() {
  const [activePlace, setActivePlace] = useState(0)
  const PLACES = [
    { name: "Mexico City", zip: "94303" },
    { name: "Sunnyvale", zip: "94088" },
    { name: "Santa Cruz", zip: "95062" },
    { name: "Honolulu", zip: "96803" }
  ];

  console.log(activePlace)
  return (
    <div>
      <Navbar>
      </Navbar>
      <Container>
        <Row>
          <Col md={4} sm={4}>
            <h3>Выбрать город:</h3>
            {PLACES.map((place, index) => (
              <NavItem
                className={activePlace === index ? 'activePlace' : ''}
                style={{ cursor: 'pointer' }}
                onClick={() => { setActivePlace(index) }}
                key={index}
                eventKey={index}>
                {place.name}
              </NavItem>
            ))}
          </Col>
          <Col md={8} sm={8}>
            <WeatherDisplay key={activePlace} zip={PLACES[activePlace].zip} />
          </Col>
        </Row>
      </Container>
    </div >
  );
}

export default App;
