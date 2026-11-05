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
import ListKecHalamanIupUgm from "../../Components/ListKotaLps/ListHalamanIupUgm/ListKecHalamanIupUgm";
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

const HalamanKabIupUgm = () => {
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
  const canonicalUrl = `${DOMAIN}/les-privat-iup-ugm/${encodeURIComponent(
    slugKabupaten,
  )}`;

  // =========================================
  // SEO TITLE
  // =========================================
  const pageTitle = `Les Privat IUP UGM ${namaKabupaten} | Bimbel Seleksi Internasional`;

  // =========================================
  // META DESCRIPTION
  // =========================================
  const pageDescription = `Bimbel IUP UGM di ${namaKabupaten} untuk persiapan seleksi program internasional. Pendampingan akademik, latihan bahasa Inggris, dan wawancara bersama tutor.`;

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
      name: "Persiapan Seleksi International Undergraduate Program UGM",
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
          Les Privat IUP UGM di{" "}
          <span className="highlight-city">{namaKabupaten}</span> – Persiapan
          Akademik dan Seleksi Program Internasional
        </h1>

        <p className="desk-seo-lps">
          Menempuh pendidikan melalui International Undergraduate Program (IUP)
          Universitas Gadjah Mada membutuhkan persiapan yang disesuaikan dengan
          jalur seleksi dan program studi pilihan. Bagi siswa di {namaKabupaten}
          , program <strong>Les Privat IUP UGM</strong> dari Supercamp Matrix
          membantu membangun kesiapan akademik, mengembangkan kemampuan bahasa
          Inggris, serta mempersiapkan diri menghadapi tahapan seleksi yang
          relevan.
          <br />
          <br />
          Pendampingan belajar diarahkan pada kebutuhan masing-masing peserta,
          mulai dari penguatan materi akademik, latihan pemecahan masalah,
          pengembangan kemampuan komunikasi, hingga persiapan wawancara apabila
          menjadi bagian dari seleksi program studi yang dituju. Dengan
          pembelajaran yang lebih personal, siswa dapat mengenali kemampuan yang
          perlu ditingkatkan sekaligus menyusun prioritas belajar secara lebih
          terarah.
          <br />
          <br />
          Selain berlatih mengerjakan soal, calon mahasiswa juga perlu memahami
          karakteristik program internasional yang diminati. Melalui bimbingan
          intensif dan evaluasi perkembangan belajar, siswa di {
            namaKabupaten
          }{" "}
          dapat mempersiapkan proses seleksi IUP UGM dengan strategi yang sesuai
          kemampuan, tujuan akademik, dan persyaratan program studi pilihannya.
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
      <ListKecHalamanIupUgm />
      <FaqScLps />
      <BottomCtaLps />
    </>
  );
};

export default HalamanKabIupUgm;
