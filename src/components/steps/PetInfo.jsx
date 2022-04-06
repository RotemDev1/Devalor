import React from 'react'
import { nextSteps } from '../../store/actions/uiActions'
import { useDispatch } from 'react-redux'

const PetInfo = () => {
    const dispatch = useDispatch();
    const nextStepper = () => {
        dispatch(nextSteps(3));
    }
    return (
        <div className='petInfo'>
            PetInfo
            <button onClick={() => { nextStepper() }}>Next</button>
        </div>
    )
}

export default PetInfo