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

const HalamanKelPtn = () => {
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
  const canonicalUrl = `${DOMAIN}/guru-bimbel-masuk-ptn/${encodeURIComponent(
    slugKelurahan,
  )}`;

  // =========================================
  // SEO TITLE
  // =========================================
  const pageTitle = `Guru Les Privat Masuk PTN ${namaKelurahan} | Bimbel Intensif`;

  // =========================================
  // META DESCRIPTION
  // =========================================
  const pageDescription = `Guru les privat masuk PTN di ${namaKelurahan}. Persiapan UTBK SNBT, latihan soal, evaluasi tryout, dan pendampingan belajar sesuai target jurusan.`;

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
      name: "Guru Les Privat Persiapan Masuk Perguruan Tinggi Negeri",
      description:
        "Program pendampingan belajar individual untuk mempersiapkan seleksi masuk PTN melalui penguatan akademik, latihan UTBK SNBT, dan evaluasi kemampuan siswa.",
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
          Guru Les Privat Masuk PTN di{" "}
          <span className="highlight-city">{namaKelurahan}</span> – Bimbingan
          Personal UTBK SNBT dan Seleksi PTN
        </h1>

        <p className="desk-seo-lps">
          Mempersiapkan diri untuk masuk perguruan tinggi negeri membutuhkan
          proses belajar yang disesuaikan dengan kemampuan dan tujuan akademik
          setiap siswa. Bagi calon mahasiswa di {namaKelurahan}, program{" "}
          <strong>Guru Les Privat Masuk PTN</strong> dari Supercamp Matrix
          membantu peserta membangun kesiapan menghadapi seleksi perguruan
          tinggi melalui pembelajaran yang lebih personal dan terarah.
          <br />
          <br />
          Melalui pendampingan tutor, siswa dapat memperdalam pemahaman konsep
          akademik, melatih kemampuan penalaran, meningkatkan keterampilan
          literasi, serta mengembangkan strategi pengerjaan soal UTBK SNBT.
          Proses pembelajaran juga dapat mencakup pembahasan soal secara
          bertahap, simulasi tryout, dan evaluasi perkembangan kemampuan untuk
          membantu peserta mengenali materi yang masih perlu ditingkatkan.
          <br />
          <br />
          Untuk siswa di {namaKelurahan} yang menargetkan perguruan tinggi
          seperti UI, UGM, ITB, UNAIR, UNDIP, maupun PTN lainnya, persiapan
          belajar dapat disesuaikan dengan jurusan dan jalur penerimaan pilihan.
          Dengan jadwal yang terencana, pendampingan individual, serta latihan
          yang konsisten, siswa dapat meningkatkan kesiapan akademik dan
          menyusun langkah belajar yang lebih efektif menuju PTN impian.
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

export default HalamanKelPtn;
