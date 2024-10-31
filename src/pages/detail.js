import { useEffect, useState } from 'react';
import { useParams, useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from 'react-redux';
import { getTodoList, getCounterList, incrementCounter } from '../state/todoState';

function Detail() {
    const { id } = useParams();
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const todoList = useSelector(getTodoList);
    const [currentTodo, setCurrentTodo] = useState({});
    const counterList = useSelector(getCounterList);

    useEffect(() => {
        const newTodoItem = todoList.find(todo => todo.id === parseInt(id));
        setCurrentTodo(newTodoItem);
    }, []);

    return (
        <div>
            <button onClick={() => navigate("/")}>Kembali</button>
            <h1>Halaman Detail</h1>
            <p>id: {currentTodo.id}</p>
            <p>title: {currentTodo.title}</p>
            <p>counter: {counterList[parseInt(id-1)].counter}</p>
            <button onClick={() => dispatch(incrementCounter(id))}>Tambah Counter</button>
        </div>
    );
}
export default Detail;