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

const HalamanKelKedokteran = () => {
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
  const canonicalUrl = `${DOMAIN}/guru-les-privat-masuk-kedokteran/${encodeURIComponent(
    slugKelurahan,
  )}`;

  // =========================================
  // SEO TITLE
  // =========================================
  const pageTitle = `Les Privat Kedokteran ${namaKelurahan} | Bimbel Intensif FK`;

  // =========================================
  // META DESCRIPTION
  // =========================================
  const pageDescription = `Cari les privat Kedokteran di ${namaKelurahan}? Persiapkan seleksi masuk FK melalui bimbingan personal, latihan UTBK SNBT, tryout, dan evaluasi belajar.`;

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
      name: "Les Privat Persiapan Masuk Fakultas Kedokteran",
      description:
        "Program pendampingan belajar personal untuk membantu siswa mempersiapkan seleksi masuk Fakultas Kedokteran melalui penguatan akademik, latihan soal, dan evaluasi kemampuan.",
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
          Guru Les Privat Masuk Kedokteran di{" "}
          <span className="highlight-city">{namaKelurahan}</span> – Bimbingan
          Personal Persiapan Fakultas Kedokteran
        </h1>

        <p className="desk-seo-lps">
          Memiliki cita-cita menjadi dokter merupakan langkah awal dari
          perjalanan pendidikan yang membutuhkan persiapan akademik secara
          serius. Bagi siswa di {namaKelurahan} yang ingin melanjutkan
          pendidikan ke Fakultas Kedokteran, Supercamp Matrix menyediakan
          program <strong>Guru Les Privat Masuk Kedokteran</strong> untuk
          membantu peserta membangun kemampuan belajar sesuai kebutuhan dan
          target perguruan tinggi.
          <br />
          <br />
          Melalui pendekatan les privat yang lebih personal, siswa dapat
          mempelajari kembali materi yang belum dikuasai, meningkatkan kemampuan
          berpikir logis, serta berlatih mengerjakan soal seleksi secara
          bertahap. Pembelajaran diarahkan pada penguatan kemampuan penalaran,
          literasi, dan pengetahuan kuantitatif yang relevan dengan UTBK SNBT.
          Evaluasi hasil latihan membantu siswa mengenali kelemahan akademik dan
          menentukan prioritas belajar berikutnya.
          <br />
          <br />
          Untuk calon mahasiswa dari {namaKelurahan} yang menargetkan Fakultas
          Kedokteran UI, UGM, UNAIR, UNDIP, maupun universitas lainnya,
          persiapan belajar dapat disesuaikan dengan jalur seleksi dan target
          kampus pilihan. Dengan pendampingan tutor, latihan soal terstruktur,
          serta evaluasi perkembangan belajar, siswa dapat meningkatkan kesiapan
          akademik dan membangun kepercayaan diri menghadapi proses seleksi
          masuk Fakultas Kedokteran.
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

export default HalamanKelKedokteran;
