import React, { Component } from 'react'
class PageComponent extends Component {
    state = { 
        counter:this.props.pageValue
     } 
    render() { 
        return (
            <div>
                <span className='badge bg-warning'>{this.state.counter}</span>
                <span className='badge bg-warning m-2'></span>
                <button className='btn btn-danger'>button</button>
            </div>
        );
    }
}
 
export default PageComponent;