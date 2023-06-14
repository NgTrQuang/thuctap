const connectDatabase = require('./config/config.js');
const bodyParser = require('body-parser');
const cors = require('cors');
// lấy ngày giờ
const moment = require('moment');
// upload file
const multer = require('multer');
const express = require("express");
const port = 8000;
const connection = connectDatabase();
const app = express();
const routes = require('./routes');

// Sử dụng middleware để phân tích cú pháp các yêu cầu có thân (request body) chuyển dữ liệu json
app.use(bodyParser.json());

// Sử dụng middleware cho CORS
app.use(cors());
// Sử dụng routes để origin đường dẫn tránh việc để trước cros để hạn chế việc trình duyệt yêu cầu truy cập
app.use(routes);

// upload và đổi tên phù hợp lưu ở thư mục gốc
const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, 'public/file/'); // Đường dẫn thư mục đích
  },
  filename: function (req, file, cb) {
    cb(null, file.originalname); // Sử dụng tên ban đầu của file làm tên file lưu trữ
  }
});

const upload = multer({ storage: storage });
// Thực hiện truy vấn SQL
connection.query('SELECT * FROM tailieu', (err, results) => {
    if (err) {
      console.error('Lỗi truy vấn: ', err);
      return;
    }
    console.log('Dữ liệu từ truy vấn: ', results);
});
// xử lý file với tailieu
// Endpoint thêm tài liệu
// app.post('/api/tailieu', upload.single('file'), (req, res) => {
//   const { originalname } = req.file;
//   const timestamp = moment().format('x');
//   const MaTaiLieu = 'TL' + timestamp;
//   // const { MaTaiLieu } = req.body;
//   // Lưu thông tin tài liệu vào cơ sở dữ liệu
//   const query = 'INSERT INTO tailieu (MaTaiLieu, TenTaiLieu) VALUES (?, ?)';
//   connection.query(query, [MaTaiLieu, originalname], (error, results) => {
//     if (error) {
//       console.error('Lỗi truy vấn: ', error);
//       res.status(500).json({ error: 'Lỗi truy vấn cơ sở dữ liệu.' });
//     } else {
//       res.json({ message: 'Thêm tài liệu thành công.' });
//     }
//   });
// });

// Endpoint lấy thông tin tất cả tài liệu
// app.get('/api/tailieu', (req, res) => {
//   const query = 'SELECT * FROM tailieu';
//   connection.query(query, (error, results) => {
//     if (error) {
//       console.error('Lỗi truy vấn: ', error);
//       res.status(500).json({ error: 'Lỗi truy vấn cơ sở dữ liệu.' });
//     } else {
//       res.json(results);
//     }
//   });
// });

// Chỉnh sửa tài liệu
// app.put('/api/tailieu/:id', (req, res) => {
//   const MaTaiLieu = req.params.id;
//   const { originalname } = req.file;
//   // const TenTaiLieu = req.body.TenTaiLieu;
//   connection.query('UPDATE tailieu SET TenTaiLieu = ? WHERE MaTaiLieu = ?', [TenTaiLieu, MaTaiLieu], (error) => {
//     if (error) throw error;
//     res.json({ MaTaiLieu, TenTaiLieu });
//   });
// });

// Endpoint xóa tài liệu
// app.delete('/api/tailieu/:id', (req, res) => {
//   const id = req.params.id;
//   const query = 'DELETE FROM tailieu WHERE MaTaiLieu = ?';
//   connection.query(query, [id], (error, results) => {
//     if (error) {
//       console.error('Lỗi truy vấn: ', error);
//       res.status(500).json({ error: 'Lỗi truy vấn cơ sở dữ liệu.' });
//     } else if (results.affectedRows === 0) {
//       res.status(404).json({ error: 'Không tìm thấy tài liệu.' });
//     } else {
//       res.json({ message: 'Xóa tài liệu thành công.' });
//     }
//   });
// });

//

