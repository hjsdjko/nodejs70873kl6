import { Sequelize, DataTypes } from 'sequelize'
import moment from 'moment'
import sequelize from './sequelize'

// 聊天助手表
const ChathelperModel = sequelize.define('ChathelperModel', {
	id: {
		type: DataTypes.BIGINT,
		primaryKey: true,
		autoIncrement: true,
		allowNull: false,
		comment: '主键id'
	},
	ask: {
		type: DataTypes.STRING,
		defaultValue: '',
		allowNull: true,
		comment: '提问'
	},
	reply: {
		type: DataTypes.TEXT,
		defaultValue: '',
		allowNull: true,
		comment: '回复'
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
	tableName: 'chathelper'
})

export default ChathelperModel
