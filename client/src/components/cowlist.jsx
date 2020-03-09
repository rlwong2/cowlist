import React from 'react';

class Cowlist extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      whichCow: ''
    }
    this.handleCow = this.handleCow.bind(this);
  }
  handleCow(e) {
    console.log(e.target.id)
    this.setState({ whichCow: e.target.id })
    this.props.showCow( e.target.id )
  }

  render () {
    return (
      <div>
        <h4>All the cows:</h4>
        {this.props.cows.map((cow) => (
          <div>
            <div key={cow.id} id= {cow.name} value={cow.name} onClick={ this.handleCow }>{cow.name}</div>
          </div>
        ))}
      </div>
    )
  }
}

export default Cowlist;