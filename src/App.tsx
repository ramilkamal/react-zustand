import { Counter } from './features/counter/view/counter';
import { Users } from './features/users/view/users';
import './App.css';

function App() {
  return (
    <>
      <div className="App">
        <h1>App</h1>
        <Counter />
        <Users />
      </div>
    </>
  );
}

export default App;
