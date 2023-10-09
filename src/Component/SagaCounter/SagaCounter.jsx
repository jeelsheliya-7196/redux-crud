import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { INC } from '../../Services/Action/SagaCountAction'

function SagaCounter() {

    const {count} = useSelector(state => state.SagaCounter)

    const dispatch = useDispatch()

    const handleClick = ()=>{
        dispatch(INC())
    }


    return (
        <>
            <div className='text-center py-5'>
                SagaCounter

                <h1>
                    {count}
                </h1>

                <button onClick={handleClick}>
                    ADD
                </button>
            </div>

        </>

    )
}

export default SagaCounter;