import React, {useState} from 'react';
import Button from 'react-bootstrap/Button';
import {useSelector,useDispatch} from 'react-redux';
import {addExperience} from "../../action";
const ExperienceItem = (props) =>{
    const length = useSelector(state => state.experience.items.length);
    const noOfItems = (length === 0) ? '0' :length.toString();
    const dispatcher = useDispatch();
    const [company,setCompany] = useState('');
    const [start,setStart] = useState('');
    const [end,setEnd] = useState('');
    const [designation, setDesignation] = useState('');
    return(
       <>
             {/* <div className="d-flex flex-column"> */}
                <div className="d-flex flex-column">
                            <div className="my-2 d-flex flex-column">
                                <span>Company Name</span>
                                <input type="text" value={props.item?props.item.company:undefined} onChange={(e)=>setCompany(e.target.value)}></input>
                            </div>
                            <div className="my-2 d-flex flex-column">
                                <span>Start Date</span>
                                <input type="text" value={props.item? props.item.start:undefined} onChange={(e)=>setStart(e.target.value)}></input>
                            </div>
                            <div className="my-2 d-flex flex-column">
                                <span>End Date</span>
                                <input type="text" value={props.item?props.item.end : undefined} onChange={(e)=>setEnd(e.target.value)}></input>
                            </div>
                            <div className="my-2 d-flex flex-column">
                                <span>Designation</span>
                                <input type="text"value={props.item?props.item.designation: undefined} onChange={(e)=>setDesignation(e.target.value)}></input>
                            </div>
                    </div>
            {/* </div> */}
            <div className="mx-3 my-4">
            <Button variant="outline-primary" onClick={() => dispatcher(addExperience({
                id: noOfItems,
                company:company,
                start:start,
                end:end,
                designation:designation
                }))}
                >Add Item
            </Button>
            <Button className="ml-2" variant="outline">
               <span className="text-danger"> Delete Item</span>
            </Button>
        </div>
       </>
    );
};

export default ExperienceItem;