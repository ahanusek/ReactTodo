var React = require('react')


var Todo = React.createClass({
	render: function(){
		var {text, id, completed} = this.props;
		return (
			<div className='todo-item' onClick={() => {
					this.props.onToggle(id);
				}}>
				<input type="checkbox" checked={completed}/>
				<span className="text">{text}</span>
			</div>
		)
	}
})


module.exports = Todo;
