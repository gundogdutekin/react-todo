import styles from '../app.module.css'
import classNames  from "classnames";
function List({ todos,todoEdit,completed,deleteTodo}) {
  
  return (
    
    <>
      <div className='row'>
        <div className={styles.listGroup}>
          {todos.map((todo, index) => (
            <div key={index} className={classNames(styles.listGroupItem, styles.mb5, styles.f15)}>
              <span className={todo.completed ? styles.lineThrough :''}>{todo.title}</span>
              <span className={styles.ml5}>
                <button  id={todo.id} onClick={todoEdit} title="Düzenle" className={classNames(styles.btn, styles.btnSecondary, styles.f12)}>✎</button>
                <button  disabled={todo.completed} title={todo.completed?'Tamamlandı':'Tamamla'} onClick={()=>completed(todo.id)} className={!todo.completed?classNames(styles.btn,styles,styles.btnGreen,styles.f12):classNames(styles.btn, styles.btnGreenDisabled, styles.f12)}> ✔</button> 
                <button title='Sil' onClick={()=>deleteTodo(todo.id)} className={classNames(styles.btn, styles.btnDanger, styles.f12)}> ✖</button>
                
              </span>
            </div>
          ))}
        </div>
      </div>
    </>
  )
}

export default List
