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
import ListKabHalamanSimakUi from "../../Components/ListHalamanSimakUi/ListKabHalamanSimakUi";
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

const HalamanKotaSimakUi = () => {
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
  const canonicalUrl = `${DOMAIN}/bimbel-simak-ui/${encodeURIComponent(
    slugKota,
  )}`;

  // =========================================
  // SEO TITLE
  // =========================================
  const pageTitle = `Bimbel SIMAK UI ${namaKota} | Les Privat Masuk UI`;

  // =========================================
  // META DESCRIPTION
  // =========================================
  const pageDescription = `Bimbel SIMAK UI di ${namaKota} bersama Supercamp Matrix. Persiapan masuk Universitas Indonesia melalui les privat, latihan soal, dan program intensif.`;

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
      name: "Bimbingan Persiapan Seleksi Masuk Universitas Indonesia",
      description:
        "Program bimbingan belajar dan les privat untuk membantu calon mahasiswa mempersiapkan SIMAK UI serta memahami jalur seleksi masuk Universitas Indonesia.",
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
          Bimbel & Les Privat SIMAK UI di{" "}
          <span className="highlight-city">{namaKota}</span> – Persiapan Seleksi
          Masuk Universitas Indonesia
        </h1>

        <p className="desk-seo-lps">
          Universitas Indonesia merupakan salah satu perguruan tinggi negeri
          yang menjadi tujuan banyak calon mahasiswa dari berbagai daerah.
          Selain memiliki beragam pilihan program studi, UI juga menyediakan
          beberapa jalur penerimaan dengan persyaratan yang perlu diperhatikan
          oleh setiap peserta. Bagi siswa di {namaKota}, program{" "}
          <strong>Bimbel & Les Privat SIMAK UI</strong> dari Supercamp Matrix
          membantu mempersiapkan kemampuan akademik dan merencanakan strategi
          belajar untuk menghadapi seleksi masuk UI.
          <br />
          <br />
          Program bimbingan difokuskan pada penguatan pemahaman materi, latihan
          pemecahan masalah, serta pengembangan kemampuan mengerjakan soal
          secara sistematis. Melalui pembelajaran bersama tutor, latihan soal
          terstruktur, simulasi ujian, dan evaluasi perkembangan, siswa dapat
          mengenali kemampuan awal sekaligus menentukan bagian yang masih perlu
          ditingkatkan sebelum mengikuti proses seleksi.
          <br />
          <br />
          Bagi calon mahasiswa di {namaKota} yang menargetkan program sarjana
          reguler maupun Kelas Khusus Internasional (KKI), persiapan belajar
          perlu disesuaikan dengan ketentuan penerimaan yang berlaku pada
          masing-masing jalur dan program studi. Pemilihan jurusan, pemahaman
          persyaratan, serta perencanaan waktu belajar menjadi bagian penting
          dalam menyusun persiapan yang lebih efektif.
          <br />
          <br />
          Melalui program les privat dan bimbingan intensif Supercamp, siswa
          dapat mengembangkan kebiasaan belajar yang konsisten, memperkuat
          kesiapan akademik, serta menyusun langkah menuju Universitas Indonesia
          berdasarkan kemampuan dan tujuan pendidikan masing-masing.
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
      <ListKabHalamanSimakUi />
      <FaqScLps />
      <BottomCtaLps />
    </>
  );
};

export default HalamanKotaSimakUi;
