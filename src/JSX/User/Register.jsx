import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import {useEffect, useState} from "react";
import SendRequest from "../SendRequest";
import Alert from '@mui/material/Alert';

const Login = () => {

    const [Company, setCompany] = useState("");
    const [Email,setEmail] = useState("");
    const [Password, setPassword] = useState("");

    const CreateObject = () =>{
        return {
            companyName : Company,
            email : Email,
            password : Password,
        }
    }

    const RegisterCompany = () =>{
        SendRequest("/company/register", CreateObject()).then((res) =>{
            console.log(res.data);
        }).catch((error) =>{
            console.log(error.response.data);
        })
    }

    const handleRequest = (e) => {
        if (e.keyCode === 13){
            RegisterCompany();
        };
    };

    useEffect(() => {
        window.addEventListener("keydown", handleRequest);
        return () => {
          window.removeEventListener("keydown", handleRequest);
        };
      }, []);

    return ( 
        <div className='LoginBody'>
            <div className='LoginForm'>
            <Alert variant="outlined" severity="error">
                hello
            </Alert>
                <TextField  label="Company"
                            variant="standard"
                            onChange ={(event) =>{setCompany(event.target.value)}}/>
                <TextField  label="Email"
                            variant="standard"
                            onChange ={(event) =>{setEmail(event.target.value)}}/>
                <TextField  type="password"
                            label="Password" 
                            variant="standard" 
                            onChange ={(event) =>setPassword(event.target.value)}/>

                <Button variant="outlined" onClick = {() => RegisterCompany()}>Register</Button>
            </div>
        </div>
     );
}
 
export default Login;