import logo from './logo.svg';
import './App.css';
import PokemonDropdown from './Component/DropDown/PokemonDropdown'
import Title from './Component/DropDown/Title';
// import Boxdata from './Component/PokemonBox/Boxdata';
import Pokemondisplay from './Component/PokemonDisplay/Pokemondisplay';

function App() {
  return (
    <div className="App">
      <Title name ="Select a Pokemon"/>
      <PokemonDropdown/>
    </div>
  );
}

export default App;
