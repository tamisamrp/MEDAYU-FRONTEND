import "./Beranda.css";
import Slide1 from "../../assets/1.webp";
import Slide2 from "../../assets/2.webp";
import Slide3 from "../../assets/3.webp";
import Slide4 from "../../assets/Cover.webp";

import QrCodeDonasi from "../../assets/dummy qr.webp";

function Beranda() {
  const slides = [Slide1, Slide2, Slide3, Slide4];

  return (
    <main>

      <section className="hero-slider">
        {slides.map((img, index) => (
          <div
            key={index}
            className="slide"
            style={{ backgroundImage: `url(${img})` }}
          ></div>
        ))}
      </section>

      <section className="info-section">
        <div className="container">

          <h2>Tentang Perpustakaan Medayu Agung</h2>

          <div className="tentang-box">
            <div className="tentang-text">
              <p>
                Perpustakaan Medayu Agung Surabaya didirikan pada tahun 2001 oleh
                Yayasan Medayu Agung Surabaya dalam upaya turut serta untuk
                mencerdaskan kehidupan bangsa. Perpustakaan Medayu Agung disahkan
                berdasarkan Keputusan Menteri Hukum dan Hak Asasi Manusia Republik
                Indonesia Nomor AHU-0000761.AH.01.05. Tahun 2019. Nama “Medayu
                Agung” memiliki makna kebajikan dan kebijaksanaan untuk tujuan
                yang besar.
              </p>

              <p>
                Koleksi yang dimiliki oleh Perpustakaan Medayu Agung pada awalnya
                berasal dari koleksi pribadi milik Bapak Oei Hiem Hwie. Koleksi
                terkini berjumlah kurang lebih 10.000 eksemplar, belum termasuk
                surat kabar, majalah dan foto-foto sejarah sejak tahun 1800-an.
              </p>
            </div>

            <div className="tentang-image">
              <img src={Slide1} alt="Perpustakaan" />
            </div>
          </div>

          <h2>Tujuan</h2>
          <ol className="tujuan-list">
            <li>
              Mengembangkan dan membantu masyarakat dalam usaha mencerdaskan
              kehidupan bangsa.
            </li>
            <li>
              Ikut berperan secara aktif dalam perkembangan seni, budaya, dan
              pelestarian sejarah Indonesia.
            </li>
            <li>
              Ikut mendidik generasi muda mencintai ilmu pengetahuan.
            </li>
          </ol>

        </div>
      </section>

      <section className="support-section">
        <div className="container">
          <h2>Support kegiatan kami</h2>

          <div className="qr-box">
            <img
              src={QrCodeDonasi}
              alt="QR Code Donasi"
            />
          </div>
          <h3>Nomor Rekening</h3>
          <h4>Harap konfirmasi ke WhatsApp setelah melakukan donasi</h4>
        </div>
      </section>

      {/* Spacer */}
      <div className="container" style={{ height: 50 }}></div>

    </main>
  );
}

export default Beranda;
