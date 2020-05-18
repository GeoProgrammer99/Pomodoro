import React from "react";
import BreackInterval from "../BreakInterval";
import SessionLength from "../sessionlength";
import Timer from "../Timer";
import "../App.css";

class App extends React.Component {
    constructor() {
        super();
        this.state = {
            breakLength: 5,
            sessionLength: 25,
            timerMinute: 25,
            isPlay: false,
        };
        this.onIncreaseBreakLength = this.onIncreaseBreakLength.bind(this);
        this.onDecreaseBreakLength = this.onDecreaseBreakLength.bind(this);
        // session
        this.onIncreaseSessionLength = this.onIncreaseSessionLength.bind(this);
        this.onDecreaseSessionLength = this.onDecreaseSessionLength.bind(this);
        this.OnToggleInterval = this.OnToggleInterval.bind(this);
        this.OnUpdateTimerMinute = this.OnUpdateTimerMinute.bind(this);
        this.onResetTimer = this.onResetTimer.bind(this);
    }

    onIncreaseBreakLength() {
        this.setState((prevState) => {
            console.log(prevState.breakLength);
            return {
                breakLength: prevState.breakLength + 1,
            };
        });
    }
    onDecreaseBreakLength() {
        this.setState((prevState) => {
            console.log(prevState.breakLength);
            return {
                breakLength: prevState.breakLength - 1,
            };
        });
    }

    // session

    onIncreaseSessionLength() {
        this.setState((prevState) => {
            return {
                sessionLength: prevState.sessionLength + 1,
                timerMinute: prevState.sessionLength + 1,
            };
        });
    }
    onDecreaseSessionLength() {
        this.setState((prevState) => {
            return {
                sessionLength: prevState.sessionLength - 1,
                timerMinute: prevState.sessionLength - 1,
            };
        });
    }

    OnUpdateTimerMinute() {
        this.setState((prevState) => {
            return {
                timerMinute: prevState.timerMinute - 1,
            };
        });
    }
    OnToggleInterval(isSession) {
        if (isSession) {
            this.setState({
                timerMinute: this.state.sessionLength,
            });
        } else {
            this.setState({
                timerMinute: this.state.breakLength,
            });
        }
    }
    onResetTimer() {
        this.setState({
            timerMinute: this.state.sessionLength,
        });
    }

    render() {
        return (
            <main>
                <h2>Pomodoro Clock</h2>
                <section className="interval-length-container">
                    <BreackInterval
                        breackInterval={this.state.breakLength}
                        increaseBreak={this.onIncreaseBreakLength}
                        decreaseBreak={this.onDecreaseBreakLength}
                    />
                    <SessionLength
                        sessionLength={this.state.sessionLength}
                        increaseSession={this.onIncreaseSessionLength}
                        decreaseSession={this.onDecreaseSessionLength}
                    />
                </section>
                <Timer
                    timerMinute={this.state.timerMinute}
                    breakLength={this.state.breakLength}
                    updateTimerMinute={this.OnUpdateTimerMinute}
                    ToggleInterval={this.OnToggleInterval}
                    resetTimer={this.onResetTimer}
                />
            </main>
        );
    }
}

export default App;
