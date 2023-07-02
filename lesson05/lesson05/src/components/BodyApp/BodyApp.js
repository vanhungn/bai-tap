import Card from "../card/Card";
const BodyApp=(prop)=>{
    const {newProducts,count,setcout}=prop;
    const henderler=(autoCard)=>{
        
        if(autoCard&& !count.find((item)=> item.id===autoCard.id) )
        {
            
           setcout([...count,autoCard])
        }
       
    }
    return (
      
           newProducts.map((item)=>{
            return (
             
                 <Card
                onClick={()=>henderler(item)}
                name={item.name}
                price={item.price}
                priceOld={item.priceOld}
                discount={item.discount}
                img={item.img}
                id={item.id}
                  />
               
                
            )
          })
       
       
    )
}
export default BodyApp;