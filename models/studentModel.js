var mysequelize = require('../configs/dbconfigs')
const myUsers = mysequelize.sequelize.define('myUsers',
{
	id: {
		type: mysequelize.Sequelize.BIGINT,
		primaryKey: true,
		autoIncrement: true,
		allowNull : false
	},
	profile_image: {
		type: mysequelize.Sequelize.STRING,
        allowNull : true
    },
    first_name: {
		type: mysequelize.Sequelize.STRING,
		allowNull : false
	},


	last_name: {
		type: mysequelize.Sequelize.STRING,
		allowNull : false
    },
    address: {
		type: mysequelize.Sequelize.STRING,
        allowNull : false
	},
	phone: {
		type: mysequelize.Sequelize.STRING,
        allowNull : false
	},
	
	dob: {
		type: mysequelize.Sequelize.DATE,
        allowNull : false
	},
	gender: {
		type: mysequelize.Sequelize.STRING,
        allowNull : false
    },
)