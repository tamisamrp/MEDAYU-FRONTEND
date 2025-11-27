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
          throw new Error("Gagal mengambil data artikel");
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
    <main className="artikel-main">
      <section className="artikel-section">
        <div className="artikel-header">
          <h1 className="artikel-title">Artikel</h1>
        </div>

        {loading && (
          <div className="artikel-state">
            <div className="artikel-skeleton-grid">
              {[1, 2, 3, 4].map((item) => (
                <div key={item} className="artikel-skeleton-card" />
              ))}
            </div>
          </div>
        )}

        {error && !loading && (
          <div className="artikel-state artikel-state-error">
            <p>{error}</p>
          </div>
        )}

        {!loading && !error && (
          <>
            {articles.length === 0 ? (
              <div className="artikel-state">
                <p>Belum ada artikel yang tersedia.</p>
              </div>
            ) : (
              <div className="artikel-grid">
                {articles.map((article) => (
                  <article className="artikel-card" key={article.id}>
                    <div className="artikel-card-image">
                      {article.foto_cover && (
                        <img
                          src={`${import.meta.env.VITE_API_BLOG}${article.foto_cover}`}
                          alt={article.judul}
                          loading="lazy"
                        />
                      )}
                    </div>
                    <div className="artikel-card-body">
                      <div className="artikel-card-meta">
                        <span className="artikel-card-date">
                          {formatDate(article.dibuat_pada)}
                        </span>
                        <span className="artikel-card-author">
                          {article.nama_pembuat}
                        </span>
                      </div>
                      <h2 className="artikel-card-title">{article.judul}</h2>
                      <p className="artikel-card-desc">{article.ringkasan}</p>
                      <Link
                        to={`/aktivitas/artikel/${article.tautan}`}
                        className="artikel-card-link"
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
