import React, { useState } from 'react'
import "./style.css"

const Counter = () => {
    const [myNum, setMyNum] = useState(0);// initial state 0
    return (
        <div className="center_div">
            <p>{myNum}</p>
            <div className="button2" onClick={() => (myNum < 10 ? setMyNum(myNum + 1) : setMyNum(10))}> 
                +
            </div>
            <div className="button2" onClick={() => (myNum > 0 ? setMyNum(myNum - 1) : setMyNum(0))}>
                -
            </div>
        </div>
    )
}
export default Counter
