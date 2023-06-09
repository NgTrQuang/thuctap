import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Bar } from 'react-chartjs-2';
import { Pie } from 'react-chartjs-2';

// import Chart giúp chọn phiên bản phù hợp với react-chartjs-2 bởi auto
import Chart from "chart.js/auto";
import 'chartjs-plugin-annotation';

const ThongKeNguoiDung = () => {
  const [data, setData] = useState([]);
  const [dataNDCV, setDataNDCV] = useState([]);
  const [dataNDCVTrongThang, setDataNDCVTrongThang] = useState([]);

  useEffect(() => {
    fetchDataNguoiDung();
  }, []);

  const fetchDataNguoiDung = async () => {
    try {
      const response = await axios.get('http://localhost:8000/api/nguoidung/thongke');
      
      setData(response.data);
    } catch (error) {
      console.error('Lỗi truy vấn: ', error);
    }
  };

  const labels = data.map(item => item.GioiTinh.data.toString() === '1' ? 'Nam' : 'Nữ');
  const values = data.map(item => item.SoLuong);

// Bar
  const chartDataBar = {
    labels: labels,
    datasets: [
      {
        label: 'Số lượng người dùng',
        data: values,
        backgroundColor: 'rgba(75, 192, 192, 0.6)',
        borderColor: 'rgba(75, 192, 192, 1)',
        borderWidth: 1,
      },
    ],
  };

  const optionsBar = {
    scales: {
      x: {
        type: 'category', // Sử dụng scale 'category' cho trục x
      },
    },
  };

// Pie
const chartDataPie = {
  labels: labels,
  datasets: [
    {
      label: 'Số lượng dự án',
      data: values,
      backgroundColor: [
        'rgba(75, 192, 192, 0.6)',
        'rgba(192, 75, 75, 0.6)',
        'rgba(75, 192, 75, 0.6)',
        'rgba(192, 192, 75, 0.6)',
        'rgba(75, 75, 192, 0.6)',
        'rgba(192, 75, 192, 0.6)',
      ],
      borderColor: 'rgba(0, 0, 0, 0.6)',
      borderWidth: 1,
    },
  ],
};

const optionsPie = {
  plugins: {
    legend: {
      position: 'bottom',
    },
  },
};

// Số lượng công việc của người dùng với trạng thái công việc
useEffect(() => {
  fetchDataNguoiDungCV();
}, []);

const fetchDataNguoiDungCV = async () => {
  try {
    const response = await axios.get('http://localhost:8000/api/nguoidung_congviec/thongke');
    
    setDataNDCV(response.data);
  } catch (error) {
    console.error('Lỗi truy vấn: ', error);
  }
};

const labelsNDCV = dataNDCV.map(item => item.TrangThai);
const valuesNDCV = dataNDCV.map(item => item.SoLuong);

// Bar
const chartDataBarNDCV = {
  labels: labelsNDCV,
  datasets: [
    {
      label: 'Số lượng người dùng',
      data: valuesNDCV,
      backgroundColor: 'rgba(75, 192, 192, 0.6)',
      borderColor: 'rgba(75, 192, 192, 1)',
      borderWidth: 1,
    },
  ],
};

const optionsBarNDCV = {
  scales: {
    x: {
      type: 'category', // Sử dụng scale 'category' cho trục x
    },
  },
};

// số lượng công việc của người dùng trong tháng hiện tại
useEffect(() => {
  fetchDataNguoiDungCVTrongThang();
}, []);

const fetchDataNguoiDungCVTrongThang = async () => {
  try {
    const response = await axios.get('http://localhost:8000/api/nguoidung_congviec/trongthang/thongke');
    
    setDataNDCVTrongThang(response.data);
  } catch (error) {
    console.error('Lỗi truy vấn: ', error);
  }
};

const labelsNDCVTrongThang = dataNDCVTrongThang.map(item => item.HoLot+item.Ten);
const valuesNDCVTrongThang = dataNDCVTrongThang.map(item => item.SoLuongCongViec);

// Bar
const chartDataBarNDCVTrongThang = {
  labels: labelsNDCVTrongThang,
  datasets: [
    {
      label: 'Số lượng công việc',
      data: valuesNDCVTrongThang,
      backgroundColor: 'rgba(75, 192, 192, 0.6)',
      borderColor: 'rgba(75, 192, 192, 1)',
      borderWidth: 1,
    },
  ],
};

const optionsBarNDCVTrongThang = {
  scales: {
    x: {
      type: 'category', // Sử dụng scale 'category' cho trục x
    },
  },
};

  return (
    <div style={{marginBottom: '100px', marginTop: '50px'}}>
      <h2>Thống kê số lượng người dùng theo giới tính</h2>
      <div style={{ display: 'flex', flexDirection: 'row' }}>
        <div style={{ width: '50%' }}>
            <Bar data={chartDataBar} options={optionsBar}/>
        </div>
        <div style={{ width: '50%' }}>
            <Pie data={chartDataPie} options={optionsPie} />
        </div>
      </div>
      <h2>Thống kê số lượng công việc của người dùng</h2>
      <div style={{ width: '50%' }}>
            <Bar data={chartDataBarNDCV} options={optionsBarNDCV}/>
      </div>
      <h2>Thống kê số lượng công việc của người dùng trong tháng</h2>
      <div style={{ width: '50%' }}>
            <Bar data={chartDataBarNDCVTrongThang} options={optionsBarNDCVTrongThang}/>
      </div>
      <table className="table table-striped table-bordered">
          <thead>
            <tr>
              <th>Mã người dùng</th>
              <th>Họ lót</th>
              <th>Tên</th>
              <th>Số lượng công việc</th>
              {/* Add more columns if needed */}
            </tr>
          </thead>
          <tbody>
            {dataNDCVTrongThang.map((item) => (
              <tr key={item.MaNguoiDung}>
                <td>{item.MaNguoiDung}</td>
                <td>{item.HoLot}</td>
                <td>{item.Ten}</td>
                <td>{item.SoLuongCongViec}</td>
                {/* <td>
                  <button
                      className="btn btn-info"
                    >
                      <AiOutlineEdit/>
                    </button>
                    <button
                      style={{ marginLeft: "10px" }}
                      className="btn btn-danger"
                    >
                      <RiDeleteBin6Line/>
                    </button>
                </td> */}
                {/* Add more columns if needed */}
              </tr>
            ))}
          </tbody>
        </table>
    </div>
  );
};

export default ThongKeNguoiDung;