
import './App.css';
import React from 'react';
// import Function from './component/Function'
// import Class from './component/Class';
import About from './component/About';

function App() {
  return (
    <div className="App" style={{display:'flex',justifyContent:'space-around'}}>
      {/* <Function name={'Functional component'}/> */}
      {/* <Class name={'Class component'} location={'Indore'} contact={'class@gmail.com'}/> */}
      <About></About>
    </div>
  );
}

export default App;
