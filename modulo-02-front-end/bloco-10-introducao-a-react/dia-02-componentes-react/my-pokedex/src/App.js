import pokemons from './data';
import Pokedex from './Pokedex';

function App() {
  return (
    <main>
      <Pokedex pokemons={ pokemons }/>
    </main>
  );
}

export default App;
