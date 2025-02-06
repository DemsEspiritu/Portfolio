import React, { useState, useEffect } from 'react';
import { CiLogin } from "react-icons/ci";


const Header = () => {
    const [currentDateTime, setCurrentDateTime] = useState(new Date());

    useEffect(() => {
        const timerID = setInterval(() => tick(), 1000);
        return () => clearInterval(timerID);
    }, []);

    const tick = () => {
        setCurrentDateTime(new Date());
    };

    const formatTime = (time) => {
        return time.toLocaleTimeString();
    };

    const formatDate = (date) => {
        return date.toLocaleDateString();
    };

    return (

        <div className='w-auto h-11 bg-blue-800 items-center justify-between flex p-6'>
            <div>
                <h1 className='text-md font-mono text-white'>Time: {formatTime(currentDateTime)}</h1>

                <h1 className='text-md font-mono text-white'>Date: {formatDate(currentDateTime)}</h1>
            </div>
            <div>
                <div className='font-bold text-white text-sm flex items-center gap-4 '>





                    <a to="/login" className="flex items-center hover:text-black hover:bg-white rounded-lg p-2">
                        LOGIN
                        <span className=""><CiLogin /></span>
                    </a>

                </div>


            </div>
        </div>

    );
};

export default Header;
