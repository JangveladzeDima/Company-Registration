import "../../CSS/User.scss";
import Login from "./Login";
import Register from "./Register";
import UserHeader from "./UserHeader";

import {
    BrowserRouter as Router,
    Routes,
    Route,
  } from "react-router-dom";
  

const User = () => {

    return (  
        <div className="UserPage">
            <Router>
            <UserHeader />
            <div className="UserBody">
                <Routes>
                    <Route path="/Login" element={ <Login/> }/>
                    <Route path="/Registrate_company" element={ <Register/> }/>
                    <Route path="*" element={ <div>Hello</div> }/>
                </Routes>
            </div>
            </Router>
        </div>
    );
}
 
export default User;