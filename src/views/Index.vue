<template>
	<div>
		<div class="back ">
			<img src="https://www.usuuu.com/libs/theme/uum/img/banner3.jpg" />
			</div>
		<div class="row">	
			<div class="col-8">
				<h3>最新文章</h3>
				<hr>
				<div v-for="(item, index) in articles" :key="index" class="col-12">
					<div class="media-wraaper">
						<div class="media-left">
							<div class="tab border label label-zan">
								<h4>专题:{{ item.topic.topicName }}</h4>
							</div>
							<router-link :to="{ path: '/user/' + item.article.userId }">
							<img :src="item.author.avatar" class="avatar-lg link" />
							</router-link>
							<p class="subtitle">{{ item.author.nickname }}</p>
						</div>
						<div class="media-middle flex flex-around flex-left">
								<p class="title">{{ item.article.title }}</p>
							<p class="sub-title">{{ item.article.summary }}</p>
							<router-link :to="{ path: '/article/' + item.article.id }" >
								<span class="look" style="color: black;">查看详情>>></span>
							</router-link>
							<span class="time">发表时间:{{ item.article.createTime.date.year}}年{{ item.article.createTime.date.month}}月{{ item.article.createTime.date.day}}日</span>
						</div>
						<div class="media-right ">
							<img :src="item.article.thumbnail" alt="" />
					<p>
						<span class="meta gutter" >{{ item.article.comments }}</span>
						<i class="iconfont"  @click="toggle()">&#xe7cd;</i>						
						<span class="meta ">{{ item.article.likes }}</span>
						 <i class="iconfont" >&#xe61a;</i>
					</p>
					</div>
					</div>
					<div id="view">						
					</div>
				</div>
				<div class="row ">
				<div class="col-12 cloud border-bottom">
				<h3>标签云</h3>
				<ul>
			    <a href="https://www.sdocos.com/e/tags/?tagname=%E6%8E%92%E7%89%88%E5%B7%A5%E5%85%B7&amp;tempid=8" target="_blank">排版工具</a>
				<a href="https://www.sdocos.com/e/tags/?tagname=%E8%93%9D%E7%81%AF&amp;tempid=8" target="_blank">蓝灯</a>
				<a href="https://www.sdocos.com/e/tags/?tagname=%E6%8E%A8%E5%B9%BF&amp;tempid=8" target="_blank">推广</a>
				<a href="https://www.sdocos.com/e/tags/?tagname=SEO%E7%9F%A5%E8%AF%86&amp;tempid=8" target="_blank">SEO知识</a>
				<a href="https://www.sdocos.com/e/tags/?tagname=%E7%BB%87%E6%A2%A6&amp;tempid=8" target="_blank">织梦</a>
				<a href="https://www.sdocos.com/e/tags/?tagname=%E4%BC%98%E5%8C%96%E5%88%86%E6%9E%90&amp;tempid=8" target="_blank">优化分析</a>
				<a href="https://www.sdocos.com/e/tags/?tagname=SEO%E8%B5%9A%E9%92%B1&amp;tempid=8" target="_blank">SEO赚钱</a>
				<a href="https://www.sdocos.com/e/tags/?tagname=%E6%94%B6%E5%BD%95%E6%8A%80%E5%B7%A7&amp;tempid=8" target="_blank">收录技巧</a>
				<a href="https://www.sdocos.com/e/tags/?tagname=SEO%E5%88%9B%E4%B8%9A&amp;tempid=8" target="_blank">SEO创业</a>
				<a href="https://www.sdocos.com/e/tags/?tagname=%E7%AB%99%E9%95%BF%E5%B7%A5%E5%85%B7&amp;tempid=8" target="_blank">站长工具</a>
				<a href="https://www.sdocos.com/e/tags/?tagname=%E7%BB%87%E6%A2%A6%E6%A8%A1%E6%9D%BF&amp;tempid=8" target="_blank">织梦模板</a>
				<a href="https://www.sdocos.com/e/tags/?tagname=%E6%8A%80%E6%9C%AF&amp;tempid=8" target="_blank">技术</a>
				<a href="https://www.sdocos.com/e/tags/?tagname=SEO&amp;tempid=8" target="_blank">SEO</a>
				<a href="https://www.sdocos.com/e/tags/?tagname=%E9%98%BF%E9%87%8C%E4%BA%91&amp;tempid=8" target="_blank">阿里云</a>
				<a href="https://www.sdocos.com/e/tags/?tagname=%E7%99%BE%E5%BA%A6%E6%8C%87%E6%95%B0&amp;tempid=8" target="_blank">百度指数</a>
				<a href="https://www.sdocos.com/e/tags/?tagname=%E5%86%85%E9%A1%B5%E4%BC%98%E5%8C%96&amp;tempid=8" target="_blank">内页优化</a>
				<a href="https://www.sdocos.com/e/tags/?tagname=%E6%94%B6%E5%BD%95%E6%8E%92%E5%90%8D&amp;tempid=8" target="_blank">收录排名</a>
				<a href="https://www.sdocos.com/e/tags/?tagname=%E5%9D%9A%E6%8C%81%E7%99%BD%E5%B8%BD%E5%AD%90&amp;tempid=8" target="_blank">坚持白帽子</a>
				<a href="https://www.sdocos.com/e/tags/?tagname=%E6%B8%97%E9%80%8F&amp;tempid=8" target="_blank">渗透</a>
				<a href="https://www.sdocos.com/e/tags/?tagname=%E5%93%81%E7%89%8C%E5%8F%A3%E7%A2%91&amp;tempid=8" target="_blank">品牌口碑</a>
				</ul>
				</div>
				<div class="bet col-12 border">
				</div>
				<div class="widget widget_links">
					<h3><span>友情链接</span></h3>
				<ul class="xoxo blogroll">
				<li><a href="http://www.yangqq.com" target="_blank">杨青个人博客</a></li>
				<li><a href="https://zhangzifan.com" title="泪雪博客是一个专注网站 SEO 优化、网站 SEO 诊断、搜索引擎研究、网络营销推广、网站策划运营及站长类的独立自媒体原创博客" target="_blank">泪雪博客</a></li>
				<li><a href="https://www.mochoublog.com" title="我希望我自己是一个产品经理，会产品的工程师。写代码不能不带业务的写，而做产品不能不考虑实际的胡乱设计，我想融合产品经理与开发，做一个融合的人。" target="_blank">莫愁个人博客</a></li>
				<li><a href="https://www.imwbq.com/" title="记录个人生活、工作和分享免费资源的个人主页（imwbq.com）" target="_blank">王保庆博客</a></li>
				<li><a href="http://www.tianshan277.com/" target="_blank">田珊珊个人博客</a></li>
				<li><a href="https://www.guojian945.com/" target="_blank">郭健博客</a></li>
				<li><a href="https://baijunyao.com/" target="_blank">白俊遥博客</a></li>
				<li><a href="https://www.zh30.com/" target="_blank">郑晓个人博客</a></li>
				<li><a href="http://www.sanshi30.cn/" target="_blank">Sanshi博客</a></li>
				<li><a href="https://guanchao.site/" target="_blank">时间里的博客</a></li>
				<li><a href="https://liaowei.info/" title="魔前一叩三千年、回首凡尘不做仙" target="_blank">路过一只大侠</a></li>
				<li><a href="http://blog.023xs.cn/" target="_blank">小张个人博客</a></li>
				<li><a href="https://www.ykblog.cn/" target="_blank">云柯博客</a></li>
				<li><a href="https://www.chenweiliang.com/" target="_blank">陈沩亮博客</a></li>
				<li><a href="http://www.xuluowuhen.com" target="_blank">暗影月色程序猿</a></li>
					</ul>
				</div>
				<div class="block col-12">
					
				</div>
				<div class="footer col-12">
					<div class="container">						
						      <h2>我的名片</h2>
						      <p>网名：小黑</p>
						      <p>职业：学生</p>
							  <p>学校：南京工业职业技术学院</p>
						      <p>现居：江苏省-南京市</p>
						      <p>QQ：2673327266</p>			
					</div>
				</div>
				</div>
			</div>
			
			<div class="col-4 ">
				<h3>榜单作者</h3>
				<hr>
				<div v-for="(item, index) in users" :key="index" class="row border">
					<div class="col-12  box">
						<div class="flex-center-y">
							<router-link :to="{ path: '/user/' + item.id }">
							<img :src="item.avatar" class="avatar-lg" />
							</router-link>
						</div>
						<div class="flex-center-y">
							<p class="sub-title">{{ item.nickname }}</p>
							<p class="meta">粉丝:{{ item.fans }}</p>
							<p class="meta">写了{{ item.articles }}篇文章</p>
						</div>
						<div class="flex-center-y"><button class="btn btn-follow" @click="change()"><i class="iconfont" >&#xe607;</i>{{msg}}</button></div>
					</div>
				</div>
				<h3>专题速递</h3>
				<hr>
				<div class="row border">
					<div class="col-12" v-for="(item, index) in topics" :key="index">
						<div class="card shadow">
							<router-link :to="{ path: '/topic/' + item.id }"><img :src="item.logo" class="logo" /></router-link>
							<p class="title">{{ item.topicName }}</p>
							<p class="sub-title">{{ item.description.slice(0, 20) }}...</p>
							<p class="meta">
								<span class="gutter">{{ item.articles }}篇文章,</span>
								<span>{{ item.follows }}人关注</span>
							</p>
						</div>
					</div>
				</div>
			</div>
		<div class="bottom border-bottom col-12">
			<span> Design by:小黑  发送邮箱:2673327266@qq.com</span>
		</div>
		</div>
	</div>
