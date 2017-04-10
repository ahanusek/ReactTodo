var React = require('react')
var moment = require('moment');

var Todo = React.createClass({
	render: function(){
		var {text, id, completed, date, completedAt} = this.props;
		var todoClassName = completed ? 'todo-item todo-completed' : 'todo-item';
		var renderDate = () => {
			var message = "Created ";
			var timestamp = date;
			if(completed) {
				message = "Completed ";
				timestamp = completedAt;
			}

			return message + moment.unix(timestamp).format('MMM D, YY @ H:mm');
		};

		return (
			<div className={todoClassName} onClick={() => {
					this.props.onToggle(id);
				}}>
				<div className="text-container">
					<input type="checkbox" checked={completed}/>
					<span className="text">{text}</span>
				</div>
				<div className="date">{renderDate()}</div>
			</div>
		)
	}
})


module.exports = Todo;
