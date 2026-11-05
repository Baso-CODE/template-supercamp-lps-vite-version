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

const HalamanKelIupUgm = () => {
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
  const canonicalUrl = `${DOMAIN}/bimbingan-privat-iup-ugm/${encodeURIComponent(
    slugKelurahan,
  )}`;

  // =========================================
  // SEO TITLE
  // =========================================
  const pageTitle = `Les Privat IUP UGM ${namaKelurahan} | Bimbingan Intensif`;

  // =========================================
  // META DESCRIPTION
  // =========================================
  const pageDescription = `Les privat IUP UGM di ${namaKelurahan} dengan pembelajaran personal. Persiapkan tes akademik, kemampuan bahasa Inggris, dan wawancara bersama tutor.`;

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
      name: "Les Privat Persiapan International Undergraduate Program UGM",
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
          Bimbingan Privat IUP UGM di{" "}
          <span className="highlight-city">{namaKelurahan}</span> – Persiapan
          Personal Menuju Program Internasional UGM
        </h1>

        <p className="desk-seo-lps">
          Memilih International Undergraduate Program (IUP) Universitas Gadjah
          Mada merupakan langkah penting bagi siswa yang ingin menempuh
          pendidikan dalam lingkungan akademik internasional. Bagi calon
          mahasiswa di {namaKelurahan}, program{" "}
          <strong>Les Privat IUP UGM</strong> dari Supercamp Matrix membantu
          mempersiapkan kemampuan akademik dan keterampilan yang dibutuhkan
          untuk menghadapi proses seleksi sesuai program studi pilihan.
          <br />
          <br />
          Melalui pendekatan pembelajaran personal, siswa dapat memusatkan
          perhatian pada materi yang belum dikuasai, memperkuat kemampuan
          pemecahan masalah, serta meningkatkan keterampilan menggunakan bahasa
          Inggris dalam konteks akademik. Pendampingan juga dapat mencakup
          latihan komunikasi dan simulasi wawancara apabila tahapan tersebut
          menjadi bagian dari persyaratan seleksi.
          <br />
          <br />
          Program bimbingan dirancang dengan mempertimbangkan kemampuan awal,
          kebutuhan belajar, dan target jurusan setiap peserta. Dengan latihan
          yang terarah, evaluasi perkembangan secara berkala, serta dukungan
          tutor, siswa di {namaKelurahan} dapat membangun kesiapan yang lebih
          baik untuk mengikuti seleksi IUP UGM dan memahami tantangan akademik
          pada program internasional.
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

export default HalamanKelIupUgm;
