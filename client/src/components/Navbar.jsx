import './Navbar.css';

function Navbar() {
  return (
    <nav className="navbar">
      <ul className="nav-links">
        <li><a href="#home">home</a></li>
        <li><a href="#education">education</a></li>
        <li><a href="#projects">projects</a></li>
        <li><a href="#contact">contact</a></li>
      </ul>
    </nav>
  );
}

export default Navbar;
