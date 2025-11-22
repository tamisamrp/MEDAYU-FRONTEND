import { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import "./Navbar.css";

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="nav-container">
      <div className="nav-content">

        {/* Logo */}
        <Link to="/" className="nav-logo">
          Medayu Agung
        </Link>

        <div
          className="hamburger"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          ☰
        </div>

        {/* Menu */}
        <ul className={menuOpen ? "nav-links active" : "nav-links"}>

          <li>
            <NavLink to="/" className="nav-link">Beranda</NavLink>
          </li>

          {/* Dropdown Profil */}
          <li className="dropdown">
            <span className="nav-link">Profil ▾</span>
            <ul className="dropdown-menu">
              <li><NavLink to="/profil/pembina">Pembina</NavLink></li>
              <li><NavLink to="/profil/pengawas">Pengawas</NavLink></li>
              <li><NavLink to="/profil/pengurus">Pengurus</NavLink></li>
            </ul>
          </li>

          {/* Dropdown Aktivitas */}
          <li className="dropdown">
            <span className="nav-link">Aktivitas ▾</span>
            <ul className="dropdown-menu">
              <li><NavLink to="/aktivitas/magang">Magang</NavLink></li>
              <li><NavLink to="/aktivitas/pengumuman">Pengumuman</NavLink></li>
              <li><NavLink to="/aktivitas/artikel">Artikel</NavLink></li>
              <li><NavLink to="/aktivitas/kunjungan">Kunjungan</NavLink></li>
            </ul>
          </li>

          {/* Koleksi */}
          <li className="dropdown">
            <span className="nav-link">Koleksi ▾</span>
            <ul className="dropdown-menu">
              <li><NavLink to="/koleksi/bukumajalah">Buku & Majalah</NavLink></li>
              <li><NavLink to="/koleksi/koran">Koran</NavLink></li>
            </ul>
          </li>

        </ul>
      </div>
    </nav>
  );
}

export default Navbar;
