import React from 'react';
import Tags from "@yaireo/tagify/dist/react.tagify" ;
import {useDispatch, useSelector} from 'react-redux';
import {addSkill} from '../../action';

// Cant delete items when custom label is added something
const Skills = () =>{
    const dispatcher = useDispatch();
    const skills = useSelector(state => state.skills.items);
    const callback = (e) =>{
        let data = e.detail.tagify.value;
        let skillArray = [];
        data.map((skill)=>(skillArray.push(skill.value)))
        dispatcher(addSkill(skillArray));
    };
    let settings={
        backspace: "edit",
        placeholder: "Type your skills",
        whitelist:[
            'python',
            'javascript',
            'c++',
            'php',
            'html',
            'css',
            'ruby',
            'R',
            'golang'
        ],
        dropdown: {
          enabled: 0 // always show suggestions dropdown
        },
        callbacks: {
            add:callback,
            remove:callback,
            "edit:updated":callback
        }
      };
    return(
        <>
            <Tags
                settings={settings}
                value={skills}
             />
        </>
    );
};

export default Skills;