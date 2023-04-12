import React, { Component } from "react";

class PokemonDropdown extends Component {
  constructor(props) {
    super(props);

    this.state = {
      pokemonList: [],
      selectedPokemon: "",
      pokemonLists : [],
  
    };
  }

  componentDidMount() {
    fetch("https://pokeapi.co/api/v2/pokemon")
      .then((response) => response.json())
      .then((data) => {
        const pokemonList = data.results.map((pokemon) => ({
          // id: pokemon.url.split("/")[6],
          name: pokemon.name,
        }));
        this.setState({ pokemonList });
        console.log("pokemonlist" , pokemonList);
      })
      .catch((error) => {
        console.log(error);
      });
    }

    // componentDidMount(){
    //   fetch("https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/shiny/1.png")
    //   .then((response) => response.json())
    //   .then((data) => {
    //     const pokemonLists = data.results.map((pokemon) => ({
    //       name: pokemon.name
    //     }));
    //     this.setState({pokemonLists});
    //     console.log("pokemonlist" , pokemonLists);
    //   })
    //   .catch((error) => {
    //     console.log(error);
    //   })

    // }

  handleSelectChange = (event) => {
    this.setState({ selectedPokemon: event.target.value });
    console.log(this.selectedPokemon ,"asd");
  };



  render() {
    const { pokemonList, selectedPokemon,  } = this.state;

    
    return (
      <div>
        <input type="search" name="search" list="searchData" value={selectedPokemon} onChange={this.handleSelectChange}/>
        <datalist id="searchData" >
          {/* <option value=""></option> */}
          {pokemonList.map((pokemon) => (
            <option key={pokemon.id} value={pokemon.name}>
              {pokemon.name}
            </option>
          ))}
        </datalist>
       
      </div>
    );
  }
}

export default PokemonDropdown;