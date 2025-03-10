const mysql=require('mysql2');
const ConnectionString='mysql://peppiuser:peppipass@127.0.0.1:3306/peppidb';
const connection=mysql.createPool(ConnectionString);

module.exports=connection;