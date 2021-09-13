import React, { Component } from "react";
import { Form, Button } from "react-bootstrap";
import './Editform.css';

class EditContactForm extends Component {
  constructor(props) {
    super(props);

    this.state = {
      name: props.userInfo.name,
      email: props.userInfo.email,
      gen: props.userInfo.gen,
      id: props.userInfo.id,
    };
  }

  handleChange = (e) => {
    e.preventDefault();
    this.setState({
      // console.log(this.state)
      [e.target.name]: e.target.value,
    });
  };
  handleSubmit = (e) => {
    e.preventDefault();
    // console.log("form submited succefully", this.state);
    this.props.editUser(this.state);
    this.setState({
      name: "",
      email: "",
      gen: "",
    });
    this.props.closeModal();
  };
  render() {
    return (
      <Form onSubmit={this.handleSubmit}>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Name</Form.Label>
          <Form.Control className="inputs"
            type="text"
            placeholder="Enter name here"
            name="name"
            value={this.state.name}
            onChange={this.handleChange}
          />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Email</Form.Label>
          <Form.Control className="inputs"
            type="email"
            placeholder="enter valid email here"
            name="email"
            value={this.state.email}
            onChange={this.handleChange}
          />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Gen</Form.Label>
          <Form.Control className="inputs"
            type="number"
            placeholder="enter gen here"
            name="gen"
            value={this.state.gen}
            onChange={this.handleChange}
          />
        </Form.Group>
        <Button variant="primary" type="submit" className="btn">
          Submit
        </Button>
      </Form>
    );
  }
}

export default EditContactForm;
