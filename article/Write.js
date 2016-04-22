var WriteBox = React.createClass({displayName : "WriteBox",
	list : function(){
		location.href="index.html"
	},
	render : function(){
		return (
			<div className="writeBox">
				<h1>Article Write</h1>
				<textarea></textarea>
				<button onClick={this.list}>List</button>
			</div>
			);
	}
});
ReactDOM.render(
		<WriteBox />,
		document.getElementById('container')
	);