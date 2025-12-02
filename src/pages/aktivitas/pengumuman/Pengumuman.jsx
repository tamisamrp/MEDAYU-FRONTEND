import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import "./Pengumuman.css";

function Pengumuman() {
  const [pengumuman, setPengumuman] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const navigate = useNavigate();
  const apiUrl = import.meta.env.VITE_API_PENGELOAAN_KONTEN;

  useEffect(() => {
    const fetchPengumuman = async () => {
      try {
        setLoading(true);
        setError(null);

        if (!apiUrl) {
          throw new Error("URL API tidak dikonfigurasi");
        }

        const response = await fetch(`${apiUrl}/API/pengumuman`);
        
        if (!response.ok) {
          throw new Error("Gagal mengambil data pengumuman");
        }

        const data = await response.json();
        setPengumuman(data?.pengumuman || []);
      } catch (err) {
        console.error("Error fetching pengumuman:", err);
        setError("Gagal memuat data pengumuman. Silakan coba lagi nanti.");
      } finally {
        setLoading(false);
      }
    };

    fetchPengumuman();
  }, [apiUrl]);

  const formatTanggal = (tanggal) => {
    if (!tanggal) return "";
    
    const date = new Date(tanggal);
    const options = { 
      year: "numeric", 
      month: "long", 
      day: "numeric" 
    };
    
    return date.toLocaleDateString("id-ID", options);
  };

  const handleCardClick = (id) => {
    navigate(`/pengumuman/detail-pengumuman/${id}`);
  };

  return (
    <main className="pengumuman-main">
      <div className="container">
        <div className="pengumuman-header">
          <h1 className="page-title">Pengumuman</h1>
        </div>

        {loading && (
          <div className="pengumuman-state">
            <div className="pengumuman-skeleton-list">
              {[1, 2, 3].map((item) => (
                <div key={item} className="pengumuman-skeleton-card">
                  <div className="pengumuman-skeleton-content">
                    <div className="pengumuman-skeleton-title"></div>
                    <div className="pengumuman-skeleton-date"></div>
                    <div className="pengumuman-skeleton-text"></div>
                    <div className="pengumuman-skeleton-text"></div>
                  </div>
                  <div className="pengumuman-skeleton-thumbnail"></div>
                </div>
              ))}
            </div>
          </div>
        )}

        {error && !loading && (
          <div className="pengumuman-state pengumuman-state-error">
            <p>{error}</p>
            <button 
              className="retry-button" 
              onClick={() => window.location.reload()}
            >
              Coba Lagi
            </button>
          </div>
        )}

        {!loading && !error && (
          <>
            {pengumuman.length === 0 ? (
              <div className="pengumuman-state">
                <p>Belum ada pengumuman tersedia</p>
              </div>
            ) : (
              <div className="announcement-card-list">
                {pengumuman.map((item) => (
                  <div
                    key={item.id}
                    className="announcement-card"
                    onClick={() => handleCardClick(item.id)}
                  >
                    <div className="announcement-content">
                      <div className="announcement-header">
                        <h2 className="announcement-title">{item.judul || "Tanpa Judul"}</h2>
                        {item.dibuat_pada && (
                          <span className="announcement-date">
                            {formatTanggal(item.dibuat_pada)}
                          </span>
                        )}
                      </div>
                      {item.isi && (
                        <p className="announcement-excerpt">
                          {item.isi.length > 150 
                            ? `${item.isi.substring(0, 150)}...` 
                            : item.isi}
                        </p>
                      )}
                    </div>
                    {item.foto && (
                      <div className="announcement-thumbnail">
                        <img
                          src={`${apiUrl}/images/pengumuman/${item.foto}`}
                          alt={item.judul || "Gambar pengumuman"}
                          loading="lazy"
                        />
                      </div>
                    )}
                  </div>
                ))}
              </div>
            )}
          </>
        )}
      </div>

      <div className="container">
        <div style={{ height: "50px" }}></div>
      </div>
    </main>
  );
}

export default Pengumuman;
