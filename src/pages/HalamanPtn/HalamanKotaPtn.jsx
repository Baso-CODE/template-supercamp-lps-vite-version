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
import ListKabHalamanPtn from "../../Components/ListKotaLps/ListHalamanPtn/ListKabHalamanPtn";
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

const HalamanKotaPtn = () => {
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
  const canonicalUrl = `${DOMAIN}/bimbel-masuk-ptn/${encodeURIComponent(
    slugKota,
  )}`;

  // =========================================
  // SEO TITLE
  // =========================================
  const pageTitle = `Bimbel Masuk PTN ${namaKota} | Les Privat & Supercamp`;

  // =========================================
  // META DESCRIPTION
  // =========================================
  const pageDescription = `Bimbel masuk PTN di ${namaKota} bersama Supercamp Matrix. Persiapan UTBK SNBT, les privat intensif, tryout, dan strategi memilih jurusan serta kampus tujuan.`;

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
      name: "Program Bimbel dan Les Privat Persiapan Masuk PTN",
      description:
        "Program bimbingan belajar untuk mempersiapkan seleksi masuk perguruan tinggi negeri melalui UTBK SNBT dan jalur penerimaan lainnya.",
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
          <span className="highlight-city">{namaKota}</span> – Persiapan UTBK
          SNBT dan Program Supercamp
        </h1>

        <p className="desk-seo-lps">
          Melanjutkan pendidikan ke perguruan tinggi negeri merupakan tujuan
          penting bagi banyak siswa setelah menyelesaikan pendidikan menengah.
          Untuk menghadapi persaingan seleksi masuk PTN, calon mahasiswa perlu
          mempersiapkan kemampuan akademik sekaligus memahami jalur penerimaan
          dan pilihan program studi yang sesuai. Bagi siswa di {namaKota},
          Supercamp Matrix menyediakan program{" "}
          <strong>Bimbel & Les Privat Masuk PTN</strong> sebagai pendampingan
          belajar untuk membantu menyusun persiapan secara lebih terarah.
          <br />
          <br />
          Program pembelajaran mencakup persiapan UTBK SNBT melalui penguatan
          kemampuan penalaran, literasi, pengetahuan kuantitatif, dan penalaran
          matematika. Siswa dapat meningkatkan pemahaman melalui pembahasan
          konsep, latihan soal terstruktur, simulasi tryout, serta evaluasi
          hasil belajar. Pendekatan tersebut membantu peserta mengenali
          kemampuan akademik dan menentukan prioritas materi yang perlu
          ditingkatkan sebelum mengikuti ujian seleksi.
          <br />
          <br />
          Selain persiapan ujian, siswa di {namaKota} juga perlu
          mempertimbangkan kesesuaian jurusan, target kampus, serta jalur
          penerimaan mahasiswa baru. Melalui program les privat dan Supercamp,
          persiapan dapat disesuaikan dengan kebutuhan akademik dan tujuan
          pendidikan masing-masing peserta, baik yang menargetkan UI, UGM, ITB,
          UNAIR, UNDIP, maupun perguruan tinggi negeri lainnya.
          <br />
          <br />
          Dengan jadwal belajar yang terencana, latihan konsisten, dan
          pemantauan perkembangan kemampuan, calon mahasiswa dapat membangun
          kesiapan untuk menghadapi seleksi PTN secara lebih matang. Supercamp
          Matrix membantu siswa mengembangkan strategi belajar berdasarkan
          kemampuan awal dan target perguruan tinggi pilihan.
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
      <ListKabHalamanPtn />
      <FaqScLps />
      <BottomCtaLps />
    </>
  );
};

export default HalamanKotaPtn;
