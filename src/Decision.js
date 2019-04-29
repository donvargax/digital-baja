import React from 'react'

import { LabCard } from './LabCard';

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
        home: labs[currentMatch.home],
        visitor: labs[currentMatch.visitor],
        played: true,
        homeWinner: index === currentMatch.home,
    })
    console.log(matches.length)
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
    const { labs, currentMatch, winner } = this.state
    const { home, visitor } = currentMatch

    if (winner) {
        return <p>WINNER!</p>
    }

    return (
      <div>
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
