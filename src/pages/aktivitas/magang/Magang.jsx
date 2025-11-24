import { Link } from "react-router-dom";
import "./Magang.css";

function Magang() {
  return (
    <main>
      <div className="container">
        <h2 className="page-title">Program Magang Perpustakaan</h2>

        <section className="magang-section">
          
          <div className="magang-image-container">
            Gambar
          </div>

          <h2 className="magang-sub-heading">Magang di Perpustakaan Medayu Agung</h2>

          <div className="magang-description">
            <p>
                Magang di Perpustakaan Medayu Agung memberikan kesempatan bagi mahasiswa untuk terlibat dalam pelestarian koleksi sejarah dan budaya.
              Program magang ini memperkenalkan mahasiswa pada proses pengelolaan koleksi sejarah, termasuk buku, majalah, koran, dan dokumen penting yang menjadi bagian dari sejarah. 
            </p>
          </div>

          <h2 className="magang-sub-heading">Kegiatan Magang</h2>

          <div className="kegiatan-grid">
            
            <Link to="/aktivitas/magang/detailmagang" className="kegiatan-link">
                <div className="kegiatan-card">
                    <div className="kegiatan-card-image">
                        Gambar
                    </div>
                    <div className="kegiatan-card-info">
                        Magang Mahasiswa PENS <br /> Periode Juli–November 2025
                    </div>
                </div>
            </Link>

            <div className="kegiatan-card">
              <div className="kegiatan-card-image">
                Gambar
              </div>
              <div className="kegiatan-card-info">
                Magang Mahasiswa PENS <br /> Periode Juli–November 2025
              </div>
            </div>

            <div className="kegiatan-card">
              <div className="kegiatan-card-image">
                Gambar
              </div>
              <div className="kegiatan-card-info">
                Magang Mahasiswa PENS <br /> Periode Juli–November 2025
              </div>
            </div>

          </div>
        </section>
      </div>

      <div className="container">
        <div style={{ height: "50px" }}></div>
      </div>
    </main>
  );
}

export default Magang;
