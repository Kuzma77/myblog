<template>
	<div class="all border">
		<div class="nav primary-fill shadow">
			<div class="nav-bar">
				<ul class="nav-list flex-around">
					<img src="https://www.usuuu.com/libs/theme/uum/img/logo3.png" />
					<p>小黑博客</p>
					<li class="nav-item"><router-link to="/index">主页</router-link></li>
					<li class="nav-item"><router-link to="/topic">专题</router-link></li>
					<li class="nav-item"><router-link to="/article">文章</router-link></li>
					<li class="nav-item"><router-link to="/user">作者</router-link></li>
					
					<li class="nav-item"><input type="text" class="input-box" placeholder="请输入关键字" v-model="keywords" /></li>
					<li class="nav-item"><button class="btn-search dark-border " @click="search"></button></li>
					<li class="nav-item" v-if="!this.user"><router-link to="/sign">去登录</router-link></li>
					 <li<router-link :to="{ path: '/user/' + user.id }" v-if="this.user"> 					
						<img :src="user.avatar" @mouseenter="this.show = true" class="avatar-xs abs-center-right" />
					</router-link></li>
					<li class="nav-item" v-if="this.user"><a class="link" @click="logout">退出</a></li>
				</ul>
			</div>
		</div>
		
		<div class="mid">
			<div class="search  nav-list  border ">
				
			</div>
		</div>
		<router-view class="container" />
	</div>
</template>
<script>
export default {
	data() {
		return {
			user: JSON.parse(localStorage.getItem('user')),
			keywords: ''
		};
	},
	created() {},
	methods: {
		logout() {
			this.user = null;
			localStorage.clear();
		},
		search() {
			let currentPath = this.$route.path;
			alert(currentPath);
			if (currentPath != '/search' || currentPath != '/search/article' || currentPath != '/search/topic' || currentPath != '/search/user') {
				this.$router.push({ path: '/search', query: { keywords: this.keywords } });
			} else {
				this.$router.push({ path: '/empty', query: { keywords: this.keywords } });
			}
		}
	}
};
</script>
<style scoped>
.all {
	background-image: url('https://ss3.bdstatic.com/70cFv8Sh_Q1YnxGkpoWK1HF6hhy/it/u=1152000485,3169834010&fm=26&gp=0.jpg');
	/* 图片全屏 */
	background-size: calc(100%);	
}
/* 路由激活高亮样式 */
.router-link-active {
	background-color: rgba(0, 0, 0, 0.35);
	font-weight: 700;
}
.container {
	margin-top: 15px;
}
.nav p {
	font-size: 40px;
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
