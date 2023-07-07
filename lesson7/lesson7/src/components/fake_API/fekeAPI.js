import { useState,useEffect } from "react";
import { Card } from "./card";
const FakeApi=(prop)=>{
    const {count,setcout}=prop;
    const [json,setjson]=useState([]);
   useEffect(()=>{
    fetch('https://64a69fd3096b3f0fcc8024d5.mockapi.io/api/products')
        .then((reponse)=>reponse.json())
        .then((json)=>setjson(json))
        .catch((err)=>console.log(err))
   },[])
  const headerl=(autocard)=>{
    if(autocard&& !count.find((item)=>item.id===autocard.id))
    {
        setcout([...count,autocard]);
    }
  }
  const removeHeaderl=(toboss)=>{
        const toBoss=count.filter((item)=>item.id!==toboss.id)
        setcout(toBoss);
  }
    return (
        json.map((child,index)=>{
            return(
                 <Card
                remove={()=>removeHeaderl(child)}
                click={()=>headerl(child)}
                name={child.name}
                price={child.price}
                priceOld={child.priceOld}
                discount={child.discount}
                img={child.img}
                id={child.id}
                key={index}
        />
            )
        }
       
        )
    )
}
export default FakeApi;