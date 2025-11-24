import React from "react";
import { Link, useParams } from "react-router-dom";
import "./DetailKunjungan.css";

function DetailKunjungan() {
  const { slug } = useParams(); 
  
  const displayTitle = slug?.replace(/-/g, " ") || 'Judul Kunjungan Tidak Ditemukan';

  return (
    <main className="page-content">
      <div className="container">
        <Link to="/kunjungan" className="btn-kembali">
            ← Kembali
        </Link>
        <div className="visit-detail-container">  

          <h1 className="visit-title">
            Detail Kunjungan — {displayTitle}
          </h1>

          <p className="visit-description">
            Keterangan ...Lorem ipsum dolor sit amet, consectetur adipiscing elit,
            sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </p>

          <section className="visit-gallery-grid">
            <div className="gallery-image-placeholder">Foto Kunjungan 1</div>
            <div className="gallery-image-placeholder">Foto Kunjungan 2</div>
            <div className="gallery-image-placeholder">Foto Kunjungan 3</div>
            <div className="gallery-image-placeholder">Foto Kunjungan 4</div>
            <div className="gallery-image-placeholder">Foto Kunjungan 5</div>
            <div className="gallery-image-placeholder">Foto Kunjungan 6</div>
          </section>

        </div>
      </div>
    </main>
  );
}

export default DetailKunjungan;