import React, { Component } from 'react';
import {Link,Outlet} from 'react-router-dom'

class Details extends Component{
    render(){
        return(
            <>
            
            <div className="detailsforms">
            <h1>Details Form</h1>
            <p>React Bootstrap is maintained by a <a href="https://github.com/orgs/react-bootstrap/people">team of developers</a> on Github. We have a growing team
and if you are interested in re-building the most popular front-end framework with React we would love to hear from you.</p>
            <Link to='/details/content1' className="deatilsstyle">Content1</Link>
            <Link to='/details/content2' className="deatilsstyle">Content2</Link>
            <Link to='/details/content3' className="deatilsstyle">Content3</Link>
            </div>
            <Outlet/>
            </>
        )
    }
}
export default Details;