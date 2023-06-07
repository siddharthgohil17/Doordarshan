
import { Container } from 'react-bootstrap';
import React,{useState} from "react"
import './App.scss';
import Header from "./components/header/Header"
import Sidebar from "./components/sidebar/Sidebar"
import HomeScreen from "./Screen/homescreen/Homescreen"
import LoginScreen from "./Screen/Loginscreen/Loginscreen"
import { BrowserRouter as Router,Routes,Route, Navigate} from 'react-router-dom';

const Layout=({children})=>{
  const [opened,setOpen]=useState(false);

  const handle=()=>{
    setOpen(value=>!value);
  }

  return (
  <div>
  <Header handlesidebar={handle}/>
  <div className='app_container '>
   <Sidebar sidebar={opened} handlebtn={handle}/>
   <Container fluid className="app_main ">
   {children}
   </Container>

  </div>
   </div>
  )
}


const App=()=> {
  
  

  return (
    <Router>
    <Routes>
      <Route path="/" element={<Layout><HomeScreen /></Layout>} />
      <Route  path="/auth" element={<Layout><LoginScreen /></Layout>}/>
      <Route path="/search" element={<Layout><h1>Search me</h1></Layout>}/> 
    </Routes>
 
  </Router>

   
  );
}


export default App;
