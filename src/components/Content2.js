import React, { Component } from 'react';
import {Table} from 'react-bootstrap'

class Content2 extends Component{
    render(){
        return(
            <>
            <h1 className="boot">Details Table </h1>
            <div className="tablesturcture">
            <Table className="table">
  <thead>
    <tr>
      <th scope="col">S.No</th>
      <th scope="col">First</th>
      <th scope="col">Last</th>
      <th scope="col">Designation</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <th scope="row">1</th>
      <td>Mark</td>
      <td>Otto</td>
      <td>Engineer</td>
    </tr>
    <tr>
      <th scope="row">2</th>
      <td>Jacob</td>
      <td>Thornton</td>
      <td>doctor</td>
    </tr>
    <tr>
      <th scope="row">3</th>
      <td colspan="2">Larry the Bird</td>
      <td>Architect</td>
    </tr>
  </tbody>
</Table>
</div>
            </>
        )
    }
}
export default Content2;