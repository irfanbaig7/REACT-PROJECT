import React, { useRef, useState } from 'react'

export default function ToastCtn() {

    const [list, setList] = useState([])
    const timerRef = useRef({})
    console.log(timerRef);

    const handleAdd = (msg, type) => {
        const id = new Date().getTime();
        const newList = [...list, { id, msg, type }]
        setList(newList)

        timerRef.current[id] = setTimeout(() => handleClose(id), 5000)
    }

    const handleClose = (id) => {
        clearTimeout(timerRef.current[id])
        delete timerRef.current[id]
        setList((prevList) => {
            const filterArr = prevList.filter((defalutList) => {
                return defalutList.id !== id
            })
            return filterArr
        })
    }

    return (
        <div className='ctn'>
            <div className="toastCtn">
                {list.map(({ id, msg, type }) => (
                    <div key={id} className={`toast ${type}`}>
                        {msg} Toast <span onClick={() => handleClose(id)}>X</span>
                    </div>
                ))
                }
            </div>
            <div className="btnCtn">
                <button onClick={() => handleAdd('Success', 'success')}>Success</button>
                <button onClick={() => handleAdd('Inforamtion', 'inforamtion')}>Inforamtion</button>
                <button onClick={() => handleAdd('Waring', 'waring')}>Waring</button>
                <button onClick={() => handleAdd('Error', 'error')}>Error</button>
            </div>
        </div>
    )
}
