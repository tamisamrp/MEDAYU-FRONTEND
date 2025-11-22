import React from "react";
import "./pengawas.css";

const Pengawas = () => {
  return (
    <main className="main-content">
      <div className="container">
        <h1 className="page-title">Pengawas</h1>

        <div className="card-grid">

          <div className="pengawas-card">
            <div className="pengawas-card-image">
              {/* Tambahkan foto */}
              {/* <img src="/img/pengawas1.jpg" alt="Pengawas 1" /> */}
            </div>
            <div className="pengawas-card-name">
              Gatot Seger Santoso
            </div>
          </div>

          <div className="pengawas-card">
            <div className="pengawas-card-image">
            </div>
            <div className="pengawas-card-name">
              Johan Hasan
            </div>
          </div>

          <div className="pengawas-card">
            <div className="pengawas-card-image">
            </div>
            <div className="pengawas-card-name">
              Yohannes Somawiharja
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

export default Pengawas;