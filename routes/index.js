// nguoidung.route.js

const express = require("express");
const router = express.Router();
const thongkeController = require('../controllers/thongke/index.js');

// Thống kê
router.get('/api/congviec/thongke', thongkeController.getTKCongViecTrangThai);
router.get('/api/congviec/uutien/thongke', thongkeController.getTKCongViecUuTien);
router.get('/api/nguoidung_congviec/thongke', thongkeController.getTKNDCongViecUuTien);
router.get('/api/nguoidung_congviec/trongthang/thongke', thongkeController.getTKNDCongViecTrongThang);

router.get('/api/nguoidung/thongke', thongkeController.getTKNguoiDung);

router.get('/api/duan/thongke', thongkeController.getTKDuAn);


module.exports = router;