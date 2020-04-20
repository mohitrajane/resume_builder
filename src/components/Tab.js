import React from 'react'

const  Tab = (props) => {
    return(
        <div className="m-1">
            {props.current === true? <span className="badge p-2 badge-primary btn-sm">{props.tab}</span> : <span className="badge p-2 badge-light font-weight-normal">{props.tab}</span>}
        </div>
    )
}
export default Tab;