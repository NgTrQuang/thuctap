import React, { useState, useEffect } from 'react';
import tailieuService from '../service/tailieuService';
import { RiDeleteBin6Line } from 'react-icons/ri';
import { AiOutlineEdit } from 'react-icons/ai';
// import Input from "react-validation/build/input";
import moment from 'moment';

const TaiLieu = () => {
    const [tailieus, setTailieus] = useState([]);
    const [name, setName] = useState('');
    const [file, setFile] = useState(null);

    useEffect(() => {
        fetchTailieus();
    }, []);

    const fetchTailieus = async () => {
        try {
          const response = await tailieuService.getAllTaiLieu();
          setTailieus(response.data);
        } catch (error) {
          console.error(error);
        }
    };

    const createTaiLieu = () => {
      
    }

    // const createTaiLieu = async () => {
    //     try {

    //       //Ký tự 'x' trong định dạng này sẽ trả về giá trị timestamp dưới dạng số nguyên đại diện cho số mili giây kể từ Epoch (1 tháng 1 năm 1970 00:00:00 UTC). Ví dụ, giá trị timestamp 1652801023000 sẽ biểu thị thời gian là 17 tháng 5 năm 2022 10:30:23.
    //       const timestamp = moment().format('x');
    //       const maTL = 'TL' + timestamp;
    //       const response = await tailieuService.createTaiLieu(maTL, name);
          
    //       const tailieuNew = { MaTaiLieu: maTL, TenTaiLieu: response.data.TenTaiLieu }
    //       setTailieus([...tailieus, tailieuNew]);
    //       console.log(response.data.MaTaiLieu);
    //       console.log(tailieuNew);
    //       setName('');
    //     } catch (error) {
    //       console.error(error);
    //     }
    // };
    
    // const deleteProduct = async (productId) => {
    //     try {
    //       await axios.delete(`/api/products/${productId}`);
    //       setProducts(products.filter((product) => product.id !== productId));
    //     } catch (error) {
    //       console.error(error);
    //     }
    // };

    return (
      <div>
        <h2 className="text-center"><b>Tài liệu</b></h2>
        {/* <div className="row">
          <a href="/them">
          <button className="btn btn-primary">
            Thêm mới
          </button>
          </a>
        </div> */}
        <br />
        <table className="table table-striped table-bordered">
          <thead>
            <tr>
              <th>Mã</th>
              <th>Tên file tài liệu</th>
              <th>Dự án phụ thuộc</th>
              <th>Tác vụ</th>
              {/* Add more columns if needed */}
            </tr>
          </thead>
          <tbody>
            {tailieus.map((tailieu) => (
              <tr key={tailieu.MaTaiLieu}>
                <td>{tailieu.MaTaiLieu}</td>
                <td>{tailieu.TenTaiLieu}</td>
                <td>{tailieu.MaDuAn}</td>
                <td>
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
                </td>
                {/* Add more columns if needed */}
              </tr>
            ))}
          </tbody>
        </table>
        <h4><b>Tạo mới</b></h4>
        <input className="form-control" style={{width: '400px', marginBottom: '15px'}} type="text" placeholder="Tên" value={name} onChange={(e) => setName(e.target.value)} />
        <button className="btn btn-primary" onClick={createTaiLieu}>Thêm mới</button>
      </div>
        // <div>
        //   <h2>TaiLieu List</h2>
        //   <ul>
        //     {tailieus.map((tailieu) => (
        //       <li key={tailieu.MaTaiLieu}>
        //         {tailieu.TenTaiLieu} - ${tailieu.MaDuAn}
        //         {/* <button onClick={() => deleteProduct(tailieu.id)}>Delete</button> */}
        //       </li>
        //     ))}
        //   </ul>
        //   {/* <h2>Create Product</h2>
        //   <input type="text" placeholder="Name" value={name} onChange={(e) => setName(e.target.value)} />
        //   <input type="text" placeholder="Price" value={price} onChange={(e) => setPrice(e.target.value)} />
        //   <button onClick={createProduct}>Create</button> */}
        // </div>
    );
}

export default TaiLieu;