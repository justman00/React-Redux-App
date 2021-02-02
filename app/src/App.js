
import './App.css';
import GamesList from './components/GamesList';
import SearchInput from './components/SearchInput'

function App() {
  return (
    <div className="App">
     <h1>Games</h1>
     <SearchInput />
     <GamesList />
    </div>
  );
}

export default App;
