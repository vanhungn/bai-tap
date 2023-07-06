
import { ProductItem } from "./productItem";
export const BottomMain=({studentMock })=>{
    const macklen=studentMock.map((student, index)=>{
            return(
                <ProductItem
                studentMonth={student.month}
                studentName={student.name}
                studentPrice={student.price}
                studentYear={student.year}
                student={student.id}
                key={index}
            />
            )
            
        });
    return (
        <div>
            {macklen}
        </div>
    )

}