import { Container } from 'react-bootstrap';
import React, { useEffect, useState } from "react";
import './App.scss';
import Header from "./components/header/Header";
import Sidebar from "./components/sidebar/Sidebar";
import HomeScreen from "./Screen/homescreen/Homescreen";
import LoginScreen from "./Screen/Loginscreen/Loginscreen";
import { Routes, Route, Navigate } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import WatchScreen from './Screen/WatchScreen/WatchScreen';
import SearchScreen from './Screen/searchScreen';
import SubScription from './Screen/SubScriptionScreen/subScription';

const Layout = ({ children }) => {
  const [opened, setOpen] = useState(false);

  const handle = () => {
    setOpen(value => !value);
  }

  return (
    <div>
      <Header handlesidebar={handle} />
      <div className='app_container'>
        <Sidebar sidebar={opened} handlebtn={handle} />
        <Container fluid className="app_main ">
          {children}
        </Container>
      </div>
    </div>
  );
}

const App = () => {

    const {accessToken,loading}=useSelector(state=>state.auth);
    const navigate = useNavigate();
    useEffect(()=>{
       if(!loading && !accessToken){
         navigate('/auth') 
       }
    },[accessToken,loading,navigate])

  return (
    
      <Routes >
        <Route path="/" element={<Layout><HomeScreen /></Layout>} />
        <Route path="/auth" element={<Layout><LoginScreen /></Layout>} />
        <Route path="/search/:query" element={<Layout><SearchScreen /></Layout>} />
        <Route path="/watch/:id" element={<Layout><WatchScreen/></Layout>} />
        <Route path="/feed/subscriptions" element={<Layout><SubScription/></Layout>} />
      </Routes>
    
  );
}

export default App;
