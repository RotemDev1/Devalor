import React from 'react'
import PersonalInfo from './PersonalInfo';
import PetInfo from './PetInfo';
import Agreement from './Agreement';

const Steps = () => {
    return (
        <div className='Steps'>
            <PersonalInfo />
            <PetInfo />
            <Agreement />
        </div>
    )
}

export default Steps