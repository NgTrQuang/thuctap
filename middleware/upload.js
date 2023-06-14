const multer = require('multer');

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, 'public/file/'); // Đường dẫn thư mục đích
  },
  filename: function (req, file, cb) {
    cb(null, file.originalname); // Sử dụng tên ban đầu của file làm tên file lưu trữ
  }
});

const upload = multer({ storage: storage });

module.exports = upload;