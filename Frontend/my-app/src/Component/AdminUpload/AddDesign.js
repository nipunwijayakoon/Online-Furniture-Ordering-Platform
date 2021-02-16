import React, { Component } from 'react';
import { Form, Input, Label, FormGroup, FormFeedback, Button } from 'reactstrap';
import './AddDesign.css'

class AddDesign extends Component {

    constructor(props) {
        super(props);

        this.state = this.getInitialState();
    }

    getInitialState = () => ({
        data: {
            title: '',
            description: '',
            content:'',  
            price:'',
            colours:'',  
        },
        errors: {}
    });

    handleChange = (e) => {
        this.setState({
            data: {
                ...this.state.data,
                [e.target.name]: e.target.value
            },
            errors: {
                ...this.state.errors,
                [e.target.name]: ''
            }
        });
    }

    validate = () => {
        const { data } = this.state;
        let errors = {};

        if (data.title === '') errors.title = 'Title can not be blank.';
        if (data.description === '') errors.description = 'Description can not be blank.';
        if (data.content === '') errors.content = 'Content can not be blank.';
        if (data.price === '') errors.price = 'Price can not be blank.';
        if (data.colours === '') errors.colours = '';
       
        return errors;
    }

    handleSubmit = (e) => {
        e.preventDefault();

        const { data } = this.state;

        const errors = this.validate();

        if (Object.keys(errors).length === 0) {
            console.log(data);
            //Call an api here
            //Resetting the form
            this.setState(this.getInitialState());
        } else {
            this.setState({ errors });
        }
    }

    render() {
        const { data, errors } = this.state;
        return (
            <Form onSubmit={this.handleSubmit}>
                <div className="a">
               
                <FormGroup >
                    <Label for="title">Title</Label>
                    <div className="b">
                    <Input id="title" value={data.title} invalid={errors.title ? true : false} name="title" onChange={this.handleChange} />
                    <FormFeedback>{errors.title}</FormFeedback>
                    </div>
                </FormGroup>
<br/>
                <FormGroup>
                    <Label for="description">Description</Label>
                    <Input id="description" value={data.description} invalid={errors.description ? true : false} name="description" onChange={this.handleChange} />
                    <FormFeedback>{errors.description}</FormFeedback>
                </FormGroup>
<br/>
                <FormGroup>
                    <Label for="content">Content</Label>
                    <Input id="content" value={data.content} invalid={errors.content ? true : false} name="content" onChange={this.handleChange} />
                    <FormFeedback>{errors.content}</FormFeedback>
                </FormGroup>

              <br/>  
                <FormGroup>
                    <Label for="price">Price</Label>
                    <Input id="price" value={data.price} invalid={errors.price ? true : false} name="price" onChange={this.handleChange} />
                    <FormFeedback>{errors.price}</FormFeedback>
                </FormGroup>
<br/>
                <FormGroup>
                    <Label for="colours">Colours</Label>
                    <Input id="colours" value={data.colours} invalid={errors.colours ? true : false} name="colours" onChange={this.handleChange} />
                    <FormFeedback>{errors.colours}</FormFeedback>
                </FormGroup>

             <br/>
                <Button color="primary">Upload Product</Button>

                </div>
            </Form>
        );
    }
}

export default AddDesign;