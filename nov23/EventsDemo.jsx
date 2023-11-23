import React, { Component, useState } from 'react'
class Events extends Component {

    state = { 
        count:0
     } 
     pressButton=()=>{
        this.setState({count:this.state.count+1})
     }
    render() { 
        
        return (
            <div>
                <span className='badge bg-success m-4'>{this.state.count}</span>
                <button className='badge bg-primary' onClick={this.pressButton}>Increment</button>
            </div>
        );
    }
}
 
export default Events;