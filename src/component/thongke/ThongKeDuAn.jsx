import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Bar } from 'react-chartjs-2';
import { Pie } from 'react-chartjs-2';
// import Chart giúp chọn phiên bản phù hợp với react-chartjs-2 bởi auto
import Chart from "chart.js/auto";
import 'chartjs-plugin-annotation';

const ThongKeDuAn = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetchDataDuAn();
  }, []);

  const fetchDataDuAn = async () => {
    try {
      const response = await axios.get('http://localhost:8000/api/duan/thongke');
      setData(response.data);
    //   console.log(response.data)
    } catch (error) {
      console.error('Lỗi truy vấn: ', error);
    }
  };

// console.log(data);

  const labels = data.map(item => item.TrangThai);
  const values = data.map(item => item.SoLuong);
// Bar
  const chartDataBar = {
    labels: labels,
    datasets: [
      {
        label: 'Số lượng dự án',
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

  return (
    <div>
      <h2>Thống kê số lượng dự án theo trạng thái</h2>
      <div style={{ display: 'flex', flexDirection: 'row' }}>
        <div style={{ width: '50%' }}>
            <Bar data={chartDataBar} options={optionsBar}/>
        </div>
        <div style={{ width: '50%' }}>
            <Pie data={chartDataPie} options={optionsPie} />
        </div>
      </div>
    </div>
  );
};

export default ThongKeDuAn;