import FormInput from './components/FormInput'
import QAList from './components/QAList'

import { Container, Row, Col } from "react-bootstrap"
import { useState } from 'react'
import {quesAnsarray} from "./data.js"


function App() {
  
            const [quesAnsarraystate,setquesAnsarray] = useState(quesAnsarray)
            console.log('quesAnsarray',quesAnsarray)
            

            //to add new QA
            const addQAButton = () => { 
                localStorage.setItem("items",JSON.stringify([...quesAnsarray]));
                setquesAnsarray([...quesAnsarray])
                console.log('you add addQA successfully')
            }
            
            //to delete all items
            const deleteAllItems = () => {
                localStorage.removeItem("items")
                quesAnsarray.splice(0,quesAnsarray.length);
                setquesAnsarray([])  
            }

            //to delete one item from quesAnsarray array
            const deletedOneItemArraydisplay = (finalItemsArray) => {
                localStorage.setItem("items",JSON.stringify([...finalItemsArray]));
                setquesAnsarray([...finalItemsArray])
               
                if (finalItemsArray.length <= 0) {
                  deleteAllItems();
                }
            }

            return (
              <div className="app-color-body app-font">
              
                <Container className="p-5">

                  <Row className="justify-content-center">
                    
                    <Col sm="4">
                        <div className="fs-2 text-center py-2">
                              <small>Questions and Answers:</small>
                        </div>
                    </Col>

                    <Col sm="8">
                        <FormInput onAddButton={addQAButton}/>
                        <QAList 
                            qaArrayList={quesAnsarraystate} 
                            deletedOneItemArraydisplayButton={deletedOneItemArraydisplay} />
                            {
                              localStorage.getItem("items") != null ?(<button onClick={deleteAllItems} className="btn btn-danger w-100 my-3" >Delete All</button>) : null
                            }
                        
                    </Col>

                  </Row>
                
                </Container>

              </div>
            );
}

export default App;