</template>

<script>
export default {
	
	data() {
		return {
			show:false,
			msg:'关注',
			articles: [],
			users: [],
			topics: [],
		};
	},
	methods: {
	  toggle() {
	     this.show = !this.show;   
	  },
	  change(){
	 this.msg='已关注';
	 alert(this.msg)
	 },
	
	  },
	created() {
		this.axios.get('http://localhost:8080/api/article',).then(res => {
			// console.log(res.data.data);
			this.articles = res.data.data;
		});
		this.axios.get('http://localhost:8080/api/user',).then(res => {
			// console.log(res.data.data);
			this.users = res.data.data;
		});
		this.axios.get('http://localhost:8080/api/topic',).then(res => {
			// console.log(res.data.data);
			this.topics = res.data.data;
		});
	}
	
	
};

</script>

<style scoped="scoped">
	.look{
		font-size: 15px;
		font-weight: 200;
	}
.back {
	display: flex;
	justify-content: center;
	margin-top: 75px;
}
.back img {
	width: 100%;
}
	.media-right{
		display: flex;
		flex-direction: column;
		flex-wrap: wrap;		
	}
	.media-right p{
		margin-top: 10px;
	}
	.tab{
		margin-bottom: 30px;
	}
	ul {
	    display: block;
	    list-style-type: disc;
	    margin-block-start: 1em;
	    margin-block-end: 1em;
	    margin-inline-start: 0px;
	    margin-inline-end: 0px;
	    padding-inline-start: 40px;
	}
	.cloud ul a:first-child {
	    background: #036564;
	}
	.cloud ul a:nth-child(8n-7) {
	    background: #8A9B0F;
	}
	.cloud ul a:nth-child(8n-6) {
	    background: #EB6841;
	}
	.cloud ul a:nth-child(8n-5) {
	    background: #3FB8AF;
	}
	.cloud ul a:nth-child(8n-4) {
	    background: #FE4365;
	}
	.cloud ul a:nth-child(8n-3) {
	    background: #FC9D9A;
	}
	.cloud ul a:nth-child(8n-2) {
	    background: #EDC951;
	}
	.cloud ul a:nth-child(8n-1) {
	    background: #C8C8A9;
	}
	.cloud ul a:nth-child(8n) {
	    background: #83AF9B;
	}
