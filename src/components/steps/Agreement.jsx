import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { User } from "../../classes/user"
import { useSelector } from 'react-redux'
import { setUser } from '../../store/actions/userAction';

const Agreement = () => {
    const dispatch = useDispatch();
    const user = useSelector((state) => state.userModule.user);
    const [agreeBox, setAgreeBox] = useState(false);

    const saveData = () => {
        const newUser = new User(user.username, user.age, user.petName, user.petType);
        newUser.setAgreement(true)
        dispatch(setUser(newUser))
    }

    const setAgreement = (value) => {
        setAgreeBox(value)
    }

    return (
        <div className='agreement'>
            <p>
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Est veritatis placeat mollitia, corporis architecto, rerum modi fugiat praesentium dolore maxime magnam expedita odio nam incidunt consequatur ipsum minima ex suscipit assumenda. Voluptatibus quos magnam non sequi eos sit quia, quae sapiente laborum enim et expedita suscipit omnis consectetur error pariatur sunt quasi cumque. Corporis saepe laudantium quibusdam quis reiciendis quod, corrupti tempore officiis! Sed fugiat ex ea autem sit voluptatibus tenetur minus dignissimos error eos perferendis quas nobis maiores voluptate, minima cum officiis fugit facilis.
            </p>
            <div>
                <input type="checkbox" id="agreement" name="agreement" onChange={(event) => {
                    setAgreement(event.target.checked
                    )
                }} />
                <label for="agreement">Agreement</label>
            </div>
            {agreeBox && <button onClick={() => { saveData() }}>Save</button>}
        </div>
    )
}

export default Agreement