import React from "react";
import {render} from "react-dom";

class Timer extends React.Component {
    constructor() {
        super();
        this.state = {
            isSession: true,
            timerSecond: 0,
            intervalId: 0,
        };
        this.play = this.play.bind(this);
        this.stopTimer = this.stopTimer.bind(this);
        this.resetTimer = this.resetTimer.bind(this);

        this.decreaseTimer = this.decreaseTimer.bind(this);
    }
    play() {
        let intervalId = setInterval(this.decreaseTimer, 1000);
        console.log("test");
        this.setState({
            intervalId: intervalId,
        });
    }
    decreaseTimer() {
        switch (this.state.timerSecond) {
            case 0:
                if (this.props.timerMinute === 0) {
                    if (this.state.isSession) {
                        this.setState({
                            isSession: false,
                        });
                        this.props.toggleInterval(this.state.isSession);
                    }
                }
                this.props.updateTimerMinute();
                this.setState({
                    timerSecond: 59,
                });
                break;
            default:
                this.setState((preveState) => {
                    return {
                        timerSecond: preveState.timerSecond - 1,
                    };
                });
                break;
        }
    }
    stopTimer() {
        clearInterval(this.state.intervalId);
    }
    resetTimer() {
        this.stopTimer();
        this.props.resetTimer();
        this.setState({
            timerSecond: 0,
        });
    }

    render() {
        return (
            <section>
                <section className="timer-container">
                    <h4>
                        {this.state.isSession === true ? "Session" : "Break"}
                    </h4>
                    <span>{this.props.timerMinute}</span>
                    <span>:</span>
                    <span>
                        {this.state.timerSecond === 0
                            ? "00"
                            : this.state.timerSecond < 10
                            ? "0" + this.state.timerSecond
                            : this.state.timerSecond}
                    </span>
                </section>
                <section className="timer-actions">
                    <button onClick={this.play}>Play</button>
                    <button onClick={this.stopTimer}>Stop</button>
                    <button onClick={this.resetTimer}>Refresh</button>
                </section>
            </section>
        );
    }
}
export default Timer;
