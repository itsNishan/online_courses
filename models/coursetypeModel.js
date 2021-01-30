var mysequelize = require('../configs/dbconfigs')
const myUsers = mysequelize.sequelize.define('myUsers',
{

	id: {
		type: mysequelize.Sequelize.BIGINT,
		primaryKey: true,
		autoIncrement: true,
		allowNull : false
	},


	coursetype_title: {
		type: mysequelize.Sequelize.STRING,
		allowNull : false
	}

},

{
	freezeTableName : true,
	tableName: 'coursetype'
}

)

myUsers.sync({force:false})

module.exports = myUsers;
