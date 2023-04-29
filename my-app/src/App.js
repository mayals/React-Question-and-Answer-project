import FormInput from './components/FormInput'
import QAList from './components/QAList'

import { Container, Row, Col } from "react-bootstrap"
import { useState } from 'react'
import {quesAnsarray} from "./data.js"

// https://github.com/fkhadra/react-toastify
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


function App() {
  
            const [quesAnsarraystate,setquesAnsarray] = useState(quesAnsarray)
            console.log('quesAnsarray',quesAnsarray)
            

            //to add new QA
            const addQAButton = () => { 
                localStorage.setItem("items",JSON.stringify([...quesAnsarray]));
                setquesAnsarray([...quesAnsarray])
                // console.log('you add addQA successfully')
                notify("You add successfully", "Success")
            }
            
            //to delete all items
            const deleteAllItems = () => {
                localStorage.removeItem("items")
                quesAnsarray.splice(0,quesAnsarray.length);
                setquesAnsarray([])  
                notify("You delete all items successfully", "Success")
              }

            //to delete one item from quesAnsarray array
            const deletedOneItemArraydisplay = (finalItemsArray) => {
                localStorage.setItem("items",JSON.stringify([...finalItemsArray]));
                setquesAnsarray([...finalItemsArray])
                notify("You delete one item successfully","Success")  
                if (finalItemsArray.length <= 0) {
                  deleteAllItems();
                }
            }

            //to push notification
            const notify = (message, type) => {
                      if (type === "Error")
                            toast.error(message)
                      else if (type === "Success")
                            toast.success(message)
            };
           
           
           
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
                <ToastContainer/>
                </Container>

              </div>
            );
}

export default App;
