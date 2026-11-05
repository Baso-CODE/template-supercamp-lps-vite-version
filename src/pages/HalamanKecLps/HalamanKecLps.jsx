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
import ListKelLps from "../../Components/ListKotaLps/ListKelLps";
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

const HalamanKecLps = () => {
  // =========================================
  // AMBIL SLUG KECAMATAN
  // =========================================
  const { kecSlug } = useParams();

  // =========================================
  // FORMAT NAMA KECAMATAN
  // =========================================
  const namaKecamatan = formatNamaWilayah(kecSlug);

  // =========================================
  // NORMALISASI SLUG
  // =========================================
  const slugKecamatan = String(kecSlug || "")
    .trim()
    .toLowerCase();

  // =========================================
  // CANONICAL URL
  // =========================================
  const canonicalUrl = `${DOMAIN}/guru-privat-supercamp-utbk-snbt/${encodeURIComponent(
    slugKecamatan,
  )}`;

  // =========================================
  // SEO TITLE
  // =========================================
  const pageTitle = `Bimbel UTBK SNBT ${namaKecamatan} | Les Privat Supercamp`;

  // =========================================
  // META DESCRIPTION
  // =========================================
  const pageDescription = `Bimbel UTBK SNBT di ${namaKecamatan} dengan program les privat dan Supercamp. Latihan subtes, pembahasan soal, evaluasi kemampuan, serta strategi masuk PTN.`;

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
      name: "Bimbingan Persiapan UTBK SNBT dan Masuk PTN",
      description:
        "Program les privat dan bimbingan intensif untuk persiapan UTBK SNBT, penguatan kemampuan akademik, serta seleksi masuk perguruan tinggi negeri.",
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
          Bimbel & Les Privat UTBK SNBT di{" "}
          <span className="highlight-city">{namaKecamatan}</span> – Persiapan
          Intensif Masuk PTN dan Kedokteran
        </h1>

        <p className="desk-seo-lps">
          Mempersiapkan diri menghadapi UTBK SNBT tidak cukup hanya dengan
          mengerjakan banyak soal. Siswa juga perlu memahami konsep, mengenali
          kelemahan akademik, dan membangun strategi belajar yang sesuai dengan
          target perguruan tinggi. Melalui program{" "}
          <strong>Bimbel UTBK SNBT</strong> untuk siswa di {namaKecamatan},
          Supercamp Matrix membantu peserta mempersiapkan kemampuan akademik
          secara lebih terarah.
          <br />
          <br />
          Pembelajaran berfokus pada penguatan kemampuan penalaran umum,
          literasi bahasa Indonesia dan bahasa Inggris, pengetahuan kuantitatif,
          serta penalaran matematika. Siswa juga mendapatkan kesempatan untuk
          memperdalam pemahaman melalui latihan soal bertahap, pembahasan
          bersama tutor, dan simulasi pengerjaan ujian dengan pengaturan waktu
          yang menyerupai kondisi tes.
          <br />
          <br />
          Bagi siswa di {namaKecamatan} yang menargetkan perguruan tinggi
          seperti UI, UGM, ITB, maupun Fakultas Kedokteran, proses belajar dapat
          disesuaikan dengan kemampuan awal, jurusan pilihan, serta waktu
          persiapan yang tersedia. Melalui kombinasi les privat, program
          Supercamp, dan evaluasi hasil latihan, siswa dapat mengembangkan
          strategi belajar yang lebih efektif untuk menghadapi persaingan masuk
          PTN.
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
      <ListKelLps />
      <FaqScLps />
      <BottomCtaLps />
    </>
  );
};

export default HalamanKecLps;
