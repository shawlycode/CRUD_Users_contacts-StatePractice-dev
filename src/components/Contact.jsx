import React,{useState} from "react";
import { Card, Col, Button, Modal } from "react-bootstrap";
import EditContactForm from "./EditContactForm";

const Contact = (props) => {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const handleDelete = (e) => {
    e.preventDefault();
    props.deleteUser(props.userInfo.id);
  };
  
  return (
    <>
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Edit VIP Info</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <EditContactForm userInfo={props.userInfo} editUser={props.editUser} closeModal={handleClose}/>
        </Modal.Body>
       
      </Modal>
      <Col md="4" style={{ marginBottom: "1rem", textAlign: "start" }}>
        <Card style={{backgroundColor:"#EDEEF7" }}>
          <Card.Body>
            <Card.Title>VIP USERS</Card.Title>
            <Card.Subtitle className="mb-2 text-muted">
              <p>Name: {props.userInfo.name}</p>
            </Card.Subtitle>
            <Card.Text>
              <p>Email:{props.userInfo.email}</p>
            </Card.Text>
            <Card.Text>
              <p>Gen:{props.userInfo.gen}</p>
            </Card.Text>
            <Card.Link>
              <Button variant="success" size="sm" onClick={handleShow}>
                Edit Data
              </Button>
            </Card.Link>
            <Card.Link>
              <Button variant="danger" size="sm" onClick={handleDelete}>
                Delete Data
              </Button>
            </Card.Link>
          </Card.Body>
        </Card>
      </Col>
    </>
  );
};

export default Contact;
