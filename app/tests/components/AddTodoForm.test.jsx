var React = require('react');
var ReactDOM = require('react-dom');
var expect = require('expect');
var $ = require('jQuery');
var TestUtils = require('react-addons-test-utils');

var {AddTodoForm} = require('AddTodoForm');

describe('AddTodoForm', () => {
	it('should exist', () => {

		expect(AddTodoForm).toExist();
	});

	it('should dispatch ADD_TODO when valid todo text', () => {
		var spy = expect.createSpy();
		var todoText = "Check mail";
		var action = {
			type: "ADD_TODO",
			text: todoText
		}
		var addTodoForm = TestUtils.renderIntoDocument(<AddTodoForm dispatch={spy}/>);
		var $el = $(ReactDOM.findDOMNode(addTodoForm));

		addTodoForm.refs.newTodo.value = todoText;
		TestUtils.Simulate.submit($el.find('form')[0]);

		expect(spy).toHaveBeenCalledWith(action);

	});

	it('shouldn\'t dispatch ADD_TODO when invalid todo text', () => {
		var spy = expect.createSpy();
		var addTodoForm = TestUtils.renderIntoDocument(<AddTodoForm dispatch={spy}/>);
		var $el = $(ReactDOM.findDOMNode(addTodoForm));

		addTodoForm.refs.newTodo.value = "  ";
		TestUtils.Simulate.submit($el.find('form')[0]);

		expect(spy).toNotHaveBeenCalled();

	});

});
