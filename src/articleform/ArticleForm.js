import React, { Component } from 'react';
import { Form, Button } from 'react-bootstrap';

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
            errPublishedate: false
        }

    }
    handleclear=()=>{
        this.setState({
            Title: "",
            Description: "",
            Content: "",
            Publishdate: "",
            Category: "",
            Author: "",
        })
       
    }
    handlesubmit = () => {
        debugger


        this.setState({
            errTitle: this.state.Title === "", errDescription: this.state.Description === "", errContent: this.state.Content === '',
            errPublishedate: this.state.Publishdate === "", errCategory: this.state.Category === "", errAuthor: this.state.Author === ""
        }, () => {
            if (this.state.errTitle === false && this.state.errAuthor === false && this.state.errCategory === false && this.state.errContent === false && this.state.errDescription === false && this.state.errPublishedate === false) {
                const data = {
                    Title: this.state.Title,
                    Description: this.state.Description,
                    Content: this.state.Content,
                    Publishdate: this.state.Publishdate,
                    Category: this.state.Category,
                    Author: this.state.Author
                }
                console.log("data", data)
                alert("Form submitted successfully")
                this.handleclear();
            }
            else{
                // alert("Please fill mandatory fields")
            }

        })

    }
    handleinputchange = (event) => {
        event.preventDefault();
        this.setState({
            [event.target.name]: event.target.value
        })
    }
    render() {
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
                            <span className="validation" style={{ display: this.state.errTitle ? 'block' : 'none' }}>Title is required</span>
                            <Form.Group className="mb-3  col-lg-12" controlId="formBasicEmail">
                                <Form.Label>Short Description</Form.Label>
                                <Form.Control type="text" name="Description" value={this.state.Description} onChange={(e) => { this.handleinputchange(e) }} placeholder="Enter Description" />
                            </Form.Group>
                            <span className="validation" style={{ display: this.state.errDescription ? 'block' : 'none' }}>Description is required</span>
                            <Form.Group className="mb-3" controlId="formBasicEmail">
                                <Form.Label>Content</Form.Label>
                                <Form.Control as="textarea" name="Content" value={this.state.Content} rows={3} onChange={(e) => { this.handleinputchange(e) }} placeholder="Enter Content" />
                            </Form.Group>
                            <span className="validation" style={{ display: this.state.errContent ? 'block' : 'none' }}>Content is required</span>

                            <Form.Group className="mb-3" controlId="formBasicEmail">
                                <Form.Label>Publish Date</Form.Label>
                                <Form.Control type="date" name="Publishdate" value={this.state.Publishdate} onChange={(e) => { this.handleinputchange(e) }} />
                            </Form.Group>
                            <span className="validation" style={{ display: this.state.errPublishedate ? 'block' : 'none' }}>date is required</span>

                            <Form.Label>Category</Form.Label>
                            <Form.Select aria-label="Default select example" name="Category" value={this.state.Category} onChange={(e) => { this.handleinputchange(e) }} style={{ width: '50%' }}>
                                <option   selected>Select Category</option>
                                <option value="Technology">Technology</option>
                                <option value="Food">Food</option>
                                <option value="Travel">Travel</option>
                            </Form.Select>
                            <span className="validation" style={{ display: this.state.errCategory ? 'block' : 'none' }}>Category is required</span>

                            <Form.Group className="mb-3" controlId="formBasicEmail">
                                <Form.Label>Author</Form.Label>
                                <Form.Control type="text" placeholder="Enter Author" name="Author" onChange={(e) => { this.handleinputchange(e) }} value={this.state.Author} />
                            </Form.Group>
                            <span className="validation" style={{ display: this.state.errAuthor ? 'block' : 'none' }}>Author is required</span>


                            <Button variant="primary" onClick={this.handlesubmit}>
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