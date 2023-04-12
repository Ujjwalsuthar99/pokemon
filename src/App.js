import logo from './logo.svg';
import './App.css';
import PokemonDropdown from './Component/DropDown/PokemonDropdown'
import Title from './Component/DropDown/Title';
import Pokemondisplay from './Component/PokemonDisplay/Pokemondisplay';

function App() {
  return (
    <div className="App">
      <Title name ="Select Pokemon"/>
      <PokemonDropdown/>
      <Pokemondisplay name ="Selected Pokemon"/>
    </div>
  );
}

export default App;
