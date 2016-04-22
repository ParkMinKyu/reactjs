var WriteBox = React.createClass({displayName : "WriteBox",
	list : function(){
		location.href="index.html"
	},
	handleSubmit : function(e){
		 e.preventDefault();
		var title = this.refs.title.value;
		var writer = this.refs.writer.value;
		var content = this.refs.content.value;
		if (!(title.trim()) || !(writer.trim()) || !(content.trim())) {
			return;
		}
		//TODO: 서버에 요청을 전송합니다
		//$.ajax({});
		this.refs.title.value = "";
		this.refs.writer.value = "";
		this.refs.content.value = "";
		return;
	},
	render : function(){
		return (
			<div className="writeBox">
				<h1>Article Write</h1>
				<form className="form-horizontal" onSubmit={this.handleSubmit}>
				  <div className="form-group">
				    <label for="title" className="col-sm-2 control-label">Title</label>
				    <div className="col-sm-10">
				      <input type="text" className="form-control" ref="title" id="title" placeholder="title"/>
				    </div>
				  </div>
				  <div className="form-group">
				  <label for="writer" className="col-sm-2 control-label">Writer</label>
				  <div className="col-sm-10">
				  <input type="text" className="form-control" ref="writer" id="writer" placeholder="writer"/>
					  </div>
				  </div>
				  <div className="form-group">
				    <label for="content" className="col-sm-2 control-label">content</label>
				    <div className="col-sm-10">
				    	<textarea className="form-control" ref="content" id="content" rows="3"></textarea>
				    </div>
				  </div>
				  <div className="form-group">
				    <div className="col-sm-offset-2 col-sm-10">
				    <input type="submit" className="btn btn-default" value="Write"/>
				    <button className="btn btn-primary" onClick={this.list}>List</button>
				    </div>
				  </div>
				</form>
			</div>
			);
	}
});
ReactDOM.render(
		<WriteBox />,
		document.getElementById('container')
	);