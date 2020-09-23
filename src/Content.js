import React from "react";

const Content = (props) =>{
    console.log(props)
    return(
        <div className='content' >
<p>{props.parts}</p>
        </div>
    )
}

export default Content