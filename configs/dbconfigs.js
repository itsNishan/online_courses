var Sequelize = require('sequelize');
var sequelize = new Sequelize('online_courses', 'root', 'password', {
	host: 'localhost',
	dialect: 'mysql',
	logging: false
});
sequelize.authenticate()
.then(function(){
	console.log('db successfully connected');
})
.catch(function(err){
	console.log(err);
})
// console.log('I am in sequelize');

module.exports = {
	sequelize,
	Sequelize
}