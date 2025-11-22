import React from "react";
import { Link } from "react-router-dom";
import "./Pengumuman.css";

function Pengumuman() {
  
  return (
    <main>
      <div className="container">
        <h1 className="page-title">Pengumuman</h1>

        <div className="announcement-card-list">

          {/* Card 1 */}
          <Link to="/aktivitas/pengumuman/detailpengumuman" className="announcement-card">
            <div className="announcement-content">
              <h2 className="announcement-title">Judul Pengumuman Penting</h2>
              <p className="announcement-excerpt">
                Isi Pengumuman, Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              </p>
            </div>
            <div className="announcement-thumbnail"></div>
          </Link>

          {/* Card 2 */}
          {/* <Link to="/pengumuman/detail-2" className="announcement-card"> */}
            {/* <div className="announcement-content">
              <h2 className="announcement-title">Informasi Batas Waktu Baru</h2>
              <p className="announcement-excerpt">
                Isi Pengumuman: Detail mengenai perubahan jadwal atau batas waktu pengumpulan dokumen/program.
              </p>
            </div>
            <div className="announcement-thumbnail"></div> */}
          {/* </Link> */}

          {/* Card 3 */}
          {/* <Link to="/pengumuman/detail-3" className="announcement-card"> */}
            {/* <div className="announcement-content">
              <h2 className="announcement-title">Jadwal Acara Bulan Ini</h2>
              <p className="announcement-excerpt">
                Isi Pengumuman: Daftar kegiatan dan acara yang akan diselenggarakan Perpustakaan Medayu Agung bulan ini.
              </p>
            </div>
            <div className="announcement-thumbnail"></div> */}
          {/* </Link> */}

        </div>
      </div>

      <div className="container">
        <div style={{ height: "50px" }}></div>
      </div>
    </main>
  );
}

export default Pengumuman;
