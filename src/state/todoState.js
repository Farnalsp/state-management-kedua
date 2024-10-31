import { createSlice } from "@reduxjs/toolkit";

export const todoSlice = createSlice({
    name: 'TodoState',
    initialState: {
        todoList: [{
            id: 1,
            title: "Ayam Bakar",
          },
          {
            id: 2,
            title: "Ayam Goreng",
          },
          {
            id: 3,
            title: "Sate Ayam",
          }],
        counterList: [{
            id: 1,
            counter: 0,
          },
          {
            id: 2,
            counter: 0,
          },
          {
            id: 3,
            counter: 0,
          }],
    },
    reducers: {
        setTodoList: (state, action) => {
            state.todoList = action.payload
        },
        incrementCounter: (state, action) => {
            const newCounterList = state.counterList.map(counter => {
                if (counter.id === parseInt(action.payload)) {
                    return {
                        ...counter,
                        counter: counter.counter += 1
                    }
                }
                return {
                    ...counter
                }
            });
            state.counterList = newCounterList;
        }
    }
})

export const { 
    setTodoList, 
    incrementCounter } 
    = todoSlice.actions;
export const getTodoList = (state) => state.todo.todoList;
export const getCounterList = (state) => state.todo.counterList;
export default todoSlice.reducer;