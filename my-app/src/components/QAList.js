import { Row, Accordion} from "react-bootstrap"


const QAList=(props)=>{

    return(

        <Row className="my-3">

            <Accordion >
            {
                props.qaArrayList.length >= 1 ? (props.qaArrayList.map((item,index)=>{
                                                                        return(
                                                                                <Accordion.Item 
                                                                                    key={index}  
                                                                                    eventKey={item.id}>
                                                                                    
                                                                                    <Accordion.Header>
                                                                                        <div className="px-3">
                                                                                            Q-{index}: {item.q}
                                                                                        </div>
                                                                                    </Accordion.Header>
                                                                                    
                                                                                    <Accordion.Body>
                                                                                        <div className="px-3 d-inline">
                                                                                            {item.a}
                                                                                        </div>

                                                                                        <button  className="app-btn-color">
                                                                                            Delete
                                                                                        </button>
                                                                                    </Accordion.Body> 

                                                                                </Accordion.Item>
                                                                        )
                })) : <p  className="my-5"><small>Empty list, No Question/Answer data ..!</small></p>

            }
                       
            </Accordion>

        </Row>
           
    )
}
 export default QAList;