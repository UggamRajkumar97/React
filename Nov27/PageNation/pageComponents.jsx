import React, { Component } from 'react'
import PageData from './unoPage';
import { getData } from './pageData';
import _ from 'lodash';

class Page extends Component {
    state = { 
        perPage:2,
        std: getData(),
        currentPage:1
     } 
     pageClick=page=>{
        console.log(page+'  Clicked')
        this.setState({currentPage:page})
     }
     pageFilterRecords() {
        const startIndex = ( this.state.currentPage - 1) * this.state.perPage;
        return _(this.state.std)
          .slice(startIndex)
          .take(this.state.perPage)
          .value();
      
    }
    render() { 
        // const allstuPerPage = this.pageFilterRecords();
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
                    this.pageFilterRecords().map(
                        eachStd=> <tr>
                        <th scope="row">{eachStd.id}</th>
                        <td>{eachStd.name}</td>
                        <td>{eachStd.age}</td>
                        </tr>
                    )
                }
            </tbody>
            </table>
            <PageData totalData={this.state.std.length} 
            pageCount={this.state.perPage} 
            pageChange={this.pageClick}></PageData>
            </div>
        );
    }
}
 
export default Page;