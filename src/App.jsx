import React from "react";
import { Routes, Route } from "react-router-dom";

import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

// Pages
import Beranda from "./pages/beranda/Beranda";
import Pembina from "./pages/profil/Pembina";
import Pengawas from "./pages/profil/Pengawas";
import Pengurus from "./pages/profil/Pengurus";
import Magang from "./pages/aktivitas/magang/Magang";
import DetailMagang from "./pages/aktivitas/magang/DetailMagang";
import Pengumuman from "./pages/aktivitas/pengumuman/Pengumuman";
import DetailPengumuman from "./pages/aktivitas/pengumuman/DetailPengumuman";
import Artikel from "./pages/aktivitas/artikel/Artikel";
import DetailArtikel from "./pages/aktivitas/artikel/DetailArtikel";
import KategoriArtikel from "./pages/aktivitas/artikel/KategoriArtikel";
import TagArtikel from "./pages/aktivitas/artikel/TagArtikel";
import Kunjungan from "./pages/aktivitas/kunjungan/Kunjungan";
import DetailKunjungan from "./pages/aktivitas/kunjungan/DetailKunjungan";
import PencarianBukuMajalah from "./pages/koleksi/BukuMajalah/PencarianBukuMajalah";
import DetailBuku from "./pages/koleksi/BukuMajalah/DetailBuku";
import DetailMajalah from "./pages/koleksi/BukuMajalah/DetailMajalah";
import PencarianKoran from "./pages/koleksi/Koran/PencarianKoran";


function App() {
  return (
    <>
      <Navbar />

      <div className="content">
        <Routes>
          <Route path="/" element={<Beranda />} />
          <Route path="/pembina" element={<Pembina />} />
          <Route path="/pengawas" element={<Pengawas />} />
          <Route path="/pengurus" element={<Pengurus />} />
          <Route path="/magang" element={<Magang />} />
          <Route path="/magang/detailmagang" element={<DetailMagang />} />
          <Route path="/pengumuman" element={<Pengumuman />} />
          <Route path="/pengumuman/detail-pengumuman/:id" element={<DetailPengumuman />} />
          <Route path="/blog" element={<Artikel />} />
          <Route path="/blog/:tautan" element={<DetailArtikel />} />
          <Route path="/blog/kategoriartikel" element={<KategoriArtikel />} />
          <Route path="/blog/tagartikel" element={<TagArtikel />} />
          <Route path="/kunjungan" element={<Kunjungan />} />
          <Route path="/kunjungan/detail-kunjungan" element={<DetailKunjungan />} />
          <Route path="/bukumajalah" element={<PencarianBukuMajalah />} />
          <Route path="/buku-majalah/detail-buku" element={<DetailBuku />} />
          <Route path="/buku-majalah/detail-majalah" element={<DetailMajalah />} />
          <Route path="/koran" element={<PencarianKoran />} />
        </Routes>
      </div>

      <Footer />
    </>
  );
}

export default App;
