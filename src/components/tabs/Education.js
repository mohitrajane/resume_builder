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
            return(
                <>
                    <EducationItem key={itemShow} item={educationData[itemShow]}/>
                    <EducationItem/>
                </>
            );
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
                        <Button key={'0'} variant="secondary" onClick={(e)=>{dispatcher(updateCurrentEducation(e.target.id))}}>Default</Button>
                    </ButtonGroup>
                </div>:
                <div className="mx-2">
                    <ButtonGroup className="d-flex " aria-label="Basic example">
                    {educationData.map((item)=>(
                        <>
                                <Button key={item.id} id={item.id} variant="secondary" onClick={(e)=>{dispatcher(updateCurrentEducation(e.target.id))}}>{item.institution}</Button>
                        </>
                    ))}
                    <Button key={educationData.length+1} id={educationData.length+1}  onClick={(e)=>{dispatcher(updateCurrentEducation(e.target.id))}} variant="secondary">Default</Button>
                    </ButtonGroup>
                </div>
            }
           {currentItem()}

        </>
    );
};

export default Education;