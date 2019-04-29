import React from 'react';

import MenuItem from '@material-ui/core/MenuItem'
import Select from '@material-ui/core/Select'

import Decision from './Decision';

import data from './labs.json'

import departments from './departments.json'

class App extends React.Component {

  constructor() {
    super()
    this.state = {isLoading: true};
  }

  componentDidMount() {
    this.setState({
      ...this.state,
      labs: data,
      isLoading: false,
      departments: departments,
      selectedDepartment: null,
    })
  }

  selectDepartment = event => {
    this.setState({
      ...this.state,
      selectedDepartment: event.target.value,
    })
  }

  render() {
    const { labs, isLoading, departments, selectedDepartment } = this.state
    if (isLoading) {
      return <p>Loading...</p>
    }
    if (selectedDepartment === null) {
      return (
        <div className="App">
          <p>Please select the type of clinical analysis you need:</p>
          <Select value="" onChange={this.selectDepartment}>
            {departments.map(d => <MenuItem key={d.id} value={d.name}>{d.name}</MenuItem>)}
          </Select>
        </div>
      )
    }
    return (
      <div className="App">
        <Decision labs={labs.filter(l => l.department === selectedDepartment).slice(0, 8)} />
      </div>
    );
  }
}

export default App;
