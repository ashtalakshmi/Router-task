import React, { Component } from 'react';
import { Form, Button } from 'react-bootstrap';
import * as yup from 'yup';

const validateForm = errors => {
    let valid = true;
    Object.values(errors).forEach(val => val.length > 0 && (valid = false));
    return valid;
  };
class ArticleForm extends Component {
    constructor(props) {
        super(props)
        this.state = {
            Title: "",
            Description: "",
            Content: "",
            Publishdate: "",
            Category: "",
            Author: "",
            errTitle: false,
            errAuthor: false,
            errCategory: false,
            errContent: false,
            errDescription: false,
            errPublishedate: false,
            errors: {
                Title: '',
                Description: '',
               
              }
        }

    }
  debugger
     formschema= yup.object({
Title:yup.string().required(),
Description:yup.string(),
Content:yup.string().required(),

    })
    
   
    handleinputchange = (event) => {
        debugger
        event.preventDefault(); 
         const { name, value } = event.target;
        let errors = this.state.errors;
        switch (name) {
            case 'Title': 
              errors.Title = 
                value.length < 5
                  ? 'Title required'
                  : '';
              break;
            case 'Description': 
              errors.Description = 
              value.length < 6
              ? 'Description required'
              : '';
              break;
            
            default:
              break;
          }
      
        //   this.setState({errors, [name]: value});
        this.setState({
            [name]: value,
            errors
        })
    }
    handleSubmit = (event) => {
        debugger
        event.preventDefault();
        if(validateForm(this.state.errors)) {
          console.info('Valid Form')
        }
        else{
          console.error('Invalid Form')
        }
      }
    
    render() {
        const {errors}= this.state
        return (
            <>
                <h1 className="article">Article Form</h1>
                <div className="row">
                    <div className="col-lg-4">
                    </div>
                    <div className="col-lg-4 artck">

                        <Form>
                            <Form.Group className="mb-3 col-lg-12" controlId="formBasicEmail">
                                <Form.Label>Title</Form.Label>
                                <Form.Control type="text" name="Title" value={this.state.Title} onChange={(e) => { this.handleinputchange(e) }} placeholder="Enter title" />
                            </Form.Group>
                            {errors.Title.length > 0 && 
                <span className='error'>{errors.Title}</span>}
                            <Form.Group className="mb-3  col-lg-12" controlId="formBasicEmail">
                                <Form.Label>Short Description</Form.Label>
                                <Form.Control type="text" name="Description" value={this.state.Description} onChange={(e) => { this.handleinputchange(e) }} placeholder="Enter Description" />
                            </Form.Group>
                            {errors.Description.length > 0 && 
                <span className='error'>{errors.Description}</span>}
                            <Form.Group className="mb-3" controlId="formBasicEmail">
                                <Form.Label>Content</Form.Label>
                                <Form.Control as="textarea" name="Content" value={this.state.Content} rows={3} onChange={(e) => { this.handleinputchange(e) }} placeholder="Enter Content" />
                            </Form.Group>
                           

                            <Form.Group className="mb-3" controlId="formBasicEmail">
                                <Form.Label>Publish Date</Form.Label>
                                <Form.Control type="date" name="Publishdate" value={this.state.Publishdate} onChange={(e) => { this.handleinputchange(e) }} />
                            </Form.Group>
                           
                            <Form.Label>Category</Form.Label>
                            <Form.Select aria-label="Default select example" name="Category" value={this.state.Category} onChange={(e) => { this.handleinputchange(e) }} style={{ width: '50%' }}>
                                <option   selected>Select Category</option>
                                <option value="1">Technology</option>
                                <option value="2">Food</option>
                                <option value="3">Travel</option>
                            </Form.Select>
                          

                            <Form.Group className="mb-3" controlId="formBasicEmail">
                                <Form.Label>Author</Form.Label>
                                <Form.Control type="text" placeholder="Enter Author" name="Author" onChange={(e) => { this.handleinputchange(e) }} value={this.state.Author} />
                            </Form.Group>
                           


                            <Button variant="primary" onClick={this.handleSubmit}>
                                Submit
      </Button>
                        </Form>
                    </div>
                    <div className="col-lg-4">
                    </div>
                </div>


            </>
        )
    }
}
export default ArticleForm;