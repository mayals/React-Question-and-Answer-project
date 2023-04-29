import { Row, Col, Form, Button } from 'react-bootstrap'
import React, { useState } from 'react'
import {quesAnsarray} from "../data.js"
// https://react-bootstrap.github.io/forms/form-control/#disabled


const FormInput=({onAddButton,notify})=>{

        const [Qudatastate, setQudata] = useState('')
        const [Andatastate, setAndata] = useState('')


        //to push data to array
        // not work  :(
        const addNewQA = () => {
                    if (Qudatastate === "" || Andatastate === "") {
                        // console.log('NO Qudatastate OR NO Andatastate');
                        notify("Please complete form input","Error");
                        return;
                    }

                    quesAnsarray.push({id:Math.random(), q:Qudatastate, a:Andatastate});
                    setQudata('')
                    setAndata('')
                    onAddButton();
                    
                    // console.log(quesAnsarray)
        }

        return(
                <Row className="my-3">

                    <Col sm='5'>
                        <Form.Control
                            value={Qudatastate}
                            onChange={(e) => setQudata(e.target.value)}
                            
                            type="text"
                            placeholder="Input Question here .."
                            aria-label="Input Question"
                            // disabled
                            //readOnly
                        />
                    </Col>
                    
                    <br/>
                    
                    <Col sm='5'>
                        <Form.Control
                            value={Andatastate}
                            onChange={(e) => setAndata(e.target.value)}

                            type="text"
                            placeholder="Input Answer here .."
                            a ria-label="Input Answer"
                            //readOnly
                        />
                    </Col>

                    <Col sm='2'>
                        <Button
                            onClick={addNewQA}
                            className="w-100" 
                            variant="success"
                            type="submit">
                                Add
                        </Button>
                    </Col>

                </Row>
        )
}
export default FormInput;