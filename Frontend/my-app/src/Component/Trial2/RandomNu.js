import React, { useState } from "react";


export default function Rand(){

    const [minVal, setMinVal] = useState(10000);
    const [maxVal, setMaxVal] = useState(999999);
    const [randomNum, setRandomNum] = useState(
        
        Math.floor(Math.random() * (maxVal-minVal+1) + minVal)
        );
        
        const handleRandomNum = () => {

            setRandomNum(Math.floor(Math.random() * (maxVal - minVal + 1) + minVal));
        };

        return(
            <div>
            <div>
                <p>
                    Your New Design Code: <span>{randomNum}</span>
                </p>
            </div>
            <div>
               {/* <div>
                    <p>
                        Min: 
                    </p>
                    <input
                        type="number"
                        value={minVal}
                        onChange={e => setMinVal(+e.target.value)}
                        />
                </div>
                <div>
                <p>
                        Max: 
                    </p>
                    <input
                        type="number"
                        value={maxVal}
                        onChange={e => setMaxVal(+e.target.value)}
                        />
               </div> */}
            </div>

            <button onClick={handleRandomNum}>Get Another Code</button>
            </div>
        );


}