import { Row, Accordion} from "react-bootstrap"
import {quesAnsarray} from "../data.js"

const QAList=(props)=>{

    const deleteOneItemButton =(itemID)=>{
            if ( quesAnsarray.length >=1 ){
                    console.log(quesAnsarray)
                    const index =quesAnsarray.findIndex((ArrayIndex)=>(ArrayIndex.id === itemID));
                    quesAnsarray.splice(index,1);
                    console.log(quesAnsarray)
                    props.deletedOneItemArraydisplayButton(quesAnsarray);
                    console.log(quesAnsarray)
            }
    }

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
                                                                                    <div >
                                                                                        <div className="px-3 d-inline">
                                                                                            {item.a}
                                                                                        </div>

                                                                                        <button  
                                                                                            className="app-btn-color"
                                                                                            onClick={()=>{deleteOneItemButton(item.id)}}
                                                                                        >
                                                                                            Delete
                                                                                        </button>
                                                                                    </div>
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