import { useState, useEffect } from "react";
import { Link, NavLink } from "react-router-dom";
import "./Navbar.css";
import LogoDesktop from "../assets/LogoAndText_medayuagung.webp";
import IconMobile from "../assets/icon_medayuagung.svg";

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState(null);

  const handleDropdownToggle = (e, dropdownName) => {
    e.preventDefault();
    e.stopPropagation();
    setOpenDropdown(openDropdown === dropdownName ? null : dropdownName);
  };

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (!event.target.closest('.dropdown')) {
        setOpenDropdown(null);
      }
    };

    const adjustDropdownPosition = () => {
      if (openDropdown) {
        const dropdown = document.querySelector(`.dropdown.active`);
        if (dropdown) {
          const dropdownButton = dropdown.querySelector('.dropdown-toggle');
          const dropdownMenu = dropdown.querySelector('.dropdown-menu.active');
          
          if (dropdownButton && dropdownMenu) {
            const buttonRect = dropdownButton.getBoundingClientRect();
            const viewportHeight = window.innerHeight;
            const spaceBelow = viewportHeight - buttonRect.bottom;
            const estimatedMenuHeight = 250;
            
            if (spaceBelow < estimatedMenuHeight && buttonRect.top > estimatedMenuHeight) {
              dropdownMenu.classList.add('dropdown-up');
            } else {
              dropdownMenu.classList.remove('dropdown-up');
            }
          }
        }
      }
    };

    if (openDropdown) {
      document.addEventListener('click', handleClickOutside);
      setTimeout(adjustDropdownPosition, 10);
      window.addEventListener('scroll', adjustDropdownPosition);
      window.addEventListener('resize', adjustDropdownPosition);
    }

    return () => {
      document.removeEventListener('click', handleClickOutside);
      window.removeEventListener('scroll', adjustDropdownPosition);
      window.removeEventListener('resize', adjustDropdownPosition);
    };
  }, [openDropdown]);

  const closeMenu = () => {
    setMenuOpen(false);
    setOpenDropdown(null);
  };

  useEffect(() => {
    if (menuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [menuOpen]);

  return (
    <>
      {menuOpen && (
        <div 
          className={`nav-overlay ${menuOpen ? 'active' : ''}`}
          onClick={closeMenu}
          aria-label="Close menu"
        />
      )}
      
      <nav className="nav-container">
        <div className="nav-content">
          <Link to="/" className="nav-logo" onClick={closeMenu}>
            <img src={LogoDesktop} alt="Medayu Agung" className="nav-logo-desktop" />
            <img src={IconMobile} alt="Medayu Agung" className="nav-logo-mobile" />
          </Link>

          <button
            className={`hamburger ${menuOpen ? 'active' : ''}`}
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Toggle menu"
            aria-expanded={menuOpen}
          >
            <span></span>
            <span></span>
            <span></span>
          </button>

          <ul 
            className={`nav-links ${menuOpen ? 'active' : ''}`}
            onClick={(e) => e.stopPropagation()}
          >
          <li>
            <NavLink to="/" className="nav-link" onClick={closeMenu}>Beranda</NavLink>
          </li>

          <li className={`dropdown ${openDropdown === 'profil' ? 'active' : ''}`}>
            <button 
              className="nav-link dropdown-toggle"
              onClick={(e) => handleDropdownToggle(e, 'profil')}
              aria-expanded={openDropdown === 'profil'}
            >
              Profil
              <svg className={`dropdown-icon ${openDropdown === 'profil' ? 'rotated' : ''}`} width="12" height="12" viewBox="0 0 12 12" fill="none">
                <path d="M3 4.5L6 7.5L9 4.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </button>
            <ul className={`dropdown-menu ${openDropdown === 'profil' ? 'active' : ''}`}>
              <li><NavLink to="/profil/pembina" onClick={closeMenu}>Pembina</NavLink></li>
              <li><NavLink to="/profil/pengawas" onClick={closeMenu}>Pengawas</NavLink></li>
              <li><NavLink to="/profil/pengurus" onClick={closeMenu}>Pengurus</NavLink></li>
            </ul>
          </li>

          <li className={`dropdown ${openDropdown === 'aktivitas' ? 'active' : ''}`}>
            <button 
              className="nav-link dropdown-toggle"
              onClick={(e) => handleDropdownToggle(e, 'aktivitas')}
              aria-expanded={openDropdown === 'aktivitas'}
            >
              Aktivitas
              <svg className={`dropdown-icon ${openDropdown === 'aktivitas' ? 'rotated' : ''}`} width="12" height="12" viewBox="0 0 12 12" fill="none">
                <path d="M3 4.5L6 7.5L9 4.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </button>
            <ul className={`dropdown-menu ${openDropdown === 'aktivitas' ? 'active' : ''}`}>
              <li><NavLink to="/aktivitas/magang" onClick={closeMenu}>Magang</NavLink></li>
              <li><NavLink to="/aktivitas/pengumuman" onClick={closeMenu}>Pengumuman</NavLink></li>
              <li><NavLink to="/aktivitas/artikel" onClick={closeMenu}>Artikel</NavLink></li>
              <li><NavLink to="/aktivitas/kunjungan" onClick={closeMenu}>Kunjungan</NavLink></li>
            </ul>
          </li>

          <li className={`dropdown ${openDropdown === 'koleksi' ? 'active' : ''}`}>
            <button 
              className="nav-link dropdown-toggle"
              onClick={(e) => handleDropdownToggle(e, 'koleksi')}
              aria-expanded={openDropdown === 'koleksi'}
            >
              Koleksi
              <svg className={`dropdown-icon ${openDropdown === 'koleksi' ? 'rotated' : ''}`} width="12" height="12" viewBox="0 0 12 12" fill="none">
                <path d="M3 4.5L6 7.5L9 4.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </button>
            <ul className={`dropdown-menu ${openDropdown === 'koleksi' ? 'active' : ''}`}>
              <li><NavLink to="/koleksi/bukumajalah" onClick={closeMenu}>Buku & Majalah</NavLink></li>
              <li><NavLink to="/koleksi/koran" onClick={closeMenu}>Koran</NavLink></li>
            </ul>
          </li>
          </ul>
        </div>
      </nav>
    </>
  );
}

export default Navbar;
