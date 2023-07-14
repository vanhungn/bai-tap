import React from "react";
import { useParams } from "react-router-dom";
import { CartProduct } from "../cartProduct/cartproduct";
const Product=(prop)=>{
    const {apiProduct}=prop;
    const {id}=useParams();
    return(
       
        apiProduct.filter(item=>item.id===id).map((card,index)=>{
                    return(
                     <CartProduct
                    discount={card.discount}
                    name={card.name}
                    price={card.price}
                    priceold={card.priceold}
                    img={card.img}
                    id={card.id}
                    key={index}
                    />
                    )
                    
                }
            )
              
    )
}
export default Product;