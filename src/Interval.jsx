import React from 'react'
import { changeInterval } from './store/actions'
import connect from './slomux/connect'

class IntervalComponent extends React.Component {
    state = {
        interval: 1
    }

    setStateInterval = (value) => {
        const {interval} = this.state
        if (interval === 1 && value === -1) {
            return;
        }
        this.setState({ interval: interval + value })
    }

    componentDidUpdate(prevProps, prevState) {
        if (prevState.interval !== this.state.interval)
            this.props.changeInterval(this.state.interval)
    }

    render() {
        const {interval} = this.state
        return (
            <div>
                <span>Интервал обновления секундомера: {interval} сек.</span>
                <span>
                    <button onClick={() => this.setStateInterval(-1)}>-</button>
                    <button onClick={() => this.setStateInterval(1)}>+</button>
                </span>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        currentInterval: state.interval
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        changeInterval: (value) => dispatch(changeInterval(value))
    }
}

export const Interval = connect(mapStateToProps, mapDispatchToProps)(IntervalComponent)
