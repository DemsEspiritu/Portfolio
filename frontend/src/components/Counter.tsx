import { useState } from "react"
import MyButton from "./MyButton"

export default function Counter() {
    const [count , setCount] = useState(0)
    
    function handleCount (){
        setCount(count + 1);
    }

    return (
        <div>
            <MyButton count={count} handleCount={handleCount} />
            <MyButton count={count} handleCount={handleCount} />
        </div>
    )
}
