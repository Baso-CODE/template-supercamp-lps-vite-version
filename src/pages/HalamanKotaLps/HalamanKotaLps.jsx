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
import ListKabLps from "../../Components/ListKotaLps/ListKabLps";
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
import "./HalamanKotaLps.css";

const HalamanKotaLps = () => {
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
  const canonicalUrl = `${DOMAIN}/bimbel-privat-supercamp-utbk-snbt/${encodeURIComponent(
    slugKota,
  )}`;

  // =========================================
  // SEO TITLE
  // =========================================
  const pageTitle = `Bimbel UTBK SNBT ${namaKota} | Supercamp & Les Privat PTN`;

  // =========================================
  // META DESCRIPTION
  // =========================================
  const pageDescription = `Bimbel UTBK SNBT di ${namaKota} bersama Supercamp Matrix. Persiapan masuk PTN dan Kedokteran melalui les privat, program intensif, latihan soal, serta tryout.`;

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
      name: "Program Bimbel UTBK SNBT dan Supercamp Masuk PTN",
      description:
        "Program persiapan UTBK SNBT, les privat, dan bimbingan intensif untuk membantu siswa menghadapi seleksi masuk perguruan tinggi negeri dan Fakultas Kedokteran.",
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
      <section className="parent-text-seo-lps">
        <div className="container-seo-content">
          <div className="header-seo-lps">
            <h1 className="text-seo-lps">
              Bimbel UTBK SNBT di{" "}
              <span className="highlight-city">{namaKota}</span> – Supercamp &
              Les Privat Intensif Masuk PTN
            </h1>
          </div>

          <div className="desk-seo-lps">
            <p>
              Memasuki perguruan tinggi negeri pilihan membutuhkan persiapan
              yang tidak hanya berfokus pada penguasaan materi, tetapi juga
              strategi menghadapi persaingan seleksi. Bagi siswa di{" "}
              <strong>{namaKota}</strong>, program{" "}
              <strong>Bimbel UTBK SNBT</strong> dari Supercamp Matrix hadir
              sebagai pilihan pendampingan belajar untuk mempersiapkan diri
              menghadapi ujian masuk PTN dan Fakultas Kedokteran.
            </p>

            <p>
              Melalui kombinasi{" "}
              <strong>les privat dan program Supercamp</strong>, siswa dapat
              memperkuat kemampuan penalaran, literasi, serta pemecahan masalah
              yang dibutuhkan dalam UTBK SNBT. Proses pembelajaran mencakup
              latihan soal, pembahasan materi, simulasi tryout, dan evaluasi
              perkembangan kemampuan agar peserta dapat memahami bagian yang
              masih perlu ditingkatkan.
            </p>

            <p>
              Selain mempersiapkan kemampuan akademik, siswa di {namaKota} juga
              dapat menyusun strategi belajar berdasarkan target jurusan dan
              perguruan tinggi pilihan. Pendampingan dapat diarahkan pada
              persiapan masuk kampus seperti UI, UGM, ITB, UNAIR, UNDIP, maupun
              Fakultas Kedokteran melalui jalur seleksi yang sesuai.
            </p>

            <p className="closing-statement">
              Dengan program belajar yang terencana, latihan konsisten, dan
              evaluasi kemampuan secara berkala, siswa dapat membangun kesiapan
              menghadapi UTBK SNBT secara lebih matang.{" "}
              <strong>
                Bersama Supercamp Matrix, persiapkan langkah menuju PTN impian!
              </strong>
            </p>
          </div>
        </div>
      </section>

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
      <ListKabLps />
      <FaqScLps />
      <BottomCtaLps />
    </>
  );
};

export default HalamanKotaLps;
