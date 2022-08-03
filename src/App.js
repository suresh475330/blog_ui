import React from 'react';
import Header from './components/Header';
import Home from './pages/Home';
import Login from './pages/Login';
import Register from './pages/Register'
import { Route, Routes } from "react-router-dom"
import SinglePost from './pages/SinglePost';
import AddPost from './pages/AddPost';
import Dashboard from './pages/Dashboard';
import EditPost from "./pages/EditPost"
import {useSelector} from "react-redux"
import About from './pages/About';

const App = () => {

    const {user} = useSelector((state) => state.auth)

  return (
    <div>
      <div>
        <Header />
      </div>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/:id' element={<SinglePost />}/>
       {user &&  <Route path='/addpost' element={<AddPost />}/>}
       {user &&  <Route path='/editpost/:id' element={<EditPost />}/>}
       {user && <Route path='/dashboard' element={<Dashboard />}/>} 
        <Route path='login' element={<Login />} />
        <Route path='register' element={< Register />} />
        <Route path="about" element={<About />}/>
      </Routes>
    </div>
  );
}

export default App;
