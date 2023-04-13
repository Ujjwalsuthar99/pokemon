import React, { Component } from "react";
import Circle from "../Elements/Circle";
import Rectangle from "../Elements/Rectangle";
import Chip from "../Elements/Chip";

class PokemonDropdown extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      pokemonList: [],
      selectedPokemon: "",
      pokemonLists : [],
      imageUrl : "",
      statArr : [],
    };
  }

  componentDidMount() {
    fetch("https://pokeapi.co/api/v2/pokemon")
      .then((response) => response.json())
      .then((data) => {
        console.log("pokemon",data)
        const pokemonList = data.results.map((pokemon) => ({
          // id: pokemon.url.split("/")[6],
          name: pokemon.name,
          url: pokemon.url,
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

  

  handleSelectChange = async (event) => {
    this.setState({ selectedPokemon: event.target.value });
    // console.log(this.state.selectedPokemon ,"asd");
    this.setState({statArr: []});
    await this.getDataByPokemonName(event.target.value)
    // let imageUrl = await this.getDataByPokemonName(event.target.value)
    // this.setState({imageUrl: imageUrl})
    localStorage.setItem("selectedPokemon", "");
    // console.log(event.target.value ,"asd");
    if (this.state.selectedPokemon != "") {
      localStorage.setItem("selectedPokemon", this.state.selectedPokemon);
    } else {
      localStorage.setItem("selectedPokemon", event.target.value);
    }
  };

  getDataByPokemonName = async (pokemonName) => {
    await fetch(`https://pokeapi.co/api/v2/pokemon/${pokemonName}`)
      .then((response) => response.json())
      .then((data) => {
        console.log("pokemon",data);
        // console.log("sprites",data?.sprites?.front_shiny);
        // return data?.sprites?.front_shiny;
        this.setState({imageUrl: data?.sprites?.front_shiny})
        this.setState({statArr: data?.stats})

      })
      .catch((error) => {
        console.log(error);
      });
  }



  render() {
    console.log(this.state.selectedPokemon ,"asd");
    console.log(this.state.imageUrl ,"this.state.imageUrl");
    const { pokemonList, selectedPokemon,  } = this.state;

    // rectangle box
    const parentBoxStyle = {
      width: '30%',
      height: '200px',
      backgroundColor: '#06105b',
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
      flexWrap: 'wrap', // enable wrapping
      padding: '20px',
      boxSizing: 'border-box',
    };

    const rectangleStrip = {
      width: '30%',
      height: '10px',
      backgroundColor: '#eee',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      fontWeight: 'bolder',
      padding: '20px',
    };


    // rectangle inner box
    const childBoxStyle = {
      width: '190px',
      height: '60px',
      backgroundColor: '#3749d2',
    };
    
    return (
      <div>
        <div style={{marginTop: 10}}>
          <input type="search" name="search" list="searchData" style={{width: '40%'}} value={selectedPokemon} onChange={this.handleSelectChange}/>
          <datalist id="searchData">
            {/* <option value=""></option> */}
            {pokemonList.map((pokemon) => (
              <option key={pokemon.id} value={pokemon.name}>
                {pokemon.name}
              </option>
            ))}
          </datalist>
          <div>
            {this.state.selectedPokemon !== "" ? 
              <Chip label={this.state.selectedPokemon} color="#000080" /> : ""}
          </div>
        </div>

      {this.state.selectedPokemon !== "" ? 
        <div style={{marginTop: 100}}>
          <div>
            <p style={{fontWeight: 'bolder'}}> Selected Pokemon </p>
          </div>
          <div style={{marginTop: 20}}>
            <Circle diameter="100px" color="yellow" name={`${this.state.imageUrl}`} />
            <p style={{marginTop: 20, fontWeight: 'bolder'}}>{this.state.selectedPokemon}</p>
          </div>
        </div> : ""}

        {this.state.selectedPokemon !== "" ? 
        <div style={{marginTop: 50, display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
          <div style={parentBoxStyle}>
              {this.state.statArr.map((data) => (
                <div style={childBoxStyle}>
                  <p style={{fontWeight: 'bolder', marginTop: '5px'}}>{data?.stat?.name}</p>
                  <p style={{marginTop: '-13px'}}>{data?.base_stat}</p>
                </div>
              ))}
          </div>
        </div> : ""}
        {this.state.selectedPokemon !== "" ? 
        <div style={{marginTop: 20, display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
          <div style={rectangleStrip}>
            {/* <div style={{alignItems: 'center', display: 'flex'}}> */}
              <p>Pokemon in Squad</p>
            {/* </div> */}
          </div>
        </div> : ""}
        
        
      </div>
    );
  }
}


export default PokemonDropdown;