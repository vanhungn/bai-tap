import "./header.css"
export const Header=()=>{
    return (
        <div className="container-xl header">
            <h3 style={{color:"white"}}>PROSHOP</h3>
            <div className="search">
                <input className="rearchIn" type="search" placeholder="Search Products..." />
                <button className="searchBut">Search</button>
            </div>
            <div  className="cart">
                    <div className="cartChild">
                    <i className="fa-solid fa-cart-plus"></i>
                        <p>CART</p>
                    </div>
                    <div className="cartChild">
                    <i className="fa-solid fa-user"></i>
                        <p>SIGN IN</p>
                    </div>
            </div>
        </div>
    )
}