import React, { useEffect, useState } from "react";
import "./Pengawas.css";

const Pengawas = () => {
  const [pengawasList, setPengawasList] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchPengawas = async () => {
      try {
        const response = await fetch(`${import.meta.env.VITE_API_PENGELOAAN_KONTEN}/API/pengawas`);
        if (!response.ok) {
          throw new Error("Gagal mengambil data pengawas");
        }

        const data = await response.json();
        setPengawasList(data?.pengawas || []);
      } catch (err) {
        console.error(err);
        setError(err.message || "Terjadi kesalahan");
      } finally {
        setLoading(false);
      }
    };

    fetchPengawas();
  }, []);

  return (
    <main className="pengawas-main">
      <section className="pengawas-section">
        <div className="pengawas-header">
          <h1 className="pengawas-title">Pengawas</h1>
        </div>

        {loading && (
          <div className="pengawas-state">
            <div className="pengawas-skeleton-grid">
              {[1, 2, 3, 4].map((item) => (
                <div key={item} className="pengawas-skeleton-card" />
              ))}
            </div>
          </div>
        )}

        {error && !loading && (
          <div className="pengawas-state pengawas-state-error">
            <p>{error}</p>
          </div>
        )}

        {!loading && !error && (
          <>
            {pengawasList.length === 0 ? (
              <div className="pengawas-state">
                <p>Belum ada data pengawas yang tersedia.</p>
              </div>
            ) : (
              <div className="pengawas-grid">
                {pengawasList.map((pengawas) => (
                  <article className="pengawas-card" key={pengawas.id}>
                    <div className="pengawas-card-image">
                      {pengawas.foto && (
                        <img
                          src={`${import.meta.env.VITE_API_PENGELOAAN_KONTEN}/images/anggota/${pengawas.foto}`}
                          alt={pengawas.nama}
                          loading="lazy"
                        />
                      )}
                    </div>
                    <div className="pengawas-card-body">
                      <h2 className="pengawas-card-name">{pengawas.nama}</h2>
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

export default Pengawas;
