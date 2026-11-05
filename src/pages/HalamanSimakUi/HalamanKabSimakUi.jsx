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
import ListKecHalamanSimakUi from "../../Components/ListHalamanSimakUi/ListKecHalamanSimakUi";
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

const HalamanKabSimakUi = () => {
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
  const canonicalUrl = `${DOMAIN}/bimbel-privat-simak-ui/${encodeURIComponent(
    slugKabupaten,
  )}`;

  // =========================================
  // SEO TITLE
  // =========================================
  const pageTitle = `Bimbel SIMAK UI ${namaKabupaten} | Les Privat Masuk UI`;

  // =========================================
  // META DESCRIPTION
  // =========================================
  const pageDescription = `Bimbel SIMAK UI di ${namaKabupaten} bersama Supercamp Matrix. Les privat intensif, latihan soal, simulasi ujian, dan persiapan seleksi masuk Universitas Indonesia.`;

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
      name: "Bimbingan Persiapan Seleksi Masuk Universitas Indonesia",
      description:
        "Program bimbingan belajar dan les privat untuk membantu siswa mempersiapkan SIMAK UI dan seleksi masuk Universitas Indonesia.",
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
          <span className="highlight-city">{namaKabupaten}</span> – Persiapan
          Intensif Seleksi Masuk Universitas Indonesia
        </h1>

        <p className="desk-seo-lps">
          Universitas Indonesia menjadi salah satu perguruan tinggi negeri yang
          banyak diminati calon mahasiswa dari berbagai daerah. Untuk menghadapi
          proses seleksi, siswa perlu memahami jalur penerimaan yang tersedia
          serta mempersiapkan kemampuan akademik sesuai program studi yang
          dituju. Bagi siswa di {namaKabupaten}, program{" "}
          <strong>Bimbel & Les Privat SIMAK UI</strong> dari Supercamp Matrix
          membantu mempersiapkan diri menghadapi seleksi masuk Universitas
          Indonesia secara lebih terarah.
          <br />
          <br />
          Pendampingan belajar difokuskan pada penguatan konsep akademik,
          latihan pemecahan masalah, serta pembahasan soal yang relevan dengan
          persyaratan seleksi. Melalui latihan terstruktur, simulasi ujian, dan
          evaluasi hasil belajar, siswa dapat mengenali materi yang sudah
          dikuasai maupun bagian yang masih membutuhkan peningkatan. Strategi
          belajar juga dapat disesuaikan dengan ketentuan ujian untuk jalur dan
          program studi yang dipilih.
          <br />
          <br />
          Selain mempersiapkan kemampuan akademik, calon mahasiswa dari{" "}
          {namaKabupaten}
          dapat menyusun target belajar berdasarkan pilihan fakultas dan jurusan
          di Universitas Indonesia. Baik untuk program reguler maupun kelas
          internasional yang memiliki ketentuan penerimaan tersendiri,
          pendampingan belajar perlu mempertimbangkan persyaratan resmi yang
          berlaku. Dengan dukungan les privat dan program intensif Supercamp,
          siswa dapat membangun kebiasaan belajar, meningkatkan kesiapan
          menghadapi seleksi, serta merencanakan langkah menuju UI secara lebih
          matang.
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
      <ListKecHalamanSimakUi />
      <FaqScLps />
      <BottomCtaLps />
    </>
  );
};

export default HalamanKabSimakUi;
