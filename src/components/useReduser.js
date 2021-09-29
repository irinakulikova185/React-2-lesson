import React, {useReducer } from 'react';

const reducer = (state, action) => {
    switch (action.type) {
      case 'plus':
        return {count: state.count + 1};
      case 'minus':
        return {count: state.count - 1};
        case 'reset':
        return init(action.payload)    
      default:
        return state
   }
}
const init = initialCount => {
    return {count: initialCount};
  }

const Counter = ({initialCount}) => {
    const [state, dispatch] = useReducer(reducer, initialCount, init);
    const { count } = state;
  
  
    return (
      <div className='component'>
        <h1>count: {count}</h1>
        <div>
        <button onClick={() => dispatch({ type: "plus" })}>Увеличить</button>
        <button onClick={() => dispatch({ type: "minus" })}>Уменьшить</button>
        <button onClick={() => dispatch({ type: "reset", payload: initialCount })}>Сброс счетчика</button>
        </div>
      </div>
    );
  }

  export default Counter 