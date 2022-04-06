import React from 'react'
import { nextSteps } from '../../store/actions/uiActions'
import { useDispatch } from 'react-redux'

const PersonalInfo = () => {
    const dispatch = useDispatch();
    const nextStepper = () => {
        dispatch(nextSteps(2));
    }
    return (
        <div className='personalInfo'>
            PersonalInfo
            <button onClick={() => { nextStepper() }}>Next</button>
        </div>
    )
}

export default PersonalInfo