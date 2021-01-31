var mysequelize = require('../configs/dbconfigs')
const myUsers = mysequelize.sequelize.define('myUsers',
{
	id: {
		type: mysequelize.Sequelize.BIGINT,
		primaryKey: true,
		autoIncrement: true,
		allowNull : false
	},

	rating: {
		type: mysequelize.Sequelize.BIGINT,
		allowNull : false
	},

	courseID: {
		type: mysequelize.Sequelize.BIGINT,
        allowNull : false

	},
    studentID: {
		type: mysequelize.Sequelize.BIGINT,
        allowNull : false
    }
	},

{
	freezeTableName : true,
	tableName: 'rating'
}

)

myUsers.sync({force:false})


module.exports = myUsers;
