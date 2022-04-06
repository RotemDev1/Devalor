import React from 'react'
import { useSelector } from 'react-redux'
import PersonalInfo from './PersonalInfo';
import PetInfo from './PetInfo';
import Agreement from './Agreement';

const Steps = () => {
    const indicatorState = useSelector((state) => state.uiModule.indexPage);
    return (
        <div className='Steps'>
            <PersonalInfo />
            {[2, 3].find(el => el == indicatorState) && <PetInfo />}
            {indicatorState == 3 && <Agreement />}

        </div>
    )
}

export default Steps