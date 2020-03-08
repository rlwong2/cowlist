import React from 'react';

class Input extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      description: ''
    };
    this.onChangeName = this.onChangeName.bind(this);
    this.onChangeDescription = this.onChangeDescription.bind(this);
    this.submit = this.submit.bind(this);
  }

  onChangeName (e) {
    this.setState({
      name: e.target.value
    });
  }

  onChangeDescription (e) {
    this.setState({
      description: e.target.value
    });
  }

  submit () {
    var obj = {}
    obj.name = this.state.name;
    obj.description = this.state.description;
    this.props.create(obj);
  }

  render() {
    return (<div>
      <p>New cow???</p>
      <form>
      Name: <br /><input value={this.state.name} onChange={this.onChangeName} /><br />
      Description: <br /><textarea value={this.state.description} onChange={this.onChangeDescription} /><br />
      <button onClick={this.submit}>Send Cow!</button>
      </form>
    </div>)
  }
}

export default Input;