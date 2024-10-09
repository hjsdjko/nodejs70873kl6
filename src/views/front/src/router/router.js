import VueRouter from 'vue-router'

//引入组件
import Index from '../pages'
import Home from '../pages/home/home'
import Login from '../pages/login/login'
import Register from '../pages/register/register'
import Center from '../pages/center/center'
import Storeup from '../pages/storeup/list'
import AddrList from '../pages/shop-address/list'
import AddrAdd from '../pages/shop-address/addOrUpdate'
import Order from '../pages/shop-order/list'
import OrderConfirm from '../pages/shop-order/confirm'
import Cart from '../pages/shop-cart/list'
import payList from '../pages/pay'

import yonghuList from '../pages/yonghu/list'
import yonghuDetail from '../pages/yonghu/detail'
import yonghuAdd from '../pages/yonghu/add'
import shangpinfenleiList from '../pages/shangpinfenlei/list'
import shangpinfenleiDetail from '../pages/shangpinfenlei/detail'
import shangpinfenleiAdd from '../pages/shangpinfenlei/add'
import shangpinxinxiList from '../pages/shangpinxinxi/list'
import shangpinxinxiDetail from '../pages/shangpinxinxi/detail'
import shangpinxinxiAdd from '../pages/shangpinxinxi/add'
import gonggaoxinxiList from '../pages/gonggaoxinxi/list'
import gonggaoxinxiDetail from '../pages/gonggaoxinxi/detail'
import gonggaoxinxiAdd from '../pages/gonggaoxinxi/add'
import zixunmaijiaList from '../pages/zixunmaijia/list'
import zixunmaijiaDetail from '../pages/zixunmaijia/detail'
import zixunmaijiaAdd from '../pages/zixunmaijia/add'
import chathelperList from '../pages/chathelper/list'
import chathelperDetail from '../pages/chathelper/detail'
import chathelperAdd from '../pages/chathelper/add'
import discussshangpinxinxiList from '../pages/discussshangpinxinxi/list'
import discussshangpinxinxiDetail from '../pages/discussshangpinxinxi/detail'
import discussshangpinxinxiAdd from '../pages/discussshangpinxinxi/add'

const originalPush = VueRouter.prototype.push
VueRouter.prototype.push = function push(location) {
	return originalPush.call(this, location).catch(err => err)
}

//配置路由
export default new VueRouter({
	routes:[
		{
      path: '/',
      redirect: '/index/home'
    },
		{
			path: '/index',
			component: Index,
			children:[
				{
					path: 'home',
					component: Home
				},
				{
					path: 'center',
					component: Center,
				},
				{
					path: 'pay',
					component: payList,
				},
				{
					path: 'storeup',
					component: Storeup
				},
                {
                    path: 'shop-address/list',
                    component: AddrList
                },
                {
                    path: 'shop-address/addOrUpdate',
                    component: AddrAdd
                },
				{
					path: 'shop-order/order',
					component: Order
				},
				{
					path: 'cart',
					component: Cart
				},
				{
					path: 'shop-order/orderConfirm',
					component: OrderConfirm
				},
				{
					path: 'yonghu',
					component: yonghuList
				},
				{
					path: 'yonghuDetail',
					component: yonghuDetail
				},
				{
					path: 'yonghuAdd',
					component: yonghuAdd
				},
				{
					path: 'shangpinfenlei',
					component: shangpinfenleiList
				},
				{
					path: 'shangpinfenleiDetail',
					component: shangpinfenleiDetail
				},
				{
					path: 'shangpinfenleiAdd',
					component: shangpinfenleiAdd
				},
				{
					path: 'shangpinxinxi',
					component: shangpinxinxiList
				},
				{
					path: 'shangpinxinxiDetail',
					component: shangpinxinxiDetail
				},
				{
					path: 'shangpinxinxiAdd',
					component: shangpinxinxiAdd
				},
				{
					path: 'gonggaoxinxi',
					component: gonggaoxinxiList
				},
				{
					path: 'gonggaoxinxiDetail',
					component: gonggaoxinxiDetail
				},
				{
					path: 'gonggaoxinxiAdd',
					component: gonggaoxinxiAdd
				},
				{
					path: 'zixunmaijia',
					component: zixunmaijiaList
				},
				{
					path: 'zixunmaijiaDetail',
					component: zixunmaijiaDetail
				},
				{
					path: 'zixunmaijiaAdd',
					component: zixunmaijiaAdd
				},
				{
					path: 'chathelper',
					component: chathelperList
				},
				{
					path: 'chathelperDetail',
					component: chathelperDetail
				},
				{
					path: 'chathelperAdd',
					component: chathelperAdd
				},
				{
					path: 'discussshangpinxinxi',
					component: discussshangpinxinxiList
				},
				{
					path: 'discussshangpinxinxiDetail',
					component: discussshangpinxinxiDetail
				},
				{
					path: 'discussshangpinxinxiAdd',
					component: discussshangpinxinxiAdd
				},
			]
		},
		{
			path: '/login',
			component: Login
		},
		{
			path: '/register',
			component: Register
		},
	]
})
