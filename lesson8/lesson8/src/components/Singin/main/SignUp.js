import "./main.css";
import {useState} from "react"
export const SignUp=(prop)=>{
    const [very,setVery]=useState("")
    const [valueUser,setValueUser] = useState("")
    const [valueEmail,setValueEmail]=useState("")
    const {henderProShop,replate}=prop

    const onSubmitForm=(event)=>{
        event.preventDefault();  
        if(valueUser==="")
        {
            const username="Vui lòng không để chống thông tin";
            setVery(username);
        }
        if(valueEmail==="")
        {
            const email="vui long ko de trong";
            setValueEmail(email)
        }

    }
    const henderl=(e)=>{
      
       const valueUserName=e.target.value
        setValueUser(valueUserName);
        setValueEmail(valueUserName);
    }
    
    return (
        <div className="container-xl Main">
            <h2>SIGN UP</h2>
            <form  onSubmit={onSubmitForm} className="mainSignIn">
                <p className="mainP">Name</p>
                    <p>{very}</p>
                <input className="mainInput" type="text" placeholder="Enter name" name="userName"  value={valueUser}  onChange={henderl}/>
                <p className="mainP">Email Address</p>
                    <p>{valueEmail}</p>
                <input className="mainInput" type="email" placeholder="Enter email" name="email"/>
                <p className="mainP">Passwrod</p>
                <input className="mainInput" type="password" placeholder="Enter password" name="password"  onChange={henderl}/>
                <p className="mainP">Confirm Password</p>
                <input className="mainInput"type="password" placeholder="Confirm password" name="confirmPassword"  onChange={henderl}/>
                <button className="buttonSignIn" type="submit" value="signup">REGISTER</button>
                <div className="register">
                    <p>Have an Account?</p>
                    <button className="buttonRegister" onClick={()=>henderProShop(replate)} type="submit">Login</button>
                </div>
            </form>
            <h5 className="mainBottom">Copyright @ ProShop</h5>
        </div>
    )
}