"use client";

import { useState } from 'react';

const Counter = () => {
    console.log("Counter component loaded");
    const [count, setCount] = useState(0);
    return (
        <>
            <button onClick={() => setCount(count + 1)}>Clicked {count} times</button>
        </>
    )
}

export default Counter;