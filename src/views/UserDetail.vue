<template>
	<div class="container ">
		<div class="row">
			<div class="col-4 ">
				<div class="ku ">
				<div class="first">
					<img :src="userVo.user.avatar" class="avatar-bi " />		
				<p class="title">{{ userVo.user.nickname }}</p>
				<p class="meta">注册时间:{{ userVo.user.createTime.date.year}}年{{ userVo.user.createTime.date.month}}月{{ userVo.user.createTime.date.day}}日</p>
				<p class="sub-title">简介:{{ userVo.user.introduction.slice(0, 50) }}...</p>
				<hr>
				</div>
				<div class="second">
					<ul class="nav-list flex-around">
						<li class="nav-item ">文章({{ userVo.user.articles}})</li>
						<li class="nav-item ">粉丝({{ userVo.user.fans}})</li>
						<li class="nav-item ">关注({{ userVo.user.follows}})</li>
						</ul>
						<hr>
						<ul class="title ">
							<li class="nav-item border-bottom">写文章</li>
							<li class="nav-item border-bottom">留言板</li>
							<li class="nav-item border-bottom">个人资料</li>
							</ul>
				</div>
				<hr>
				<div class="third">
					<h3>个人站点</h3>
					<hr>
					<div class="imf">
						<p>电子邮箱：2623327266@qq.com</p>
						<p>QQ号：2673327266</p>
						<p>电话号码:18805167526</p>
						<p>个人主页：{{ userVo.user.homepage}}</p>
						<p>家庭住址：{{ userVo.user.address}}</p>
						<p>出生日期：{{ userVo.user.birthday.year}}年{{ userVo.user.birthday.month}}月{{ userVo.user.birthday.day}}日</p>
					</div>
				</div>
			</div>
			</div>
			<div class="col-8 border-left">
				<div class="row">
				<div class="banner flex flex-center col-12"><img :src="userVo.user.banner" class="cover" />			
				<div class="lab col-12 border shadow">
					<!--<p>喜欢</p>-->
				</div>
				</div>
				<div class=" love col-12 " v-for="(item, index) in userVo.articleList" :key="index">
					<div class="media-wraaper shadow">
											<div class="media-left"><img :src="item.article.thumbnail" class="thumnail-xs" /></div>
											<div class="media-middle">
												<router-link :to="{ path: '/article/' + item.article.id }">
												<p class="title">{{ item.article.title }}</p>
												</router-link>
												<hr>
												<p class="sub-title">{{ item.article.summary }}</p>
											</div>
							</div>
				</div>
			</div>
			</div>
		</div>
	</div>
</template>

<script>
export default {
	data() {
		return {
			userVo: {
				user: {},
				articleList: {},
			}
		};
	},
	created() {
		var id = this.$route.params.id;
		this.axios.get('http://localhost:8080/api/user/' + id).then(res => {				
			console.log(res.data.data);
			this.userVo = res.data.data;
		});
	},
	methods: {}
};
</script>

<style scoped="scoped">
.banner {
	
	width: 100%;
	height: 200px;
	margin-top: 50px;
	padding-bottom: 40px;
}
.cover {
	width: 90%;
	height: 100%;
}
.love{
  display: flex;
  flex-flow: column;
	margin-top: 20px;
}
.ku{
	margin-top: 50px;
	margin-right: 10px;
}
.lab{
	height: 50px;
	width: 100%;
	display: flex;	
	flex-direction: column;
	align-items: center;
	justify-content: center;
	margin-top:5px;
	background-color:wheat;
}
.lab p{
	font-size: 30px;
	font-weight: 600;
	color: white;
}
.first{
	display: flex;
	flex-direction: column;
	align-items: center;
}
.first img {
	border: 2px solid #fff;	
}
.ku p{
	margin-bottom: 10px;
}

.row {
	display: flex;
	margin-top: -50px;
	flex-wrap: wrap;
}

</style>