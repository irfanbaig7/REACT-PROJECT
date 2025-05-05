
import { createContext, useContext } from "react";

export const TodoContext = createContext({
    todos: [
        {
            id : 1,
            todo: "Todo msg",
            complited: false
        }   
    ],
    addTodo: (todo) => {},
    updateTodo: (id, todo) => {},
    deleteTodo: (id) => {},
    toggleComplete: (id) => {}
}) // is ke andar aur kya de sakte hai?
    
export const useTodo = () => {
    return useContext(TodoContext)
}

export const TodoProvider = TodoContext.Provider