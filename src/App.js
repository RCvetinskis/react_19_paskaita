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
  const [chats, setChats]= useState([])
  const [singleChat, setSingleChat]= useState(null)
  const [spaceLeft, setSpaceLeft]= useState(5)
  const [progressBar, setProgressBar]= useState(0)



useEffect(() => {
  socket.on("chats", (data)=>{
     setChats(data)
     setProgressBar(`${data.length * 20}%`)
    })
  socket.on("chat", (data)=>{
   setSingleChat(data)})
  socket.on("space_left", (data)=>{
    setSpaceLeft(data)
    })

 }, [])


const values ={
  socket,
  adminUser,
  setAdminUser,
  chats,
  singleChat,
  spaceLeft,
  progressBar

 }
 



 


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
