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
            {/* Beranda */}
            <Route path="/" element={<Beranda />} />

            {/* Profil */}
            <Route path="/profil/pembina" element={<Pembina />} />
            <Route path="/profil/pengawas" element={<Pengawas />} />
            <Route path="/profil/pengurus" element={<Pengurus />} />

            {/* Aktvitas */}
            <Route path="/aktivitas/magang" element={<Magang />} />
            <Route path="/aktivitas/magang/detailmagang" element={<DetailMagang />} />
            <Route path="/aktivitas/pengumuman" element={<Pengumuman />} />
            <Route path="/aktivitas/pengumuman/detailpengumuman" element={<DetailPengumuman />} />
            <Route path="/aktivitas/artikel" element={<Artikel />} />
            <Route path="/aktivitas/artikel/detailartikel" element={<DetailArtikel />} />
            <Route path="/aktivitas/artikel/kategoriartikel" element={<KategoriArtikel />} />
            <Route path="/aktivitas/artikel/tagartikel" element={<TagArtikel />} />
            <Route path="/aktivitas/kunjungan" element={<Kunjungan />} />
            <Route path="/aktivitas/kunjungan/detailkunjungan" element={<DetailKunjungan />} />

            {/* Koleksi */}
            <Route path="/koleksi/bukumajalah/pencarianbukumajalah" element={<PencarianBukuMajalah />} />
            <Route path="/koleksi/bukumajalah/detailbuku" element={<DetailBuku />} />
            <Route path="/koleksi/bukumajalah/detailmajalah" element={<DetailMajalah />} />
            <Route path="/koleksi/koran/pencariankoran" element={<PencarianKoran />} />
            
          </Routes>
        </div>

        <Footer />
    </>
  );
}

export default App;
