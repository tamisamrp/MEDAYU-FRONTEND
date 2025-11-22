import React from "react";
import "./Artikel.css"; 

const ArtikelPage = () => {
  const articles = [
    {
      date: "30 Juni 2025",
      title: "Judul Artikel Pertama",
      desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua...",
      link: "/aktivitas/artikel/detailartikel",
    },
    {
      date: "02 Juli 2025",
      title: "Judul Artikel Kedua",
      desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua...",
      link: "/artikel/detail/judul-artikel-kedua",
    },
    {
      date: "28 Juni 2025",
      title: "Judul Artikel Ketiga yang Lebih Panjang",
      desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua...",
      link: "/artikel/detail/judul-artikel-ketiga",
    },
    {
      date: "30 Juni 2025",
      title: "Artikel Keempat Tentang Perpustakaan",
      desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua...",
      link: "/artikel/detail/artikel-keempat",
    },
  ];

  return (
    <main className="page-content">
      <div className="container">
        <h1>Artikel</h1>

        <section className="article-grid">
          {articles.map((item, index) => (
            <div className="article-card" key={index}>
              <div className="article-image-placeholder">
                Gambar Artikel
              </div>

              <div className="article-info">
                <div>
                  <span className="date">
                    <span className="material-symbols-rounded"></span>
                    {item.date}
                  </span>

                  <h3>{item.title}</h3>

                  <p>{item.desc}</p>
                </div>

                <a href={item.link} className="read-more-btn">
                  Read More
                </a>
              </div>
            </div>
          ))}
        </section>
      </div>
    </main>
  );
};

export default ArtikelPage;
