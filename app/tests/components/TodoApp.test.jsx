var React = require('react');
var ReactDOM = require('react-dom');
var expect = require('expect');
var $ = require('jQuery');
var TestUtils = require('react-addons-test-utils');

var TodoApp = require('TodoApp');

describe('TodoApp', () => {
	it('should exist', () => {

		expect(TodoApp).toExist();
	});

	it('should add todo to the todos state on handleAddTodo', () => {
		var todoText = "I like cake";
		var todoApp = TestUtils.renderIntoDocument(<TodoApp/>)

		todoApp.setState({todos: []});
		todoApp.handleAddTodo(todoText);

		expect(todoApp.state.todos[0].text).toBe(todoText);

		//Expect date to be a number
		expect(todoApp.state.todos[0].date).toBeA('number');

	});

	it('should toggle completed value when handleToggle called', () => {
		var todoData = {
			id: 11,
			text: 'Test features',
			completed: false,
			date: 0,
			completedAt: undefined
		};
		var todoApp = TestUtils.renderIntoDocument(<TodoApp/>);

		todoApp.setState({todos: [todoData]});

		//check that todos first item has completed value of false
		expect(todoApp.state.todos[0].completed).toBe(false);
		//call handleToggle with 11
		todoApp.handleToggle(11);
		//Verify that value changed
		expect(todoApp.state.todos[0].completed).toBe(true);
		//Expect completedAt to be a number
		expect(todoApp.state.todos[0].completedAt).toBeA('number');

	});
	//Move from completed to incompleted, completedAt get removed
	it('should remove completedAt value when completed status toggle to false ', () => {
		var todoData = {
			id: 11,
			text: 'Test features',
			completed: true,
			date: 0,
			completedAt: 23332
		};
		var todoApp = TestUtils.renderIntoDocument(<TodoApp/>);

		todoApp.setState({todos: [todoData]});
		todoApp.handleToggle(11);

		expect(todoApp.state.todos[0].completed).toBe(false);
		expect(todoApp.state.todos[0].completedAt).toNotExist();

	});
});
