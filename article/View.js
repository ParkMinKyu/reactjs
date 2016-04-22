var ViewBox = React.createClass({displayName : "ViewBox",
	getInitialState: function() {
		 return {data: {}};
	},
	viewData : function(seq){
		$.ajax({
			url: this.props.url,
			data : {seq : seq},
			dataType: 'json',
			cache: false,
			success: function(data) {
				console.log(data)
				this.setState({data: data});
			}.bind(this),
			error: function(xhr, status, err) {
				console.error(this.props.url, status, err.toString());
			}.bind(this)
		});
	},
	componentDidMount:function(){
		//this.viewData
		var data = {
				"seq":"1",
				"title":"ReactJS And Bootstrap Sample",
				"content":"ReactJS And Bootstrap Sample ReactJS And Bootstrap Sample~~~~~~~~~~",
				"writer":"niee",
				"regdate":"2016-04-01"
			};
		this.setState({data : data});
	},
	list : function(){
		location.href="index.html"
	},
	render : function(){
		return (
			<div className="ViewBox">
				<div className="page-header">
				  <h1>{this.state.data.title} <small>{this.state.data.regdate}</small></h1>
				</div>
			  	{this.state.data.content}
			  	<div>
			  	<button className="btn btn-primary" onClick={this.list}>List</button>
			  	</div>
			</div>
		);
	}
});

ReactDOM.render(
		<ViewBox />,
		document.getElementById('container')
	);