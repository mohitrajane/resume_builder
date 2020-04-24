import React, {useState} from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import {useSelector,useDispatch} from 'react-redux';
import { addEducation, removeEducation, updateEducation } from '../../action';

const EducationItem = (props) => {
    const length = useSelector(state => state.education.items.length);
    const noOfItems = (length === 0) ? '0' :length.toString();
    const dispatcher = useDispatch();
    const [institution,setInstitution] = useState(props.item?props.item.institution:undefined);
    const [start,setStart] = useState(props.item? props.item.start:undefined);
    const [end,setEnd] = useState(props.item?props.item.end : undefined);
    const [degree,setDegree] = useState(props.item?props.item.degree: undefined);
    const [id,SetId] = useState(props.item?props.item.id:undefined);
    const [active,setActive] = useState(props.item?true:false);
    const [validated, setValidated] = useState(false);
    const renderButton =()=>(
        active?
            (
                <>
                      <Button variant="outline-primary" onClick={() => dispatcher(updateEducation({
                        id: id,
                        institution:institution,
                        start:start,
                        end:end,
                        degree:degree,
                        }))}
                        >Update Item
                    </Button>
                    <Button className="ml-2" variant="outline" onClick={() =>props.item?dispatcher(removeEducation(props.item.id)):undefined}>
                    <span className="text-danger"> Delete Item</span>
                    </Button>
                </>
            )
            :
            <Button variant="outline-primary" onClick={() => dispatcher(addEducation({
                id: noOfItems,
                institution:institution,
                start:start,
                end:end,
                degree:degree,
                }))}
                >Add Item
            </Button>
    )
    const handleSubmit = (event) => {
      const form = event.currentTarget;
      if (form.checkValidity() === false) {
        event.preventDefault();
        event.stopPropagation();
      }
    };
    return(
        <>
            {/* <div className="d-flex flex-column"> */}
                <div className="d-flex flex-column">
                    <form  onSubmit={handleSubmit}>
                        <div className="my-2 d-flex col-lg-10 flex-column">
                                <span>Institution Name</span>
                                <input type="text" value={institution} onChange={(e)=>setInstitution(e.target.value)} required></input>
                            </div>
                            <div className="my-2 d-flex col-lg-10 flex-column">
                                <span>Start Date</span>
                                <input type="text" value={start} onChange={(e)=>setStart(e.target.value)}></input>
                            </div>
                            <div className="my-2 d-flex col-lg-10 flex-column">
                                <span>End Date</span>
                                <input type="text" value={end} onChange={(e)=>setEnd(e.target.value)}></input>
                            </div>
                            <div className="my-2 d-flex col-lg-10  flex-column">
                                <span>Degree</span>
                                <input type="text"value={degree} onChange={(e)=>setDegree(e.target.value)}></input>
                            </div>
                            <div className="mx-3 my-4 col-lg-12">
                                {renderButton()}
                        </div>
                    </form>
                </div>
            {/* </div> */}
      </>
    );
}
export default EducationItem;