// Định tuyến api
// Danh sách tài liệu
// app.get('/api/tailieu', (req, res) => {
//     connection.query('SELECT * FROM tailieu', (err, results) => {
//         if (err) {
//           console.error('Lỗi truy vấn: ', err.stack);
//           return res.status(500).json({ error : 'Lỗi truy vấn cơ sở dữ liệu'});
//         }
//         res.json(results);
//     });
// });
// Thử với tên là string không phải file name
// Tài liệu mới
// app.post('/api/tailieu', (req, res) => {
//   // const { MaTaiLieu, TenTaiLieu } = req.body; // Sử dụng destructuring để trích xuất giá trị từ req.body
//   const { MaTaiLieu } = req.body;
//   const { TenTaiLieu } = req.body;
//   // console.log(MaTaiLieu);
//   // console.log(TenTaiLieu);
//   if(TenTaiLieu){
//     connection.query('INSERT INTO tailieu (MaTaiLieu, TenTaiLieu) VALUES (?, ?);', [MaTaiLieu, TenTaiLieu], (error, result) => {
//       if (error) throw error;
//       res.json({ MaTaiLieu, TenTaiLieu });
//     });
//   } else {
//   res.status(400).json({ error: 'Giá trị TenTaiLieu không được để trống.' });
//   }
// });
// Chỉnh sửa tài liệu
// app.put('/api/tailieu/:id', (req, res) => {
//   const MaTaiLieu = req.params.id;
//   const TenTaiLieu = req.body.TenTaiLieu;
//   connection.query('UPDATE tailieu SET TenTaiLieu = ? WHERE MaTaiLieu = ?', [TenTaiLieu, MaTaiLieu], (error) => {
//     if (error) throw error;
//     res.json({ MaTaiLieu, TenTaiLieu });
//   });
// });

// Xóa tài liệu
// app.delete('/api/tailieu/:id', (req, res) => {
//   const MaTaiLieu = req.params.id;
//   connection.query('DELETE FROM tailieu WHERE MaTaiLieu = ?', [MaTaiLieu], (error, result) => {
//     if (error) throw error;
//     res.json({ message: 'Xóa tài liệu thành công' });
//   });
// });

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
  
// Báo cáo thống kê
// Thống kê công việc

// const trangThaiCVMapping = {
//   0: "Chưa bắt đầu",
//   1: "Trạng thái 1",
//   2: "Trạng thái 2",
//   3: "Trạng thái 3",
//   4: "Trạng thái 4",
//   5: "Trạng thái 5",
// };
// app.get('/api/congviec/thongke', (req, res) => {
//   const query = 'SELECT TrangThai, COUNT(*) as SoLuong FROM congviec GROUP BY TrangThai';
//   connection.query(query, (error, results) => {
//     if (error) {
//       console.error('Lỗi truy vấn: ', error);
//       res.status(500).json({ error: 'Lỗi truy vấn cơ sở dữ liệu.' });
//     } else {
//       const transformedResults = results.map(item => ({
//         ... item,
//         TrangThai: trangThaiCVMapping[item.TrangThai]
//       }));
//       res.json(transformedResults);
//     }
//   });
// });

// // Thống kê theo độ ưu tiên
// // http://localhost:8000/api/congviec/uutien/thongke
// const uuTienMapping = {
//   1: "Ưu tiên 1",
//   2: "Ưu tiên 2",
//   3: "Ưu tiên 3",
//   4: "Ưu tiên 4",
//   5: "Ưu tiên 5",
// };

// app.get('/api/congviec/uutien/thongke', (req, res) => {
//   const query = 'SELECT UuTien, COUNT(*) as SoLuong FROM congviec GROUP BY UuTien';
//   connection.query(query, (error, results) => {
//     if (error) {
//       console.error('Lỗi truy vấn: ', error);
//       res.status(500).json({ error: 'Lỗi truy vấn cơ sở dữ liệu.' });
//     } else {
//       const transformedResults = results.map(item => ({
//         ... item,
//         UuTien: uuTienMapping[item.UuTien]
//       }));
//       res.json(transformedResults);
//     }
//   });
// });
// // Thống kê người thực hiện công việc
// // Số lượng công việc được giao cho từng người theo trạng thái công việc

