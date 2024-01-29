// Class.js
import React, { Component } from 'react';

class Class extends Component {
  constructor(props) {
    super(props);

    // this.state={
    //     count:0,
    // }
    this.state={
        userInfo:{
            name:'Dummy name',
            id:"undefined",
            avatar_url:'null',
        }
    }
    console.log(this.state.userInfo.name +' Constructor called');
  }
  async componentDidMount(){
    console.log(this.state.userInfo.name +' Components did mount called')
    const data=await fetch('https://api.github.com/users/vinayy-8878')
    const json =await data.json()
    console.log(json)
    this.setState({
        userInfo:json
    })

  }
  componentDidUpdate(){
    console.log(this.state.userInfo.name  +' Component is updated')
  }
  componentWillUnmount(){
    debugger;
    console.log(this.state.userInfo.name  +' Component is unmounted')
  }
  render() {
   console.log(this.state.userInfo.name +' Render called');
   const {name,id,avatar_url}=this.state.userInfo;
    //const {name,location,contact}=this.props;
    return (
      <div style={{border:'1px solid black'}}>
        {/* <h1>Count:{this.state.count}</h1> */}
        {/* <button onClick={()=>{
            this.setState({
                count:this.state.count+1,
            })
        }}>Increase count</button> */}
        <h2>Name: {name}</h2>
        <h3>id: {id}</h3>
        <img src='avatar_url'></img>
        {/* <h4>Contact: {contact}</h4> */}
      </div>
    );
  }
}

export default Class;
