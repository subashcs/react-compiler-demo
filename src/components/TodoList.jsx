import { filterTodos } from '../utils'

export default function TodoList({ todos, theme, tab }) {
  "use memo"
  console.log("compiler check: todolist component rendered")
  // const visibleTodos = useMemo(
  //   () => filterTodos(todos, tab),
  //   [todos, tab]
  // );

  // uncomment above and comment below to see how it should actually 
  // work by default
  const visibleTodos = filterTodos(todos, tab);

  return (
    <div className={theme}>
      <p><b>Note: <code>filterTodos</code> is artificially slowed down!</b></p>
      <ul>
        {visibleTodos.map(todo => (
          <li key={todo.id}>
            {todo.completed ?
              <s>{todo.text}</s> :
              todo.text
            }
          </li>
        ))}
      </ul>
    </div>
  );
}
