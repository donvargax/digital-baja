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
            <Bracket games={matches} />
            <p>
                The Winner is:
                <LabCard {...labs[winnerIndex]} />
            </p>
          </div>
        )
    }

    return (
      <div>
        <p>
            Please, select one of the two labs based on your criteria
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
