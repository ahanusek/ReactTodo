var React = require('react')


var Todo = React.createClass({
	render: function(){
		var {text, id} = this.props;
		return (
			<div className='todo-item'>
				<input type="checkbox" />
				<span className="text">{text}</span>
			</div>
		)
	}
})


module.exports = Todo;
