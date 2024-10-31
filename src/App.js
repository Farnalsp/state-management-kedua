import './App.css';
import { useNavigate } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { getTodoList, getCounterList, incrementCounter} from './state/todoState';
function App() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const todoList = useSelector(getTodoList);
  const counterList = useSelector(getCounterList);

  return (
    <div className="App">
      {todoList && todoList.map((todoItem, idx) => {
        return (
          <div key={todoItem.id} style={{padding: '16px', borderBottom: '1px solid #000'}}>
          <span>{todoItem.title}</span>
          <span style={{marginLeft: '16px'}}>{counterList[idx].counter}</span>
          <button onClick={() => dispatch(incrementCounter(idx+1))} style={{marginLeft: '8px'}}>+</button>
          <button onClick={() => navigate(`/detail/${todoItem.id}`)} style={{marginLeft: '8px'}}>Masuk ke Detail</button>
          </div>
        )
      })}
    </div>
    );
}

export default App;
