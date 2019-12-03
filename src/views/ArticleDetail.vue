<template>
	
	<div class="container border">
		<h2 class="title tx-center">{{ articleVo.article.title }}</h2>
		<div class="box">
			<div class="box-container ">
			<div class="time flex ">
				<span class=" gutter">
					发表时间:{{ articleVo.article.createTime.date.year }}年{{ articleVo.article.createTime.date.month }}月{{ articleVo.article.createTime.date.day }}日 {{ articleVo.article.createTime.time.hour }}:{{
						articleVo.article.createTime.time.minute
					}}:{{ articleVo.article.createTime.time.second }}
				</span>
				<span>评论</span>
				    <i class="iconfont" >&#xe7cd;</i>
					<span class="meta gutter ">{{ articleVo.article.comments }}</span>
					<span>喜欢</span>
					 <i class="iconfont" >&#xe61a;</i>
					<span class="meta ">{{ articleVo.article.likes }}</span>	
			</div>
			<div class="author ">
				<router-link :to="{ path: '/user/' + articleVo.author.id }">
				<img :src="articleVo.author.avatar" class="avatar-lg link" /></router-link>
				<span class=" gutter">作者:{{ articleVo.author.nickname }}</span>
				<button class="btn btn-follow"><i class="iconfont" >&#xe607;</i>关注</button>
			</div>
			</div>
		</div>
		<div class="context border">
			<div class="wrappers" v-html="articleVo.article.content"></div> 
			<!-- <p>{{ articleVo.article.content }}</p> -->
			<!-- <pre>{{ articleVo.article.content }}</pre> -->
		</div>
	</div>
</template>

<script>
export default {
	data() {
		return {
			articleVo: {}
		};
	},
	created() {
		var id = this.$route.params.id;
		this.axios.get('http://localhost:8080/api/article/' + id).then(res => {
			console.log(res.data.data);
			this.articleVo = res.data.data;
		});
	},
	computed: {},
	methods: {}
};
</script>

<style scoped="scoped">	
body{font-family:"Microsoft Yahei";}
body{
	font-size:12px;
	color:#666;
}
.context{
	margin: 14px;
	font-weight: 700;
	text-align: left;
	text-indent: 2em;
	line-height: 2em;
	letter-spacing: 5px;
}
.container{
	margin-top: 70px;
}
.title{
	font-size: 25px;
	background-color: darkgrey;
}
	.box{		
		height: 100px;
		line-height: 50px;			
	}
	.wrapper{
	  white-space: pre-wrap;
	}

	@font-face {
	  font-family: 'iconfont';  /* project id 1434175 */
	  src: url('//at.alicdn.com/t/font_1434175_lneqi4x9b1.eot');
	  src: url('//at.alicdn.com/t/font_1434175_lneqi4x9b1.eot?#iefix') format('embedded-opentype'),
	  url('//at.alicdn.com/t/font_1434175_lneqi4x9b1.woff2') format('woff2'),
	  url('//at.alicdn.com/t/font_1434175_lneqi4x9b1.woff') format('woff'),
	  url('//at.alicdn.com/t/font_1434175_lneqi4x9b1.ttf') format('truetype'),
	  url('//at.alicdn.com/t/font_1434175_lneqi4x9b1.svg#iconfont') format('svg');
	}
	.iconfont{
	    font-family:"iconfont" !important;
	    font-size:20px;font-style:normal;
	    -webkit-font-smoothing: antialiased;
	    -webkit-text-stroke-width: 0.2px;
	    -moz-osx-font-smoothing: grayscale;}
</style>