import './App.css';
import TodoItemInfo from './TodoItemInfo';
import TodoList from './TodoList';

function App() {
  return (
    <>
      <Navbar />
      <div className="container-fluid container-md">
        <div className="row">
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
