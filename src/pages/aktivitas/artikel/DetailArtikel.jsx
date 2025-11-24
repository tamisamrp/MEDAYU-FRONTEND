import React from "react";
import "./DetailArtikel.css"; 

function DetailArtikel() {
  const relatedArticles = [
    {
      title: "Sejarah Kuno: Penemuan Baru di Indonesia",
      author: "Wulan",
      date: "15 July 2025",
      link: "/artikel/detail/sejarah-kuno",
    },
    {
      title: "Masa Depan Perpustakaan Digital",
      author: "Fulan",
      date: "10 June 2025",
      link: "/artikel/detail/perpustakaan-digital",
    },
    {
      title: "Mengapa Arsip Lokal Penting?",
      author: "Fulan",
      date: "10 June 2025",
      link: "/artikel/detail/arsip-lokal",
    },
  ];

  return (
    <main className="page-content">
      <div className="container">

        <div className="article-main-container">

          <div className="article-header-meta">
            <a href="/aktivitas/artikel/kategoriartikel" className="article-category">
              Kategori
            </a>

            <h1 className="article-title">
              Judul Artikel 
            </h1>

            <p className="article-author-date">
              Oleh Tamisa Ulinda | 10 November 2025
            </p>
          </div>

          <div className="article-image-main">
            Gambar Utama Artikel
          </div>

          <div className="article-content">
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua...
            </p>
            <p>
              Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium...
            </p>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua...
            </p>
          </div>

          <div className="article-tags">
            <span>Tag:</span>

            <a href="/aktivitas/artikel/tagartikel" className="tag-pill">Sejarah</a>
            <a href="/tag/politik" className="tag-pill">Politik</a>
            <a href="/tag/budaya" className="tag-pill">Budaya</a>
          </div>
        </div>

        <section className="related-articles-section">
          <h2>Artikel Terkait</h2>

          <div className="related-grid">
            {relatedArticles.map((item, index) => (
              <a href={item.link} className="related-card" key={index}>
                <div className="related-image-placeholder">Gambar Terkait</div>

                <h3>{item.title}</h3>
                <p>
                  Oleh {item.author} | {item.date}
                </p>
              </a>
            ))}
          </div>
        </section>

      </div>
    </main>
  );
}

export default DetailArtikel;
