import React, {useState} from 'react';
import Button from 'react-bootstrap/Button';
import {useSelector,useDispatch} from 'react-redux';
import { addEducation, removeEducation, updateEducation } from '../../action';

const EducationItem = (props) => {
    const length = useSelector(state => state.education.items.length);
    const noOfItems = (length === 0) ? '0' :length.toString();
    const dispatcher = useDispatch();
    const [institution,setInstitution] = useState(props.item?props.item.institution:'');
    const [start,setStart] = useState(props.item? props.item.start: '');
    const [end,setEnd] = useState(props.item?props.item.end : '');
    const [degree,setDegree] = useState(props.item?props.item.degree: '');
    const id = useState(props.item?props.item.id: '')[0];
    const active = useState(props.item?true:false)[0];
    const renderButton =()=>(
        active?
            (
                <>
                    <Button variant="outline-primary" onClick={() => dispatcher(updateEducation({
                        id: id,
                        institution:institution,
                        start:start,
                        end:end,
                        degree:degree, }))}>
                        Update Item
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
    return(
        <>
                <div className="d-flex flex-column">
                    <form>
                        <div className="my-2 d-flex col-lg-10 flex-column">
                                <span className="font-weight-light text-uppercase pb-1">Institution Name</span>
                                <input type="text" placeholder="Good College" value={institution} onChange={(e)=>setInstitution(e.target.value)} required></input>
                            </div>
                            <div className="my-2 d-flex col-lg-10 flex-column">
                                <span className="font-weight-light text-uppercase pb-1">Start Date</span>
                                <input type="text" placeholder="Aug 2016" value={start} onChange={(e)=>setStart(e.target.value)}></input>
                            </div>
                            <div className="my-2 d-flex col-lg-10 flex-column">
                                <span className="font-weight-light text-uppercase pb-1">End Date</span>
                                <input type="text" placeholder="Aug 2020" value={end} onChange={(e)=>setEnd(e.target.value)}></input>
                            </div>
                            <div className="my-2 d-flex col-lg-10  flex-column">
                                <span className="font-weight-light text-uppercase pb-1">Degree</span>
                                <input type="text" placeholder="Good degree" value={degree} onChange={(e)=>setDegree(e.target.value)}></input>
                            </div>
                            <div className="mx-3 my-4 col-lg-12">
                                {renderButton()}
                        </div>
                    </form>
                </div>
      </>
    );
}
export default EducationItem;