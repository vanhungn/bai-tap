
import { Card } from "../cart/cart";

const DoMain=(prop)=>{
    const {api}=prop;
    return(
         api.map((item,index)=>{
            return(
                  <Card
            name={item.name}
            price={item.price}
            priceOld={item.priceOld}
            discount={item.discount}
            img={item.img}
            id={item.id}
            key={index}   
            />
            )      
 
        }

        )
    )
}
export default DoMain;