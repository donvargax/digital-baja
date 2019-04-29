import React from 'react'

import { LabCard } from './LabCard';
import { Bracket } from './Bracket';

class Decision extends React.Component {

  constructor(props) {
    super()
    this.state = {
      labs: props.labs,
      matches: [],
      currentMatch: {
        home: 0,
        visitor: 1
      },
      winner: false,
    }
  }

  selectWinner(index) {
    let { labs, matches, currentMatch } = this.state;
    matches.push({
        home: labs[currentMatch.home].title,
        visitor: labs[currentMatch.visitor].title,
        played: true,
        homeWinner: index === currentMatch.home,
    })
    if (matches.length == 7) {
      this.setState({
        ...this.state,
        winner: true,
      })
      return
    }
    currentMatch.home += 2
    currentMatch.visitor += 2
    labs.push(labs[index])
    this.setState({
      ...this.state,
      labs,
      matches,
      currentMatch,
    })
  }

  render() {
    const { labs, currentMatch, winner, matches } = this.state
    const { home, visitor } = currentMatch

    if (winner) {
        const winnerIndex = currentMatch.homeWinner ? home : visitor
        return (
          <div className="col m10">
            <p>
              Thank you for using our Lab Decision Maker, here's a summary of the labs you compared:
            </p>
            <Bracket games={matches} />
            <p>
                ...And the Winner is:
                <LabCard {...labs[winnerIndex]} />
            </p>
          </div>
        )
    }

    return (
      <div>
        <p>
          Welcome to our Lab Decision Maker, which will help you decide on a Lab to run your experiments!
        </p>
        <p>
          Please, keep selecting one of the two labs shown based on your criteria. As soon as you select one a new set will appear.
        </p>
        <div className="col m5" style={{cursor: 'pointer'}} onClick={() => this.selectWinner(home)}>
          <LabCard {...labs[home]} />
        </div>
        <div className="col m5" style={{cursor: 'pointer'}} onClick={() => this.selectWinner(visitor)}>
        <LabCard {...labs[visitor]} />
        </div>
      </div>
    );
  }
}

export default Decision
