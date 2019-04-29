import React from 'react';
import { Bracket } from './Bracket';

const games = [
  {
    home: "Graham, Kunde and Abshire",
    visitor: "Baumbach - Keebler",
    played: true,
    homeWinner: true,
  },
  {
    home: "McCullough - Russel",
    visitor: "Pagac, O'Hara and Goodwin",
    played: true,
    homeWinner: false,
  },
  {
    home: "Spencer - Stanton",
    visitor: "Rodriguez - Doyle",
    played: true,
    homeWinner: true,
  },
  {
    home: "O'Connel, Schultz and Halvorson",
    visitor: "King, Miller and Haley",
    played: true,
    homeWinner: true,
  },
  {
    home: "Graham, Kunde and Abshire",
    visitor: "Pagac, O'Hara and Goodwin",
    played: true,
    homeWinner: false,
  },
  {
    home: "Spencer - Stanton",
    visitor: "O'Connel, Schultz and Halvorson",
    played: true,
    homeWinner: true,
  },
  {
    home: "Pagac, O'Hara and Goodwin",
    visitor: "Spencer - Stanton",
    played: true,
    homeWinner: false,
  },
]

const games2 = [
  {
    home: "Abshire",
    visitor: "Keebler",
    played: true,
    homeWinner: false,
  },
  {
    home: "Russel",
    visitor: "Goodwin",
    played: true,
    homeWinner: true,
  },
  {
    home: "Stanton",
    visitor: "Doyle",
    played: true,
    homeWinner: false,
  },
  {
    home: "Halvorson",
    visitor: "Haley",
    played: true,
    homeWinner: false,
  },
  {
    home: "Abshire",
    visitor: "Goodwin",
    played: true,
    homeWinner: true,
  },
  {
    home: "Stanton",
    visitor: "Halvorson",
    played: true,
    homeWinner: false,
  },
  {
    home: "Goodwin",
    visitor: "Stanton",
    played: true,
    homeWinner: true,
  },
]


class App extends React.Component {
  state = {games: games};

  constructor() {
    super()
  }

  changeGames() {
    this.setState({
      games: games2
    })
  }

  render() {
    return (
      <div className="App">
        <Bracket games={this.state.games} />
        <button onClick={() => this.changeGames()}>
          Test changing games!
        </button>
      </div>
    );
  }
}

export default App;
