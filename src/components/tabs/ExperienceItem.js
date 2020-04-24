import React, {useState} from 'react';
import Button from 'react-bootstrap/Button';
import {useSelector,useDispatch} from 'react-redux';
import {addExperience, updateExperience, removeExperience} from "../../action";
const ExperienceItem = (props) =>{
    const length = useSelector(state => state.experience.items.length);
    const noOfItems = (length === 0) ? '0' :length.toString();
    const dispatcher = useDispatch();
    const [company,setCompany] = useState(props.item?props.item.company:'');
    const [start,setStart] = useState(props.item? props.item.start:'');
    const [end,setEnd] = useState(props.item?props.item.end : '');
    const [designation, setDesignation] = useState(props.item?props.item.designation: '');
    const id = useState(props.item?props.item.id:'')[0];
    const active = useState(props.item?true:false)[0];
    const renderButton =()=>(
        active?
           <>
                 <Button variant="outline-primary" onClick={() => dispatcher(updateExperience({
                key:id,
                id: id,
                company:company,
                start:start,
                end:end,
                designation:designation,
                }))}
                >Update Item
                </Button>
                <Button className="ml-2" variant="outline" onClick={() =>dispatcher(removeExperience(props.item.id))}>
                <span className="text-danger"> Delete Item</span>
                </Button>
           </>
            :
            <Button variant="outline-primary" onClick={() => dispatcher(addExperience({
                key:noOfItems,
                id: noOfItems,
                company:company,
                start:start,
                end:end,
                designation:designation,
                }))}
                >Add Item
            </Button>
    )
    return(
       <>
                <div className="d-flex flex-column">
                    <form>
                            <div className="my-2 d-flex col-lg-10 flex-column">
                                <span>Company Name</span>
                                <input type="text" placeholder="Good Company" value={company} onChange={(e)=>setCompany(e.target.value)}></input>
                            </div>
                            <div className="my-2 d-flex col-lg-10 flex-column">
                                <span>Start Date</span>
                                <input type="text" placeholder="Jan 20xx" value={start} onChange={(e)=>setStart(e.target.value)}></input>
                            </div>
                            <div className="my-2 d-flex col-lg-10 flex-column">
                                <span>End Date</span>
                                <input type="text" placeholder="June 20xx" value={end} onChange={(e)=>setEnd(e.target.value)}></input>
                            </div>
                            <div className="my-2 d-flex col-lg-10 flex-column">
                                <span>Designation</span>
                                <input type="text" placeholder="position" value={designation} onChange={(e)=>setDesignation(e.target.value)}></input>
                            </div>
                    </form>
                </div>
            <div className="mx-3 my-4 col-lg-12">
                {renderButton()}
            </div>
       </>
    );
};

export default ExperienceItem;