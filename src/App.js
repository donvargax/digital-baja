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


function App() {
  return (
    <div className="App">
	  <Bracket games={games} />
    </div>
  );
}

export default App;
