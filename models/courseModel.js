var mysequelize = require('../configs/dbconfigs')
const myUsers = mysequelize.sequelize.define('myUsers',
	{
		id: {
			type: mysequelize.Sequelize.BIGINT,
			primaryKey: true,
			autoIncrement: true,
			allowNull: false
		},

		title: {
			type: mysequelize.Sequelize.STRING,
			allowNull: false
		},

		description: {
			type: mysequelize.Sequelize.STRING,
			allowNull: false
		},

		credit: {
			type: mysequelize.Sequelize.STRING,
			allowNull: false
		},
		fee: {
			type: mysequelize.Sequelize.INTEGER,
			allowNull: false
		},
		course_image: {
			type: mysequelize.Sequelize.STRING,
			allowNull: true
		},
		start_date: {
			type: mysequelize.Sequelize.DATE,
			allowNull: false
		},

		end_date: {
			type: mysequelize.Sequelize.DATE,
			allowNull: false

		},



		coursetype_id: {
			//foreign key in course type table
			type: mysequelize.Sequelize.BIGINT,
			allowNull: false
		},


		teacher_id: {
			//foreign key in teacher table
			type: mysequelize.Sequelize.BIGINT,
			allowNull: false
		},

		rating_id: {
			//foreign key in teacher table
			type: mysequelize.Sequelize.BIGINT,
			allowNull: false
		}
	},

	{
		freezeTableName: true,
		tableName: 'course'
	}

)

myUsers.sync({ force: false })


module.exports = myUsers;
