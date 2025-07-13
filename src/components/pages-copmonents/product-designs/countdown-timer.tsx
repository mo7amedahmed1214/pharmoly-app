'use client';
import React, { useEffect, useState } from 'react';

interface CountdownTimerProps {
    targetDate: string | Date;
}
interface TimeBoxProps {
    value: string;
}


const CountdownTimer = ({ targetDate }: CountdownTimerProps) => {
    const calculateTimeLeft = () => {
        const difference = new Date(targetDate).getTime() - new Date().getTime();
        if (difference <= 0) return null;

        return {
            days: String(Math.floor(difference / (1000 * 60 * 60 * 24))).padStart(2, '0'),
            hours: String(Math.floor((difference / (1000 * 60 * 60)) % 24)).padStart(2, '0'),
            minutes: String(Math.floor((difference / 1000 / 60) % 60)).padStart(2, '0'),
            seconds: String(Math.floor((difference / 1000) % 60)).padStart(2, '0'),
        };
    };

    const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());

    useEffect(() => {
        const timer = setInterval(() => {
            const updatedTime = calculateTimeLeft();
            setTimeLeft(updatedTime);
            if (!updatedTime) clearInterval(timer); // stop when countdown ends
        }, 1000);

        return () => clearInterval(timer);
    }, [targetDate]);

    if (!timeLeft) return <div className="text-red-600 font-bold">Time’s up!</div>;

    return (
        <div className="flex items-center font-semibold text-white text-[18px]">
            <TimeBox value={timeLeft.days} />
            <TimeBox value={timeLeft.hours} />
            <TimeBox value={timeLeft.minutes} />
            <span className="text-black text-xl font-bold mx-1">:</span>
            <TimeBox value={timeLeft.seconds} />
        </div>
    );
};


const TimeBox: React.FC<TimeBoxProps> = ({ value }) => (
    <div className="bg-[#e91e44] text-sm px-2 py-1 rounded-md text-center mr-1 min-w-[20px]">
        {value}
    </div>
);

export default CountdownTimer;
