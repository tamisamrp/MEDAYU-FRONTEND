import React from "react";
import { Link } from "react-router-dom";
import "./KategoriArtikel.css";

const KategoriArtikel = () => {
  const dummyArticles = [
    { id: 1, title: "Sejarah: Judul Artikel Singkat...", category: "Sejarah" },
    { id: 2, title: "Sejarah: Judul Artikel Singkat...", category: "Sejarah" },
    { id: 3, title: "Sejarah: Judul Artikel Singkat...", category: "Sejarah" },
    { id: 4, title: "Sejarah: Judul Artikel Singkat...", category: "Sejarah" },
    { id: 5, title: "Sejarah: Judul Artikel Singkat...", category: "Sejarah" },
    { id: 6, title: "Sejarah: Judul Artikel Singkat...", category: "Sejarah" },
  ];

  return (
    <main className="page-content">
      <div className="container">
        <h1 className="page-title">
          <Link to="/aktivitas/artikel">Artikel</Link>
          <span>&gt;</span>
          <span>Kategori Sejarah</span>
        </h1>

        <section className="category-grid">
          {dummyArticles.map(article => (
            <Link
              to={`/artikel/detail/${article.id}`}
              className="category-card-link"
              key={article.id}
            >
              <div className="category-card">
                <div className="category-card-image">Gambar Artikel</div>

                <div className="category-card-info">
                  <h3>{article.title}</h3>
                  <span className="category-tag">{article.category}</span>
                </div>
              </div>
            </Link>
          ))}
        </section>
      </div>
    </main>
  );
};

export default KategoriArtikel;