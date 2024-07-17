import React, { useEffect, useId, useState } from 'react'
import Table from 'react-bootstrap/Table';
import '../dashboard/dashboard.css';
import Button from 'react-bootstrap/Button';
import { useNavigate } from 'react-router-dom';

export default function Dashboard() {
  const [users,setUsers]= useState([]);
  const navigate = useNavigate();

  const fetchUsers = async()=>{
    try {
      const response =await fetch("http://localhost:5000/api/user");
      const data = await response.json();
      setUsers(data);
      console.log(data);
    } catch (error) {
      console.error("error while fetching users:",error.message);
    }
  }

  useEffect(()=>{
    fetchUsers();
  },[]);

  const handleUpdate = (userId) => {
      navigate(`/user/${userId}`);
  }

  const handleDelete = async (userId) => {
    try {
      const response = await fetch(`http://localhost:5000/api/user/${userId}`, {
        method: "DELETE"
      });
      console.log(response);
      if (response.ok) {
        fetchUsers();
      }
    } catch (error) {
      console.error("Error while deleting user:", error.message);
    }
  }
  return (
    <div>

      <Table striped bordered hover className='shadow data-table' style={{marginTop:"50px", width:"1000px" , marginLeft:"280px"}}>
      <thead>
        <tr>
          <th>Name</th>
          <th>Email</th>
          <th>Phone</th>
          <th>Action</th>
        </tr>
      </thead>
      <tbody>
        {users.map((user)=>(
           <tr key={user._id}>
           <td>{user.name}</td>
           <td>{user.email}</td>
           <td>{user.phone}</td>
           <td>
           <Button variant="primary" onClick={() => handleUpdate(user._id)}>Update</Button>{' '}
           <Button variant="danger" onClick={() => handleDelete(user._id)}>Delete</Button>{' '}

           </td>
         </tr>
        ))}
       
      </tbody>
    </Table>
    </div>
  )
}
