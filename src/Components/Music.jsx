import React from "react";

const Music = () => {
    const [numbers, setNumbers] = React.useState([])

    const addNumber = () => {
        let id = numbers.length + 1;
        setNumbers([...numbers,id])
    }

    return (
        <div>
            <ul>
                {
                    numbers.map((num, index) => (<li key={index}>{num}</li>))
                }
            </ul>
            <button onClick={addNumber}>New number</button>
        </div>
    )

}

export default Music