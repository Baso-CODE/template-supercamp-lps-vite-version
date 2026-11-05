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
import ListKelHalamanSimakUi from "../../Components/ListHalamanSimakUi/ListKelHalamanSimakUi";
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

const HalamanKecSimakUi = () => {
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
  const canonicalUrl = `${DOMAIN}/bimbingan-simak-ui/${encodeURIComponent(
    slugKecamatan,
  )}`;

  // =========================================
  // SEO TITLE
  // =========================================
  const pageTitle = `Bimbel SIMAK UI ${namaKecamatan} | Les Privat Masuk UI`;

  // =========================================
  // META DESCRIPTION
  // =========================================
  const pageDescription = `Bimbel SIMAK UI di ${namaKecamatan} dengan les privat intensif. Latihan soal, strategi pengerjaan ujian, simulasi tes, dan pendampingan masuk UI.`;

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
      name: "Les Privat Persiapan SIMAK UI",
      description:
        "Program bimbingan belajar intensif untuk membantu calon mahasiswa mempersiapkan seleksi masuk Universitas Indonesia melalui latihan soal, simulasi ujian, dan pendampingan tutor.",
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
          Bimbel & Les Privat SIMAK UI di{" "}
          <span className="highlight-city">{namaKecamatan}</span> – Persiapan
          Intensif Seleksi Universitas Indonesia
        </h1>

        <p className="desk-seo-lps">
          Menghadapi seleksi masuk Universitas Indonesia membutuhkan persiapan
          akademik yang terarah dan kemampuan mengelola waktu selama ujian. Bagi
          calon mahasiswa di {namaKecamatan}, program{" "}
          <strong>Bimbel & Les Privat SIMAK UI</strong> dari Supercamp Matrix
          membantu peserta membangun kesiapan menghadapi proses seleksi melalui
          pendampingan belajar yang disesuaikan dengan kemampuan dan target
          program studi.
          <br />
          <br />
          Proses pembelajaran berfokus pada pemahaman konsep, latihan soal,
          serta pengembangan strategi pengerjaan ujian. Melalui pembahasan
          bersama tutor, simulasi tes, dan evaluasi hasil latihan, siswa dapat
          mengenali jenis soal yang masih sulit, meningkatkan ketelitian, serta
          melatih pengelolaan waktu saat menyelesaikan setiap bagian ujian.
          Materi pembelajaran disesuaikan dengan ketentuan seleksi dan program
          studi yang dituju.
          <br />
          <br />
          Untuk siswa di {namaKecamatan} yang menargetkan program pendidikan di
          Universitas Indonesia, persiapan juga perlu mempertimbangkan perbedaan
          persyaratan antara jalur penerimaan dan kelas yang dipilih. Program
          reguler maupun Kelas Khusus Internasional (KKI) dapat memiliki proses
          seleksi yang berbeda. Melalui les privat intensif, latihan
          terstruktur, dan pemantauan perkembangan belajar, siswa dapat menyusun
          strategi persiapan yang lebih efektif menuju UI.
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
      <ListKelHalamanSimakUi />
      <FaqScLps />
      <BottomCtaLps />
    </>
  );
};

export default HalamanKecSimakUi;
