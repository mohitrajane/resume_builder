import React from 'react';
import {useSelector, useDispatch} from 'react-redux';
import ButtonGroup from 'react-bootstrap/ButtonGroup';
import Button from 'react-bootstrap/Button'
import EducationItem from './EducationItem';
import {updateCurrentEducation} from "../../action";
// institution:'',start:'',end: '',degree: ''
const Education = () =>{
    const educationData = useSelector(state => state.education.items);
    const selectedEducation = useSelector(state => state.education.current);
    const dispatcher = useDispatch();
    let itemShow;
    const currentItem = () =>{
        //NEED refactoring 
        educationData.map((item) =>{
            switch(item.id){
                    case selectedEducation:
                        itemShow =item.id;
                        //Not working when retuened here
                        break;
                    default:
                        break;
            }
        });
        if(itemShow !== undefined){
            return(<EducationItem key={itemShow} item={educationData[itemShow]}/>);
        }
        else{
            return <EducationItem />;
        }
    };
    return(
        <>
            {
                educationData.length === 0?
                <div className="mx-2">
                    <ButtonGroup className="mx-auto">
                        <Button key={'0'} variant="secondary">Default</Button>
                    </ButtonGroup>
                </div>:
                <div className="mx-2">
                    <ButtonGroup className="d-flex flex-cloumn" aria-label="Basic example">
                    {educationData.map((item)=>(
                        <>
                                <Button key={item.id} id={item.id} variant="secondary" onClick={(e)=>{dispatcher(updateCurrentEducation(e.target.id))}}>{item.institution}</Button>
                        </>
                    ))}
                    </ButtonGroup>
                </div>
            }
           {currentItem()}
           <div className="mx-3 my-4">
               <Button variant="outline-primary" onClick={addEducation}>Add Item</Button>
           </div>

        </>
    );
};

export default Education;