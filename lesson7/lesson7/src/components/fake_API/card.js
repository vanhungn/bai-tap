import "./card.css";
export const Card=(prop)=>{
    const { name,price,priceOld,discount,img,click,remove}=prop;
  
    
    return(
     <div className="disCard">
        <div className="CarcImg">
            <div className="cardSpan">
                 <p >{discount}</p>
            </div>
           
             <img className="CardImg" src={img} alt="" />
        </div>
        <h5 style={{marginTop:10}}>{name}</h5>
        <div className="CardIcon">
        <i className="fa-solid fa-star"></i>
        <i className="fa-solid fa-star"></i>
        <i className="fa-solid fa-star"></i>
        <i className="fa-solid fa-star"></i>
        <i className="fa-solid fa-star"></i>
        </div>
        <button className="CardButton_remove" onClick={remove}>Xóa</button>
        <div className="priceCard">
            <h4 style={{fontSize:20,fontWeight:700}}>{price}</h4>
            <h6 className="CardH6">{priceOld}</h6>
           
            <button className="CardButton" onClick={click} ><i className="fa-solid fa-basket-shopping"></i></button>
        </div>
    </div>
    )
}