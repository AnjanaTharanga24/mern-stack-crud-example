import React, { useState } from "react";
import Form from "react-bootstrap/Form";
import '../postUser/postUser.css'
import { Button } from "react-bootstrap";
import { useNavigate } from "react-router-dom";

export default function PostUser() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: ""
  });

  const navigate = useNavigate();

  const handleInputChange= (event) =>{
    const {name,value}= event.target;
    setFormData({
        ...formData,
        [name]:value,
    });
  }
  const handleSubmit = async (e) =>{
    e.preventDefault();

    try{
      const response = await fetch("http://localhost:5000/api/user", {
        method:"POST",
        headers:{
          "Content-Type":"application/json"
        },
        body:JSON.stringify(formData)    
      })
      const data = await response.json(response);
      console.log(data);
      navigate("/")
    }catch(error){
      console.error(error.message);
    }
  
    
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
