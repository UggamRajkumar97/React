import React, { Component, useState } from 'react'
class Events extends Component {

    state = { 
        count:0
     } 
     incrementButton=()=>{
        if(this.state.count<10){
            this.setState({count:this.state.count+1})
        }
        
     }
     decrementButton=()=>{
        if(this.state.count>0){
            this.setState({count:this.state.count-1})
        }
       
     }
    render() { 

        return (
            <div>
                <button className='badge bg-primary' onClick={this.decrementButton}>-</button>
                <span className='badge bg-success m-2'>{this.state.count}</span>
                <button className='badge bg-primary' onClick={this.incrementButton}>+</button>

            </div>
        );
    }
}
 
export default Events;