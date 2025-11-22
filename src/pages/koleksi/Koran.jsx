import React from "react";
import "./Koran.css";

const Koran = () => {
  return (
    <>
      <section className="hero-section-koran">
        <div className="container text-center">
          <h1 className="hero-title">Temukan Koleksi Pustaka Kami</h1>
          <p className="hero-subtitle">Jelajahi ribuan koran yang tersedia.</p>

          <form className="search-form-koran">
            <div className="input-group">
              <select className="form-select">
                <option>Penerbit Koran</option>
                <option value="jawa_pos">Jawa Pos</option>
                <option value="kompas">Kompas</option>
                <option value="detik">Detik</option>
              </select>

              <select className="form-select">
                <option>Tahun</option>
                <option value="2024">2024</option>
                <option value="2023">2023</option>
                <option value="1980">1980</option>
              </select>

              <select className="form-select">
                <option>Bulan</option>
                <option value="januari">Januari</option>
                <option value="februari">Februari</option>
                <option value="maret">Maret</option>
              </select>

              <button className="btn search-button-koran">Cari</button>
            </div>
          </form>
        </div>
      </section>

      <div className="container mt-5 mb-5">
        <h3 className="section-header mb-4">Koleksi Koran</h3>

        <div className="table-responsive">
          <table className="table table-hover align-middle table-koran">
            <thead>
              <tr>
                <th>Penerbit</th>
                <th>Bulan</th>
                <th>Tahun</th>
                <th>Ketersediaan</th>
              </tr>
            </thead>

            <tbody>
              <tr>
                <td>Jawa Pos</td>
                <td>Januari</td>
                <td>1980</td>
                <td className="status-tersedia">Tersedia</td>
              </tr>
              <tr>
                <td>Jawa Pos</td>
                <td>Januari</td>
                <td>1980</td>
                <td className="status-tersedia">Tersedia</td>
              </tr>
              <tr>
                <td>Jawa Pos</td>
                <td>Januari</td>
                <td>1980</td>
                <td className="status-tersedia">Tersedia</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
};

export default Koran;
