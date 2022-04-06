import React, { useState } from 'react'
import { nextSteps } from '../../store/actions/uiActions'
import { useDispatch } from 'react-redux'
import { useSelector } from 'react-redux'
import { User } from "../../classes/user"
import { setUser } from '../../store/actions/userAction';

const PetInfo = () => {
    const dispatch = useDispatch();
    const user = useSelector((state) => state.userModule.user);
    const [petName, setPetName] = useState("");
    const [petType, setPetType] = useState("Cat");

    const changeType = (value) => {
        setPetType(value)
    }

    const changeName = (value) => {
        setPetName(value)
    }

    const setPetUser = () => {
        const newUser = new User(user.username, user.age, petName, petType);
        dispatch(setUser(newUser))
    }

    const nextStepper = () => {
        setPetUser()
        dispatch(nextSteps(3));
    }
    return (
        <div className='petInfo'>
            <form action="">
                <input
                    type="text"
                    name="petName"
                    value={petName || ''}
                    onChange={(event) => changeName(event.target.value)}
                    placeholder="Insert Pet Name"
                />
                <select name="pet" onChange={(event) => changeType(event.target.value)} value={`${petType}`} >
                    <option value="Cat"> Cat</option>
                    <option value="Dog"> Dog</option>
                    <option value="Horse"> Horse</option>
                </select>
            </form>
            <button onClick={() => { nextStepper() }}>Next</button>
        </div>
    )
}

export default PetInfo