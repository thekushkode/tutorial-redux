import React from 'react';
import './App.css';
import { useSelector, useDispatch } from 'react-redux';
import {increment, decrement} from './actions';

function App() {
  const counter = useSelector(state => state.counter);
  const isLogged = useSelector(state => state.isLogged);
  const dispatch = useDispatch();
  return (
    <div>
      <header>
        <h1>Counter {counter}</h1>

        <button onClick={() => dispatch(increment(5))}>+</button>
        <button onClick={() => dispatch(decrement(5))}>-</button>
        {isLogged ? <h4>Valuable INfo I Shoudnt See: </h4> : ''}
        
      </header>
    </div>
  );
}

export default App;
