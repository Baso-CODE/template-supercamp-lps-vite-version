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
import ListKelHalamanKedokteran from "../../Components/ListKotaLps/ListHalamanKedokteran/ListKelHalamanKedokteran";
import LulusanLps from "../../Components/LulusanLPS/LulusanLPS";
import PaketBelajarSnbtNew from "../../Components/PaketBelajarSnbt/PaketBelajarSnbtNew";
import PaketSupercampLps from "../../Components/PaketSupercamp/PaketSupercampLps";
import SlideCtaLps from "../../Components/SlideCtaLps/SlideCtaLps";
import TargetBelajarLps from "../../Components/TargetBelajarLps/TargetBelajarLps";
import TestimoniLps from "../../Components/TestimoniLps/TestimoniLps";
import TestimoniLps2 from "../../Components/TestimoniLps2/TestimoniLps2";
import VenueScLps from "../../Components/VenueScLps/VenueScLps";
import VideoScLps from "../../Components/VideoScLps/VideoScLps";
import WaktuPelaksanaanSc from "../../Components/WaktuPelaksanaanSc/WaktuPelaksanaanSc";
import { DOMAIN } from "../../utils/domain";
import formatNamaWilayah from "../../utils/formatNamaWilayah";

const HalamanKecKedokteran = () => {
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
  const canonicalUrl = `${DOMAIN}/bimbel-les-privat-masuk-kedokteran/${encodeURIComponent(
    slugKecamatan,
  )}`;

  // =========================================
  // SEO TITLE
  // =========================================
  const pageTitle = `Les Privat Kedokteran ${namaKecamatan} | Bimbel Masuk FK`;

  // =========================================
  // META DESCRIPTION
  // =========================================
  const pageDescription = `Persiapan masuk Fakultas Kedokteran di ${namaKecamatan} melalui les privat intensif, latihan UTBK SNBT, evaluasi kemampuan, dan pendampingan tutor.`;

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
        "Pendampingan belajar intensif untuk persiapan seleksi Fakultas Kedokteran melalui UTBK SNBT dan jalur penerimaan perguruan tinggi lainnya.",
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
          <span className="highlight-city">{namaKecamatan}</span> – Pendampingan
          Intensif Persiapan Masuk FK
        </h1>

        <p className="desk-seo-lps">
          Persiapan menuju Fakultas Kedokteran membutuhkan strategi belajar yang
          disesuaikan dengan tingkat persaingan dan kemampuan masing-masing
          calon mahasiswa. Bagi siswa di {namaKecamatan}, program{" "}
          <strong>Bimbel & Les Privat Masuk Kedokteran</strong> dari Supercamp
          Matrix memberikan pendampingan belajar untuk membantu peserta
          memperkuat kemampuan akademik sekaligus mempersiapkan diri menghadapi
          berbagai jalur seleksi perguruan tinggi.
          <br />
          <br />
          Proses pembelajaran berfokus pada penguasaan materi UTBK SNBT,
          termasuk kemampuan penalaran, literasi, pengetahuan kuantitatif, dan
          penalaran matematika. Melalui latihan soal bertahap, pembahasan
          bersama tutor, serta evaluasi hasil tryout, siswa dapat mengenali
          bagian yang masih membutuhkan peningkatan dan menentukan prioritas
          belajar secara lebih efektif.
          <br />
          <br />
          Untuk siswa di {namaKecamatan} yang menargetkan Fakultas Kedokteran
          UI, UGM, UNAIR, UNDIP, maupun universitas lainnya, pendampingan dapat
          diarahkan pada kebutuhan akademik, target kampus, dan jalur seleksi
          yang dipilih. Dengan jadwal belajar yang terencana, latihan konsisten,
          serta evaluasi perkembangan kemampuan, program les privat dan
          Supercamp membantu calon mahasiswa membangun kesiapan menghadapi
          seleksi masuk Fakultas Kedokteran.
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
      <TestimoniLps />
      <TestimoniLps2 />
      <ListAlumni />
      <ListKelHalamanKedokteran />
      <FaqScLps />
      <BottomCtaLps />
    </>
  );
};

export default HalamanKecKedokteran;
