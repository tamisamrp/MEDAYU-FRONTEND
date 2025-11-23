import React from 'react';
import './DetailBuku.css'; 

const collectionData = {
    title: "Bumi Manusia",
    author: "Pramoedya Ananta Toer",
    isbn: "978-9799106280",
    classificationNo: "813.54 PRO b",
    language: "Indonesia",
    pageCount: 550,
    publicationYear: 1980,
    publicationPlace: "Jakarta",
    publisher: "Hasta Mitra",
    category: "Fiksi Sejarah",
    location: "Lantai 1, Ruangan Koleksi Khusus, Rak 4",
    availability: "Tersedia",
    synopsis: "Bumi Manusia adalah novel pertama dari Tetralogi Buru karya Pramoedya Ananta Toer. Novel ini menceritakan kisah Minke, seorang pribumi yang berkesempatan sekolah di HBS, sekolah menengah bergengsi untuk orang-orang Belanda dan Eropa. Di tengah diskriminasi dan ketidakadilan kolonial, Minke berjuang untuk mempertahankan martabatnya dan cintanya pada Annelies, putri Nyai Ontosoroh. Novel ini adalah cerminan perjuangan, cinta, dan identitas di masa kolonial Hindia Belanda."
};

function DetailBuku() {

    const handleBack = (e) => {
        e.preventDefault();
        window.history.back();
    };

    return (
        <main className="page-content">
            <div className="container">
                
                <div className="detail-card">
                    
                    {/* tombol back */}
                    <a 
                        href="#" 
                        className="back-button" 
                        title="Kembali ke Hasil Pencarian" 
                        onClick={handleBack}
                    >
                        <span className="material-symbols-rounded">arrow_back</span>
                    </a>

                    {/* sampul */}
                    <div className="cover-section">
                        <div className="book-cover-placeholder">
                            [Gambar Sampul Koleksi]
                            {/* <img src="/path/to/cover.jpg" alt={`Sampul ${collectionData.title}`} /> */}
                        </div>
                    </div>

                    {/* detail informasi */}
                    <div className="info-section">
                        <h1 className="info-title">{collectionData.title}</h1>
                        
                        <table className="metadata-table">
                            <tbody>
                                <tr>
                                    <td className="label">Pengarang</td>
                                    <td className="separator">:</td>
                                    <td className="value">{collectionData.author}</td>
                                </tr>
                                <tr>
                                    <td className="label">ISBN / ISSN</td>
                                    <td className="separator">:</td>
                                    <td className="value">{collectionData.isbn}</td>
                                </tr>
                                <tr>
                                    <td className="label">No. Klasifikasi</td>
                                    <td className="separator">:</td>
                                    <td className="value">{collectionData.classificationNo}</td>
                                </tr>
                                <tr>
                                    <td className="label">Bahasa</td>
                                    <td className="separator">:</td>
                                    <td className="value">{collectionData.language}</td>
                                </tr>
                                <tr>
                                    <td className="label">Jumlah Halaman</td>
                                    <td className="separator">:</td>
                                    <td className="value">{collectionData.pageCount}</td>
                                </tr>
                                <tr>
                                    <td className="label">Tahun Terbit</td>
                                    <td className="separator">:</td>
                                    <td className="value">{collectionData.publicationYear}</td>
                                </tr>
                                <tr>
                                    <td className="label">Tempat Terbit</td>
                                    <td className="separator">:</td>
                                    <td className="value">{collectionData.publicationPlace}</td>
                                </tr>
                                <tr>
                                    <td className="label">Penerbit</td>
                                    <td className="separator">:</td>
                                    <td className="value">{collectionData.publisher}</td>
                                </tr>
                                <tr>
                                    <td className="label">Kategori</td>
                                    <td className="separator">:</td>
                                    <td className="value">{collectionData.category}</td>
                                </tr>
                                <tr>
                                    <td className="label">Lokasi</td>
                                    <td className="separator">:</td>
                                    <td className="value">{collectionData.location}</td>
                                </tr>
                                <tr>
                                    <td className="label">Ketersediaan</td>
                                    <td className="separator">:</td>
                                    <td 
                                        className="value" 
                                        style={{ fontWeight: 700, color: collectionData.availability === 'Tersedia' ? '#5cb85c' : '#dc3545' }}
                                    >
                                        {collectionData.availability}
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                        
                        <div className="sinopsis-box">
                            <h3>Sinopsis</h3>
                            <p>{collectionData.synopsis}</p>
                        </div>

                    </div>
                </div>

            </div>
        </main>
    );
}

export default DetailBuku;