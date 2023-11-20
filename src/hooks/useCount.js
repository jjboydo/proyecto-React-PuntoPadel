import { useState } from "react"

export const useCount = (initial = 0, stock) => {
    const [count, setCount] = useState(initial);

    const increment = () => {
        count < stock ? setCount(count + 1) : setCount(count)
    };

    const decrement = () => {
        if (count <= 1) {
            return setCount(1);
        }
        setCount(count - 1);
    };

    const reset = () => {
        setCount(initial);
    }

    return {
        count,
        increment,
        decrement,
        reset
    }
}