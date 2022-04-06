import React from 'react'
import { useSelector } from 'react-redux'


// do desgine to active classname

const Indecator = () => {
    const indicatorState = useSelector((state) => state.uiModule.indexPage);
    const active = "color : #999"

    return (
        <div className="indicator">
            <label className={`stepItem ${indicatorState == 1 ? active : ""}`}>1</label>
            <label className={`stepItem ${indicatorState == 2 ? active : ""}`}>2</label>
            <label className={`stepItem ${indicatorState == 3 ? active : ""}`}>3</label>
        </div>
    )
}
export default Indecator