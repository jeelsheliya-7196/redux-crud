import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { counterIncAsync } from '../../Services/Action/CounterAction'

function Counter() {

    const { count, isload, error } = useSelector(state => state.counter_Reducer)
    const dispatch = useDispatch()
    // const [count, SetCount] = useState(0)

    const handleAdd = () => {
        console.log("click");
        dispatch(counterIncAsync())
    }

    return (
        <>
            <h1>
                {
                    isload ? "Loading..." : error ? error : count
                }
            </h1>

            <button onClick={handleAdd}>
                ADD
            </button>
        </>
    )
}

export default Counter