// app.get('/api/nguoidung_congviec/thongke', (req, res) => {
//   const query = `
//     SELECT congviec.TrangThai, COUNT(*) as SoLuong
//     FROM nguoidung_congviec
//     INNER JOIN congviec ON nguoidung_congviec.MaCongViec = congviec.MaCongViec
//     GROUP BY congviec.TrangThai
//   `;
//   connection.query(query, (error, results) => {
//     if (error) {
//       console.error('Lỗi truy vấn: ', error);
//       res.status(500).json({ error: 'Lỗi truy vấn cơ sở dữ liệu.' });
//     } else {
//       // res.json(results);
//       const transformedResults = results.map(item => ({
//         ... item,
//         TrangThai: trangThaiCVMapping[item.TrangThai]
//       }));
//       res.json(transformedResults);
//     }
//   });
// });

// // Số lượng công việc trong tháng hiện tại của người dùng đó

// app.get('/api/nguoidung_congviec/trongthang/thongke', (req, res) => {
//     const query = `
//     SELECT
//     nguoidung.MaNguoiDung,
//     nguoidung.HoLot,
//     nguoidung.Ten,
//     COUNT(*) AS SoLuongCongViec
//   FROM
//     nguoidung
//     INNER JOIN nguoidung_congviec ON nguoidung.MaNguoiDung = nguoidung_congviec.MaNguoiDung
//     INNER JOIN congviec ON nguoidung_congviec.MaCongViec = congviec.MaCongViec
//   WHERE
//     (MONTH(congviec.NgayBatDau) <= MONTH(CURRENT_DATE())
//     AND MONTH(congviec.NgayKetThuc) >= MONTH(CURRENT_DATE()))
//   GROUP BY
//     nguoidung.MaNguoiDung,
//     nguoidung.HoLot,
//     nguoidung.Ten;
//     `;
//   connection.query(query, (error, results) => {
//     if (error) {
//       console.error('Lỗi truy vấn: ', error);
//       res.status(500).json({ error: 'Lỗi truy vấn cơ sở dữ liệu.' });
//     } else {
//       res.json(results);
//         // const transformedResults = results.map(item => ({
//         //   ... item,
//         //   TrangThai: trangThaiCVMapping[item.TrangThai]
//         // }));
//         // res.json(transformedResults);
//     }
//   });
// });
// // Số lượng công việc đã hoàn thành của từng người.

// // Số lượng công việc đang tiến hành của từng người.

// // Thống kê người dùng
// app.get('/api/nguoidung/thongke', (req, res) => {
//   const query = 'SELECT GioiTinh, COUNT(*) as SoLuong FROM nguoidung GROUP BY GioiTinh';
//   connection.query(query, (error, results) => {
//     if (error) {
//       console.error('Lỗi truy vấn: ', error);
//       res.status(500).json({ error: 'Lỗi truy vấn cơ sở dữ liệu.' });
//     } else {
//       res.json(results);
//     }
//   });
// });

// // Thống kê dự án
// const trangThaiMapping = {
//   0: "Bắt đầu",
//   1: "Giai đoạn 1",
//   2: "Giai đoạn 2",
//   3: "Giai đoạn 3",
//   4: "Giai đoạn 4",
//   5: "Hoàn thành",
// };

// app.get('/api/duan/thongke', (req, res) => {
//   const query = 'SELECT TrangThai, COUNT(*) as SoLuong FROM duan GROUP BY TrangThai';
//   connection.query(query, (error, results) => {
//     if (error) {
//       console.error('Lỗi truy vấn: ', error);
//       res.status(500).json({ error: 'Lỗi truy vấn cơ sở dữ liệu.' });
//     } else {
//       const transformedResults = results.map(item => ({
//         ... item,
//         TrangThai: trangThaiMapping[item.TrangThai]
//       }));
//       res.json(transformedResults);
//     }
//   });
// });
// Thêm dữ liệu
// Thêm dữ liệu dự án
// function themDuLieuDuAn() {
//   for (let i = 0; i < 1000; i++) {
//     const maDuAn = moment().format('DDMMYYYYHHmmss')+ ''+Math.floor(Math.random() * 10000000);
//     const tenDuAn = 'Viết full-stack với ReactJS và NodeJS - ' + i;
//     const moTaDuAn = 'Viết full-stack cho dự án thực tập thực tế học kì hè năm 2022-2023 - ' +i;
//     const ngayBatDau = moment(Date.now()).format("YYYY-MM-DD");
//     const ngayKetThuc = moment(Date.now()).add(60, 'days').format("YYYY-MM-DD");
//     const trangThai = 1;

