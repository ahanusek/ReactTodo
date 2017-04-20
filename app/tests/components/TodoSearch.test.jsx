var React = require('react');
var ReactDOM = require('react-dom');
var expect = require('expect');
var $ = require('jQuery');
var TestUtils = require('react-addons-test-utils');

// var TodoSearch = require('TodoSearch');
import {TodoSearch} from 'TodoSearch';

describe('TodoSearch', () => {
	it('should exist', () => {
		expect(TodoSearch).toExist();
	});

	it('should dispatch SET_SEARCH_TEXT on input change', () => {
		var spy = expect.createSpy();
		var action = {
			type: "SET_SEARCH_TEXT",
			searchText: "Dog"
		}
		var todosearch = TestUtils.renderIntoDocument(<TodoSearch dispatch={spy}/>)
		var $el = $(ReactDOM.findDOMNode(todosearch));

		todosearch.refs.searchText.value = "Dog";

		TestUtils.Simulate.change($el.find('input')[0]);

		expect(spy).toHaveBeenCalledWith(action);
	});

	it('should dispatch TOGGLE_SHOW_COMPLETED when checkbox checked', () => {
		var action = {
			type: "TOGGLE_SHOW_COMPLETED"
		}
		var spy = expect.createSpy();
		var todosearch = TestUtils.renderIntoDocument(<TodoSearch dispatch={spy}/>)
		var $el = $(ReactDOM.findDOMNode(todosearch));

		todosearch.refs.showCompleted.checked = true;

		TestUtils.Simulate.change($el.find('input')[1]);

		expect(spy).toHaveBeenCalledWith(action);
	});


});
