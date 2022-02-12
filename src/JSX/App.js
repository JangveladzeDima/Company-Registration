import './App.scss';
import React, {useState} from 'react';
import Admin from "./Admin/Admin"
import Worker from "./Worker/Worker";
import User from "./User/User"
import Loader from "./Loader";

function App() {

  const [islogged, changeLogged] = useState(false);

  return(
    <div>
      {!islogged && <User/>}
      
    </div>
  )
}

export default App;
