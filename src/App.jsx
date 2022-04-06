import { dataService } from './service/generalService/dataService';
import React, { useEffect } from "react";
import Indecator from './components/Indecator';
import Steps from './components/steps/Steps';

export function App() {
    useEffect(() => {
        console.log('App mount');
        dataService.initData();
        return () => {
            console.log('Unmount app');
            dataService.removeData()
        }
    }, [])

    return (
        <div className="app_container">
            <Indecator />
            <Steps />
        </div>
    );
}
