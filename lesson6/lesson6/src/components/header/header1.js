export const Correct=(prop)=>{
    const {contact,result}=prop
    return (
        <div className="headerCorrect">
            <button onClick={()=>contact(result)}>Add new expense</button>
        </div>
    )
}