import React, { useState, useEffect } from "react";

const Countdown = () => {
    const [days, setDays] = useState("");
    const [hours, setHours] = useState("");
    const [minutes, setMinutes] = useState("");
    const [seconds, setSeconds] = useState("");
    const [time, setTime] = useState(false);

    const timer = () => {
        const countDownDate = new Date("Jan 01, 2022 00:00:00").getTime();

        // Get current date time
        const todayDate = new Date().getTime();

        // Get the difference between current date and countdown date
        const timeRemaining = countDownDate - todayDate;

        // Get time remaining
        const secondsRemaining = timeRemaining / 1000;
        const daysLeft = Math.floor(secondsRemaining / 3600 / 24);
        const hoursLeft = Math.floor((secondsRemaining / 3600) % 24);
        const minutesLeft = Math.floor((secondsRemaining / 60) % 60);
        const secondsLeft = Math.floor(secondsRemaining % 60);

        setDays(daysLeft);
        setHours(hoursLeft);
        setMinutes(minutesLeft);
        setSeconds(secondsLeft);

        if (timeRemaining < 0) {
            setDays(0);
            setHours(0);
            setMinutes(0);
            setSeconds(0);
            setTime(true);
        }
    };

    useEffect(() => {
        setInterval(timer, 1000);
    }, []);

    return (
        <>
            {time ? (
                <h1>Happy New Year</h1>
            ) : (
                <section>
                    <h1>Countdown New Year</h1>
                    <article>
                        <p>{days}</p>
                        <h2>Days</h2>
                    </article>
                    <article>
                        <p>{hours}</p>
                        <h2>Hours</h2>
                    </article>
                    <article>
                        <p>{minutes}</p>
                        <h2>Minutes</h2>
                    </article>
                    <article>
                        <p>{seconds}</p>
                        <h2>Seconds</h2>
                    </article>
                </section>
            )}
        </>
    );
};

export default Countdown;
