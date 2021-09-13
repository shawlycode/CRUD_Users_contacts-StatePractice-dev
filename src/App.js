import React, { Component } from "react";
import { Col, Container, Row } from "react-bootstrap";
import Contacts from "./components/Contacts";
import AddContactForm from "./components/AddContactForm";


class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      data: []
    }
  }

  addNewUser = (newData) => {
    newData.id = Math.random().toString()
    this.setState({
      data: [...this.state.data, newData],
    });
  };
  deleteUser = (id) => {
    let savedUsers = this.state.data.filter((newData) => newData.id !==id);
    this.setState({data: savedUsers });
  };
  handleEditUser = (updatedUser) =>{
    this.setState({
      data: this.state.data.map(user => user.id ===updatedUser.id ? updatedUser : user)
    })

  }
  render() {
    return (
      <>
        <Container fluid style={{ marginTop: "2rem" }}>
          <Row>
            <Col md="4">
              <AddContactForm addNewData={this.addNewUser} />
            </Col>
            <Col>
              <Contacts
                userData={this.state.data}
                deleteUser={this.deleteUser}
                editUser={this.handleEditUser}
              />
            </Col>
          </Row>
        </Container>
      </>
    );
  }
}

export default App;
