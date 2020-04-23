import React from 'react';
import Tags from "@yaireo/tagify/dist/react.tagify" ;
import {useDispatch} from 'react-redux';
import {addSkill} from '../../action';

const Skills = () =>{
    const dispatcher = useDispatch();
    const callback = (e) =>{
        let data = e.detail.tagify.value;
        let skillArray = [];
        // console.log(data);
        data.map((skill)=>(skillArray.push(skill.value)))
        console.log(skillArray);
        dispatcher(addSkill(skillArray));
        return 0;
    };
    let settings={
        blacklist: ["xxx", "yyy", "zzz"],
        // maxTags: 6,
        backspace: "edit",
        placeholder: "Type your skills",
        whitelist:['python','javascript','c++','php','html','css','ruby','R','golang'],
        dropdown: {
          enabled: 0 // a;ways show suggestions dropdown
        },
        callbacks: {
            add:callback,
            remove:callback,
            "edit:updated":callback
            // "edit:start":callback,
            // "edit:input":callback
        }
      };
    return(
        <>
            <Tags
                settings={settings}
                // onChange={e => console.log("CHANGED:", e)}
             />
        </>
    );

};

export default Skills;