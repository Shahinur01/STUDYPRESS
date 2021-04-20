import axios from "axios";
import React, { useState } from "react";
import { Button, Col, Container, Form, InputGroup, Row } from "react-bootstrap";
import AdminSidebar from "../../Admin/AdminSidebar/AdminSidebar";

const MakeAdmin = () => {
  const [alertShow, setAlertShow] = useState(false);
  const [alertErrShow, setAlertErrShow] = useState(false);
const [emailChange,setEmailChange] = useState("");

  const handleSubmit = (e) => {
   e.preventDefault();
    console.log(emailChange);
    axios
      .post("https://obscure-escarpment-54463.herokuapp.com/addAdmin",{email: emailChange})
      .then(() => {
        setAlertShow(true);
        setAlertErrShow(false);
      })
      .catch(() => {
        setAlertErrShow(true);
        setAlertShow(false);
      });
  };

  return (
    <Container className="dashboard">
      <Row>
        <Col md={3}>
          <AdminSidebar />
        </Col>
        <Col md={9}>
          
          <Form onSubmit={handleSubmit}>
            <Form.Group controlId="formBasicEmail">
              <Form.Label>Email address</Form.Label>
              <Form.Control onChange={(e)=>setEmailChange(e.target.value)} type="text" placeholder="Enter email" />
            </Form.Group>

            <Button variant="primary" type="submit">
              Submit
            </Button>
          </Form>
        </Col>
      </Row>
    </Container>
  );
};

export default MakeAdmin;
