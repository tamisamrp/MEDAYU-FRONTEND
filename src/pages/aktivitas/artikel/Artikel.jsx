import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

import "./Artikel.css";

const ArtikelPage = () => {
  const [articles, setArticles] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchArticles = async () => {
      try {
        const response = await fetch(`${import.meta.env.VITE_API_BLOG}/API/blog`);
        if (!response.ok) {
          throw new Error("Gagal mengambil data blog");
        }

        const data = await response.json();
        setArticles(data?.data || []);
      } catch (err) {
        console.error(err);
        setError(err.message || "Terjadi kesalahan");
      } finally {
        setLoading(false);
      }
    };

    fetchArticles();
  }, []);

  const formatDate = (dateString) => {
    const date = new Date(dateString);
    const options = { year: 'numeric', month: 'long', day: 'numeric' };
    return date.toLocaleDateString('id-ID', options);
  };

  return (
    <main className="blog-main">
      <section className="blog-section">
        <div className="blog-header">
          <h1 className="blog-title">Blog</h1>
        </div>

        {loading && (
          <div className="blog-state">
            <div className="blog-skeleton-grid">
              {[1, 2, 3, 4].map((item) => (
                <div key={item} className="blog-skeleton-card" />
              ))}
            </div>
          </div>
        )}

        {error && !loading && (
          <div className="blog-state blog-state-error">
            <p>{error}</p>
          </div>
        )}

        {!loading && !error && (
          <>
            {articles.length === 0 ? (
              <div className="blog-state">
                <p>Belum ada blog yang tersedia.</p>
              </div>
            ) : (
              <div className="blog-grid">
                {articles.map((article) => (
                  <article className="blog-card" key={article.id}>
                    <div className="blog-card-image">
                      {article.foto_cover && (
                        <img
                          src={`${import.meta.env.VITE_API_BLOG}${article.foto_cover}`}
                          alt={article.judul}
                          loading="lazy"
                        />
                      )}
                    </div>
                    <div className="blog-card-body">
                      <div className="blog-card-meta">
                        <span className="blog-card-date">
                          {formatDate(article.dibuat_pada)}
                        </span>
                        <span className="blog-card-author">
                          {article.nama_pembuat}
                        </span>
                      </div>
                      <h2 className="blog-card-title">{article.judul}</h2>
                      <p className="blog-card-desc">{article.ringkasan}</p>
                      <Link
                        to={`/blog/${article.tautan}`}
                        className="blog-card-link"
                      >
                        Baca Selengkapnya
                      </Link>
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

export default ArtikelPage;
