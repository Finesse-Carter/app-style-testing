import React from "react";

const Content = (props) =>{
    console.log(props)
    
    return(
        <div className='content' >
    {
props.course.part.name.forEach(element => <p> {element}</p>)
}

        </div>
    )
}

export default Content