import React, { useState } from "react";
import Text from "./text";

const ShowText = () => {
    const [showText, setShowText] = useState(false)

    return (
        <>
            <div>
                <button onClick={() => setShowText(!showText)}>Toggle Text</button>
                <div>
                    {showText && <Text />}
                </div>
            </div>
        </>
    );
};

export default ShowText;