const mysql = require('mysql2');

const connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '12345678',
    database: 'nest-demo'
});

connection.query(
  'SELECT * FROM employee WHERE name LIKE ?',['李%'],
  function(err, results, fields) {
    console.log(results);
    console.log(fields.map(item => item.name)); 
  }
);
// promise 版本
// const mysql = require('mysql2/promise');

// (async function() {

//     const connection = await mysql.createConnection({
//         host: 'localhost',
//         port: 3306,
//         user: 'root',
//         password: 'guang',
//         database: 'nest-demo'
//     });

//     const [results, fields] = await connection.query('SELECT * FROM customers');

//     console.log(results);
//     console.log(fields.map(item => item.name)); 

// })();