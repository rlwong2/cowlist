import React from 'react';
import ReactDOM from 'react-dom';
import axios from 'axios';
import $ from 'jquery';
import Cow from './components/cow.jsx';
import Input from './components/input.jsx';
import Cowlist from './components/cowlist.jsx';
// import components

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      currentCow: '',
      list: []
    };
    this.read = this.read.bind(this);
    this.create = this.create.bind(this);
  }

  componentDidMount() {
    // this.read();
  }

  read() {
    console.log('Running: read (app.jsx)');
    axios.get('http://localhost:3030/api/cows')
      .then(res => {
        const list = res.data;
        console.log(res.data);
        this.setState({list});
      })
  }

  create(object) {
    console.log('Running: create (app.jsx)');
    console.log('Sending cow: ', object.name)
    axios.post('http://localhost:3030/api/cows', object)
      .then(res => {
        console.log(res);
        console.log(res.data);
      })
      .catch(err => {
        console.log(err)
      })
  }

  render() {
    return (<div>
      <Cow cow={this.state.currentCow} />
      <Input create={this.create} />
      <Cowlist cows={this.state.list} />
    </div>)
  }
}

ReactDOM.render(<App />, document.getElementById('app'));