import  { useState } from 'react'
import styles from './app.module.css'
import Form from './components/Form'
import List from './components/List'

function App() {
  const [input,setInput] = useState('')
  const [inputedit,setInputEdit] = useState({})
  const [todos, setTodos] = useState([])

  const todoEdit=(e)=>{
    e.preventDefault()
    todos.forEach(todo => {
      if(todo.id===e.target.id){
         setInput(todo.title)
         setInputEdit({title:todo.title,id:e.target.id})
      }
     
       
    })
  };
  const todoUpdate=(e)=>{
    e.preventDefault()
    let i=0
    todos.forEach(todo => {
      if(todo.id===inputedit.id){
        todos.splice(i,1,{title:input,id:inputedit.id,completed:todo.completed})
      }
      i++
    })
    setTodos(todos)
    setInput('')
    setInputEdit({})
   
  }
  const completed=(id)=>{    
    let currentTodos=todos.find(todo=>todo.id===id)
    currentTodos.completed=true
    setTodos([...todos])    
  }
  const deleteTodo=(id)=>{
    setTodos(todos.filter(todo=>todo.id!==id))
  }
  return (
    <div className={styles.container}>
      <Form todos={todos} setTodos={setTodos} setInputEdit={setInputEdit} inputedit={inputedit} input={input} setInput={setInput} todoUpdate={todoUpdate} />
      <List deleteTodo={deleteTodo} completed={completed}   todos={todos} todoEdit={todoEdit}  />
    </div>
  )
}

export default App
