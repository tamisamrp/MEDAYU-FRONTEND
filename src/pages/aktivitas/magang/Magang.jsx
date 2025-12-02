import { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import "./Magang.css";

function Magang() {
  const [magang, setMagang] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const navigate = useNavigate();
  const apiUrl = import.meta.env.VITE_API_PENGELOAAN_KONTEN;

  useEffect(() => {
    const fetchMagang = async () => {
      try {
        setLoading(true);
        setError(null);

        if (!apiUrl) {
          throw new Error("URL API tidak dikonfigurasi");
        }

        const response = await fetch(`${apiUrl}/API/magang`);
        
        if (!response.ok) {
          throw new Error("Gagal mengambil data magang");
        }

        const data = await response.json();
        setMagang(data?.magang || []);
      } catch (err) {
        console.error("Error fetching magang:", err);
        setError("Gagal memuat data magang. Silakan coba lagi nanti.");
      } finally {
        setLoading(false);
      }
    };

    fetchMagang();
  }, [apiUrl]);

  const formatPeriode = (mulai, berakhir) => {
    if (!mulai || !berakhir) return "";
    
    const dateMulai = new Date(mulai);
    const dateBerakhir = new Date(berakhir);
    
    const options = { year: "numeric", month: "long", day: "numeric" };
    
    const mulaiStr = dateMulai.toLocaleDateString("id-ID", options);
    const berakhirStr = dateBerakhir.toLocaleDateString("id-ID", options);
    
    return `${mulaiStr} - ${berakhirStr}`;
  };

  const handleCardClick = (id) => {
    navigate(`/magang/detail-magang/${id}`);
  };

  return (
    <main className="magang-main">
      <div className="container">
        <div className="magang-header">
          <h1 className="page-title">Program Magang Perpustakaan</h1>
        </div>

        <section className="magang-section">
          <h2 className="magang-sub-heading">Magang di Perpustakaan Medayu Agung</h2>

          <div className="magang-description">
            <p>
              Magang di Perpustakaan Medayu Agung memberikan kesempatan bagi mahasiswa untuk terlibat dalam pelestarian koleksi sejarah dan budaya.
              Program magang ini memperkenalkan mahasiswa pada proses pengelolaan koleksi sejarah, termasuk buku, majalah, koran, dan dokumen penting yang menjadi bagian dari sejarah.
            </p>
          </div>

          <h2 className="magang-sub-heading">Kegiatan Magang</h2>

          {loading && (
            <div className="magang-state">
              <div className="magang-skeleton-grid">
                {[1, 2, 3].map((item) => (
                  <div key={item} className="magang-skeleton-card">
                    <div className="magang-skeleton-image"></div>
                    <div className="magang-skeleton-info"></div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {error && !loading && (
            <div className="magang-state magang-state-error">
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
              {magang.length === 0 ? (
                <div className="magang-state">
                  <p>Belum ada kegiatan magang tersedia</p>
                </div>
              ) : (
                <div className="kegiatan-grid">
                  {magang.map((item) => (
                    <div
                      key={item.id}
                      className="kegiatan-card"
                      onClick={() => handleCardClick(item.id)}
                    >
                      {item.foto && (
                        <div className="kegiatan-card-image">
                          <img
                            src={`${apiUrl}/images/magang/${item.foto}`}
                            alt={item.judul || "Gambar kegiatan magang"}
                            loading="lazy"
                          />
                        </div>
                      )}
                      <div className="kegiatan-card-info">
                        <div className="kegiatan-card-title">{item.judul || "Tanpa Judul"}</div>
                        {item.periode_mulai && item.periode_berakhir && (
                          <div className="kegiatan-card-period">
                            {formatPeriode(item.periode_mulai, item.periode_berakhir)}
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

export default Magang;
