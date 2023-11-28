import React, { Component } from 'react'
import _ from 'lodash'
class PageData extends Component {
    state = {  } 
    render() {
        const pages=this.props.totalData/this.props.pageCount
       const num= _.range(1,pages+1)
        return (
        <nav aria-label="Page navigation example">
        <ul class="pagination">
            {num.map((each)=>{
                return(
                    <li  onClick={()=>this.props.pageChange(each)} class="page-item"><a class="page-link">{each}</a></li>
                )
            })}

        </ul>
        </nav>
        );
    }
}
 
export default PageData;