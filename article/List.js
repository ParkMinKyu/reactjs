var ListBox = React.createClass({displayName : "ListBox",
	getInitialState: function() {
		 return {data: {article : [], pageData : {}}};
	},
	getArticleData : function(page){
		console.log(page)
			/*$.ajax({
				url: this.props.url,
				data : {page : page},
				dataType: 'json',
				cache: false,
				success: function(data) {
					console.log(data)
					this.setState({data: data});
				}.bind(this),
				error: function(xhr, status, err) {
					console.error(this.props.url, status, err.toString());
				}.bind(this)
			});*/
			var data = {"article" : 
				[
					{"seq":1+(page*10),"title":"제목"+(1+((page-1)*10)),"content":"내용"+(1+((page-1)*10)),"writer":"niee","regdate":"2016-04-01"},
					{"seq":2+(page*10),"title":"제목"+(2+((page-1)*10)),"content":"내용"+(2+((page-1)*10)),"writer":"niee","regdate":"2016-04-01"},
					{"seq":3+(page*10),"title":"제목"+(3+((page-1)*10)),"content":"내용"+(3+((page-1)*10)),"writer":"niee","regdate":"2016-04-01"},
					{"seq":4+(page*10),"title":"제목"+(4+((page-1)*10)),"content":"내용"+(4+((page-1)*10)),"writer":"niee","regdate":"2016-04-01"},
					{"seq":5+(page*10),"title":"제목"+(5+((page-1)*10)),"content":"내용"+(5+((page-1)*10)),"writer":"niee","regdate":"2016-04-01"},
					{"seq":6+(page*10),"title":"제목"+(6+((page-1)*10)),"content":"내용"+(6+((page-1)*10)),"writer":"niee","regdate":"2016-04-01"},
					{"seq":7+(page*10),"title":"제목"+(7+((page-1)*10)),"content":"내용"+(7+((page-1)*10)),"writer":"niee","regdate":"2016-04-01"},
					{"seq":8+(page*10),"title":"제목"+(8+((page-1)*10)),"content":"내용"+(8+((page-1)*10)),"writer":"niee","regdate":"2016-04-01"},
					{"seq":9+(page*10),"title":"제목"+(9+((page-1)*10)),"content":"내용"+(9+((page-1)*10)),"writer":"niee","regdate":"2016-04-01"},
					{"seq":10+(page*10),"title":"제목"+(10+((page-1)*10)),"content":"내용"+(10+((page-1)*10)),"writer":"niee","regdate":"2016-04-01"}
				],
				"pageData" : {"page":page,"totalPage":10,"totalArticle":100}	
			};
			this.setState({data: data});
	},
	componentDidMount: function() {
		this.getArticleData(1);
	},
	prev : function(){
		if(this.state.data.pageData.page > 1)
			this.getArticleData(this.state.data.pageData.page - 1);
	},
	next : function(){
		if(this.state.data.pageData.page < 10)
			this.getArticleData(this.state.data.pageData.page + 1);
	},
	render : function(){
		return (
			<div className="listBox">
				<ListHeader data={this.state.data.pageData} />
				<ListItem data={this.state.data.article}/>
				<nav>
				  <ul className="pager">
				    <li><a href="#" onClick={this.prev}>Previous</a></li>
				    <li><a href="#" onClick={this.next}>Next</a></li>
				  </ul>
				</nav>
			</div>
			);
	}
});

var ListHeader = React.createClass({displayName : "ListHeader",
	render : function(){
		return(
				<div className="page-header">
				  <h1>ReactJS Example page <small>{this.props.data.page} / {this.props.data.totalPage}</small></h1>
				  	<WriteBtn />
				</div>
		);
	}
});

var ListItem = React.createClass({displayName : "ListItem",
	  render: function() {
		    var articleNodes = this.props.data.map(function (article) {
		      return (
		    	<Item data={article}/>	  	
		      );
		    });
		    return (
		      <div className="list-group">
		        {articleNodes}
		      </div>
		    );
		  }
});

var Item = React.createClass({displayName : "Item",
	getInitialState: function() {
		 return {readCnt: 0};
	},
	  showArticle : function(){
		  /*var article = this.state.data;
		  article.title = article.title + "g"; 
		  this.setState({data : article});*/
		  this.setState({readCnt : this.state.readCnt + 1});
		  location.href="view.html"
	  },
	  render: function() {
		    return (
		    		<a href="#" className="list-group-item" onClick={this.showArticle}><span className="badge">{this.state.readCnt}</span>
			        {this.props.data.title}
			        </a>
		    		/*<div className="panel panel-primary">
		    		  <div className="panel-body">
		    		  	<h4>{this.props.data.title}</h4><br/>
		    		  	{this.props.data.content}
		    		  </div>
		    		</div>*/
		    		/*<div className="panel panel-primary">
		    		  <div className="panel-heading">
		    		  <h3 className="panel-title">{this.props.data.title}</h3>
		    		  <span className="badge">{this.state.readCnt}</span>
		    		  </div>
		    		  <div className="panel-body">
		    		  {this.props.data.content}
		    		  </div>
		    		</div>*/
		    );
		  }
});

var WriteBtn = React.createClass({displayName:"WriteBtn",
	writePage : function(){
		location.href="write.html"
	},
	render : function(){
		return (
				<button className="btn btn-primary" onClick={this.writePage}>Write</button>
		);
	}
});

ReactDOM.render(
		<ListBox url="json/data.json"/>,
		document.getElementById('container')
	);