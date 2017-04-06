var React = require('react');
var ReactDOM = require('react-dom');
var expect = require('expect');
var $ = require('jQuery');
var TestUtils = require('react-addons-test-utils');

var AddTodoForm= require('AddTodoForm');

describe('AddTodoForm', () => {
	it('should exist', () => {

		expect(AddTodoForm).toExist();
	});

	it('should call onFormSubmit if valid value entered', () => {
		var spy = expect.createSpy();
		var addTodoForm = TestUtils.renderIntoDocument(<AddTodoForm onFormSubmit={spy}/>);
		var $el = $(ReactDOM.findDOMNode(addTodoForm));

		addTodoForm.refs.newTodo.value = "Make a cake";
		TestUtils.Simulate.submit($el.find('form')[0]);

		expect(spy).toHaveBeenCalledWith("Make a cake");

	});

	it('shouldn\'t call onFormSubmit if invalid value entered', () => {
		var spy = expect.createSpy();
		var addTodoForm = TestUtils.renderIntoDocument(<AddTodoForm onFormSubmit={spy}/>);
		var $el = $(ReactDOM.findDOMNode(addTodoForm));

		addTodoForm.refs.newTodo.value = "  ";
		TestUtils.Simulate.submit($el.find('form')[0]);

		expect(spy).toNotHaveBeenCalled();

	});

});
