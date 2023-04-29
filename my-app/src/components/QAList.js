import { Row, Accordion} from "react-bootstrap"
import {quesAnsarray} from "../data.js"


const QAList=(props)=>{
    // to covert to array
    const myDataLocal = JSON.parse(localStorage.getItem("items"))
    console.log("myDataLocal=",myDataLocal)
    console.log('quesAnsarray',quesAnsarray)

    const deleteOneItemButton =(itemID)=>{
            if (localStorage.getItem("items") != null){
                    // console.log(quesAnsarray)
                    const index = quesAnsarray.findIndex((ArrayIndex)=>(ArrayIndex.id === itemID));
                    console.log("index",index)
                    quesAnsarray.splice(index,1)
                    // console.log(quesAnsarray)
                    props.deletedOneItemArraydisplayButton(quesAnsarray);
                    console.log("deletedOneItemArraydisplayButton",quesAnsarray)
            }
    }

    return(

        <Row className="my-3">

            <Accordion >
            {
                localStorage.getItem("items") != null ? (myDataLocal.map((item,index)=>{
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
                                                className="btn btn-info"
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