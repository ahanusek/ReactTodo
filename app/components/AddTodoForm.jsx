var React = require('react');
var {connect} = require('react-redux');
var actions = require('actions');

export var AddTodoForm = React.createClass({
	onAddTodo: function(e){
		e.preventDefault();
		var {dispatch} = this.props;
		var newTodo = this.refs.newTodo.value;
		newTodo = newTodo.trim();
		if(typeof newTodo === "string" && newTodo.length > 0){
			dispatch(actions.addTodo(newTodo));
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




export default connect()(AddTodoForm);
