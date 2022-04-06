import React from 'react'
import { nextSteps } from '../../store/actions/uiActions'
import { useDispatch } from 'react-redux'
import { useForm } from "../../service/generalService/customHooks";
import { User } from "../../classes/user"
import { setUser } from '../../store/actions/userAction';
const PersonalInfo = () => {
    const dispatch = useDispatch();

    const [user, handleChangeUser, setCredUser] = useForm(
        { name: '', age: 18 }
    );

    const setNewUser = (user) => {
        const newUser = new User(user.name, user.age);
        dispatch(setUser(newUser))
    }

    const nextStepper = () => {
        setNewUser(user)
        dispatch(nextSteps(2));
    }
    return (
        <div className='personalInfo'>
            <form action="">
                <input
                    type="text"
                    name="name"
                    value={user.name || ''}
                    onChange={handleChangeUser}
                    placeholder="name"
                />
                <input
                    type="number"
                    name="age"
                    value={user.age || 18}
                    onChange={handleChangeUser}
                    placeholder="age"
                />
            </form>
            <button onClick={() => { nextStepper() }}>Next</button>
        </div>
    )
}

export default PersonalInfo