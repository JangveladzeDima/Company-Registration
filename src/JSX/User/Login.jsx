import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import {useEffect, useState} from "react";
import SendRequest from "../SendRequest";
import Alert from '@mui/material/Alert';

const Login = () => {

    const [Email,setEmail] = useState("");
    const [Password, setPassword] = useState("");
    const [DisableButton, setDisableButton] = useState(false);
    const [Error, setError] = useState({
        isError : false,
        errorText : "",
    })

    const CreateObject = () =>{
        return {
            email : Email,
            password : Password
        }
    }

    const LoginMember = async () =>{
        setDisableButton(true);
        await SendRequest("/user/login",CreateObject()).then((res) =>{
            console.log(res.data);
        }).catch((error) =>{
            console.log(error.response.data.message);
            setError({
                isError:true,
                errorText:error.response.data.message
            });
        })
        setDisableButton(false);
    }


    const handleRequest = (e) => {
        if (e.keyCode === 13){
            LoginMember();
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
                {Error.isError && <Alert variant="outlined" severity="error">
                    {Error.errorText}
                </Alert>}
                <TextField  label="Email"
                            variant="standard"
                            onChange ={(event) =>{setEmail(event.target.value)}}/>
                <TextField  type="password"
                            label="Password" 
                            variant="standard" 
                            onChange ={(event) =>setPassword(event.target.value)}/>

                <Button disabled={DisableButton} variant="outlined" onClick = {() => LoginMember()}>Login</Button>
            </div>
        </div>
     );
}
 
export default Login;