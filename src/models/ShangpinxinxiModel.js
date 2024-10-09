import { Sequelize, DataTypes } from 'sequelize'
import moment from 'moment'
import sequelize from './sequelize'

// 商品信息
const ShangpinxinxiModel = sequelize.define('ShangpinxinxiModel', {
	id: {
		type: DataTypes.BIGINT,
		primaryKey: true,
		autoIncrement: true,
		allowNull: false,
		comment: '主键id'
	},
	shangpinmingcheng: {
		type: DataTypes.STRING,
		defaultValue: '',
		allowNull: true,
		comment: '商品名称'
	},
	shangpinfenlei: {
		type: DataTypes.STRING,
		defaultValue: '',
		allowNull: true,
		comment: '商品分类'
	},
	pinpai: {
		type: DataTypes.STRING,
		defaultValue: '',
		allowNull: true,
		comment: '品牌'
	},
	guige: {
		type: DataTypes.STRING,
		defaultValue: '',
		allowNull: true,
		comment: '规格'
	},
	tupian: {
		type: DataTypes.TEXT,
		defaultValue: '',
		allowNull: true,
		comment: '图片'
	},
	xinjiuchengdu: {
		type: DataTypes.STRING,
		defaultValue: '',
		allowNull: true,
		comment: '新旧程度'
	},
	shangjiariqi: {
		type: DataTypes.DATEONLY,
		allowNull: true,
		get() {
            return moment(this.getDataValue('shangjiariqi')).format('YYYY-MM-DD')
        },
		defaultValue: new Date(),
		comment: '上架日期'
	},
	shangpinjieshao: {
		type: DataTypes.TEXT,
		defaultValue: '',
		allowNull: true,
		comment: '商品介绍'
	},
	zhanghao: {
		type: DataTypes.STRING,
		defaultValue: '',
		allowNull: true,
		comment: '账号'
	},
	xingming: {
		type: DataTypes.STRING,
		defaultValue: '',
		allowNull: true,
		comment: '姓名'
	},
	shouji: {
		type: DataTypes.STRING,
		defaultValue: '',
		allowNull: true,
		comment: '手机'
	},
	onelimittimes: {
		type: DataTypes.INTEGER,
		defaultValue: 0,
		allowNull: true,
		comment: '单限'
	},
	alllimittimes: {
		type: DataTypes.INTEGER,
		defaultValue: 0,
		allowNull: true,
		comment: '库存'
	},
	sfsh: {
		type: DataTypes.STRING,
		defaultValue: '待审核',
		allowNull: true,
		comment: '是否审核'
	},
	shhf: {
		type: DataTypes.TEXT,
		defaultValue: '',
		allowNull: true,
		comment: '审核回复'
	},
	clicktime: {
		type: DataTypes.DATE,
		allowNull: true,
		get() {
            return moment(this.getDataValue('clicktime')).format('YYYY-MM-DD HH:mm:ss')
        },
		defaultValue: DataTypes.NOW,
		comment: '最近点击时间'
	},
	clicknum: {
		type: DataTypes.INTEGER,
		defaultValue: 0,
		allowNull: true,
		comment: '点击次数'
	},
	discussnum: {
		type: DataTypes.INTEGER,
		defaultValue: 0,
		allowNull: true,
		comment: '评论数'
	},
	price: {
		type: DataTypes.DOUBLE,
		defaultValue: 0,
		allowNull: true,
		comment: '价格'
	},
	storeupnum: {
		type: DataTypes.INTEGER,
		defaultValue: 0,
		allowNull: true,
		comment: '收藏数'
	},
	addtime: {
  		type: DataTypes.DATE,
  		defaultValue: DataTypes.NOW,
    	allowNull: false,
    	get() {
            return moment(this.getDataValue('addtime')).format('YYYY-MM-DD HH:mm:ss')
        },
		comment: '添加时间'
	}
}, {
	timestamps: false,
	freezeTableName: true,
	tableName: 'shangpinxinxi'
})

export default ShangpinxinxiModel
