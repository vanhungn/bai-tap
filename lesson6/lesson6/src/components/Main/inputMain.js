import "./inputMain.css";
import { CoverTan } from "../../utils/coverTans";
import { useState } from "react";
export const InputMain=(prop)=>{
    const {coverMock}=prop;
        
      

       
     
  
    return(
        <div className="inputMain">
            <div className="recost">
                <input type="text" className="input_1"/>
                <input style={{height:coverMock}} type="text" className="input_2" value={CoverTan.Jan}/>
            </div>
            <div className="recost">
                <input type="text" className="input_1"/>
                <input  type="text" className="input_2" value={CoverTan.Feb} />
            </div>
            <div className="recost">
                <input type="text" className="input_1"/>
                <input type="text" className="input_2" value={CoverTan.Mar}/>
            </div>
            <div className="recost">
                <input type="text" className="input_1"/>
                <input  type="text" className="input_2" value={CoverTan.Apr} />
            </div>
            <div className="recost">
                <input type="text" className="input_1"/>
                <input  type="text" className="input_2" value={CoverTan.May} />
            </div>
            <div className="recost">
                <input type="text" className="input_1"/>
                <input  type="text" className="input_2" value={CoverTan.Jun} />
            </div>
            <div className="recost">
                <input type="text" className="input_1"/>
                <input  type="text" className="input_2" value={CoverTan.July} />
            </div>
            <div className="recost">
                <input type="text" className="input_1"/>
                <input  type="text" className="input_2"  value={CoverTan.Aug}/>
            </div>
            <div className="recost">
                <input type="text" className="input_1"/>
                <input  type="text" className="input_2"  value={CoverTan.Sep}/>
            </div>
            <div className="recost">
                <input type="text" className="input_1"/>
                <input  type="text" className="input_2"  value={CoverTan.Oct}/>
            </div>
            <div className="recost">
                <input type="text" className="input_1"/>
                <input  type="text" className="input_2"  value={CoverTan.Nov}/>
            </div>
            <div className="recost">
                <input type="text" className="input_1"/>
                <input  type="text" className="input_2" value={CoverTan.Dec} />
            </div>
            
        </div>
    )
}