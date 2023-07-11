 import { useContext } from "react";
import "./headerCard.css";
import { Mystor } from "../../conText/myStore";
const Header=()=>{
   
    const mystore=useContext(Mystor)
     const result=mystore.count.length>0?"":"Giỏ hàng trống";
    return(
        <><div className="container-xl header">
           
                <img src="./logo.png" alt="" />
            <div className="headerSearch">
                <button className="searchButton">Danh mục sản phẩm</button>
                <input className="searchInput" type="text" placeholder="Nhập từ khóa tìm kiếm..." />
                <i className="fa-solid fa-magnifying-glass icon"></i>
            </div>
            <div className="headerIcon">
                <i  className="fa-solid fa-user  iconRight"></i>
                <div className="cart">
                    <p className="SearchP">{mystore.count.length}</p>
                    <i className="fa-solid fa-cart-plus  iconRightpv"></i>
                </div>
            </div>
           
            
        </div>
        <p>{result}</p>
        </>
        
    );
};
export default Header;