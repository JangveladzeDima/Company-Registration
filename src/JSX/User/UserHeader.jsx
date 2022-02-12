import Button from '@mui/material/Button';
import {Link } from "react-router-dom";

const NODECOR ={
    textDecoration: 'none',
}

const UserHeader = () => {
    return ( 
        <div className="Header">
            <Link to={"/about_us"} style={NODECOR}><Button>About us</Button></Link>
            <div>
                <Link to={"/Login"} style={NODECOR}><Button>Login</Button> </Link>
                <Link to={"/Registrate_company"} style={NODECOR}><Button>Registrate Company</Button> </Link>
            </div>
        </div>
     );
}
 
export default UserHeader;