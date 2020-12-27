import './App.css';
import TodoList from './TodoList';

function App() {
  return (
    <div className="container-fluid container-md">
      <div className="row">
        <div className="col-12 col-md-6">
          <TodoList />
        </div>
      </div>
    </div>
  );
}

export default App;