.cloud ul a {
    line-height: 24px;
    height: 24px;
    display: block;
    background: #999;
    float: left;
    padding: 3px 10px;
    margin: 10px 5px 0 0;
    border-radius: 3px;
    -moz-transition: all 0.5s;
    -webkit-transition: all 0.5s;
    -o-transition: all 0.5s;
    transition: all 0.5s;
    color: #FFF;
}
.widget {
    margin-bottom: 25px;
    position: relative;
    overflow: hidden;
    background: #FFF;
    -webkit-box-shadow: 0 2px 5px 0 rgba(146,146,146,.1);
    -moz-box-shadow: 0 2px 5px 0 rgba(146,146,146,.1);
    box-shadow: 0 2px 5px 0 rgba(146,146,146,.1);
    padding: 35px 30px;
}
.widget h3 {
    font-size: 18px;
    color: #282828;
    font-weight: 600;
    margin: 0;
    text-transform: uppercase;
    padding-bottom: 15px;
    margin-bottom: 25px;
    position: relative;
}
.widget_links a{
	color: black;
}
.widget_links ul li {
    display: inline-block;
    width: 48%;
    margin-top: 5px;
}
.footer{
	background-color: rgb(72,72,72);
	height: 200px;		
}
.logo {
	border-top-left-radius: 5px;
	border-top-right-radius: 5px;
}
.logo:hover {
	opacity: 0.6;
}
.box {
	display: flex;
	justify-content: space-around;
	height: 70px;
	padding: 10px;
	background-color: white;
}
.bet{
	background-color: wheat;
	height: 10px;
}
.block{
	background-color: burlywood;
	height: 120px;
	margin-bottom: 10px;
}
.btn-follow {
	background-color: greenyellow;
	font-weight: 400;
	font-size: 15px;
	color: #fff;
	padding: 5px 0;
	width: 65px;
	height: 32px;
	border-radius: 40px;
	display: inline-block;
	text-align: center;
}
.bottom{
	margin: 0;
	background-color: black;
	height: 20px;
}
.bottom span{
	display: flex;
	color: white;	
	justify-content: center;	
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