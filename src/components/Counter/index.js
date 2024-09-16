import { useState } from "react"

export default function Counter(){

    function handleFive(){
        setNum(num + 1 );
        }
        function handleZero(){
        setNum(num - 1 );
        }

    const [num, setNum] = useState(0);
        return (
            <>
                <button onClick={handleZero}>-</button>
                {num}
                <button onClick={handleFive}>+</button>
            </>
        )
}