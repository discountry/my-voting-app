import React from 'react';

export default React.createClass({
            loadCommentsFromServer() {
                var ref = new Wilddog("https://voting.wilddogio.com/votings/" + this.props.params.voteName);
                ref.on('value', function(snapshot) {
                    console.log(JSON.stringify(snapshot.val()));
                    this.setState({ data: snapshot.val() });
                }.bind(this));
            },
            goForVote(event) {
                var ref = new Wilddog("https://voting.wilddogio.com/votings/" + this.props.params.voteName + '/options');
                ref.child(event.target.id).update({
                    num: parseInt(event.target.value) + 1
                });
            },
            getInitialState() {
                return {
                    data: { "options": [{ "name": "A", "num": "1" }, { "name": "B", "num": "2" }, { "name": "C", "num": "3" }], "title": "Octo" }
                }
            },
            componentWillMount() {
                this.loadCommentsFromServer();
            },
            render() {
                var options = []
                for (var i = 0; i < this.state.data.options.length; i++) {
                    options.push( < li key = { i } > < p > { this.state.data.options[i].name }: { this.state.data.options[i].num } < button id = { i }
                        value = { this.state.data.options[i].num }
                        onClick = { this.goForVote } > Vote < /button></p > < /li>)
                    }
                    return ( < div >
                        < h1 > { this.state.data.title } < /h1> < ul > { options } < /ul> < /div>
                    )
                }
            })
