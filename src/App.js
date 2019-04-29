import React from 'react';

import Decision from './Decision';

import data from './labs.json'

class App extends React.Component {

  constructor() {
    super()
    this.state = {isLoading: true};
  }

  componentDidMount() {
    this.setState({
      ...this.state,
      labs: data,
      isLoading: false
    })
    // fetch('http://192.168.7.202:4000/labs')
    //   .then(response => response.json())
    //   .then(data => this.setState({
    //     ...this.state,
    //     labs: data,
    //     isLoading: false,
    //   }))
  }

  render() {
    const { labs, isLoading } = this.state
    if (isLoading) {
      return <p>Loading...</p>
    }
    return (
      <div className="App">
        <Decision labs={labs.slice(0, 8)} />
      </div>
    );
  }
}

export default App;
