import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';

const Home = () => {
  return (
    <Navbar variant="dark" bg="dark" expand="lg">
    <Container fluid>
      <Navbar.Brand href="#home">React-Bootstrap</Navbar.Brand>
      <Navbar.Toggle aria-controls="navbar-dark-example" />
      <Navbar.Collapse id="navbar-dark-example">
        <Nav>
          <NavDropdown
            id="nav-dropdown-dark-example"
            title="Tài liệu"
            menuVariant="dark"
          >
            <NavDropdown.Item href="/tailieu">Danh sách tài liệu</NavDropdown.Item>
            <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
            <NavDropdown.Divider />
            <NavDropdown.Item href="#action/3.4">
              Separated link
            </NavDropdown.Item>
          </NavDropdown>
          <NavDropdown
            id="nav-dropdown-dark-example"
            title="Dự án"
            menuVariant="dark"
          >
            <NavDropdown.Item href="/duan">Danh sách dự án</NavDropdown.Item>
            <NavDropdown.Item href="/thongke/duan">Thống kê dự án</NavDropdown.Item>
            <NavDropdown.Divider />
            <NavDropdown.Item href="#action/3.4">
              Separated link
            </NavDropdown.Item>
          </NavDropdown>
          <NavDropdown
            id="nav-dropdown-dark-example"
            title="Người dùng"
            menuVariant="dark"
          >
            <NavDropdown.Item href="/nguoidung">Danh sách người dùng</NavDropdown.Item>
            <NavDropdown.Item href="/thongke/nguoidung">Thống kê người dùng</NavDropdown.Item>
            <NavDropdown.Divider />
            <NavDropdown.Item href="#action/3.4">
              Separated link
            </NavDropdown.Item>
          </NavDropdown>
          <NavDropdown
            id="nav-dropdown-dark-example"
            title="Công việc"
            menuVariant="dark"
          >
            <NavDropdown.Item href="/congviec">Danh sách công việc</NavDropdown.Item>
            <NavDropdown.Item href="/thongke/congviec">Thống kê công việc</NavDropdown.Item>
            <NavDropdown.Divider />
            <NavDropdown.Item href="#action/3.4">
              Separated link
            </NavDropdown.Item>
          </NavDropdown>
        </Nav>
      </Navbar.Collapse>
    </Container>
  </Navbar>
  );
}

export default Home;