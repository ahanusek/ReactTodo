var React = require('react')
var moment = require('moment');

var Todo = React.createClass({
	render: function(){
		var {text, id, completed, date, completedAt} = this.props;
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
			<div className='todo-item' onClick={() => {
					this.props.onToggle(id);
				}}>
				<input type="checkbox" checked={completed}/>
				<span className="text">{text}</span>
				<span className="date">{renderDate()}</span>
			</div>
		)
	}
})


module.exports = Todo;
