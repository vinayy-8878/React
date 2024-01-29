import React, { Component } from 'react'
import Class from './Class'

 class About extends Component {
    constructor(props) {
        super(props);
        //console.log('Parent Constructor called');
      }
      componentDidMount(){
      //  console.log('Parent Components did mount called')
      }
  render() {
    //console.log('Parent Render called')
    return (
      <div>
        <h1 style={{color:'brown'}}>Learning about class base components</h1>
        {/* <Class  name={'Bhavya Maheshwari'} location={'Indore'} contact={'class@gmail.com'}></Class>
        <Class name={'Vinay Rathi'} location={'Indore'} contact={'class@gmail.com'}/> */}
        <Class /> 
      </div>
    )
  }
}

export default About
// Parent Constructor called
// Parent Render called
// Bhavya Maheshwari Constructor called
// Bhavya Maheshwari Render called
// Vinay Rathi Constructor called
// Vinay Rathi Render called
// Bhavya Maheshwari Components did mount called
// Vinay Rathi Components did mount called
// Parent Components did mount called