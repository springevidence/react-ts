import React, {useEffect, useState} from 'react';
import {clearInterval} from "timers";
const getTwoDigitsString = (num: number) => num < 10 ? '0' + num : num
const Clock = () => {
    const [date, setDate] = useState(new Date())

    useEffect(() => {
        const intervalId = setInterval(() => {
            setDate(new Date())
        }, 1000)
        return clearInterval(intervalId)
    }, [])
    return (
        <div>
            <span>
                {getTwoDigitsString(date.getHours())}:
            </span>
            <span>
                {getTwoDigitsString(date.getMinutes())}:
            </span>
            <span>
                {getTwoDigitsString(date.getSeconds())}
            </span>
        </div>
    );
};

export default Clock;