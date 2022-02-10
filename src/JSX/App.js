import './App.css';
import React, {  } from 'react';
// import axios from "axios";
import Admin from "./Admin/Admin"
import Worker from "./Worker/Worker";
import User from "./User/User"
import Loader from "./Loader"

// const api = axios.create({
//   baseURL : `https://protected-inlet-17146.herokuapp.com/company/register`
// })


function App() {

  // const SendData = () =>{
  //   api.post("/",{
  //     companyName: 'Finca000',
  //     email: 'Williams@gmail.com',
  //     password : "12345"
  //   }).then((res) =>{
  //     console.log(res);
  //     return res.data
  //   }).then((data) =>{
  //     setData(data);
  //   }).catch((error) =>{
  //     setData(error.response.data.message);
  //   })
  // }

  return (
    <div className="App">
       <Admin />
       <Worker />
       <User/>
       <Loader />
    </div>
  );
}

export default App;
