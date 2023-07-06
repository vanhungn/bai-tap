import "./productItem.css";
export const ProductItem=(prop)=>{
    const {studentMonth, studentName, studentPrice,studentYear}=prop
    return(
        <div className="bottomMain">
            <div className="studentMain">
                <div className="boxStudent">
                    <h5  className="styMon">{studentMonth}</h5>
                    <h5 className="styMon">{studentYear}</h5>
                </div>
                
                <h2 style={{paddingTop:30 ,fontSize:40}}>{studentName}</h2>
            </div>
            <h4 className="price">${studentPrice}</h4>
        </div>
    )
}