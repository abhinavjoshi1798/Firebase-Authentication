//import { Box, useColorModeValue } from "@chakra-ui/react";
import { Routes,Route } from "react-router-dom"
import Login from "./pages/Login";
import SignUp from "./pages/SignUp";
import Home from "./pages/Home";
import { useEffect, useState } from "react";
import { auth } from "./firebase";

function App() {
  const [userName,setUserName]=useState("");
  useEffect(()=>{
  auth.onAuthStateChanged(user=>{
    console.log(user);
    if(user){
      setUserName(user.displayName);
    }
    else {
      setUserName("");
  }
   
  })
  },[])
  return (
    // <Box m="0" 
    //  background={useColorModeValue("#121212","white")}
    //  h='100vh'
    //  color={useColorModeValue("white","black")}
    // >
    //    App
    // </Box>
    <Routes>
      <Route path="/login" element={<Login />} />
      <Route path="/signup" element={<SignUp />} />
      <Route path="/" element={<Home name={userName} />} />
    </Routes>
  );
}

export default App;
