import "./App.css";
import { CountMain } from "./CountMain";
import { TodoMain } from "./TodoMain";

function App() {

  return (
    <div style={{display:'grid', "grid-template-columns": "1fr 1fr"}}>
      <CountMain style={{width:'50%'}}/>
      <TodoMain/>
    </div>
  );
}

export default App;
