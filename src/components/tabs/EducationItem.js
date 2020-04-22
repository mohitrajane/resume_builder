import React from 'react';

const EducationItem = (props) => {
    return(
        <div className="d-flex flex-column">
              <div className="d-flex  col-lg-12 flex-column">
                        <div className="my-2 d-flex flex-column">
                            <span>Institution Name</span>
                            <input type="text" value={props.item?props.item.institution:''} ></input>
                        </div>
                        <div className="my-2 d-flex flex-column">
                            <span>Start Date</span>
                            <input type="text" value={props.item? props.item.start:''}></input>
                        </div>
                        <div className="my-2 d-flex flex-column">
                            <span>End Date</span>
                            <input type="text" value={props.item?props.item.end : ''}></input>
                        </div>
                        <div className="my-2 d-flex flex-column">
                            <span>Degree</span>
                            <input type="text"value={props.item?props.item.degree: ''}></input>
                        </div>
                </div>
            {/* <p>{props.item.institution}</p>
            <p>{props.item.start}</p>
            <p>{props.item.end}</p>
            <p>{props.item.degree}</p> */}



        </div>
    );
}
export default EducationItem;