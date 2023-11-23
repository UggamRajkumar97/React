import React, { Component } from 'react'
import Employee from "../Noe23Table/TableData"
class deleteRecord extends Component {
    state = { 
        mp:Employee
     } 
     deleteRecord=record=>{
        const filterData=this.state.mp.filter(eachmp=>eachmp.name !== record.name)
        this.setState({mp:filterData})
     }
    render() { 
        return (
            
        <table className="table">
            <thead>
                <tr>
                <th scope="col">Id</th>
                <th scope="col">Name</th>
                <th scope="col">Salary</th>
                <th scope="col">Handle</th>
                </tr>
            </thead>
            <tbody>
                {
                    this.state.mp.map(
                        emp=><tr>
                            <th scope="row">{emp.id}</th>
                            <td>{emp.name}</td>
                            <td>{emp.salary}</td>
                            <td>
                            <button onClick={()=>this.deleteRecord(emp)} className='btn btn-warning'>Remove</button>
                            </td>
                            </tr>
                    )
                }
                
            </tbody>
        </table>
        );
    }
}
 
export default deleteRecord;