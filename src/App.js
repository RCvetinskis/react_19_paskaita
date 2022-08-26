import React,{useState, useEffect} from "react";
import mainContext from "./context/MainContext";
import "./styles/style.css"
import { BrowserRouter, Routes ,Route  } from "react-router-dom";
import {io} from "socket.io-client"
import RegisterPage from "./pages/RegisterPage";
import AdminPage from "./pages/AdminPage";
import UserPage from "./pages/UserPage";
const socket = io.connect("http://localhost:4000")
function App() {

  const [adminUser, setAdminUser]= useState(null)
  const [users, setUsers]= useState([])



// atvaizduoti VISUS USERIUS, KIEK USERIU TIEK CHATU, ATVAIZDUOTU ISSIUSTAS ZINUTES SAVO
 const values ={
  socket,
  adminUser,
  setAdminUser,
  users

 }
 


 useEffect(() => {
  socket.on("display_users_objects", (data)=>{
    setUsers(data)
  })

  socket.on("display_admin_messages", (data)=>{
    setUsers(data)
  })

 }, [socket])
 


  return (
    <div className="App  md:container md:mx-auto">
      <mainContext.Provider value ={values}>
      <BrowserRouter>

      <Routes>
     <Route path="/" element={<RegisterPage/>}></Route>
     <Route path="/admin" element={<AdminPage/>}></Route>
     <Route path="/user" element={<UserPage/>}></Route>
        </Routes>

      </BrowserRouter>
      </mainContext.Provider>

   

   
   
    </div>
  );
}

export default App;
