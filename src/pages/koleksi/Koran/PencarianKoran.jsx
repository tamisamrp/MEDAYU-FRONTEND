import React, { useState } from 'react';
import { Link, useParams } from "react-router-dom";
import './PencarianKoran.css';

const newspaperCategories = [
    { name: 'Kompas', href: '#' },
    { name: 'Jawa Pos', href: '#' },
    { name: 'Surya', href: '#' },
    { name: 'Media Indonesia', href: '#' },
    { name: 'Tempo Harian', href: '#' },
];

// hasil pencarian
const dummyResults = [
    { publisher: 'Jawa Pos', month: 'Januari', year: 1980, status: 'Tersedia' },
    { publisher: 'Jawa Pos', month: 'Februari', year: 1980, status: 'Tersedia' },
    { publisher: 'Kompas', month: 'Maret', year: 1985, status: 'Tersedia' },
];


function PencarianKoran() {
    const [publisher, setPublisher] = useState('');
    const [year, setYear] = useState('');
    const [month, setMonth] = useState('');
    const [showResults, setShowResults] = useState(false);
    
    const [results, setResults] = useState(dummyResults);

    const handleSubmit = (e) => {
        e.preventDefault();
        
        const isSearching = publisher || year || month;
        
        if (isSearching) {
            
            setShowResults(true);
            window.scrollTo({ top: 0, behavior: 'smooth' });
        } else {
            setShowResults(false);
        }
    };

    const handleClearSearch = (e) => {
        e.preventDefault();
        
        setPublisher('');
        setYear('');
        setMonth('');
        
        setShowResults(false);
    };

    return (
        <>
            <div className="hero-koran-search">
                <div className="container">
                    <h1>Temukan Koleksi Pustaka Kami</h1>
                    <p>Jelajahi ribuan koran yang tersedia.</p>
                    
                    <form className="koran-search-form" onSubmit={handleSubmit}>
                        <div className="koran-filters-wrapper">
                            
                            {/* filter penerbit koran */}
                            <div className="filter-group">
                                <span className="material-symbols-rounded">search</span>
                                <select 
                                    className="koran-select" 
                                    id="penerbitKoran"
                                    value={publisher}
                                    onChange={(e) => setPublisher(e.target.value)}
                                >
                                    <option value="">Penerbit koran</option>
                                    <option value="jawapos">Jawa Pos</option>
                                    <option value="kompas">Kompas</option>
                                </select>
                            </div>

                            {/* tahun */}
                            <div className="filter-group">
                                <span className="material-symbols-rounded">calendar_today</span>
                                <input 
                                    type="text" 
                                    placeholder="Tahun" 
                                    className="koran-input" 
                                    id="tahunKoran"
                                    value={year}
                                    onChange={(e) => setYear(e.target.value)}
                                />
                            </div>

                            {/* bulan */}
                            <div className="filter-group">
                                <span className="material-symbols-rounded">calendar_month</span>
                                <input 
                                    type="text" 
                                    placeholder="Bulan" 
                                    className="koran-input" 
                                    id="bulanKoran"
                                    value={month}
                                    onChange={(e) => setMonth(e.target.value)}
                                />
                            </div>
                            
                            <button type="submit" className="btn-cari">Cari</button>
                        </div>
                    </form>
                    
                </div>
            </div>

            <main className="page-content">
                <div className="container">
                    
                    {!showResults && (
                        <div id="koranCategories">
                            <h2 className="section-title">Koleksi Koran</h2>
                            
                            <div className="koran-grid">
                                {newspaperCategories.map((koran) => (
                                    <a href={koran.href} className="koran-card" key={koran.name}>
                                        <div className="koran-image-wrapper"></div>
                                        <div className="koran-info"><h3>{koran.name}</h3></div>
                                    </a>
                                ))}
                            </div>
                        </div>
                    )}
                    
                    {showResults && (
                        <div id="koranResults">
                            <div className="results-header">
                                <h2 className="section-title">Hasil Pencarian</h2>
                                <a href="#" className="btn-hapus" onClick={handleClearSearch}>
                                    <span className="material-symbols-rounded">close</span> Hapus Pencarian
                                </a>
                            </div>
                            
                            <table className="koran-results-table">
                                <thead>
                                    <tr>
                                        <th>Penerbit</th>
                                        <th>Bulan</th>
                                        <th>Tahun</th>
                                        <th>Ketersediaan</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {results.map((result, index) => (
                                        <tr key={index}>
                                            <td data-label="Penerbit">{result.publisher}</td>
                                            <td data-label="Bulan">{result.month}</td>
                                            <td data-label="Tahun">{result.year}</td>
                                            <td data-label="Ketersediaan">
                                                <span className={`ketersediaan-badge ${result.status === 'Tersedia' ? 'tersedia' : 'tidak-tersedia'}`}>
                                                    {result.status}
                                                </span>
                                            </td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </div>
                    )}
                    
                </div>
            </main>
        </>
    );
}

export default PencarianKoran;