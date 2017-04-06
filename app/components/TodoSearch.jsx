var React = require('react');


var TodoSearch = React.createClass({
	handleSearch: function(){
		var showCompleted = this.refs.showCompleted.checked;
		var searchText = this.refs.searchText.value;

		this.props.onSearch(showCompleted, searchText);
	},
	render: function(){
		return (
			<div className="search-container">
				<div><input type="search" ref="searchText" placeholder="Search todos" onChange={this.handleSearch}/></div>
				<div>
					<input id="completed" type="checkbox" ref="showCompleted" onChange={this.handleSearch}></input>
					<label htmlFor="completed">
						Show completed todos
					</label>
				</div>
			</div>
		)
	}
});


module.exports = TodoSearch;