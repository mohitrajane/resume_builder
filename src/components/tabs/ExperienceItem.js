import React, {useState} from 'react';
import Button from 'react-bootstrap/Button';
import {useSelector,useDispatch} from 'react-redux';
import {addExperience, updateExperience} from "../../action";
const ExperienceItem = (props) =>{
    const length = useSelector(state => state.experience.items.length);
    const noOfItems = (length === 0) ? '0' :length.toString();
    const dispatcher = useDispatch();
    const [company,setCompany] = useState(props.item?props.item.company:undefined);
    const [start,setStart] = useState(props.item? props.item.start:undefined);
    const [end,setEnd] = useState(props.item?props.item.end : undefined);
    const [designation, setDesignation] = useState(props.item?props.item.designation: undefined);
    const [id,SetId] = useState(props.item?props.item.id:undefined);
    const [active,setActive] = useState(props.item?true:false);
    const renderButton =()=>(
        active?
           <>
                 <Button variant="outline-primary" onClick={() => dispatcher(updateExperience({
                id: id,
                company:company,
                start:start,
                end:end,
                designation:designation,
                active:'true'
                }))}
                >Update Item
                </Button>
                <Button className="ml-2" variant="outline">
                <span className="text-danger"> Delete Item</span>
                </Button>
           </>
            :
            <Button variant="outline-primary" onClick={() => dispatcher(addExperience({
                id: noOfItems,
                company:company,
                start:start,
                end:end,
                designation:designation,
                active:'true'
                }))}
                >Add Item
            </Button>
    )
    return(
       <>
                <div className="d-flex flex-column">
                            <div className="my-2 d-flex col-lg-10 flex-column">
                                <span>Company Name</span>
                                <input type="text" value={company} onChange={(e)=>setCompany(e.target.value)}></input>
                            </div>
                            <div className="my-2 d-flex col-lg-10 flex-column">
                                <span>Start Date</span>
                                <input type="text" value={start} onChange={(e)=>setStart(e.target.value)}></input>
                            </div>
                            <div className="my-2 d-flex col-lg-10 flex-column">
                                <span>End Date</span>
                                <input type="text" value={end} onChange={(e)=>setEnd(e.target.value)}></input>
                            </div>
                            <div className="my-2 d-flex col-lg-10 flex-column">
                                <span>Designation</span>
                                <input type="text"value={designation} onChange={(e)=>setDesignation(e.target.value)}></input>
                            </div>
                    </div>
            <div className="mx-3 my-4 col-lg-12">
                {renderButton()}
            </div>
       </>
    );
};

export default ExperienceItem;