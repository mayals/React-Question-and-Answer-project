import { Row, Accordion} from "react-bootstrap"


const QAList=()=>{

    return(

        <Row className="my-3">

            <Accordion >
                <Accordion.Item >
                    <Accordion.Header>
                        <div className="m-auto">Header</div>
                    </Accordion.Header>
                    
                    <Accordion.Body>
                        <div className="px-3 d-inline">Body</div>
                        <button  className="app-btn-color">Delete</button>
                    </Accordion.Body> 
                </Accordion.Item>        
            </Accordion>

        </Row>
           
    )
}
 export default QAList;