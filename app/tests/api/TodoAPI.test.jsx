var expect = require('expect');

var TodoAPI= require('TodoAPI');


describe('TodoAPI', () => {

	beforeEach(() => {
		localStorage.removeItem('todos');
	});

	it('should exist', () => {
		expect(TodoAPI).toExist();
	})

	describe('setTodos', () => {
		it('should set valid todos array', () => {
			var todos = [{
				id: 22,
				text: 'test all files',
				completed: false
			}];

			TodoAPI.setTodos(todos);

			var actualTodos = JSON.parse(localStorage.getItem('todos'));

			expect(actualTodos).toEqual(todos);
		});

		it('should not set valid todos array', () => {
			var badTodos = {a: 'b'};

			TodoAPI.setTodos(badTodos);


			expect(localStorage.getItem('todos')).toBe(null);
		});

	});

	describe('getTodos', () => {

		it('should return empty array for invalid data', () => {
			var actualTodos = TodoAPI.getTodos();

			expect(actualTodos).toEqual([]);
		});

		it('should return proper array for valid data', () => {
			var todos = [{
				id: 22,
				text: 'test all files',
				completed: false
			}];

			localStorage.setItem('todos', JSON.stringify(todos));
			var actualTodos = TodoAPI.getTodos();

			expect(actualTodos).toEqual(todos);

		});
	});

	describe('filterTodos', () => {
		var todos = [
			{
				id: 1,
				text: 'easy text',
				completed: true
			},
			{
				id: 2,
				text: 'bla bla bla',
				completed: false
			},
			{
				id: 3,
				text: 'Some text',
				completed: true
			}
		];

		it('should return all items it show completed is true', () => {
			var filteredTodos = TodoAPI.filterTodos(todos, true, "");

			expect(filteredTodos.length).toBe(todos.length);
		});

		it('should return one item it show completed is false', () => {
			var filteredTodos = TodoAPI.filterTodos(todos, false, "");

			expect(filteredTodos.length).toBe(1);
		});

		it('should sort by completed status', () => {
			var filteredTodos = TodoAPI.filterTodos(todos, true, "");

			expect(filteredTodos[0].completed).toBe(false);
		});

		it('should filter todos by searchText', () => {
			var filteredTodos = TodoAPI.filterTodos(todos, true, "some");

			expect(filteredTodos.length).toBe(1);
		});

		it('should return all todos if searchText is empty', () => {
			var filteredTodos = TodoAPI.filterTodos(todos, true, "");

			expect(filteredTodos.length).toBe(3);
		});

	});
});
