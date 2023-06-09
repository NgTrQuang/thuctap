-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: May 31, 2023 at 04:00 AM
-- Server version: 10.4.28-MariaDB
-- PHP Version: 8.0.28

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `qlcv_dev`
--

-- --------------------------------------------------------

--
-- Table structure for table `congviec`
--

CREATE TABLE `congviec` (
  `MaCongViec` varchar(255) NOT NULL,
  `TenCongViec` varchar(255) NOT NULL,
  `MoTaCongViec` varchar(255) DEFAULT NULL,
  `NgayBatDau` date DEFAULT NULL,
  `NgayKetThuc` date DEFAULT NULL,
  `TrangThai` int(11) DEFAULT NULL,
  `UuTien` int(11) DEFAULT NULL,
  `MaNhomLamViec` varchar(255) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- --------------------------------------------------------

--
-- Table structure for table `duan`
--

CREATE TABLE `duan` (
  `MaDuAn` varchar(255) NOT NULL,
  `TenDuAn` varchar(255) NOT NULL,
  `MoTaDuAn` varchar(255) DEFAULT NULL,
  `NgayBatDau` date DEFAULT NULL,
  `NgayKetThuc` date DEFAULT NULL,
  `TrangThai` int(11) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `duan`
--

INSERT INTO `duan` (`MaDuAn`, `TenDuAn`, `MoTaDuAn`, `NgayBatDau`, `NgayKetThuc`, `TrangThai`) VALUES
('DA001', 'TTTT 2023_DI19A1', 'Thực tập thực tế 2023 lớp DI19A1', '0000-00-00', '0000-00-00', 0),
('DA002', 'TTTT 2023_DI19A2', 'Thực tập thực tế 2023 lớp DI19A2', '0000-00-00', '0000-00-00', 0),
('DA003', 'TTTT 2023_DI19A3', 'Thực tập thực tế 2023 lớp DI19A3', '0000-00-00', '0000-00-00', 0),
('DA004', 'TTTT 2023_DI19A4', 'Thực tập thực tế 2023 lớp DI19A4', '0000-00-00', '0000-00-00', 0),
('DA005', 'TTTT 2023_DI19A5', 'Thực tập thực tế 2023 lớp DI19A5', '0000-00-00', '0000-00-00', 0),
('DA006', 'TTTT 2023_DI19A6', 'Thực tập thực tế 2023 lớp DI19A6', '0000-00-00', '0000-00-00', 0);

-- --------------------------------------------------------

--
-- Table structure for table `loainguoidung`
--

CREATE TABLE `loainguoidung` (
  `MaLoaiNguoiDung` varchar(255) NOT NULL,
  `TenLoaiNguoiDung` varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- --------------------------------------------------------

--
-- Table structure for table `nguoidung`
--

CREATE TABLE `nguoidung` (
  `MaNguoiDung` varchar(255) NOT NULL,
  `HoLot` varchar(255) NOT NULL,
  `Ten` varchar(255) NOT NULL,
  `Email` varchar(255) DEFAULT NULL,
  `DiaChi` varchar(255) DEFAULT NULL,
  `SoDienThoai` varchar(10) DEFAULT NULL,
  `ViTri` varchar(255) DEFAULT NULL,
  `GioiTinh` bit(1) DEFAULT NULL,
  `TrangThai` int(11) DEFAULT NULL,
  `Username` varchar(255) DEFAULT NULL,
  `Password` varchar(255) DEFAULT NULL,
  `MaLoaiNguoiDung` varchar(255) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- --------------------------------------------------------

--
-- Table structure for table `nguoidung_congviec`
--

CREATE TABLE `nguoidung_congviec` (
  `MaND_CV` varchar(255) NOT NULL,
  `MaNguoiDung` varchar(255) DEFAULT NULL,
  `MaCongViec` varchar(255) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- --------------------------------------------------------

--
-- Table structure for table `nhomlamviec`
--

CREATE TABLE `nhomlamviec` (
  `MaNhomLamViec` varchar(255) NOT NULL,
  `TenNhomLamViec` varchar(255) NOT NULL,
  `MoTaNhomLamViec` varchar(255) DEFAULT NULL,
  `MaDuAn` varchar(255) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `nhomlamviec`
--

INSERT INTO `nhomlamviec` (`MaNhomLamViec`, `TenNhomLamViec`, `MoTaNhomLamViec`, `MaDuAn`) VALUES
('N0001', 'Nhóm 1', 'Làm việc nhóm', NULL),
('N0002', 'Nhóm 2', 'Làm việc nhóm', NULL),
('N0003', 'Nhóm 3', 'Làm việc nhóm', NULL),
('N0004', 'Nhóm 4', 'Làm việc nhóm', NULL);

-- --------------------------------------------------------

--
-- Table structure for table `nhomthaoluan`
--

CREATE TABLE `nhomthaoluan` (
  `MaNhomThaoLuan` varchar(255) NOT NULL,
  `TenNhomThaoLuan` varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- --------------------------------------------------------

--
-- Table structure for table `tailieu`
--

CREATE TABLE `tailieu` (
  `MaTaiLieu` varchar(255) NOT NULL,
  `TenTaiLieu` varchar(255) NOT NULL,
  `MaDuAn` varchar(255) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `tailieu`
--

INSERT INTO `tailieu` (`MaTaiLieu`, `TenTaiLieu`, `MaDuAn`) VALUES
('TL001', 'tai-lieu-tham-khao.pdf', 'DA001'),
('TL002', 'tai-lieu-tham-khao.pdf', 'DA002'),
('TL003', 'tai-lieu-tham-khao.pdf', 'DA003'),
('TL004', 'tai-lieu-tham-khao.pdf', 'DA004');

-- --------------------------------------------------------

--
-- Table structure for table `tinnhan`
--

CREATE TABLE `tinnhan` (
  `MaTinNhan` varchar(255) NOT NULL,
  `NoiDung` varchar(255) NOT NULL,
  `NgayTao` varchar(255) DEFAULT NULL,
  `MaNhomThaoLuan` varchar(255) DEFAULT NULL,
  `MaNguoiDung` varchar(255) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Indexes for dumped tables
--

--
-- Indexes for table `congviec`
--
ALTER TABLE `congviec`
  ADD PRIMARY KEY (`MaCongViec`);

--
-- Indexes for table `duan`
--
ALTER TABLE `duan`
  ADD PRIMARY KEY (`MaDuAn`);

--
-- Indexes for table `loainguoidung`
--
ALTER TABLE `loainguoidung`
  ADD PRIMARY KEY (`MaLoaiNguoiDung`);

--
-- Indexes for table `nguoidung`
--
ALTER TABLE `nguoidung`
  ADD PRIMARY KEY (`MaNguoiDung`);

--
-- Indexes for table `nguoidung_congviec`
--
ALTER TABLE `nguoidung_congviec`
  ADD PRIMARY KEY (`MaND_CV`);

--
-- Indexes for table `nhomlamviec`
--
ALTER TABLE `nhomlamviec`
  ADD PRIMARY KEY (`MaNhomLamViec`);

--
-- Indexes for table `nhomthaoluan`
--
ALTER TABLE `nhomthaoluan`
  ADD PRIMARY KEY (`MaNhomThaoLuan`);

--
-- Indexes for table `tailieu`
--
ALTER TABLE `tailieu`
  ADD PRIMARY KEY (`MaTaiLieu`);

--
-- Indexes for table `tinnhan`
--
ALTER TABLE `tinnhan`
  ADD PRIMARY KEY (`MaTinNhan`);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
