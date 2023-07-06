import "./header.css"
import {useState} from "react";
import { Correct } from "./header1";
import { Wrong } from "./wrong";
const Header=()=>{
     const [result,setResult]=useState(false)
    const contact=(simble)=>{
        const regit=simble;
        setResult(regit);
    }
  
    return(
           result?<Wrong contact={contact} result={result}/>:<Correct contact={contact} result={!result}/>
    )
}
export default Header;