import { useState } from 'react';
import { createTodos } from './utils';
import TodoList from './components/TodoList';

const todos = createTodos();

export function TodoMain() {
  "use memo"

  const [tab, setTab] = useState('all');
  const [isDark, setIsDark] = useState(false);
  console.log("compiler check: todomain component rendered")

  return (
    <div>
     <p>Automatic memozation in TodoList is not working when theme is changed</p>
     <br/>
      <button onClick={() => setTab('all')}>
        All
      </button>
      <button onClick={() => setTab('active')}>
        Active
      </button>
      <button onClick={() => setTab('completed')}>
        Completed
      </button>
      <br />
      <label>
        <input
          type="checkbox"
          checked={isDark}
          onChange={e => setIsDark(e.target.checked)}
        />
        Dark mode
      </label>
      <hr />
      <TodoList
        todos={todos}
        tab={tab}
        theme={isDark ? 'dark' : 'light'}
      />
    </div>
  );
}

