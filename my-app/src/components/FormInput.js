import { Row, Col, Form, Button } from 'react-bootstrap'
import React, { useState } from 'react'


import {quesAnsarray} from "../data"

// https://react-bootstrap.github.io/forms/form-control/#disabled
const FormInput=({onAddButton})=>{

        const [Qudatastate, setQudata] = useState('')
        const [Andatastate, setAndata] = useState('')


        //to push data to array
        const addNewQA = () => {
                    if (Qudatastate === "" || Andatastate === "") {
                        console.log('NO Qudatastate OR NO Andatastate')
                        return;
                    }

                    quesAnsarray.push({ 
                                        id: Math.random(),
                                         q: Qudatastate,
                                         a: Andatastate, 
                                    });
            
                    setQudata('')
                    setAndata('')
                    onAddButton();

                    console.log(quesAnsarray)
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
                            className="app-btn-color w-100" 
                            type="submit">
                                Add
                        </Button>
                    </Col>

                </Row>
        )
}
export default FormInput;