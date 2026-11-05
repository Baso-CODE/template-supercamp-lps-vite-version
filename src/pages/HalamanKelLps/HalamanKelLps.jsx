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

const HalamanKelLps = () => {
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
  const canonicalUrl = `${DOMAIN}/bimbingan-privat-supercamp-utbk-snbt/${encodeURIComponent(
    slugKelurahan,
  )}`;

  // =========================================
  // SEO TITLE
  // =========================================
  const pageTitle = `Les Privat UTBK SNBT ${namaKelurahan} | Supercamp PTN`;

  // =========================================
  // META DESCRIPTION
  // =========================================
  const pageDescription = `Les privat UTBK SNBT di ${namaKelurahan} dengan pendampingan belajar personal. Latihan soal, evaluasi tryout, dan persiapan intensif masuk PTN serta Kedokteran.`;

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
      name: "Les Privat UTBK SNBT dan Persiapan Masuk PTN",
      description:
        "Program bimbingan belajar personal untuk mempersiapkan UTBK SNBT melalui penguatan akademik, latihan soal, tryout, dan evaluasi kemampuan.",
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
          <span className="highlight-city">{namaKelurahan}</span> – Bimbingan
          Intensif Supercamp Masuk PTN
        </h1>

        <p className="desk-seo-lps">
          Setiap siswa memiliki kemampuan dan tantangan berbeda dalam
          mempersiapkan UTBK SNBT. Sebagian membutuhkan penguatan materi dasar,
          sementara yang lain perlu meningkatkan kecepatan dan ketepatan dalam
          menyelesaikan soal. Bagi siswa di {namaKelurahan}, program{" "}
          <strong>Les Privat UTBK SNBT</strong> dari Supercamp Matrix membantu
          mempersiapkan kemampuan akademik melalui pembelajaran yang disesuaikan
          dengan kebutuhan serta target perguruan tinggi.
          <br />
          <br />
          Pendampingan belajar difokuskan pada pemahaman konsep, latihan
          penalaran, literasi, pengetahuan kuantitatif, dan penalaran
          matematika. Melalui pembahasan soal bersama tutor, latihan bertahap,
          serta evaluasi hasil tryout, siswa dapat mengidentifikasi kesulitan
          belajar sekaligus menyusun prioritas materi yang perlu ditingkatkan.
          Pendekatan ini membantu proses belajar menjadi lebih terarah dan
          terukur.
          <br />
          <br />
          Untuk siswa di {namaKelurahan} yang menargetkan perguruan tinggi
          negeri seperti UI, UGM, ITB, UNDIP, maupun Fakultas Kedokteran,
          program les privat dan Supercamp dapat menjadi pilihan pendampingan
          belajar intensif. Dengan jadwal belajar yang terencana, strategi
          pengerjaan soal yang tepat, dan evaluasi perkembangan secara berkala,
          siswa dapat membangun kesiapan menghadapi seleksi masuk PTN sesuai
          kemampuan dan tujuan akademiknya.
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

export default HalamanKelLps;
