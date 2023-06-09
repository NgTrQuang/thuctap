import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Bar } from 'react-chartjs-2';
// import Chart giúp chọn phiên bản phù hợp với react-chartjs-2 bởi auto
import Chart from "chart.js/auto";
import 'chartjs-plugin-annotation';

const ThongKeCongViec = () => {
  const [data, setData] = useState([]);
  const [dataUuTien, setDataUuTien] = useState([]);

// biểu đồ bởi trạng thái
  useEffect(() => {
    fetchDataCV();
  }, []);

  const fetchDataCV = async () => {
    try {
      const response = await axios.get('http://localhost:8000/api/congviec/thongke');
      setData(response.data);
    } catch (error) {
      console.error('Lỗi truy vấn: ', error);
    }
  };

  const labels = data.map(item => item.TrangThai);
  const values = data.map(item => item.SoLuong);

  const chartData = {
    labels: labels,
    datasets: [
      {
        label: 'Số lượng công việc',
        data: values,
        backgroundColor: 'rgba(75, 192, 192, 0.6)',
        borderColor: 'rgba(75, 192, 192, 1)',
        borderWidth: 1,
      },
    ],
  };

  const options = {
    scales: {
      x: {
        type: 'category', // Sử dụng scale 'category' cho trục x
      },
    },
  };

// Biểu đồ độ ưu tiên
useEffect(() => {
  fetchDataCVUuTien();
}, []);

const fetchDataCVUuTien = async () => {
  try {
    const response = await axios.get('http://localhost:8000/api/congviec/uutien/thongke');
    setDataUuTien(response.data);
  } catch (error) {
    console.error('Lỗi truy vấn: ', error);
  }
};

const labelsUuTien = dataUuTien.map(item => item.UuTien);
const valuesUuTien = dataUuTien.map(item => item.SoLuong);

const chartDataUuTien = {
  labels: labelsUuTien,
  datasets: [
    {
      label: 'Số lượng công việc',
      data: valuesUuTien,
      backgroundColor: 'rgba(75, 192, 192, 0.6)',
      borderColor: 'rgba(75, 192, 192, 1)',
      borderWidth: 1,
    },
  ],
};

const optionsUuTien = {
  scales: {
    x: {
      type: 'category', // Sử dụng scale 'category' cho trục x
    },
  },
};

  return (
    <div>
      <h2>Thống kê số lượng công việc theo trạng thái</h2>
      <Bar data={chartData} options={options}/>
      <h2>Thống kê số lượng công việc theo độ ưu tiên</h2>
      <Bar data={chartDataUuTien} options={optionsUuTien}/>
    </div>
  );
};

export default ThongKeCongViec;