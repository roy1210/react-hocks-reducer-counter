import React from 'react';

function App() {
  const reducer = (state, action) => {
    switch (action) {
      case 'ADD':
        return state + 1;
      case 'SUB':
        return state - 1;
      case 'RES':
        return (state = 0);
      default:
        return state;
    }
  };

  // count -> state, dispatch -> action
  const [count, dispatch] = React.useReducer(reducer, 0);

  return (
    <>
      <div>{count}</div>
      <button onClick={() => dispatch('ADD')}>+</button>
      <button onClick={() => dispatch('SUB')}>-</button>
      <button onClick={() => dispatch('RES')}>Reset</button>
    </>
  );
}
export default App;
/*
const reducer = (state, action) => {
    const obj = {
      ADD: state + 1,
      SUB: state - 1,
      RES: (state = 0)
    };
    return obj[action];
    OR
    if (action === 'ADD') {
      return state + 1;
    } else if (action === 'SUB') {
      return state - 1;
    } else if (action === 'RES') {
      return (state = 0);
    }
  };

*/
