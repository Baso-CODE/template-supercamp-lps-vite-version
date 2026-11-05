import { Helmet } from "react-helmet-async";
import { useParams } from "react-router-dom";
import AlumniKedokteranLps from "../../Components/AlumniKedokteranLps/AlumniKedokteranLps";
import AlumniPtnLps from "../../Components/AlumniPTNLPS/AlumniPTNLPS";
import BenefitScLps from "../../Components/BenefitScLPS/BenefitScLPS";
import BottomCtaLps from "../../Components/BottomCtaLps/BottomCtaLps";
import FaqScLps from "../../Components/FaqScLps/FaqScLps";
import FasilitasScLps from "../../Components/FasilitasScLps/FasilitasScLps";
import JadwalKegiatanScLps from "../../Components/JadwalKegiatanScLps/JadwalKegiatanScLps";
import JumbotronLps from "../../Components/Jumbotron/Jumbotron";
import KegiatanScLps from "../../Components/KegiatanScLps/KegiatanScLps";
import KerjasamaHotel from "../../Components/KerjaSamaHotel/KerjaSamaHotel";
import ListAlumni from "../../Components/ListAlumni/ListAlumni";
import LulusanLps from "../../Components/LulusanLPS/LulusanLPS";
import PaketBelajarSnbtNew from "../../Components/PaketBelajarSnbt/PaketBelajarSnbtNew";
import PaketSupercampLps from "../../Components/PaketSupercamp/PaketSupercampLps";
import SlideCtaLps from "../../Components/SlideCtaLps/SlideCtaLps";
import TargetBelajarLps from "../../Components/TargetBelajarLps/TargetBelajarLps";
import TestimoniLps from "../../Components/TestimoniLps/TestimoniLps";
import TestimoniLps2 from "../../Components/TestimoniLps2/TestimoniLps2";
import TutorLpsSc from "../../Components/TutorLpsSc/TutorLpsSc";
import VenueScLps from "../../Components/VenueScLps/VenueScLps";
import VideoScLps from "../../Components/VideoScLps/VideoScLps";
import WaktuPelaksanaanSc from "../../Components/WaktuPelaksanaanSc/WaktuPelaksanaanSc";
import { DOMAIN } from "../../utils/domain";
import formatNamaWilayah from "../../utils/formatNamaWilayah";

