import React, { useState, useEffect } from "react";
import './Countdown.css';

const Countdown = () => {
    const [days, setDays] = useState("");
    const [hours, setHours] = useState("");
    const [minutes, setMinutes] = useState("");
    const [seconds, setSeconds] = useState("");
    const [countDownOver, setCountDownOver] = useState(false);

    const timer = () => {
        const countDownDate = new Date("Jan 01, 2022 00:00:00").getTime();

        // Get current date time
        const todayDate = new Date().getTime();

        // Get the difference between current date and countdown date
        const timeRemaining = countDownDate - todayDate;

        // Get time remaining
        const secondsRemaining = timeRemaining / 1000;
        let daysLeft = Math.floor(secondsRemaining / 3600 / 24);
        let hoursLeft = Math.floor((secondsRemaining / 3600) % 24);
        let minutesLeft = Math.floor((secondsRemaining / 60) % 60);
        let secondsLeft = Math.floor(secondsRemaining % 60);

        // Add 0 in front of the time when this is < 10
        function formatTime(time) {
            return time < 10 ? (`0${time}`) : time;
        }

        daysLeft = formatTime(daysLeft)
        hoursLeft = formatTime(hoursLeft)
        minutesLeft = formatTime(minutesLeft)
        secondsLeft = formatTime(secondsLeft)

        setDays(daysLeft);
        setHours(hoursLeft);
        setMinutes(minutesLeft);
        setSeconds(secondsLeft);

        if (timeRemaining < 0) {
            setDays(0);
            setHours(0);
            setMinutes(0);
            setSeconds(0);
            setCountDownOver(true);
        }
    };

    useEffect(() => {
        setInterval(timer, 1000);
    }, []);

    return (
        <>
            {countDownOver ? (
                <h1>Happy New Year</h1>
            ) : (
                <section className="container-countdown">
                    <h1>Countdown New Year</h1>
                    <div className="countdown">
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
                    </div>
                </section>
            )}
        </>
    );
};

export default Countdown;
