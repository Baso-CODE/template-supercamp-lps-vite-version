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
import ListKecHalamanPtn from "../../Components/ListKotaLps/ListHalamanPtn/ListKecHalamanPtn";
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

const HalamanKabPtn = () => {
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
  const canonicalUrl = `${DOMAIN}/bimbel-les-privat-masuk-ptn/${encodeURIComponent(
    slugKabupaten,
  )}`;

  // =========================================
  // SEO TITLE
  // =========================================
  const pageTitle = `Bimbel Masuk PTN ${namaKabupaten} | Les Privat & Supercamp`;

  // =========================================
  // META DESCRIPTION
  // =========================================
  const pageDescription = `Bimbel masuk PTN di ${namaKabupaten} bersama Supercamp Matrix. Persiapan UTBK SNBT, les privat intensif, latihan soal, dan strategi memilih jurusan PTN.`;

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
      name: "Bimbingan Persiapan Masuk Perguruan Tinggi Negeri",
      description:
        "Program bimbingan belajar untuk mempersiapkan seleksi masuk PTN melalui UTBK SNBT dan jalur seleksi lainnya.",
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
          Bimbel & Les Privat Masuk PTN di{" "}
          <span className="highlight-city">{namaKabupaten}</span> – Persiapan
          UTBK SNBT dan Seleksi Perguruan Tinggi
        </h1>

        <p className="desk-seo-lps">
          Menentukan perguruan tinggi dan jurusan yang sesuai merupakan salah
          satu keputusan penting bagi siswa yang akan melanjutkan pendidikan.
          Selain mempertimbangkan minat dan kemampuan, calon mahasiswa juga
          perlu mempersiapkan diri menghadapi persaingan seleksi masuk perguruan
          tinggi negeri. Bagi siswa di {namaKabupaten}, program{" "}
          <strong>Bimbel Masuk PTN</strong> dari Supercamp Matrix menghadirkan
          pendampingan belajar untuk membantu menyusun persiapan akademik secara
          lebih terarah.
          <br />
          <br />
          Melalui program les privat dan Supercamp, siswa dapat memperkuat
          kemampuan penalaran, literasi, serta pemecahan masalah yang dibutuhkan
          dalam UTBK SNBT. Pembelajaran juga mencakup latihan soal, pembahasan
          materi, simulasi tryout, dan evaluasi perkembangan kemampuan. Hasil
          evaluasi dapat digunakan untuk menentukan prioritas belajar sekaligus
          membantu peserta memahami materi yang masih perlu ditingkatkan.
          <br />
          <br />
          Selain mempersiapkan ujian, siswa di {namaKabupaten} dapat
          mempertimbangkan berbagai pilihan perguruan tinggi dan jalur seleksi
          sesuai tujuan akademiknya. Dengan pendampingan belajar yang
          disesuaikan dengan kemampuan awal, target jurusan, serta waktu
          persiapan, program ini membantu peserta membangun strategi yang lebih
          efektif untuk menghadapi proses penerimaan mahasiswa baru di PTN
          pilihan.
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
      <ListKecHalamanPtn />
      <FaqScLps />
      <BottomCtaLps />
    </>
  );
};

export default HalamanKabPtn;
