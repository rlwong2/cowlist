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
      cowlist: [],
      currentCow: ''
    };
    this.read = this.read.bind(this);
    this.create = this.create.bind(this);
    this.showCow = this.showCow.bind(this);
  }

  componentDidMount() {
    this.read();
  }

  read() {
    console.log('Running: read (app.jsx)');
    axios.get('http://localhost:3030/api/cows')
      .then(res => {
        const cows = res.data;
        console.log(res.data);
        this.setState({cowlist: cows});
      })
  }

  create(object) {
    console.log('Running: create (app.jsx)');
    console.log('Sending cow: ', object.name)
    axios.post('http://localhost:3030/api/cows', object)
      .then(res => {
        console.log(res);
        console.log(res.data);
        this.read();
      })
      .catch(err => {
        console.log(err)
      })
  }

  showCow(name) {
    var cow = {};
    console.log(name)
    console.log(this.state.cowlist)
    this.state.cowlist.forEach((element) => {
      if (element.name === name) {
        cow.name = element.name;
        cow.description = element.description;
      }
    })
    console.log('setting state', cow)
    this.setState({
      currentCow: cow
    })
  }

  render() {
    return (<div>
      <Cow cow={this.state.currentCow} />
      <Input create={this.create} />
      <Cowlist showCow={this.showCow} cows={this.state.cowlist} />
    </div>)
  }
}

ReactDOM.render(<App />, document.getElementById('app'));