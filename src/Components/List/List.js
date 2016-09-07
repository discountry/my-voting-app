import React from 'react';
import { Link } from 'react-router'

export default React.createClass({

	render () {
		var list = []
		for (var i = 0; i < this.props.data.length; i++) {
			list.push(<li key={i}><Link to={'/votes/' + i }>{this.props.data[i].title}</Link></li>);
		}
		return (
			<ul>
			  {list}
			</ul>
			)
	}
})