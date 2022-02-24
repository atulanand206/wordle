import './App.css';

function App() {
  return (
    <div className="App">
      <h1>War of Wordles</h1>
      <div className="Games">
        <iframe title="Worldle" width="400" height="800" src="https://worldle.teuteuf.fr/"/>
        <iframe title="Wordle" width="400" height="800" src="https://www.nytimes.com/games/wordle/index.html"/>
        <iframe title="Quordle" width="400" height="800" src="https://www.quordle.com/#/"/>
        <iframe title="Nerdle" width="400" height="800" src="https://nerdlegame.com/"/>
      </div>
    </div>
  );
}

export default App;
