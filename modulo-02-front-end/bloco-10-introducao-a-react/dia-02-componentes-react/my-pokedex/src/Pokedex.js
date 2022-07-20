import React, { Component } from 'react';


class Pokedex extends Component {
  render() {

    const { pokemons } = this.props;
    const { id, name, type, averageWeight, image } = pokemons;
    const { value, measurementUnit } = averageWeight;

    return(
      <section>
        <div></div>
        <div></div>
        <div></div>
        <img></img>
      </section>
    );
  }
}

export default Pokedex;