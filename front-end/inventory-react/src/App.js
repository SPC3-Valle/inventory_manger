import React, {useState} from 'react';
import './App.css';
import { Routes, Route } from 'react-router-dom';
import Shelf from './Components/Shelf';
import Login from './Components/Login';
import Profiler from './Components/Profile';
import useToken from './Components/useToken';
import Home from './Components/Home';
import Putting from './Components/Items';

function App() {
    const { token, setToken } = useToken();
  
    // if(!token) {
    //   return <Login setToken={setToken} />
    // }

  return (
    <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/shelf' element={<Shelf/>}/>
      <Route path='/login' element={<Login/>}/>
      <Route path='/account_create' element={<Profiler/>} />
      <Route path='/items' element={<Putting/>}/>
    </Routes>
  );
}

export default App;
