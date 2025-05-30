const { Sequelize } = require('sequelize');

// Option 3: Passing parameters separately (other dialects)
const sequelize = new Sequelize('toan', 'root', null, {
  host: 'localhost',
  dialect: 'mysql', // Chỉ định cụ thể một trong các giá trị: 'mysql', 'postgres', 'sqlite', 'mariadb', 'mssql', 'db2', 'snowflake', 'oracle'
logging: false
});

let connectDB = async () =>{
    try {
        await sequelize.authenticate();
        console.log('Connection has been established successfully.');
      } catch (error) {
        console.error('Unable to connect to the database:', error);
      }
} 
module.exports = connectDB;