
// import Fragment from 'react';
import './App.css';
import { BrowserRouter as Router, Routes, Route} from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import Home from './layout/Home';
import TaiLieu from './component/TaiLieu';
import ThongKeCongViec from './component/thongke/ThongKeCongViec';
import ThongKeNguoiDung from './component/thongke/ThongKeNguoiDung';
import ThongKeDuAn from './component/thongke/ThongKeDuAn';

const App = () => {
  return (
    // <div className="App">
      
    // </div>
    <>
      <div className="container mt-3">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/tailieu" element={<TaiLieu/>}/>
          <Route path="/thongke/congviec" element={<ThongKeCongViec/>}/>
          <Route path="/thongke/nguoidung" element={<ThongKeNguoiDung/>}/>
          <Route path="/thongke/duan" element={<ThongKeDuAn/>}/>
        
        </Routes>
      </div>
    </>
  );
}

export default App;
