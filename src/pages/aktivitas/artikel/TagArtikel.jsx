import React from "react";
import { Link } from "react-router-dom";
import "./TagArtikel.css";

const TagArtikel = () => {
  const tagArticles = [
    { id: 1, title: "Artikel terkait penemuan..." },
    { id: 2, title: "Artikel terkait penemuan..." },
    { id: 3, title: "Artikel terkait penemuan..." },
    { id: 4, title: "Artikel terkait penemuan..." },
    { id: 5, title: "Artikel terkait penemuan..." },
    { id: 6, title: "Artikel terkait penemuan..." },
  ];

  return (
    <main className="page-content">
      <div className="container">

        <h1 className="page-title">
          <Link to="/aktivitas/artikel">Artikel</Link>
          <span>&gt;</span>
          <span>Tag Sejarah</span>
        </h1>

        <section className="tag-grid">
          {tagArticles.map((item) => (
            <Link
              to={`/artikel/detail/${item.id}`}
              className="tag-card-link"
              key={item.id}
            >
              <div className="tag-card">
                <div className="tag-card-image">Gambar Artikel</div>

                <div className="tag-card-info">
                  <h3>{item.title}</h3>
                  <span className="article-tag">Tag</span>
                </div>
              </div>
            </Link>
          ))}
        </section>

      </div>
    </main>
  );
};

export default TagArtikel;