import './App.css';

function App() {
  return (
    <div className="App">
      <h2>In React 17, if you change the state of the component two times, the component will re-render two times. <br></br><br></br>
      Now, in React 18, the two updates will be batched, and the component will render only once.</h2>
    </div>
  );
}

export default App;
