var React = require('react');
var ReactDOM = require('react-dom');
var expect = require('expect');
var $ = require('jQuery');
var TestUtils = require('react-addons-test-utils');

var TodoSearch = require('TodoSearch');

describe('TodoSearch', () => {
	it('should exist', () => {
		expect(TodoSearch).toExist();
	});

	it('should call onSearch with both entered value', () => {
		var spy = expect.createSpy();
		var todosearch = TestUtils.renderIntoDocument(<TodoSearch onSearch={spy}/>)
		var $el = $(ReactDOM.findDOMNode(todosearch));

		todosearch.refs.showCompleted.checked = true;
		todosearch.refs.searchText.value = "make";

		TestUtils.Simulate.change($el.find('input')[0]);
		TestUtils.Simulate.change($el.find('input')[1]);

		expect(spy).toHaveBeenCalledWith(true, 'make');
	});

	it('should call onSearch with one entered value', () => {
		var spy = expect.createSpy();
		var todosearch = TestUtils.renderIntoDocument(<TodoSearch onSearch={spy}/>)
		var $el = $(ReactDOM.findDOMNode(todosearch));

		todosearch.refs.showCompleted.checked = true;

		TestUtils.Simulate.change($el.find('input')[0]);

		expect(spy).toHaveBeenCalledWith(true, '');
	});


});
