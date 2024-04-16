import React from 'react';
import './App.css';
import { Routes, Route } from 'react-router-dom';
import Shelf from './Components/Shelf';
import Login from './Components/Login';
import Profiler from './Components/Profile';

const Home = () => (
  <h1>Here is Home.</h1>
)

function App() {
  return (
    <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/shelf' element={<Shelf/>}/>
      <Route path='/login' element={<Login/>}/>
      <Route path='/account_create' element={<Profiler/>} />
    </Routes>
  );
}

export default App;
