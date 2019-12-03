import Vue from 'vue'
import VueRouter from 'vue-router'
import Nav from '@/views/Nav.vue'
import Index from '@/views/Index.vue'
import Collections from '@/views/Collection.vue'
import CollectionDetail from '@/views/CollectionDetail.vue'
import Articles from '@/views/Article.vue'
import ArticleDetail from '@/views/ArticleDetail.vue'
import Users from '@/views/User.vue'
import UserDetail from '@/views/UserDetail.vue'
import UserFans from '@/views/UserFans.vue'
import UserFollows from '@/views/UserFollows.vue'
import Sign from '@/views/Sign.vue'
import Search from '@/views/Search.vue'
import SearchUser from '@/views/SearchUser.vue'
import SearchCollection from '@/views/SearchCollection.vue'
import SearchArticle from '@/views/SearchArticle.vue'
import Empty from '@/views/Empty.vue'
Vue.use(VueRouter)

const routes = [{
		path: '/',
		component: Nav,
		children: [{
				path: '/',
				redirect: '/index'
			},
			{
				path: 'index',
				component: Index
			},
			{
				path: 'user',
				component: Users
			},
			{
				path: 'user/:id',
				component: UserDetail
			},
			{
				path: 'article',
				component: Articles,
			},
			{
				path: 'article/:id',
				component: ArticleDetail
			},
			{
				path: 'topic',
				component: Collections,
			},
			{
				path: 'topic/:id',
				component: CollectionDetail
			},
			{
				path: 'search',
				component: Search,
				children: [{
						path: '/',
						redirect: 'article'
					},
					{
						path: 'article',
						component: SearchArticle
					},
					{
						path: 'topic',
						component: SearchCollection
					},
					{
						path: 'user',
						component: SearchUser
					}
				]
			},
		]
	},
	{
		path: '/sign',
		component: Sign
	},

]

const router = new VueRouter({
	routes
})

export default router
