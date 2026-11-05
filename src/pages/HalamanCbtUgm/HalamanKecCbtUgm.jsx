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
import ListKelHalamanCbtUgm from "../../Components/ListKotaLps/ListHalamanCbtUgm/ListKelHalamanCbtUgm";
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

const HalamanKecCbtUgm = () => {
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
  const canonicalUrl = `${DOMAIN}/bimbingan-privat-cbt-ugm/${encodeURIComponent(
    slugKecamatan,
  )}`;

  // =========================================
  // SEO METADATA
  // =========================================
  const pageTitle = `Les Privat CBT UGM ${namaKecamatan} | Bimbel Masuk UGM`;

  const pageDescription = `Ikuti bimbingan CBT UGM di ${namaKecamatan} dengan latihan soal terstruktur, strategi pengerjaan ujian, dan pendampingan tutor untuk persiapan seleksi mandiri UGM.`;

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
      name: "Bimbingan Persiapan CBT UGM",
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
        {/* JSON-LD */}
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
          Les Privat CBT UGM di{" "}
          <span className="highlight-city">{namaKecamatan}</span> – Bimbingan
          Intensif Persiapan Masuk UGM
        </h1>

        <p className="desk-seo-lps">
          Menghadapi ujian seleksi mandiri Universitas Gadjah Mada membutuhkan
          lebih dari sekadar menghafal materi. Siswa perlu memahami pola soal,
          melatih ketelitian, serta mengembangkan kemampuan mengatur waktu
          selama mengerjakan ujian. Melalui program{" "}
          <strong>Les Privat CBT UGM</strong> untuk siswa di {namaKecamatan},
          Supercamp Matrix menghadirkan pembelajaran yang membantu siswa
          mempersiapkan diri secara lebih terstruktur.
          <br />
          <br />
          Kegiatan belajar difokuskan pada penguatan konsep, pembahasan soal
          secara mendalam, dan latihan pengerjaan soal dengan batas waktu.
          Pendampingan tutor juga membantu siswa mengenali materi yang masih
          sulit dipahami sehingga proses belajar dapat diarahkan pada aspek yang
          membutuhkan peningkatan.
          <br />
          <br />
          Bagi siswa di {namaKecamatan} yang menargetkan Universitas Gadjah
          Mada, program bimbingan ini dapat menjadi sarana untuk membangun
          kebiasaan belajar yang konsisten, meningkatkan kesiapan menghadapi
          ujian berbasis komputer, serta menyusun strategi persiapan sesuai
          target program studi yang diinginkan.
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
      <ListKelHalamanCbtUgm />
      <FaqScLps />
      <BottomCtaLps />
    </>
  );
};

export default HalamanKecCbtUgm;
