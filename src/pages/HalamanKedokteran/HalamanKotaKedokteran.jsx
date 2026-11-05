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
import ListKabHalamanKedokteran from "../../Components/ListKotaLps/ListHalamanKedokteran/ListKabHalamanKedokteran";
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

const HalamanKotaKedokteran = () => {
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
  const canonicalUrl = `${DOMAIN}/les-privat-masuk-kedokteran/${encodeURIComponent(
    slugKota,
  )}`;

  // =========================================
  // SEO TITLE
  // =========================================
  const pageTitle = `Bimbel Kedokteran ${namaKota} | Les Privat & Supercamp FK`;

  // =========================================
  // META DESCRIPTION
  // =========================================
  const pageDescription = `Persiapkan seleksi masuk Kedokteran di ${namaKota} bersama Supercamp Matrix. Program bimbel intensif, les privat UTBK SNBT, tryout, dan pendampingan masuk FK.`;

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
      name: "Persiapan Seleksi Masuk Fakultas Kedokteran",
      description:
        "Program bimbingan belajar, les privat, dan Supercamp untuk membantu calon mahasiswa mempersiapkan seleksi masuk Fakultas Kedokteran.",
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
          Bimbel Masuk Kedokteran di{" "}
          <span className="highlight-city">{namaKota}</span> – Program Les
          Privat dan Supercamp Intensif FK
        </h1>

        <p className="desk-seo-lps">
          Menempuh pendidikan di Fakultas Kedokteran menjadi impian banyak siswa
          yang ingin berkarier dalam bidang kesehatan. Namun, persaingan masuk
          jurusan Kedokteran membutuhkan persiapan akademik yang matang dan
          strategi belajar yang terencana. Bagi siswa di {namaKota}, Supercamp
          Matrix menghadirkan program <strong>Bimbel Masuk Kedokteran</strong>{" "}
          untuk membantu calon mahasiswa mempersiapkan diri menghadapi seleksi
          Fakultas Kedokteran melalui berbagai jalur penerimaan.
          <br />
          <br />
          Program bimbingan mencakup penguatan kemampuan penalaran, literasi,
          dan pengetahuan kuantitatif yang relevan dengan UTBK SNBT. Selain itu,
          siswa dapat memperdalam pemahaman melalui latihan soal, pembahasan
          materi, simulasi tryout, serta evaluasi hasil belajar. Pendekatan ini
          membantu peserta mengenali kemampuan akademik sekaligus meningkatkan
          kesiapan menghadapi persaingan seleksi masuk Fakultas Kedokteran.
          <br />
          <br />
          Untuk siswa di {namaKota} yang menargetkan Fakultas Kedokteran UI,
          UGM, UNAIR, UNPAD, UNDIP, maupun perguruan tinggi lainnya, program les
          privat dan Supercamp dapat menjadi pilihan pendampingan belajar sesuai
          kebutuhan. Dengan mempertimbangkan kemampuan awal, target kampus, dan
          jalur seleksi, siswa dapat menyusun jadwal belajar, meningkatkan
          penguasaan materi, serta mempersiapkan langkah menuju pendidikan
          Kedokteran secara lebih terarah.
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
      <ListKabHalamanKedokteran />
      <FaqScLps />
      <BottomCtaLps />
    </>
  );
};

export default HalamanKotaKedokteran;
