import {useState, useRef} from 'react'

    const [items, setitems] = useState(["apple"])
    const inputRef = useRef(null)

    function addItem(){
        if(!inputRef.current.value) return
        setitems((prev) => [...prev, inputRef.current])
    }

    return (
        <>
        <ul>
            {items.map((item, index) => {
                return (<li key={index}>{item}</li>)
            })}
        </ul>
        <input ref={inputRef} type="text" />
        <button onClick={addItem}>Add item</button>
        </>
    )

export default Component1