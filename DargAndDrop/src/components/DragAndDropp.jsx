import React, { useRef, useState } from 'react'

export default function DragAndDropp({ initialData }) {
    // console.log(initialData["In Progress"]);

    const [data, setData] = useState(initialData)
    const dragItem = useRef()
    const dargContainer = useRef()

    // Make a methiod for Drag Start
    const handlDragStart = (e, item, container) => {
        dragItem.current = item
        dargContainer.current = container
        e.target.style.opacity = "0.5"
    }

    // Make a methiod for Drag End
    const handlDragEnd = (e) => {
        e.target.style.opacity = "1";
    }

    // method to actul drop
    const handlDargOver = (e) => {
        e.preventDefault();
    }


    // Drop method
    const handledrop = (e, targteConatiner) => {
        const item = dragItem.current;
        const sourceConatainer = dargContainer.current;
        setData((prev) => {
            const setData = { ...prev }
            setData[sourceConatainer] = setData[sourceConatainer].filter((i) => i !== item)
            setData[targteConatiner] = [...setData[targteConatiner], item]
            return setData;
        })

    }

    return (
        <div style={{ display: "flex", justifyContent: "space-around", color: "black" }}>
            {Object.keys(data).map((container, index) => {
                return <div key={index} onDrop={(e) => handledrop(e, container)} onDragOver={handlDargOver} style={{
                    background: "#f0f0f0",
                    padding: "1rem",
                    width: 250,
                    minHeight: 300,
                }}>
                    <h3>{container}</h3>
                    {data[container].map((item, idx) => {
                        return (
                            <div
                                key={idx}
                                onDragStart={(e) => handlDragStart(e, item, container)}
                                onDragEnd={handlDragEnd}
                                draggable
                                style={{
                                    userSelect: "none",
                                    padding: 16,
                                    margin: "0 0 8px 0",
                                    backgroundColor: "white",
                                    cursor: "move",
                                }}
                            >
                                {item}
                            </div>
                        )
                    })}
                </div>
            })}
        </div>
    )
}
