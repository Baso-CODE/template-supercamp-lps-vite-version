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
import ListKabHalamanIupUgm from "../../Components/ListKotaLps/ListHalamanIupUgm/ListKabHalamanIupUgm";
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

const HalamanKotaIupUgm = () => {
  // =========================================
  // AMBIL SLUG KOTA
  // =========================================
  const { id } = useParams();

  // =========================================
  // FORMAT NAMA KOTA
  // =========================================
  const namaKota = formatNamaWilayah(id);

  // =========================================
  // NORMALISASI SLUG
  // =========================================
  const slugKota = String(id || "")
    .trim()
    .toLowerCase();

  // =========================================
  // CANONICAL URL
  // =========================================
  const canonicalUrl = `${DOMAIN}/bimbel-privat-iup-ugm/${encodeURIComponent(
    slugKota,
  )}`;

  // =========================================
  // SEO TITLE
  // =========================================
  const pageTitle = `Bimbel IUP UGM ${namaKota} | Les Privat Persiapan Seleksi`;

  // =========================================
  // META DESCRIPTION
  // =========================================
  const pageDescription = `Bimbel IUP UGM di ${namaKota} untuk persiapan program internasional UGM. Les privat akademik, latihan bahasa Inggris, pembahasan soal, dan pendampingan seleksi.`;

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
      name: "Persiapan International Undergraduate Program UGM",
      description:
        "Program bimbingan belajar untuk mempersiapkan seleksi International Undergraduate Program Universitas Gadjah Mada.",
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
          Bimbel & Les Privat IUP UGM di{" "}
          <span className="highlight-city">{namaKota}</span> – Persiapan Seleksi
          Program Internasional UGM
        </h1>

        <p className="desk-seo-lps">
          International Undergraduate Program (IUP) Universitas Gadjah Mada
          menjadi salah satu pilihan pendidikan bagi calon mahasiswa yang ingin
          menempuh perkuliahan melalui program internasional. Bagi siswa di{" "}
          {namaKota} yang menargetkan IUP UGM, persiapan sejak awal dapat
          membantu membangun kemampuan akademik sekaligus memahami proses
          seleksi yang berlaku pada program studi pilihan.
          <br />
          <br />
          Melalui program <strong>Bimbel & Les Privat IUP UGM</strong>,
          Supercamp Matrix menyediakan pendampingan belajar yang dapat
          disesuaikan dengan kebutuhan setiap peserta. Pembelajaran berfokus
          pada penguatan konsep akademik, latihan pemecahan masalah,
          pengembangan kemampuan bahasa Inggris, serta persiapan menghadapi
          tahapan seleksi tambahan apabila dipersyaratkan oleh program studi.
          <br />
          <br />
          Selain membantu siswa memahami materi, program bimbingan juga
          diarahkan untuk mendukung perencanaan belajar dan pemilihan target
          program studi. Melalui latihan terstruktur, pembahasan soal, dan
          evaluasi perkembangan kemampuan, siswa di {namaKota} dapat menyusun
          strategi persiapan yang lebih efektif untuk menghadapi proses seleksi
          IUP UGM sesuai tujuan akademiknya.
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
      <ListKabHalamanIupUgm />
      <FaqScLps />
      <BottomCtaLps />
    </>
  );
};

export default HalamanKotaIupUgm;
