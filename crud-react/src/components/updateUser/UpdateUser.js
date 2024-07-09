import React, { useEffect, useState } from 'react'
import { Button , Form} from 'react-bootstrap';
import { useNavigate, useParams } from 'react-router-dom'
import "../updateUser/updateUser.css"
export default function UpdateUser() {
  const {id} = useParams();
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    name:"",
    email:"",
    phone:""
  });

  const handleInputChange= (event) =>{
    const {name,value}= event.target;
    setFormData({
        ...formData,
        [name]:value,
    });
  }

  useEffect(()=>{
    const fetchUser = async()=>{
      try {
        const response =await fetch(`http://localhost:5000/api/user/${id}`);
        const data = await response.json();
        setFormData(data);
        console.log(data);
      } catch (error) {
        console.error("error while fetching users:",error.message);
      }
    }
    fetchUser();
  },[id]);

  const handleSubmit = async (e) =>{
    e.preventDefault();

    try{
      const response = await fetch(`http://localhost:5000/api/user/${id}`, {
        method:"PATCH",
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
      <h1 className="mb-4 text-center"> update user</h1>
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

          <Button variant="primary" onClick={handleSubmit}>update user</Button>


        </Form>
      </div>
    </div>
  )
}
