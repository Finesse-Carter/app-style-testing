import React from 'react';
import Header from './Header';


const App = () =>{
  const course = 'Half Stack application development'
  const part = [
     {
    name: 'Fundamentals of React',
    exercises: 10
  },
  {
    name: 'Using props to pass data',
    exercises: 7
  },
  {
    name: 'State of a component',
    exercises: 14
  },
  ]
  return(
  <div className="App">
<Header course={course}/>
     </div>
)
}

export default App;
