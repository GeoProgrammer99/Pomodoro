import React from "react";

function breackInterval(props) {
    function decreaseCounter() {
        if (props.breakLength === 1) {
            console.log("ok2");
            return;
        }

        props.decreaseBreak();
    }
    function increaseCounter() {
        if (props.breakInterval === 60) {
            return;
        }
        props.increaseBreak();
    }

    return (
        <section>
            <h4>Breack Length</h4>
            <section class="interval-container">
                <button onClick={decreaseCounter}>Down</button>
                <p className="interval-length">{props.breackInterval}</p>
                <button onClick={increaseCounter}>Up</button>
            </section>
        </section>
    );
}

export default breackInterval;
