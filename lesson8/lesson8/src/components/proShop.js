
import { Main } from "./Singin/main/main";
import { SignUp } from "./Singin/main/SignUp";
import {useState}from "react"
export const ProShop=()=>{
    const [replate,setReplate]=useState(false)
    const henderProShop=(item)=>
    {
        const answer=item;
        setReplate(answer);
    }
    return(
            replate? <SignUp  henderProShop={henderProShop} replate={!replate}/>:<Main henderProShop={henderProShop} replate={replate}/>
    )
}