import React, { useState } from "react";
import Form from "react-bootstrap/Form";
import '../postUser/postUser.css'
import { Button } from "react-bootstrap";

export default function PostUser() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: ""
  });

  const handleInputChange= (event) =>{
    const {name,value}= event.target;
    setFormData({
        ...formData,
        [name]:value,
    });
  }
  const handleSubmit = async (e) =>{
    e.preventDefault();
    console.log("name", formData.name);
    console.log("email", formData.email);
    console.log("phone", formData.phone)
  }
  return (
    <div>
      

      <div className="card p-3 form-card">
      <h1 className="mb-4 text-center"> post user</h1>
        <Form >
        <Form.Group className="mb-3" controlId="formGroupEmail">
            <Form.Label>Name</Form.Label>
            <Form.Control 
            type="text"
            name="name" 
            placeholder="Enter name" 
            value={formData.name}
            onChange={handleInputChange}
            />
          </Form.Group>

          <Form.Group className="mb-3" controlId="formGroupEmail">
            <Form.Label>Email address</Form.Label>
            <Form.Control 
            type="email" 
            name="email"
            placeholder="Enter email"
            value={formData.email}
            onChange={handleInputChange}
            />
          </Form.Group>

          <Form.Group className="mb-3" controlId="formGroupPassword">
            <Form.Label>Phone</Form.Label>
            <Form.Control
             type="number" 
             name="phone"
             placeholder="Enter mobile"
             value={formData.phone}
             onChange={handleInputChange}
             />
          </Form.Group>

          <Button variant="primary" onClick={handleSubmit}>Submit</Button>


        </Form>
      </div>
    </div>
  );
}
