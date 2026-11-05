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
import ListKelHalamanPtn from "../../Components/ListKotaLps/ListHalamanPtn/ListKelHalamanPtn";
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

const HalamanKecPtn = () => {
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
  const canonicalUrl = `${DOMAIN}/bimbingan-masuk-ptn/${encodeURIComponent(
    slugKecamatan,
  )}`;

  // =========================================
  // SEO TITLE
  // =========================================
  const pageTitle = `Les Privat Masuk PTN ${namaKecamatan} | Bimbel Intensif`;

  // =========================================
  // META DESCRIPTION
  // =========================================
  const pageDescription = `Les privat masuk PTN di ${namaKecamatan} bersama Supercamp Matrix. Persiapan UTBK SNBT, latihan soal, evaluasi belajar, dan strategi menghadapi seleksi PTN.`;

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
      name: "Les Privat Persiapan Masuk Perguruan Tinggi Negeri",
      description:
        "Program pendampingan belajar untuk membantu siswa mempersiapkan seleksi masuk PTN melalui UTBK SNBT dan jalur penerimaan lainnya.",
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
          <span className="highlight-city">{namaKecamatan}</span> – Persiapan
          Intensif UTBK SNBT dan Seleksi PTN
        </h1>

        <p className="desk-seo-lps">
          Setiap calon mahasiswa memiliki tantangan berbeda ketika mempersiapkan
          diri masuk perguruan tinggi negeri. Ada siswa yang membutuhkan
          penguatan konsep dasar, sementara yang lain perlu meningkatkan
          ketepatan dan kecepatan dalam mengerjakan soal seleksi. Bagi siswa di{" "}
          {namaKecamatan}, program{" "}
          <strong>Bimbel & Les Privat Masuk PTN</strong> dari Supercamp Matrix
          memberikan pendampingan belajar yang dapat disesuaikan dengan
          kemampuan dan target akademik masing-masing peserta.
          <br />
          <br />
          Melalui pembelajaran intensif, siswa dapat memperdalam pemahaman
          materi UTBK SNBT, mengembangkan kemampuan penalaran, meningkatkan
          literasi, serta melatih keterampilan pemecahan masalah. Pendampingan
          dilakukan melalui latihan soal bertahap, pembahasan bersama tutor,
          simulasi tryout, dan evaluasi hasil belajar untuk membantu peserta
          mengenali materi yang masih perlu ditingkatkan.
          <br />
          <br />
          Bagi siswa di {namaKecamatan} yang menargetkan perguruan tinggi
          seperti UI, UGM, ITB, UNAIR, UNDIP, maupun kampus negeri lainnya,
          strategi persiapan dapat disusun berdasarkan jurusan pilihan dan jalur
          seleksi yang akan diikuti. Dengan jadwal belajar terencana,
          pendampingan personal, serta evaluasi perkembangan kemampuan, peserta
          dapat membangun kesiapan akademik yang lebih matang untuk menghadapi
          proses seleksi masuk PTN.
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
      <ListKelHalamanPtn />
      <FaqScLps />
      <BottomCtaLps />
    </>
  );
};

export default HalamanKecPtn;
