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
import ListKecLps from "../../Components/ListKotaLps/ListKecLps";
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

const HalamanKabLps = () => {
  // =========================================
  // AMBIL SLUG KABUPATEN
  // =========================================
  const { id } = useParams();

  // =========================================
  // FORMAT NAMA KABUPATEN
  // =========================================
  const namaKabupaten = formatNamaWilayah(id);

  // =========================================
  // NORMALISASI SLUG
  // =========================================
  const slugKabupaten = String(id || "")
    .trim()
    .toLowerCase();

  // =========================================
  // CANONICAL URL
  // =========================================
  const canonicalUrl = `${DOMAIN}/les-privat-supercamp-utbk-snbt/${encodeURIComponent(
    slugKabupaten,
  )}`;

  // =========================================
  // SEO TITLE
  // =========================================
  const pageTitle = `Les Privat UTBK SNBT ${namaKabupaten} | Bimbel Supercamp`;

  // =========================================
  // META DESCRIPTION
  // =========================================
  const pageDescription = `Persiapan UTBK SNBT di ${namaKabupaten} bersama Supercamp Matrix. Program les privat intensif, latihan soal, tryout, dan pendampingan masuk PTN serta Kedokteran.`;

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
      name: "Bimbingan Persiapan UTBK SNBT",
      description:
        "Program bimbingan belajar dan les privat untuk mempersiapkan seleksi nasional masuk perguruan tinggi negeri melalui UTBK SNBT.",
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
          Les Privat UTBK SNBT di{" "}
          <span className="highlight-city">{namaKabupaten}</span> – Program
          Intensif Supercamp Masuk PTN & Kedokteran
        </h1>

        <p className="desk-seo-lps">
          Persaingan masuk perguruan tinggi negeri melalui UTBK SNBT membutuhkan
          persiapan yang matang, pemahaman materi yang kuat, serta strategi
          pengerjaan soal yang efektif. Bagi siswa di {namaKabupaten}, program{" "}
          <strong>Les Privat UTBK SNBT</strong> dari Supercamp Matrix hadir
          untuk mendukung persiapan akademik menuju perguruan tinggi pilihan
          seperti UI, UGM, ITB, UNDIP, maupun Fakultas Kedokteran.
          <br />
          <br />
          Melalui pendampingan belajar intensif, siswa dapat memperkuat
          kemampuan penalaran, literasi, dan pemecahan masalah yang dibutuhkan
          dalam menghadapi UTBK SNBT. Program pembelajaran mencakup pembahasan
          konsep, latihan soal terstruktur, simulasi tryout, serta evaluasi
          hasil belajar untuk membantu peserta memahami perkembangan kemampuan
          dan menentukan prioritas materi yang perlu ditingkatkan.
          <br />
          <br />
          Selain mempersiapkan kemampuan akademik, siswa di {namaKabupaten} juga
          dapat menyusun strategi belajar berdasarkan target jurusan dan
          perguruan tinggi yang ingin dituju. Dengan pilihan program les privat
          dan Supercamp, proses persiapan dapat dirancang secara lebih terarah
          sesuai kebutuhan belajar, waktu persiapan, serta tujuan pendidikan
          masing-masing siswa.
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
      <ListKecLps />
      <FaqScLps />
      <BottomCtaLps />
    </>
  );
};

export default HalamanKabLps;
