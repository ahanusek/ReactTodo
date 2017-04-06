var React = require('react');

var AddTodoForm = React.createClass({
	onAddTodo: function(e){
		e.preventDefault();
		var newTodo = this.refs.newTodo.value;
		newTodo = newTodo.trim();
		if(typeof newTodo === "string" && newTodo.length > 0){
			this.props.onFormSubmit(newTodo);
			this.refs.newTodo.value = "";
		} else {
			this.refs.newTodo.focus();
		}
	},
	render: function(){
		return (
			<div className="form-container">
				<form onSubmit={this.onAddTodo}>
					<input type="text" ref="newTodo"  placeholder="What do you need to do?"/>
					<button className="button expanded" type="submit">Add Todo</button>
				</form>
			</div>
		)
	}
});


module.exports = AddTodoForm;
