import React from 'react'

import List from './Components/List/List'

export default React.createClass({
  loadCommentsFromServer() {
    var ref = new Wilddog("https://voting.wilddogio.com/votings");
    ref.on('value', function(snapshot) {
      console.log(snapshot.val());
      this.setState({data: snapshot.val()}); 
    }.bind(this));
  },
  getInitialState() {
    return {
      data: {"vot0":{"title":"Octo"},"vot1":{"title":"Apple"},"vot2":{"title":"Bread"}}
    }
  },
  componentWillMount() {
    this.loadCommentsFromServer();
  },
  render() {
    return (
        <List data={this.state.data}/>
    )
  }
})
