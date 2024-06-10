import React from 'react'
import Navbar from './Components/navbar/Navbar';
import Home from './Components/home/Home';
import Footer from './Components/Footer/footer';
import About from './Components/about/About';
import {BrowserRouter as Router , Routes , Route} from "react-router-dom";
import SignUp from "./Components/SignUp/SignUp";
import SignIn from "./Components/SignUp/SignIn";
import Todo from "./Components/todo/Todo";  
import { useDispatch } from "react-redux";
import { authActions } from "./Components/store";
import { useEffect } from 'react';


const App = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    const id = sessionStorage.getItem("id");
    if (id) {
      dispatch(authActions.login());
    }
  }, []);
  return (
    <div>
    <Router>
    <Navbar/>
      <Routes>
        <Route exact path="/" element={<Home/>}/>
        <Route  path="/about" element={<About/>}/>
        <Route  path="/todo" element={<Todo/>}/>
        <Route  path="/SignUp" element={<SignUp/>}/>
        <Route  path="/SignIn" element={<SignIn/>}/>
      </Routes>
    </Router>
    
    <Footer/>

    </div>
  )
}

export default App;
