import logo from './logo.svg';
import './App.css';
import Button from 'react-bootstrap/Button';
import { Route,Routes } from 'react-router-dom';
import Dashboard from './components/dashboard/Dashboard';
import PostUser from './components/postUser/PostUser';
import UpdateUser from './components/updateUser/UpdateUser';
import Nomatch from './components/nomatch/Nomatch';
import Header from './components/header/Header';
function App() {
  return (
    <div className="App">

      <Header></Header>
      <Routes>
        <Route path='/' element={<Dashboard/>} />
        <Route path='/user' element={<PostUser/>} />
        <Route path='/user/:id' element={<UpdateUser/>} />
        <Route path='*' element={<Nomatch/>} />

      </Routes>
    </div>
  );
}

export default App;
