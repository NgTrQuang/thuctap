const mysql = require('mysql2');

function connectDatabase() {
    const connection = mysql.createConnection({
        host: 'localhost',
        user: 'root',
        password: '',
        database: 'qlcv_dev'
    });

    // const connection = mysql.createConnection({
    //   host: '113.176.87.55',
    //   port: '12723',
    //   user: 'root',
    //   password: '',
    //   database: ''
    // });

    // Kết nối đến cơ sở dữ liệu
    // connection.connect((err) => {
    // if (err) {
    //   console.error('Lỗi kết nối cơ sở dữ liệu: ', err.stack);
    //   return;
    // }
    // console.log('Đã kết nối thành công đến cơ sở dữ liệu MySQL!' + connection.threadId);
    // });

    return connection;
}

module.exports = connectDatabase;