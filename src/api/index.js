import { Router } from 'express'
import UsersController from './Users'
import FileController from './File'
import ConfigController from './Config'
import CommonController from './Common'
import YonghuController from './Yonghu'
import ShangpinfenleiController from './Shangpinfenlei'
import ShangpinxinxiController from './Shangpinxinxi'
import GonggaoxinxiController from './Gonggaoxinxi'
import ZixunmaijiaController from './Zixunmaijia'
import ChatController from './Chat'
import ChathelperController from './Chathelper'
import CartController from './Cart'
import OrdersController from './Orders'
import AddressController from './Address'
import StoreupController from './Storeup'
import DiscussshangpinxinxiController from './Discussshangpinxinxi'

export default ({ config, db }) => {
	let api = Router()

	api.use('/users', UsersController({ config, db }))

	api.use('/file', FileController({ config, db }))

	api.use('/config', ConfigController({ config, db }))

	api.use('/', CommonController({ config, db }))

	api.use('/yonghu', YonghuController({ config, db }))

	api.use('/shangpinfenlei', ShangpinfenleiController({ config, db }))

	api.use('/shangpinxinxi', ShangpinxinxiController({ config, db }))

	api.use('/gonggaoxinxi', GonggaoxinxiController({ config, db }))

	api.use('/zixunmaijia', ZixunmaijiaController({ config, db }))

	api.use('/chat', ChatController({ config, db }))

	api.use('/chathelper', ChathelperController({ config, db }))

	api.use('/cart', CartController({ config, db }))

	api.use('/orders', OrdersController({ config, db }))

	api.use('/address', AddressController({ config, db }))

	api.use('/storeup', StoreupController({ config, db }))

	api.use('/discussshangpinxinxi', DiscussshangpinxinxiController({ config, db }))

	return api
}
