import './App.css';
import TodoItemInfo from './TodoItemInfo';
import TodoList from './TodoList';
import Navbar from './Navbar';

function App() {
  return (
    <>
      <Navbar />
      <div className="container-fluid container-md">
        <div className="row my-3">
          <div className="col-12 col-md-6">
            <TodoList />
          </div>
          <div className="col-12 col-md-6">
            <TodoItemInfo />
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
