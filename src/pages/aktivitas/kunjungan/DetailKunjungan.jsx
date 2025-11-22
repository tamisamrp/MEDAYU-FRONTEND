import React from "react";
import { Link, useParams } from "react-router-dom";
import "./DetailKunjungan.css";

function DetailKunjungan() {
  const { slug } = useParams(); 
  // slug = "judul-kunjungan-1" misalnyaa

  return (
    <main className="page-content">
      <div className="container">
        <div className="visit-detail-container">

          {/* Tombol Kembali */}
          <Link to="/kunjungan" className="back-button">
            ← Kembali
          </Link>

          <h1 className="visit-title">
            Detail Kunjungan — {slug.replace(/-/g, " ")}
          </h1>

          <p className="visit-description">
            Keterangan ...Lorem ipsum dolor sit amet, consectetur adipiscing elit,
            sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </p>

          {/* GALERI FOTO */}
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
