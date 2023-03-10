import FormInput from './components/FormInput'
import QAList from './components/QAList'

import { Container, Row, Col } from "react-bootstrap"
import { useState } from 'react'
import {quesAnsarray} from "./data.js"


function App() {
  
            const [quesAnsarraystate, setquesAnsarray] = useState(quesAnsarray)

            //to add new QA
            const addQAButton = () => {
                setquesAnsarray([...quesAnsarray])
                console.log('you add addQA successfully')
            }



            return (
              <div className="app-color-body app-font">
              
                <Container className="p-5">

                  <Row className="justify-content-center">
                    
                    <Col sm="4">
                        <div className="fs-2 text-center py-2">
                              <small>Questions & Answers:</small>
                        </div>
                    </Col>

                    <Col sm="8">
                        <FormInput onAddButton={addQAButton}/>
                        <QAList qaArrayList={quesAnsarraystate}/>
                    </Col>

                  </Row>
                
                </Container>

              </div>
            );
}

export default App;
