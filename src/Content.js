import React from "react";
const Content = () =>{

    // console.log(props)
    const part = ['Fundamentals of React','Using props to pass data','State of a component']
    const names =part.map(element => <p> {element}</p>);
    console.log(names);

    return(
        <div className='content' >
 {names}
        </div>
    )
}

export default Content