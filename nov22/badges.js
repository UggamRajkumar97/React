import React, { Component } from 'react'
class Badges extends Component {
    state = {  } 
    getBadgeDanger() {
        return "badge bg-warning";
    }

    render() {  
        const sus='badge bg-success';
        return (
            <div>
                <span className='badge bg-danger'>Danger</span>
                <span className={sus}>Success</span>
                <span className={this.getBadgeDanger()}>Warning</span>
            </div>
        );
    }
}
 
export default Badges;