const { query } = require('express');
const connectDatabase = require('../../config/config.js');
const connection = connectDatabase();
const moment = require('moment');

// Lấy toàn bộ tài liệu
const getAllTailieu = (req, res) => {
    const query = 'SELECT * FROM tailieu';
    connection.query(query, (error, results) => {
        if (error) {
            console.error('Lỗi truy vấn: ', error);
            res.status(500).json({ error: 'Lỗi truy vấn cơ sở dữ liệu.' });
        } else 
        {
            res.json(results);
        }
    });
}

// Thêm tài liệu
const postTaiLieu = (req, res) => {
    const { originalname } = req.file;
    const timestamp = moment().format('x');
    const MaTaiLieu = 'TL' + timestamp;
    // const { MaTaiLieu } = req.body;
    // Lưu thông tin tài liệu vào cơ sở dữ liệu
    const query = 'INSERT INTO tailieu (MaTaiLieu, TenTaiLieu) VALUES (?, ?)';
    connection.query(query, [MaTaiLieu, originalname], (error, results) => {
        if (error) {
            console.error('Lỗi truy vấn: ', error);
            res.status(500).json({ error: 'Lỗi truy vấn cơ sở dữ liệu.' });
        } else {
            res.json({ message: 'Thêm tài liệu thành công.' });
        }
    });
}

// Chỉnh sửa tài liệu
const putTaiLieu = (req, res) => {
    const MaTaiLieu = req.params.id;
    const { originalname } = req.file;
    // const TenTaiLieu = req.body.TenTaiLieu;
    const query = 'UPDATE tailieu SET TenTaiLieu = ? WHERE MaTaiLieu = ?'
    connection.query(query, [originalname, MaTaiLieu], (error) => {
        if (error) throw error;
        res.json({message: 'Sửa tài liệu thành công.'});
    });
}

// Xóa tài liệu
const deleteTailieu = (req, res) => {
    const id = req.params.id;
    const query = 'DELETE FROM tailieu WHERE MaTaiLieu = ?';
    connection.query(query, [id], (error, results) => {
        if (error) {
            console.error('Lỗi truy vấn: ', error);
            res.status(500).json({ error: 'Lỗi truy vấn cơ sở dữ liệu.' });
        } else if (results.affectedRows === 0) {
            res.status(404).json({ error: 'Không tìm thấy tài liệu.' });
        } else {
            res.json({ message: 'Xóa tài liệu thành công.' });
        }
    });
}

module.exports = {
    getAllTailieu,
    postTaiLieu,
    putTaiLieu,
    deleteTailieu,
};