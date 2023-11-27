import React, { Component } from 'react'
import PageData from './unoPage';

class Page extends Component {
    state = { 
        perPage:3,
        std:[
            {
                "id":101,
                "name":"Karna",
                "age":25
            },
            {
                "id":102,
                "name":"Dharma",
                "age":25
            },
            {
                "id":103,
                "name":"Bheema",
                "age":25
            },
            {
                "id":104,
                "name":"Arjuna",
                "age":25
            },
            {
                "id":105,
                "name":"Nakula",
                "age":25
            },
            {
                "id":106,
                "name":"Sahadev",
                "age":25
            },
            {
                "id":107,
                "name":"Duryodhana",
                "age":25
            },
            {
                "id":108,
                "name":"Dhusyasana",
                "age":25
            }
        ]
     } 
    render() { 
        return (
            <div>
                <table class="table">
            <thead>
                <tr>
                <th scope="col">ID</th>
                <th scope="col">Name</th>
                <th scope="col">Age</th>
                </tr>
            </thead>
            <tbody>
                {
                    this.state.std.map(
                        eachStd=> <tr>
                        <th scope="row">{eachStd.id}</th>
                        <td>{eachStd.name}</td>
                        <td>{eachStd.age}</td>
                        </tr>
                    )
                }
            </tbody>
            </table>
            <PageData totalData={this.state.std.length} pageCount={this.state.perPage}></PageData>
            </div>
        );
    }
}
 
export default Page;