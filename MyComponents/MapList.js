import React, { Component } from 'react'
class MapList extends Component {
    state = {
        emp:[
            {
                "id": 101,
                "name": "Abdul",
                "dept": "IT",
                "salary":45000
            },
            {
                "id": 102,
                "name": "John",
                "dept": "Sales",
                "salary":25000
            },
            {
                "id": 103,
                "name": "Ramu",
                "dept": "Admin",
                "salary":15000
            },
        ]
      } 
    render() { 
        return (
        <table className="table">
        <thead>
            <tr>
            <th scope="col">ID</th>
            <th scope="col">Name</th>
            <th scope="col">Dept</th>
            <th scope="col">Salary</th>
            </tr>
        </thead>
        <tbody>
        {this.state.emp.map(
            each=>
                <tr>
                    <td >{each.id}</td>
                    <td>{each.name}</td>
                    <td>{each.dept}</td> 
                    <td>{each.salary}</td> 
                </tr>     
            )
            }
        </tbody>
        </table>
        );
    }
}
 
export default MapList;