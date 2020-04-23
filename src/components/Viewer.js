import React from 'react';
import {useSelector} from 'react-redux';

function Viewer(){
    const a4Style ={
        width: "21cm",
        'height': "29.6cm",
    };
    const profile = useSelector(state => state.profile);
    const education = useSelector(state =>state.education.items);
    const experience = useSelector(state => state.experience.items);
    const skills = useSelector(state => state.skills.items);


    return(
        <div className="min-vh-100 w-100">
            <div id="resume" style={a4Style} className="shadow mx-auto my-5 p-5">
                <div id="profile" className="d-flex">
                    <div className="w-100">
                        <h1>{profile.firstName+' '+profile.lastName}</h1>
                        <div className="d-flex flex-column">
                            <span class="font-weight-light">{profile.addressLine1}</span>
                            <span class="font-weight-light">{profile.addressLine2}</span>
                            <span class="font-weight-light">{profile.addressLine3}</span>
                        </div>
                    </div>
                    <div className="flex-shrink-1 my-auto">
                        <p>{profile.phone}</p>
                        <p>{profile.email}</p>
                    </div>
                </div>
                <hr/>
                <h6 className="p-2">Work Experience</h6>
                <div id="experience" className="d-flex flex-column">
                    {experience.map((item)=>(
                        <div className="d-flex w-100 p-4">
                            <div className="w-100" key={item.id}>
                                <h5 className="mb-0">{item.company}</h5>
                                <span className="font-weight-light" style={{fontSize:'0.75rem'}}>{item.designation}</span>
                            </div>
                            <div className="flex-shrink-0">
                                <p className="font-weight-light" style={{fontSize:'0.75rem'}}>{item.start} - {item.end}</p>
                            </div>
                        </div>
                    ))}
                </div>
                <hr/>
                <h6 className="p-2">Education</h6>
                <div id="education" className="d-flex flex-column">
                    {education.map((item)=>(
                        <div className="d-flex w-100 p-4">
                            <div className="w-100" key={item.id}>
                            <h5 className="mb-0">{item.institution}</h5>
                            <span className="font-weight-light" style={{fontSize:'0.75rem'}}>{item.degree}</span>
                            </div>
                            <div className="flex-shrink-0">
                            <p className="font-weight-light" style={{fontSize:'0.75rem'}}>{item.start} - {item.end}</p>
                            </div>
                        </div>
                    ))}
                </div>
                <hr/>
                <h6 className="p-2">Skills</h6>
                <div id="skills" className="d-flex">
                    {skills.map((item)=>(
                        <p className="badge badge-primary mx-2">
                            {item}
                        </p>
                    ))}
                </div>
            </div>
        </div>
    )
}

export default Viewer;