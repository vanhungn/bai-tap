export const Wrong=(prop)=>{
    const {contact,result}=prop
    return (
        <div className="headerWrong">
            <div className="disWrong">
                <span className="wrongSpan">Name</span>
                <input className="wrongInput"  type="text" placeholder="Enter name here..."/>
            </div>
            <div className="disWrong">
                <span  className="wrongSpan">Amount</span>
                <input className="wrongInput" type="text" placeholder="Enter amount here..."/>
            </div>
            <div className="disWrong">
                <span className="wrongSpan">Date</span>
                <input className="wrongInput" type="text" placeholder="dd/mm/yyyy"/>
            </div>
            <div className="wrongButton">
                <button className="buttonAdd">ADD</button>
                <button className="buttonCancel" onClick={()=>contact(!result)} >CANCEL</button>
            </div>
        </div>
    )
}