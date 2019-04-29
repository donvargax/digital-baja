import React from 'react';
import { render } from 'react-testing-library'

import { Toolkit } from "storm-react-diagrams"

import { Bracket } from './Bracket';

Toolkit.TESTING = true;
window.focus = function () { };

it('renders without crashing', () => {
    const { asFragment } = render(<Bracket />)
    expect(asFragment()).toMatchSnapshot()
});

it('renders with 1 game', () => {
    const games = [
        {
            home: "Graham, Kunde and Abshire",
            visitor: "Baumbach - Keebler",
            played: true,
            homeWinner: true,
        },
    ]
    const { asFragment } = render(<Bracket games={games} />)
    expect(asFragment()).toMatchSnapshot()
});

it('renders with multiple games', () => {
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

    const { asFragment } = render(<Bracket games={games} />)
    expect(asFragment()).toMatchSnapshot()
});