const HalamanKelCbtUgm = () => {
  // =========================================
  // AMBIL SLUG KELURAHAN
  // =========================================
  const { kelSlug } = useParams();

  // =========================================
  // FORMAT NAMA KELURAHAN
  // =========================================
  const namaKelurahan = formatNamaWilayah(kelSlug);

  // =========================================
  // NORMALISASI SLUG
  // =========================================
  const slugKelurahan = String(kelSlug || "")
    .trim()
    .toLowerCase();

  // =========================================
  // CANONICAL URL
  // =========================================
  const canonicalUrl = `${DOMAIN}/guru-les-privat-cbt-ugm/${encodeURIComponent(
    slugKelurahan,
  )}`;

  // =========================================
  // SEO TITLE
  // =========================================
  const pageTitle = `Guru Les Privat CBT UGM ${namaKelurahan} | Persiapan UGM`;

  // =========================================
  // META DESCRIPTION
  // =========================================
  const pageDescription = `Cari les privat CBT UGM di ${namaKelurahan}? Persiapkan seleksi mandiri UGM melalui pembelajaran personal, pemetaan kemampuan, latihan soal, dan evaluasi bersama tutor.`;

  // =========================================
  // STRUCTURED DATA
  // =========================================
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    "@id": `${canonicalUrl}#webpage`,
    name: pageTitle,
    description: pageDescription,
    url: canonicalUrl,
    inLanguage: "id-ID",
    isPartOf: {
      "@type": "WebSite",
      name: "Supercamp Matrix",
      url: `${DOMAIN}/`,
    },
    about: {
      "@type": "Thing",
      name: "Les Privat Persiapan CBT UGM",
    },
  };

  return (
    <>
      {/* ===================================== */}
      {/* SEO METADATA */}
      {/* ===================================== */}
      <Helmet>
        <title>{pageTitle}</title>

        <meta name="description" content={pageDescription} />

        <link rel="canonical" href={canonicalUrl} />

        <meta name="robots" content="index, follow" />

        {/* ===================================== */}
        {/* OPEN GRAPH */}
        {/* ===================================== */}
        <meta property="og:type" content="website" />

        <meta property="og:site_name" content="Supercamp Matrix" />

        <meta property="og:title" content={pageTitle} />

        <meta property="og:description" content={pageDescription} />

        <meta property="og:url" content={canonicalUrl} />

        <meta property="og:image" content={`${DOMAIN}/images/banner.webp`} />

        <meta property="og:locale" content="id_ID" />

        {/* ===================================== */}
        {/* TWITTER CARD */}
        {/* ===================================== */}
        <meta name="twitter:card" content="summary_large_image" />

        <meta name="twitter:title" content={pageTitle} />

        <meta name="twitter:description" content={pageDescription} />

        <meta name="twitter:image" content={`${DOMAIN}/images/banner.webp`} />

        {/* ===================================== */}
        {/* JSON-LD STRUCTURED DATA */}
        {/* ===================================== */}
        <script type="application/ld+json">
          {JSON.stringify(structuredData)}
        </script>
      </Helmet>

      {/* ===================================== */}
      {/* JUMBOTRON */}
      {/* ===================================== */}
      <JumbotronLps />

      {/* ===================================== */}
      {/* SEO CONTENT */}
      {/* ===================================== */}
      <div className="parent-text-seo-lps">
        <h1 className="text-seo-lps">
          Guru Les Privat CBT UGM di{" "}
          <span className="highlight-city">{namaKelurahan}</span> – Pendampingan
          Belajar untuk Seleksi Mandiri UGM
        </h1>

        <p className="desk-seo-lps">
          Setiap calon mahasiswa memiliki tantangan berbeda ketika mempersiapkan
          seleksi masuk Universitas Gadjah Mada. Ada yang membutuhkan penguatan
          konsep dasar, sementara yang lain perlu meningkatkan kemampuan
          analisis dan ketepatan dalam menjawab soal. Melalui program{" "}
          <strong>Les Privat CBT UGM</strong> untuk siswa di {namaKelurahan},
          Supercamp Matrix membantu peserta menyusun persiapan belajar sesuai
          kebutuhan dan target akademiknya.
          <br />
          <br />
          Proses pendampingan dimulai dengan mengenali kemampuan siswa dan
          menentukan materi yang perlu mendapatkan perhatian lebih. Pembelajaran
          kemudian diarahkan pada pemahaman konsep, diskusi bersama tutor,
          latihan soal bertahap, serta pembahasan kesalahan yang sering muncul
          selama proses latihan. Pendekatan ini membantu siswa memahami alasan
          di balik setiap jawaban, bukan sekadar menghafal penyelesaian soal.
          <br />
          <br />
          Bagi siswa di {namaKelurahan} yang ingin melanjutkan pendidikan di
          UGM, persiapan dapat dilakukan melalui jadwal belajar yang terencana
          dan evaluasi kemampuan secara berkala. Dengan pendampingan yang sesuai
          kebutuhan, siswa dapat mengembangkan kemandirian belajar, memperbaiki
          kelemahan akademik, dan menghadapi proses seleksi dengan persiapan
          yang lebih matang.
        </p>
      </div>

      {/* ===================================== */}
      {/* KOMPONEN HALAMAN */}
      {/* ===================================== */}
      <LulusanLps />
      <AlumniKedokteranLps />
      <AlumniPtnLps />
      <BenefitScLps />
      <KerjasamaHotel />
      <TargetBelajarLps />
      <FasilitasScLps />
      <PaketSupercampLps />
      <PaketBelajarSnbtNew />
      <WaktuPelaksanaanSc />
      <VenueScLps />
      <JadwalKegiatanScLps />
      <SlideCtaLps />
      <KegiatanScLps />
      <VideoScLps />
      <TutorLpsSc />
      <TestimoniLps />
      <TestimoniLps2 />
      <ListAlumni />
      <FaqScLps />
      <BottomCtaLps />
    </>
  );
};

export default HalamanKelCbtUgm;
