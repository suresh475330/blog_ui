import React from 'react';
import Header from './components/Header';
import Home from './pages/Home';
import Login from './pages/Login';
import Register from './pages/Register'
import { Route, Routes } from "react-router-dom"
import SinglePost from './pages/SinglePost';

const App = () => {

  return (
    <div>
      <div>
        <Header />
      </div>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/post/:id' element={<SinglePost />}/>
        <Route path='login' element={<Login />} />
        <Route path='register' element={< Register />} />
      </Routes>
    </div>
  );
}

export default App;
