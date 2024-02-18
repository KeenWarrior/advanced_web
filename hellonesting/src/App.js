import logo from './logo.svg';
import './App.css';
import BaseLayout from './BaseLayout';

function App() {
  return (
    <div className="App">
      <BaseLayout>
        <h3>This is the child 1</h3>
        <h3>This is the child 2</h3>
        <h3>This is the child 3</h3>
        <h3>This is the child 4</h3>
        <h3>This is the child 5</h3>
      </BaseLayout>
    </div>
  );
}

export default App;
