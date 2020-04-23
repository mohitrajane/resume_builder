import React, {useState} from 'react';
import Button from 'react-bootstrap/Button';
import {useSelector,useDispatch} from 'react-redux';
import { addEducation } from '../../action';

const EducationItem = (props) => {
    const length = useSelector(state => state.education.items.length);
    const noOfItems = (length === 0) ? 0 :(length+1);
    const dispatcher = useDispatch();
    const [institution,setInstitution] = useState('');
    const [start,setStart] = useState('');
    const [end,setEnd] = useState('');
    const [degree,setDegree] = useState('');
    return(
        <>
            <div className="d-flex flex-column">
                <div className="d-flex  col-lg-12 flex-column">
                            <div className="my-2 d-flex flex-column">
                                <span>Institution Name</span>
                                <input type="text" value={props.item?props.item.institution:undefined} onChange={(e)=>setInstitution(e.target.value)}></input>
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
                                <span>Degree</span>
                                <input type="text"value={props.item?props.item.degree: undefined} onChange={(e)=>setDegree(e.target.value)}></input>
                            </div>
                    </div>
            </div>
            <div className="mx-3 my-4">
            <Button variant="outline-primary" onClick={() => dispatcher(addEducation({
                id: noOfItems,
                institution:institution,
                start:start,
                end:end,
                degree:degree
                }))}
                >Add Item
            </Button>
        </div>
      </>
    );
}
export default EducationItem;