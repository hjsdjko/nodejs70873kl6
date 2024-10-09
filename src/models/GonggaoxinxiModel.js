import { Sequelize, DataTypes } from 'sequelize'
import moment from 'moment'
import sequelize from './sequelize'

// 公告信息
const GonggaoxinxiModel = sequelize.define('GonggaoxinxiModel', {
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
	jianjie: {
		type: DataTypes.TEXT,
		defaultValue: '',
		allowNull: true,
		comment: '简介'
	},
	fabushijian: {
		type: DataTypes.DATEONLY,
		allowNull: true,
		get() {
            return moment(this.getDataValue('fabushijian')).format('YYYY-MM-DD')
        },
		defaultValue: new Date(),
		comment: '发布时间'
	},
	fengmian: {
		type: DataTypes.TEXT,
		defaultValue: '',
		allowNull: true,
		comment: '封面'
	},
	neirong: {
		type: DataTypes.TEXT,
		defaultValue: '',
		allowNull: true,
		comment: '内容'
	},
	clicknum: {
		type: DataTypes.INTEGER,
		defaultValue: 0,
		allowNull: true,
		comment: '点击次数'
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
	tableName: 'gonggaoxinxi'
})

export default GonggaoxinxiModel
