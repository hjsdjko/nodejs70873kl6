import { Sequelize, DataTypes } from 'sequelize'
import moment from 'moment'
import sequelize from './sequelize'

// 咨询卖家
const ZixunmaijiaModel = sequelize.define('ZixunmaijiaModel', {
	id: {
		type: DataTypes.BIGINT,
		primaryKey: true,
		autoIncrement: true,
		allowNull: false,
		comment: '主键id'
	},
	biaoti: {
		type: DataTypes.STRING,
		defaultValue: '',
		allowNull: true,
		comment: '标题'
	},
	zixunwenti: {
		type: DataTypes.TEXT,
		defaultValue: '',
		allowNull: true,
		comment: '咨询问题'
	},
	zixunshijian: {
		type: DataTypes.DATE,
		allowNull: true,
		get() {
            return moment(this.getDataValue('zixunshijian')).format('YYYY-MM-DD HH:mm:ss')
        },
		defaultValue: DataTypes.NOW,
		comment: '咨询时间'
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
	zixunzhanghao: {
		type: DataTypes.STRING,
		defaultValue: '',
		allowNull: true,
		comment: '咨询账号'
	},
	zixunxingming: {
		type: DataTypes.STRING,
		defaultValue: '',
		allowNull: true,
		comment: '咨询姓名'
	},
	touxiang: {
		type: DataTypes.TEXT,
		defaultValue: '',
		allowNull: true,
		comment: '头像'
	},
	shhf: {
		type: DataTypes.TEXT,
		defaultValue: '',
		allowNull: true,
		comment: '回复内容'
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
	tableName: 'zixunmaijia'
})

export default ZixunmaijiaModel
