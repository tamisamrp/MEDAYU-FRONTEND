import React from "react";
import "./pembina.css";

const Pembina = () => {
  return (
    <main className="main-content">
      <div className="container">
        <h1 className="page-title">Pembina</h1>

        <div className="card-grid">

          <div className="pembina-card">
            <div className="pembina-card-image">
              {/* Tambah foto*/}
            {/* <img src="/img/pembina1.jpg" alt="Pembina 1" /> */}
            </div>
            <div className="pembina-card-name">
              Juliastono Harrysiswanto
            </div>
          </div>

          <div className="pembina-card">
            <div className="pembina-card-image">
            </div>
            <div className="pembina-card-name">
              MC. Donny Watad Nagasan
            </div>
          </div>

          <div className="pembina-card">
            <div className="pembina-card-image">
            </div>
            <div className="pembina-card-name">
              Dede Oetomo
            </div>
          </div>

          <div className="pembina-card">
            <div className="pembina-card-image">
            </div>
            <div className="pembina-card-name">
              Yaya Winarno Junardy
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

export default Pembina;