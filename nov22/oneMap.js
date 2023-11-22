import React, { Component } from 'react'
class OneMap extends Component {
    state = { 
        cities:["ktdm","kmm","hyd"]
     } 
    render() { 
        return (
            <div>
                {
                    this.state.cities.map(
                       each=><div>{ each }</div> 
                    )
                }
            </div>
        );
    }
}
 
export default OneMap;