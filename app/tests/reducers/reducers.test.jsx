var expect = require('expect');
var reducers = require('reducers')
var df = require('deep-freeze-strict');
var moment = require('moment');

describe('Reducers', () => {
	describe('searchTextReducer', () =>{
		it('should set searchText', () =>{
			var action = {
				type: "SET_SEARCH_TEXT",
				searchText: "cat"
			};

			var res = reducers.searchTextReducer(df(''), df(action));

			expect(res).toEqual(action.searchText);

		});
	});

	describe('showCompletedReducer', () => {
		it('should toggle showCompleted', () => {
			var action = {
				type: "TOGGLE_SHOW_COMPLETED",
			};

			var res = reducers.showCompletedReducer(df(false), df(action));

			expect(res).toEqual(true);
		});
	});

	describe('todosReducer', () => {
		it('should add new todo', () => {
			var action = {
				type: "ADD_TODO",
				text: "Do homework"
			}

			var res = reducers.todosReducer(df([]), df(action));

			expect(res.length).toEqual(1);
			expect(res[0].text).toEqual(action.text);

		});

		it('should toggle completed status and toggle timestamp', () => {
			var action = {
				type: "TOGGLE_TODO",
				id: "123"
			}
			var todos = [
				{
					id: '123',
					text: "Working",
					completed: false,
					date: moment().unix(),
					completedAt: undefined
				}
			]

			var res = reducers.todosReducer(df(todos), df(action));

			expect(res[0].completed).toEqual(true);
			expect(res[0].completedAt).toNotBeA('undefined');


		})

	})
});
