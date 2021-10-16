import React, { useState } from "react";

const Countdown = () => {
    const [days, setDays] = useState("");
    const [hours, setHours] = useState("");
    const [minutes, setMinutes] = useState("");
    const [seconds, setSeconds] = useState("");

    return (
        <>
            <section>
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
        </>
    );
};

export default Countdown;
