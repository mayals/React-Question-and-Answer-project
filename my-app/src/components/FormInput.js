import { Row, Col, Form, Button } from 'react-bootstrap'


// https://react-bootstrap.github.io/forms/form-control/#disabled
const FormInput=()=>{

   return(
        <Row className="my-3">
            <Col sm='5'>
                <Form.Control
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
                    type="text"
                    placeholder="Input Answer here .."
                    a ria-label="Input Answer"
                    //readOnly
                />
            </Col>

            <Col sm='2'>
                <Button
                    className="app-btn-color w-100" 
                    type="submit">
                        Add
                </Button>
            </Col>

        </Row>
   )



}
export default FormInput;