import "./main.css";
export const Main=(prop)=>{
    const { henderProShop,replate}=prop
    return(
        <div className="container-xl Main">
            <h2>SIGN IN</h2>
            <form className="mainSignIn">
                    <p className="mainP">Email Address</p> 
                    <input className="mainInput" type="email" placeholder="Enter email" />
                    <p className="mainP">Password</p> 
                    <input className="mainInput" type="password" placeholder="Enter password" />
               
                <button className="buttonSignIn">SIGN IN</button>
                <div className="register">
                    <p>New Customer?</p>
                    <button className="buttonRegister" onClick={()=>henderProShop(!replate)}>Register</button>
                </div>
            </form>
            <h5 className="mainBottom">Copyright @ ProShop</h5>
        </div>
    )
}