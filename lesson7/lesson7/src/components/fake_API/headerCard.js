 import "./headerCard.css";

const Header=({count})=>{
    return(
        <div className="container-xl header">
           
                <img src="./logo.png" alt="" />
            <div className="headerSearch">
                <button className="searchButton">Danh mục sản phẩm</button>
                <input className="searchInput" type="text" placeholder="Nhập từ khóa tìm kiếm..." />
                <i className="fa-solid fa-magnifying-glass icon"></i>
            </div>
            <div className="headerIcon">
                <i  className="fa-solid fa-user  iconRight"></i>
                <div className="cart">
                    <p className="SearchP">{count.length}</p>
                    <i className="fa-solid fa-cart-plus  iconRightpv"></i>
                </div>
            </div>
           
            
        </div>
    );
};
export default Header;