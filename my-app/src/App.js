import FormInput from './components/FormInput'
import QAList from './components/QAList'

import {Container,Row,Col} from "react-bootstrap"


function App() {
  return (
    <div className="app-color-body app-font">
    
      <Container className="p-5">

        <Row className="justify-content-center">
          
          <Col sm="4">
              <div className="fs-2 text-center py-2">
                    Questions & Answers:
              </div>
          </Col>

          <Col sm="8">
              <FormInput />
              <QAList />
          </Col>

        </Row>
       
      </Container>

    </div>
  );
}

export default App;
