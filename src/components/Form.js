import { v4 as uuidv4 } from 'uuid'
import styles from '../app.module.css'
import classNames  from "classnames";
function Form({
  todos,
  setTodos,
  input,
  setInput,
  inputedit,
  todoUpdate,
 
}) {
  const addTodo = (e) => {
    e.preventDefault()
    setTodos([...todos, { id: uuidv4(), title: input, completed: false }])
    setInput('')
  }
  return (
    <div>
      <h1>todos</h1>

      <div className={styles.row}>
        <form>
          <input
            value={input}
            onChange={(e) => setInput(e.target.value)}
            placeholder='What needs to be done?'
          />
          {!inputedit.id ? (
            <button
              onClick={addTodo}
              title='Ekle'
              className={classNames(styles.btn,styles.btnSecondary,styles.f15)}
            >
              Add
            </button>
          ) : null}
          {inputedit.id ? (
            <button
              onClick={todoUpdate}
              title='Ekle'
              className={classNames(styles.btn, styles.btnSecondary,styles.f15)}
            >
              Update
            </button>
          ) : null}
        </form>
      </div>
    </div>
  )
}

export default Form
