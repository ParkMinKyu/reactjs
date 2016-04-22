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
					{"seq":1+(page*10),"title":"제목"+(1+(page*10)),"content":"내용"+(1+(page*10)),"writer":"niee","regdate":"2016-04-01"},
					{"seq":2+(page*10),"title":"제목"+(1+(page*10)),"content":"내용"+(1+(page*10)),"writer":"niee","regdate":"2016-04-01"},
					{"seq":3+(page*10),"title":"제목"+(1+(page*10)),"content":"내용"+(1+(page*10)),"writer":"niee","regdate":"2016-04-01"},
					{"seq":4+(page*10),"title":"제목"+(1+(page*10)),"content":"내용"+(1+(page*10)),"writer":"niee","regdate":"2016-04-01"},
					{"seq":5+(page*10),"title":"제목"+(1+(page*10)),"content":"내용"+(1+(page*10)),"writer":"niee","regdate":"2016-04-01"},
					{"seq":6+(page*10),"title":"제목"+(1+(page*10)),"content":"내용"+(1+(page*10)),"writer":"niee","regdate":"2016-04-01"},
					{"seq":7+(page*10),"title":"제목"+(1+(page*10)),"content":"내용"+(1+(page*10)),"writer":"niee","regdate":"2016-04-01"},
					{"seq":8+(page*10),"title":"제목"+(1+(page*10)),"content":"내용"+(1+(page*10)),"writer":"niee","regdate":"2016-04-01"},
					{"seq":9+(page*10),"title":"제목"+(1+(page*10)),"content":"내용"+(1+(page*10)),"writer":"niee","regdate":"2016-04-01"},
					{"seq":10+(page*10),"title":"제목"+(1+(page*10)),"content":"내용"+(1+(page*10)),"writer":"niee","regdate":"2016-04-01"}
				],
				"pageData" : {"page":page,"totalPage":10,"totalArticle":100}	
			};
			this.setState({data: data});
	},
	componentDidMount: function() {
		this.getArticleData(1);
	},
	prev : function(){
		this.getArticleData(this.state.data.pageData.page - 1);
	},
	next : function(){
		this.getArticleData(this.state.data.pageData.page + 1);
	},
	render : function(){
		return (
			<div className="listBox">
				<h1>Article List</h1>
				{this.state.data.pageData.page} / {this.state.data.pageData.totalPage} 
				<WriteBtn />
				<ListItem data={this.state.data.article}/>
				<button onClick={this.prev}>prev</button>
				<PagingItem data={this.state.data.pageData}/>
				<button onClick={this.next}>next</button>
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
		      <div className="listItem">
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
	  },
	  render: function() {
		    return (
		    	<div className="article" onClick={this.showArticle}>
			        <h3>{this.props.data.title}</h3>
			        {this.props.data.content}&nbsp;&nbsp;{this.state.readCnt}
			    </div>
		    );
		  }
});

var PagingItem = React.createClass({displayName : "PagingItem",
	render : function(){
		return(
			<div className="pagingItem">
			{this.props.data.page}
			</div>
		);
	}
});

var WriteBtn = React.createClass({displayName:"WriteBtn",
	writePage : function(){
		location.href="/react/write.html"
	},
	render : function(){
		return (
				<button className="writeBtn" onClick={this.writePage}>Write</button>
		);
	}
});

ReactDOM.render(
		<ListBox url="json/data.json"/>,
		document.getElementById('container')
	);