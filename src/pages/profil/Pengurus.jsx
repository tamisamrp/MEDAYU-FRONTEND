import React from "react";
import "./pengurus.css";

const Pengurus = () => {
  return (
    <main className="main-content">
      <div className="container">
        <h1 className="page-title">Pengurus</h1>

        <div className="card-grid">

          <div className="pengurus-card">
            <div className="pengurus-card-image">
              {/* Tambahkan foto */}
              {/* <img src="/img/pengurus1.jpg" alt="Pengurus 1" /> */}
            </div>
            <div className="pengurus-card-name">
              Gaudi
            </div>
            <div className="pengurus-card-job">
              Ketua
            </div>
          </div>

          <div className="pengurus-card">
            <div className="pengurus-card-image">
            </div>
            <div className="pengurus-card-name">
              Shinta Devi
            </div>
            <div className="pengurus-card-job">
              Sekretaris
            </div>
          </div>

          <div className="pengurus-card">
            <div className="pengurus-card-image">
            </div>
            <div className="pengurus-card-name">
              Ani Nur Karimah
            </div>
            <div className="pengurus-card-job">
              Wakil Sekretaris
            </div>
          </div>

          <div className="pengurus-card">
            <div className="pengurus-card-image">
            </div>
            <div className="pengurus-card-name">
              Adi Sandika 
            </div>
            <div className="pengurus-card-job">
              Bendahara
            </div>
          </div>

        </div>
      </div>

      <div className="container">
        <div style={{ height: "50px" }}></div>
      </div>
    </main>
  );
};

export default Pengurus;