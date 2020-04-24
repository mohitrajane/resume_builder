import React from 'react';
import {useSelector, useDispatch} from 'react-redux';
import ButtonGroup from 'react-bootstrap/ButtonGroup';
import Button from 'react-bootstrap/Button';
import ExperienceItem from './ExperienceItem';
import { updateCurrentExperience } from '../../action';

const Experience = () =>{
    const experienceData = useSelector(state => state.experience.items);
    const selectedExperience = useSelector(state => state.experience.current);
    const dispatcher = useDispatch();
    let itemShow;
    const currentItem = () =>{
        //NEED refactoring 
        experienceData.map((item) =>{
            switch(item.id){
                    case selectedExperience:
                        itemShow =item.id;
                        //Not working when retuened here
                        break;
                    default:
                        break;
            }
            return 0;
        });
        if(itemShow !== undefined){
            return(
                <>
                    <ExperienceItem key={itemShow} item={experienceData[itemShow]}/>
                </>
            );
        }
        else{
            return <ExperienceItem />;
        }
    };
    return(
        <div className="d-flex  col-lg-12 mx-auto flex-column">
            {
                experienceData.length === 0?
                    <ButtonGroup className="mx-auto my-3">
                        <Button key={'0'} variant="secondary" onClick={(e)=>{dispatcher(updateCurrentExperience(e.target.id))}}>New</Button>
                    </ButtonGroup>
                    :
                    <ButtonGroup className="d-flex" aria-label="Basic example">
                    {experienceData.map((item)=>(
                        <>
                                <Button key={item.id} id={item.id} variant="secondary" onClick={(e)=>{dispatcher(updateCurrentExperience(e.target.id))}}>{item.company}</Button>
                        </>
                    ))}
                    <Button key={experienceData.length+1} id={experienceData.length+1}  onClick={(e)=>{dispatcher(updateCurrentExperience(e.target.id))}} variant="secondary">New</Button>
                    </ButtonGroup>
            }
           {currentItem()}

        </div>
    );
};

export default Experience;