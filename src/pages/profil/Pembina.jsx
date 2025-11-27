import React, { useEffect, useState } from "react";
import "./Pembina.css";

const Pembina = () => {
  const [pembinaList, setPembinaList] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchPembina = async () => {
      try {
        const response = await fetch(`${import.meta.env.VITE_API_PENGELOAAN_KONTEN}/API/pembina`);
        if (!response.ok) {
          throw new Error("Gagal mengambil data pembina");
        }

        const data = await response.json();
        setPembinaList(data?.pembina || []);
      } catch (err) {
        console.error(err);
        setError(err.message || "Terjadi kesalahan");
      } finally {
        setLoading(false);
      }
    };

    fetchPembina();
  }, []);

  return (
    <main className="pembina-main">
      <section className="pembina-section">
        <div className="pembina-header">
          <h1 className="pembina-title">Pembina</h1>
        </div>

        {loading && (
          <div className="pembina-state">
            <div className="pembina-skeleton-grid">
              {[1, 2, 3, 4].map((item) => (
                <div key={item} className="pembina-skeleton-card" />
              ))}
            </div>
          </div>
        )}

        {error && !loading && (
          <div className="pembina-state pembina-state-error">
            <p>{error}</p>
          </div>
        )}

        {!loading && !error && (
          <>
            {pembinaList.length === 0 ? (
              <div className="pembina-state">
                <p>Belum ada data pembina yang tersedia.</p>
              </div>
            ) : (
              <div className="pembina-grid">
                {pembinaList.map((pembina) => (
                  <article className="pembina-card" key={pembina.id}>
                    <div className="pembina-card-image">
                      {pembina.foto && (
                        <img
                          src={`${import.meta.env.VITE_API_PENGELOAAN_KONTEN}/images/anggota/${pembina.foto}`}
                          alt={pembina.nama}
                          loading="lazy"
                        />
                      )}
                    </div>
                    <div className="pembina-card-body">
                      <h2 className="pembina-card-name">{pembina.nama}</h2>
                    </div>
                  </article>
                ))}
              </div>
            )}
          </>
        )}
      </section>
    </main>
  );
};

export default Pembina;