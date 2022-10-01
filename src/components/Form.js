import { v4 as uuidv4 } from 'uuid'
function Form({
  todos,
  setTodos,
  input,
  setInput,
  inputedit,
  todoUpdate,
  setInputEdit,
}) {
  const addTodo = (e) => {
    e.preventDefault()
    setTodos([...todos, { id: uuidv4(), title: input, completed: false }])
    setInput('')
  }
  return (
    <div>
      <h1>todos</h1>

      <div className='row'>
        <form>
          <input
            value={input}
            onChange={(e) => setInput(e.target.value)}
            className='text-input'
            placeholder='What needs to be done?'
          />
          {!inputedit.id ? (
            <button
              onClick={addTodo}
              title='Ekle'
              className='btn btn-secondary f-15'
            >
              Add
            </button>
          ) : null}
          {inputedit.id ? (
            <button
              onClick={todoUpdate}
              title='Ekle'
              className='btn btn-secondary f-15'
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
