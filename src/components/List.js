function List({ todos,todoEdit,completed,deleteTodo}) {
  
  return (
    
    <>
      <div className='row'>
        <div className='list-group'>
          {todos.map((todo, index) => (
            <div key={index} className='list-group-item m-b-5 f-15'>
              <span className={todo.completed ? 'line-through' :''}>{todo.title}</span>
              <span className='m-l-5'>
                <button  id={todo.id} onClick={todoEdit} title="Düzenle" className='btn btn-secondary f-12 '>✎</button>
                <button  disabled={todo.completed} title={todo.completed?'Tamamlandı':'Tamamla'} onClick={()=>completed(todo.id)} className={!todo.completed?'btn btn-green f-12':'btn btn-green-disabled f-12'}> ✔</button> 
                <button title='Sil' onClick={()=>deleteTodo(todo.id)} className='btn btn-danger f-12'> ✖</button>
                
              </span>
            </div>
          ))}
        </div>
      </div>
    </>
  )
}

export default List
