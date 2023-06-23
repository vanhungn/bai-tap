import { StartIcon } from "../icon/icon";
import { PriceShoe } from "../priceShoe/priceShoe";
const Shoe=()=>{
    return(
        <div className="shoe">
            <img  src="./ProductPhoto.png" alt="" width="100%"  style={{}} />
            <div className="lowerBody">
            <h1 style={{margin:0 ,fontSize:32 }}>Adidas Shoes</h1>
            <h3 style={{margin:0 ,fontSize:20, fontWeight:700 }}>ID:123</h3>
            <StartIcon/>
            <PriceShoe/>
            <button className="availableButton">Available</button>
            </div>
           
    
        </div>
    )
}
export default Shoe;