import logo from './logo.svg';
import './App.css';
import { useDispatch } from 'react-redux';
import { decrement, increment, incrementByAmount } from './redux/counter';
import { useSelector } from 'react-redux';

function App() {
  const { count } = useSelector(state => state.counter); // counter is from store.js
  // const { count } = useSelector(state => state.counter.count); // counter is from store.js

  const dispatch = useDispatch(); // dispatch is used to call action

  // incrmentByAmount(33) - 33 is a payload 

  return (
    <div className="App">
      <h1>The count is: {count}</h1>
      <button onClick={() => dispatch(increment())}>increment</button>
      <button onClick={() => dispatch(decrement())}>decrement</button>
      <button onClick={() => dispatch(incrementByAmount(33))}>Increment by 33</button>
    </div>
  );
}

export default App;
