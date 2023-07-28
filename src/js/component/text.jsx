import React, { useEffect, useState } from "react";


const Text = () => {
    const [text, setText] = useState("");

    useEffect(() => {
        console.log("Component Mounted");

        return () => {
            console.log("Component Unmounted")
        }
    },[])

    return (
        <>
            <input
                type="text"
                onChange={myEvent => 
                    {setText(myEvent.target.value)}}
                    value={text}
            ></input>
            <h1>{text}</h1>
        </>
    );
                };

export default Text;
