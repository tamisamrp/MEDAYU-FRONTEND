import React from "react";
import { Link } from "react-router-dom";
import "./DetailMagang.css";

function DetailMagang() {
  return (
    <main>
      <div className="container">

        {/* Tombol Kembali */}
        <Link to="/aktivitas/magang" className="btn-kembali">
          ← Kembali
        </Link>

        <h1 className="page-title">Magang Mahasiswa PENS</h1>

        <div className="detail-card">
          <div className="magang-image-container">
            Gambar Kegiatan
          </div>

          <div className="magang-description">
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor...
            </p>
            <p>
              Ini adalah detail tambahan mengenai periode magang, tugas-tugas spesifik...
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

export default DetailMagang;
