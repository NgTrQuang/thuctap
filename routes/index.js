// nguoidung.route.js

const express = require("express");
const router = express.Router();
const thongkeController = require('../controllers/thongke/index.js');
const tailieuController = require('../controllers/tailieu/index.js');
const nguoidungController = require('../controllers/nguoidung/index.js');
const upload = require('../middleware/upload.js');

// Thống kê
router.get('/api/congviec/thongke', thongkeController.getTKCongViecTrangThai);
router.get('/api/congviec/uutien/thongke', thongkeController.getTKCongViecUuTien);
router.get('/api/nguoidung_congviec/thongke', thongkeController.getTKNDCongViecUuTien);
router.get('/api/nguoidung_congviec/trongthang/thongke', thongkeController.getTKNDCongViecTrongThang);

router.get('/api/nguoidung/thongke', thongkeController.getTKNguoiDung);

router.get('/api/duan/thongke', thongkeController.getTKDuAn);

// Người dùng

router.get('/api/nguoidung', nguoidungController.getAllNguoiDung);
router.put('/api/nguoidung/:id', nguoidungController.putNguoiDung);
router.post('/api/nguoidung', nguoidungController.postNguoiDung);
router.delete('/api/nguoidung/:id', nguoidungController.deleteNguoiDung);
router.get('/api/nguoidung/search', nguoidungController.searchNguoiDung);



// Tài liệu
router.get('/api/tailieu', tailieuController.getAllTailieu);
router.post('/api/tailieu', upload.single('file'), tailieuController.postTaiLieu);
router.put('/api/tailieu/:id', upload.single('file'), tailieuController.putTaiLieu);

router.delete('/api/tailieu/:id', tailieuController.deleteTailieu);

module.exports = router;