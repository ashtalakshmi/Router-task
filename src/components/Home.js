import React, { Component } from 'react';

class Home extends Component{
    constructor(props){
        super(props)
        this.state={
            lessclick:false,
            moreclick:true
        }
    }

    handlemore=()=>{
this.setState({
    lessclick:true,
    moreclick:false,
})
    }
    
    handleless=()=>{
        this.setState({
            lessclick:false,
            moreclick:true,
        })
            }
    render(){
        return(
            <>
            <div className="container">
            <h1 className="display-3">Hello!</h1>
            <p>This is a template for a simple marketing or informational website. It includes a large callout called a jumbotron and three supporting pieces of content. Use it as a starting point to create something more unique.</p>
            {this.state.moreclick?<p><a className="btn btn-primary btn-lg" href="#" role="button" onClick={this.handlemore}>Learn more »</a></p>:""}
            {this.state.lessclick?<p><a className="btn btn-primary btn-lg" href="#" role="button" onClick={this.handleless}>Learn less »</a></p>:""}
            {this.state.lessclick?<div class="row home">
          <div className="col-lg-4">
            <h2>Heading</h2>
            <p>Donec id elit non mi porta gravida at eget metus. Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum nibh, ut fermentum massa justo sit amet risus. Etiam porta sem malesuada magna mollis euismod. Donec sed odio dui. </p>
            <p><a className="btn btn-secondary" href="#" role="button">View details »</a></p>
          </div>
          <div class="col-lg-4">
            <h2>Heading</h2>
            <p>Donec id elit non mi porta gravida at eget metus. Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum nibh, ut fermentum massa justo sit amet risus. Etiam porta sem malesuada magna mollis euismod. Donec sed odio dui. </p>
            <p><a className="btn btn-secondary" href="#" role="button">View details »</a></p>
          </div>
          <div class="col-lg-3">
            <h2>Heading</h2>
            <p>Donec sed odio dui. Cras justo odio, dapibus ac facilisis in, egestas eget quam. Vestibulum id ligula porta felis euismod semper. Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum nibh, ut fermentum massa justo sit amet risus.</p>
            <p><a className="btn btn-secondary" href="#" role="button">View details »</a></p>
          </div>
         
        </div>:""}
            </div>
            
            </>
        )
    }
}
export default Home;