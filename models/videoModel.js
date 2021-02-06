var mysequelize = require('../configs/dbconfigs')
const myUser = mysequelize.sequelize.define('myUser',
    {
        id: {
            type: mysequelize.Sequelize.BIGINT,
            primaryKey: true,
            autoIncrement: true,
            allowNull: false
        },
        caption: {
            type: mysequelize.Sequelize.STRING,
            allowNull: false
        },
        name: {
            type: mysequelize.Sequelize.STRING,
            allowNull: false
        },
        description: {
            type: mysequelize.Sequelize.STRING,
            allowNull: false
        },
        title: {
            type: mysequelize.Sequelize.STRING,
            allowNull: false
        },
        courseID: {
            type: mysequelize.Sequelize.BIGINT,
            allowNull: false
        }
    },
    {
        freezeTableName: true,
        tableName: 'video'
    }
)
myUser.sync({ force: false })

module.exports = myUser;