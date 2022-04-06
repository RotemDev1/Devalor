import React from 'react'
import { nextSteps } from '../../store/actions/uiActions'
import { useDispatch } from 'react-redux'

const Agreement = () => {
    const dispatch = useDispatch();
    const saveData = () => {
        console.log("saveData");
    }
    return (
        <div className='agreement'>
            agreement
            <button onClick={() => { saveData() }}>Save</button>
        </div>
    )
}

export default Agreement