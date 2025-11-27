import React, { useEffect, useState } from "react";
import "./Pengurus.css";

const Pengurus = () => {
  const [pengurusList, setPengurusList] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchPengurus = async () => {
      try {
        const response = await fetch("http://localhost:4201/API/pengurus");
        if (!response.ok) {
          throw new Error("Gagal mengambil data pengurus");
        }

        const data = await response.json();
        setPengurusList(data?.pengurus || []);
      } catch (err) {
        console.error(err);
        setError(err.message || "Terjadi kesalahan");
      } finally {
        setLoading(false);
      }
    };

    fetchPengurus();
  }, []);

  return (
    <main className="pengurus-main">
      <section className="pengurus-section">
        <div className="pengurus-header">
          <h1 className="pengurus-title">Pengurus</h1>
        </div>

        {loading && (
          <div className="pengurus-state">
            <div className="pengurus-skeleton-grid">
              {[1, 2, 3, 4].map((item) => (
                <div key={item} className="pengurus-skeleton-card" />
              ))}
            </div>
          </div>
        )}

        {error && !loading && (
          <div className="pengurus-state pengurus-state-error">
            <p>{error}</p>
          </div>
        )}

        {!loading && !error && (
          <>
            {pengurusList.length === 0 ? (
              <div className="pengurus-state">
                <p>Belum ada data pengurus yang tersedia.</p>
              </div>
            ) : (
              <div className="pengurus-grid">
                {pengurusList.map((pengurus) => (
                  <article className="pengurus-card" key={pengurus.id}>
                    <div className="pengurus-card-image">
                      {pengurus.foto && (
                        <img
                          src={`http://localhost:4201/images/anggota/${pengurus.foto}`}
                          alt={pengurus.nama}
                          loading="lazy"
                        />
                      )}
                    </div>
                    <div className="pengurus-card-body">
                      <h2 className="pengurus-card-name">{pengurus.nama}</h2>
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

export default Pengurus;
