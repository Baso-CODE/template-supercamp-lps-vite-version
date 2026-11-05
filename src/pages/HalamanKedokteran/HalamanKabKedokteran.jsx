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
import ListKecHalamanKedokteran from "../../Components/ListKotaLps/ListHalamanKedokteran/ListKecHalamanKedokteran";
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

const HalamanKabKedokteran = () => {
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
  const canonicalUrl = `${DOMAIN}/bimbingan-masuk-kedokteran/${encodeURIComponent(
    slugKabupaten,
  )}`;

  // =========================================
  // SEO TITLE
  // =========================================
  const pageTitle = `Bimbel Kedokteran ${namaKabupaten} | Les Privat Masuk FK`;

  // =========================================
  // META DESCRIPTION
  // =========================================
  const pageDescription = `Bimbel masuk Kedokteran di ${namaKabupaten} dengan program les privat dan Supercamp intensif. Persiapan UTBK SNBT, latihan soal, tryout, dan strategi masuk FK.`;

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
      name: "Bimbingan Persiapan Masuk Fakultas Kedokteran",
      description:
        "Program bimbingan belajar dan les privat untuk mempersiapkan seleksi masuk Fakultas Kedokteran melalui UTBK SNBT maupun jalur seleksi perguruan tinggi lainnya.",
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
          Bimbel & Les Privat Masuk Kedokteran di{" "}
          <span className="highlight-city">{namaKabupaten}</span> – Program
          Intensif Persiapan Fakultas Kedokteran
        </h1>

        <p className="desk-seo-lps">
          Menjadi mahasiswa Fakultas Kedokteran merupakan tujuan pendidikan yang
          membutuhkan komitmen belajar dan persiapan akademik secara konsisten.
          Bagi siswa di {namaKabupaten} yang menargetkan jurusan Kedokteran,
          Supercamp Matrix menghadirkan program{" "}
          <strong>Bimbel & Les Privat Masuk Kedokteran</strong> untuk membantu
          mempersiapkan kemampuan menghadapi seleksi masuk perguruan tinggi,
          baik melalui UTBK SNBT maupun jalur seleksi lainnya.
          <br />
          <br />
          Program pembelajaran dirancang untuk membantu peserta mengembangkan
          kemampuan penalaran, literasi, dan pemecahan masalah yang dibutuhkan
          dalam proses seleksi. Melalui pembahasan materi, latihan soal
          terstruktur, simulasi tryout, serta evaluasi hasil belajar, siswa
          dapat mengenali kemampuan yang sudah dikuasai dan menentukan materi
          yang masih perlu ditingkatkan.
          <br />
          <br />
          Bagi calon mahasiswa dari {namaKabupaten}
          yang memiliki target Fakultas Kedokteran di UI, UGM, UNAIR, UNDIP,
          maupun perguruan tinggi lainnya, pendampingan belajar dapat
          disesuaikan dengan kemampuan awal, target kampus, serta jalur seleksi
          pilihan. Melalui kombinasi les privat dan program Supercamp intensif,
          siswa dapat membangun kebiasaan belajar yang lebih terarah,
          meningkatkan kesiapan menghadapi ujian, dan menyusun strategi untuk
          mencapai tujuan pendidikan di bidang Kedokteran.
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
      <ListKecHalamanKedokteran />
      <FaqScLps />
      <BottomCtaLps />
    </>
  );
};

export default HalamanKabKedokteran;
