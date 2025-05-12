import Mycomp from './Mycomp';
import { useAppDispatch, useAppSelector } from './redux/hooks';
import { decrement, increment } from './redux/slices/counter';

export default function App() {

  const count = useAppSelector(state => state.counter);
  const dispatch = useAppDispatch()
  return (
    <div>
      <header>
        <h1>Count is : {count}</h1>
        <button onClick={() => dispatch(increment())}>Increment</button>
        <button onClick={() => dispatch(decrement())}>Decrement</button>
      </header>
      <Mycomp />
    </div>
  )
}
