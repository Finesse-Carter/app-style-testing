import React from 'react';
import Content from './Content';
import Header from './Header';


const App = () =>{
  const course = {
  name:'Half Stack application development',
   part: [
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
  }
  ]
}
  return(
  <div className="App">
<Header course={course.name}/>
 <Content course={course.part.name} />
     </div>
)
}

export default App;
