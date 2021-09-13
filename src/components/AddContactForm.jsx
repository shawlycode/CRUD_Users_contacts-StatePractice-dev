import React, { Component } from "react";
import { addNewUser } from './Actions/userAction';
import { Form, Button } from "react-bootstrap";
import { connect } from "react-redux";

class AddContactForm extends Component {
  constructor(props) {
    super(props);

    this.state = {
      name: "",
      email: "",
      gen: "",
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
    this.props.addNewData(this.state);
    this.setState({
      name: "",
      email: "",
      gen: "",
      id: ""
    })
  };
  render() {
    return (
      <Form onSubmit={this.handleSubmit}>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Name</Form.Label>
          <Form.Control
            type="text"
            placeholder="Enter name here"
            name="name"
            value={this.state.name}
            onChange={this.handleChange}
          />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Email</Form.Label>
          <Form.Control
            type="email"
            placeholder="enter valid email here"
            name="email"
            value={this.state.email}
            onChange={this.handleChange}
          />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Gen</Form.Label>
          <Form.Control
            type="number"
            placeholder="enter gen here"
            name="gen"
            value={this.state.gen}
            onChange={this.handleChange}
          />
        </Form.Group>
        <Button variant="primary" type="submit">
          Submit
        </Button>
      </Form>
    );
  }
}
const mapDispatchToProps = {
  addData: addNewUser
  //or this will also work:addNewUser,
}

export default connect(null, mapDispatchToProps) (AddContactForm);
