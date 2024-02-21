// import Container from 'react-bootstrap/Container';
// import Nav from 'react-bootstrap/Nav';
// import Navbar from 'react-bootstrap/Navbar';
// import { Link } from 'react-router-dom';
// function Header() {
//   return (
//     <div className="navbar">
//     <Navbar className="bg-dark" variant="dark" expand="lg">
//       <Container>
//         <Navbar.Brand  className={"nav-icon"} href="/">LuxeCart</Navbar.Brand>
//         <Navbar.Toggle aria-controls="basic-navbar-nav" />
//         <Navbar.Collapse id="basic-navbar-nav">
//           <Nav className="me-auto">
//           <Nav.Link className={"text-white"}> <Link style={{textDecoration: 'none'}} className={"text-white"} to={"/"}>Home </Link> </Nav.Link>
//           <Nav.Link className={"text-white"}> <Link style={{ textDecoration: 'none' }} className="text-white" to="/about">About</Link></Nav.Link>
//           <Nav.Link className={"text-white"}> <Link style={{textDecoration: 'none'}} className={"text-white"} to={"/products"}> Products </Link></Nav.Link>
//           <Nav.Link className={"text-white"}> <Link style={{textDecoration: 'none'}} className={"text-white"} to={"/Footer"}> Contact Us </Link></Nav.Link>
            
//           </Nav>
//         </Navbar.Collapse>
//       </Container>
//     </Navbar>
//     </div>
//   );
// }

// export default Header;
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link } from 'react-router-dom';

function Header() {
  return (
    <div className="navbar">
      <Navbar className="bg-dark" variant="dark" expand="lg">
        <Container>
          <Navbar.Brand className={"nav-icon"} href="/">LuxeCart</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ms-auto" style={{ textAlign: 'center' }}>
              <Nav.Link className={"text-white"}>
                <Link style={{ textDecoration: 'none' }} className={"text-white"} to={"/"}>Home</Link>
              </Nav.Link>
              <Nav.Link className={"text-white"}>
                <Link style={{ textDecoration: 'none' }} className={"text-white"} to={"/Footer"}>Contact Us</Link>
              </Nav.Link>
              <Nav.Link className={"text-white"}>
                <Link style={{ textDecoration: 'none' }} className={"text-white"} to={"/products"}>Products</Link>
              </Nav.Link>
              <Nav.Link className={"text-white"}>
                <Link style={{ textDecoration: 'none' }} className="text-white" to="/about">About</Link>
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
}

export default Header;