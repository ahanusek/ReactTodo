var React = require('react')
var moment = require('moment');
var {connect} = require('react-redux');
var actions = require('actions');

export var Todo = React.createClass({
	render: function(){
		var {text, id, completed, date, completedAt, dispatch} = this.props;
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
					// this.props.onToggle(id);
					dispatch(actions.toggleTodo(id));
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

export default connect()(Todo);
