import "./main.css";
import { FillterOption } from "../../utils/contants";
import { InputMain } from "./inputMain";
import { BottomMain } from "./bottomMain";
import { studentMockData } from "../../utils/mockData";
import { useState } from "react";
export const Main=()=>{
    const [student,setStudent]=useState(studentMockData);
    const [option,setOption]=useState(FillterOption.year2021);
  
        
     
    const  onSortOptionsChange=(e)=>{
        setOption(e.target.value);
    };
    const rederOption=(student,option)=>{
        let newstudent=[];
        switch(+option)
        {
            case FillterOption.year2021:
                newstudent=student.filter(child=>child.id===FillterOption.year2021);
            break;
            case FillterOption.year2022:
                 newstudent=student.filter(child=>child.id===FillterOption.year2022);
            break;
            case FillterOption.year2023:
                newstudent=student.filter(child=>child.id===FillterOption.year2023);
           break; 
            case FillterOption.year2024:
            newstudent=student.filter(child=>child.id===FillterOption.year2024);
           break;  
           default :
           return student;
        }
        return newstudent;
    }
    const chartNewStudent=rederOption(student,option);
 
    return(
        <div className="container-xl bodyMain">
           <div className="headerMain">
            <h5 style={{color:"white"}}>Filter By Year</h5>
            <div>
                <select className="select" onChange={onSortOptionsChange} value={option}>
                    <option style={{color:"#FFFFFF"}} value={FillterOption.year2021} >2021 </option>
                    <option style={{color:"#FFFFFF"}} value={FillterOption.year2022} >2022 </option>
                    <option style={{color:"#FFFFFF"}} value={FillterOption.year2023}> 2023</option>
                    <option style={{color:"#FFFFFF"}} value={FillterOption.year2024}>2024</option>
                </select>
            </div>
           </div>
           <div>
            <InputMain
            coverMock={chartNewStudent}
            />
           </div>
           <div className="bottom">
            <BottomMain
            studentMock ={chartNewStudent}
            />
           </div>
            
        </div>
    )
}