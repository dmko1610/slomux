import React from 'react'
import { Interval } from './Interval'
import connect from './slomux/connect'

class TimerComponent extends React.Component {
    state = {
        currentTime: 0
    }

    render() {
        const { currentTime } = this.state
        return (
            <div>
                <Interval/>
                <div>
                    Секундомер: {currentTime} сек.
                </div>
                <div>
                    <button onClick={this.handleStart}>Старт</button>
                    <button onClick={this.handleStop}>Стоп</button>
                </div>
            </div>
        )
    }

    handleStart = () => {
        this.handler = setInterval(() => {
            this.setState({
                currentTime: this.state.currentTime + this.props.currentInterval
            })
        }, this.props.currentInterval * 1000)
    }

    handleStop = () => {
        this.setState({ currentTime: 0 })
    }

    componentWillUnmount() {
        clearInterval(this.handler)
    }
}

const mapStateToProps = (state) => {
    return {
        currentInterval: state.interval
    }
}

export const Timer = connect(mapStateToProps, () => {
})(TimerComponent)
