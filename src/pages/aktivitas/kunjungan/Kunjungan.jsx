import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import "./Kunjungan.css";

function Kunjungan() {
  const [kunjungan, setKunjungan] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const navigate = useNavigate();
  const apiUrl = import.meta.env.VITE_API_PENGELOAAN_KONTEN;

  useEffect(() => {
    const fetchKunjungan = async () => {
      try {
        setLoading(true);
        setError(null);

        if (!apiUrl) {
          throw new Error("URL API tidak dikonfigurasi");
        }

        const response = await fetch(`${apiUrl}/API/kunjungan`);
        
        if (!response.ok) {
          throw new Error("Gagal mengambil data kunjungan");
        }

        const data = await response.json();
        setKunjungan(data?.kunjungan || []);
      } catch (err) {
        console.error("Error fetching kunjungan:", err);
        setError("Gagal memuat data kunjungan. Silakan coba lagi nanti.");
      } finally {
        setLoading(false);
      }
    };

    fetchKunjungan();
  }, [apiUrl]);

  const formatWaktu = (waktu) => {
    if (!waktu) return "";
    
    const date = new Date(waktu);
    const options = { year: "numeric", month: "long", day: "numeric" };
    
    return date.toLocaleDateString("id-ID", options);
  };

  const handleCardClick = (id) => {
    navigate(`/detail-kunjungan/${id}`);
  };

  return (
    <main className="kunjungan-main">
      <div className="container">
        <div className="kunjungan-header">
          <h1 className="page-title">Kunjungan</h1>
        </div>

        <section className="kunjungan-section">
          <h2 className="kunjungan-sub-heading">Kunjungan ke Perpustakaan Medayu Agung</h2>

          <div className="kunjungan-description">
            <p>
              Perpustakaan Medayu Agung menerima berbagai kunjungan dari berbagai instansi, 
              lembaga pendidikan, dan organisasi. Kunjungan ini memberikan kesempatan untuk 
              mengenal lebih dekat koleksi sejarah dan budaya yang dimiliki perpustakaan.
            </p>
          </div>

          <h2 className="kunjungan-sub-heading">Daftar Kunjungan</h2>

          {loading && (
            <div className="kunjungan-state">
              <div className="kunjungan-skeleton-grid">
                {[1, 2, 3].map((item) => (
                  <div key={item} className="kunjungan-skeleton-card">
                    <div className="kunjungan-skeleton-image"></div>
                    <div className="kunjungan-skeleton-info"></div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {error && !loading && (
            <div className="kunjungan-state kunjungan-state-error">
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
              {kunjungan.length === 0 ? (
                <div className="kunjungan-state">
                  <p>Belum ada kunjungan tersedia</p>
                </div>
              ) : (
                <div className="kunjungan-grid">
                  {kunjungan.map((item) => (
                    <div
                      key={item.id}
                      className="kunjungan-card"
                      onClick={() => handleCardClick(item.id)}
                    >
                      {item.foto && (
                        <div className="kunjungan-card-image">
                          <img
                            src={`${apiUrl}/images/kunjungan/${item.foto}`}
                            alt={item.judul || "Gambar kunjungan"}
                            loading="lazy"
                          />
                        </div>
                      )}
                      <div className="kunjungan-card-info">
                        <div className="kunjungan-card-title">{item.judul || "Tanpa Judul"}</div>
                        {item.waktu_kunjungan && (
                          <div className="kunjungan-card-waktu">
                            {formatWaktu(item.waktu_kunjungan)}
                          </div>
                        )}
                      </div>
                    </div>
                  ))}
                </div>
              )}
            </>
          )}
        </section>
      </div>

      <div className="container">
        <div style={{ height: "50px" }}></div>
      </div>
    </main>
  );
}

export default Kunjungan;
