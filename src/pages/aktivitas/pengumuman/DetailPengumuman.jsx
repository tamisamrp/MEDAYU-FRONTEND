import React from "react";
import { Link } from "react-router-dom";
import "./DetailPengumuman.css";

function DetailPengumuman() {
  return (
    <main>
      <div className="container">
        <Link to="/aktivitas/pengumuman" className="back-button">
            ← Kembali
        </Link>
        <h1 className="page-title">Judul Pengumuman</h1>

        <div className="detail-card-announcement">

          <div className="announcement-image-container">
            Gambar Cover Pengumuman
          </div>

          <div className="announcement-description">
            <p>
              Isi Pengumuman: Lorem ipsum dolor sit amet, consectetur adipiscing elit,
              sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </p>
            <p>
              Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium
              doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore
              veritatis et quasi architecto beatae vitae dicta sunt explicabo.
            </p>
          </div>
        </div>
      </div>

      <div className="container">
        <div style={{ height: "50px" }}></div>
      </div>
    </main>
  );
}

export default DetailPengumuman;
