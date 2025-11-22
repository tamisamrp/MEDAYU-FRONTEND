import React from "react";
import { Link } from "react-router-dom";
import "./Kunjungan.css";

const Kunjungan = () => {
  const visits = [
    { title: "Kunjungan Oleh Bapak Jokowi" },
    { title: "Kunjungan Oleh Bapak Jokowi" },
    { title: "Kunjungan Oleh Bapak Jokowi" },
    { title: "Kunjungan Oleh Delegasi PENS" },
  ];

  return (
    <main className="page-content">
      <div className="container">

        <h1 className="page-title">Kunjungan</h1>

        <section className="visit-grid">
          {visits.map((item, index) => (
            <Link
              key={index}
              to="/aktivitas/kunjungan/detailkunjungan"
              className="visit-card-link"
            >
              <div className="visit-card">

                <div className="visit-image-container">
                  <div className="visit-image">Foto Kunjungan</div>
                </div>

                <h3>{item.title}</h3>

              </div>
            </Link>
          ))}
        </section>

      </div>
    </main>
  );
};

export default Kunjungan;
