import React, { Component } from 'react'
// rcc

export default class MyClassComponent extends Component {

  constructor(props){
    super(props);
    console.log("1️⃣ Constructor: Initial Setup");
    this.state = {count: 0}
  }
   
  componentDidMount(){
    console.log("3️⃣ componentDidMount: Component added to DOM first time");  
  }

  componentDidUpdate(prevProp, prevState){
    console.log("4️⃣ componentDidUpdate: State/props change ", prevState); 
  }

  componentWillUnmount(){
    console.log("5️⃣ componentWillUnmount: component removed from DOM");
    
  }
  render() {
    console.log("2️⃣ Render: UI Render");
    
    return (
      <div>
                <h1>Class Component</h1>

        <h4>Count: {this.state.count}</h4>
        <button
        onClick={()=>{this.setState({count:this.state.count + 1})}}
        >Increase</button>
        <button
        onClick={()=>{this.setState({count:this.state.count - 1})}}
        >
          Decrease
        </button>
      </div>
    )
  }
}
