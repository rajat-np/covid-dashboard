import Home from './Home'
import Jumbotron from 'react-bootstrap/Jumbotron'
import Container from 'react-bootstrap/Container'

import './App.css'

function App() {
  return (
    <div>
      <Jumbotron fluid>
        <Container className="app-header">
          <h1>Covid Dashboard</h1>
        </Container>
      </Jumbotron>
      <Home />
    </div>

  );
}

export default App;