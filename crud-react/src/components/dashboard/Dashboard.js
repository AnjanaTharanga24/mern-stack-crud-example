import React, { useEffect, useState } from 'react'
import Table from 'react-bootstrap/Table';
import '../dashboard/dashboard.css';

export default function Dashboard() {
  const [users,setUsers]= useState([]);

  useEffect(()=>{
    const fetchUsers = async()=>{
      try {
        const response =await fetch("http://localhost:5000/api/user");
        const data = await response.json();
        setUsers(data);
      } catch (error) {
        console.error("error while fetching users:",error.message);
      }
    }
    fetchUsers();
  },[]);
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
        {users.map((users)=>{
           <tr key={users._id}>
           <td>{users.name}</td>
           <td>{users.email}</td>
           <td>{users.phone}</td>
           <td></td>
         </tr>
        })}
       
      </tbody>
    </Table>
    </div>
  )
}
