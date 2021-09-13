import React from "react";
import { Container, Row } from "react-bootstrap";
import Contact from "./Contact";
import { connect } from 'react-redux';

const Contacts = (props) => {
  return (
    <Container>
      <Row>
        {props.userData.map((user) => {
          return (
            <Contact
              userInfo={user}
              key={user.id}
              deleteUser={props.deleteUser}
              editUser={props.editUser}
            />
          );
        })}
      </Row>
    </Container>
  );
};
const mapStatesToProps = (state) => {
  return {
    Contacts: state.data,
  }
}
export default connect(mapStatesToProps) (Contacts);
