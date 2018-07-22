import React from 'react'
import {createStore} from 'redux'
import {Provider, connect} from 'react-redux'

class Counter extends React.Component {
    render() {
        const {value, onIncreaseClick} = this.props;
        return (
            <div>
                <span>{value}</span>
                <button onClick={onIncreaseClick}>Increase</button>
            </div>
        )
    }
}

const increaseAction = { type:'increase' }

function counter(state={count: 1}, action) {
    let count = state.count;
    switch(action.type){
        case 'increase':
            return {count: count + 1};
        default:
            return state;
    }
}

let store = createStore(counter);

function mapStateToProps(state)  {
    return {
        value: state.count
    }
}

function mapDispatchToProps(dispatch) {
    return { onIncreaseClick : () => dispatch(increaseAction) }
}

let App = connect(
    mapStateToProps,
    mapDispatchToProps,
)(Counter);

React.render(
    <Provider store={store}>
        <App />
    </Provider>,
    document.getElementById('root')
)