//     const query = `INSERT INTO duan (MaDuAn, TenDuAn, MoTaDuAn, NgayBatDau, NgayKetThuc, TrangThai) VALUES (?, ?, ?, ?, ?, ?)`;
//     const values = [maDuAn, tenDuAn, moTaDuAn, ngayBatDau, ngayKetThuc, trangThai];

//     connection.query(query, values, (error, results) => {
//       if (error) {
//         console.error(error);
//       } else {
//         console.log('Thêm công việc thành công');
//       }
//     });
//   }
// }
// themDuLieuDuAn();

// Thêm dữ liệu người dùng
// function themDuLieuNguoiDung() {
//   for (let i = 0; i < 1000; i++) {
//     const maNguoiDung = moment().format('DDMMYYYYHHmmss')+ ''+Math.floor(Math.random() * 10000000);
//     const hoLotNguoiDung = 'Nguyễn Văn ' + i;
//     const tenNguoiDung = 'A ' +i;
//     const emailNguoiDung = i+'nguyenvana@gmail.com';
//     const diaChiNguoiDung = 'khóm nhà chồi, nhà lá không lầu huyện đâu đó đó'+i
//     const temp = 093647000 + i;
//     const sdt = temp.toString();
//     const viTri = 1;
//     const gioiTinh = 1;
//     const trangThai = 1;
//     const username = 'nguoidung'+i;
//     const password = 'nguoidung'+i;

//     const query = `INSERT INTO nguoidung (MaNguoiDung, HoLot, Ten, Email, DiaChi, SoDienThoai, ViTri, GioiTinh, TrangThai, Username, Password) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)`;
//     const values = [maNguoiDung, hoLotNguoiDung, tenNguoiDung, emailNguoiDung, diaChiNguoiDung, sdt, viTri, gioiTinh, trangThai, username, password];

//     connection.query(query, values, (error, results) => {
//       if (error) {
//         console.error(error);
//       } else {
//         console.log('Thêm người dùng thành công');
//       }
//     });
//   }
// }
// themDuLieuNguoiDung();

// Thêm công việc
// function themCongViec() {
//   for (let i = 0; i < 1000; i++) {
//     const maCongViec = moment().format('DDMMYYYYHHmmss') + '' + Math.floor(Math.random() * 10000000);
//     const tenCongViec = 'Công việc ' + i;
//     const moTaCongViec = 'Mô tả công việc ' + i;
//     const ngayBatDau = moment().format('YYYY-MM-DD');
//     const ngayKetThuc = moment().add(i, 'days').format('YYYY-MM-DD');
//     const trangThai = 1;
//     const uuTien = Math.floor(Math.random() * 3) + 1; // Giá trị từ 1 đến 3
//     const maNhomLamViec = 'Nhom' + i;

//     const query = `INSERT INTO congviec (MaCongViec, TenCongViec, MoTaCongViec, NgayBatDau, NgayKetThuc, TrangThai, UuTien, MaNhomLamViec) VALUES (?, ?, ?, ?, ?, ?, ?, ?)`;
//     const values = [maCongViec, tenCongViec, moTaCongViec, ngayBatDau, ngayKetThuc, trangThai, uuTien, maNhomLamViec];

//     connection.query(query, values, (error, results) => {
//       if (error) {
//         console.error(error);
//       } else {
//         console.log('Thêm công việc thành công');
//       }
//     });
//   }
// }
// themCongViec();

// Đóng kết nối MySQL khi đã hoàn tất
// connection.end();
  