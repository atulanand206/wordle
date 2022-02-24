import './App.css';

function App() {
  return (
    <div className="App">
      <h1>War of Wordles</h1>
      <div className="Games">
        <iframe title="Worldle" width="400" height="800" src="https://worldle.teuteuf.fr/"/>
        <iframe title="Quordle" width="400" height="800" src="https://www.quordle.com/#/"/>
        <iframe title="Nerdle" width="400" height="800" src="https://nerdlegame.com/"/>
        <iframe title="Absurdle" width="400" height="800" src="https://qntm.org/files/absurdle/absurdle.html"/>
      </div>
    </div>
  );
}

export default App;
