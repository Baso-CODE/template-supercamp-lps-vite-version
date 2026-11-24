import { Helmet } from "react-helmet-async";
import AlumniPtnLps from "../../Components/AlumniPTNLPS/AlumniPTNLPS";
import BenefitScLps from "../../Components/BenefitScLPS/BenefitScLPS";
import BottomCtaLps from "../../Components/BottomCtaLps/BottomCtaLps";
import FaqScLps from "../../Components/FaqScLps/FaqScLps";
import FasilitasScLps from "../../Components/FasilitasScLps/FasilitasScLps";
import FasilitasSupercamp from "../../Components/FasilitasSuperCamp/FasilitasSuperCamp";
import JadwalKegiatanScLps from "../../Components/JadwalKegiatanScLps/JadwalKegiatanScLps";
import JumbotronLps from "../../Components/Jumbotron/Jumbotron";
import KegiatanScLps from "../../Components/KegiatanScLps/KegiatanScLps";
import KerjasamaHotel from "../../Components/KerjaSamaHotel/KerjaSamaHotel";
import ListAlumni from "../../Components/ListAlumni/ListAlumni";
import ListKotaHalamanPtn from "../../Components/ListKotaLps/ListHalamanPtn/ListKotaHalamanPtn";
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

const HomePage = () => {
  return (
    <>
      <Helmet>
        {/* Basic SEO */}
        <title>
          Bimbel Supercamp UTBK SNBT 2027 & Les Privat PTN - Bimbel LPS
        </title>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta
          name="description"
          content="Program Supercamp Matrix & Les Privat Intensif masuk Kedokteran serta PTN Favorit (UI, UGM, UNPAD, UNDIP). Metode karantina & guru datang ke rumah. Garansi kualitas terbaik!"
        />
        <meta
          name="keywords"
          content="Bimbel Supercamp, Les Privat UTBK SNBT, Simak UI, CBT UGM, Karantina Kedokteran, Bimbel LPS, Guru ke Rumah"
        />
        <link rel="canonical" href="https://supercampmatrix.com/" />
        {/* Open Graph / Facebook / WhatsApp */}
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://supercampmatrix.com/" />
        <meta
          property="og:title"
          content="Bimbel Supercamp UTBK SNBT 2027 & Karantina Kedokteran"
        />
        <meta
          property="og:description"
          content="Lolos PTN Impian bersama Supercamp Matrix. Program intensif karantina untuk persiapan UTBK, Simak UI, dan UM UGM."
        />
        <meta
          property="og:image"
          content="https://supercampmatrix.com/og-image.jpg"
        />{" "}
        {/* Ganti dengan URL gambar promo Anda */}
        {/* Twitter */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Bimbel Supercamp UTBK SNBT 2027" />
        <meta
          name="twitter:description"
          content="Persiapan intensif masuk Kedokteran dan PTN Favorit bersama Bimbel LPS."
        />
        {/* Schema Markup (JSON-LD) - Sangat Penting untuk Peringkat 1 */}
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "EducationalOrganization",
            name: "Bimbel LPS - Supercamp Matrix",
            url: "https://supercampmatrix.com/",
            logo: "https://apps.lesprivatmasukptn.com/images/LOGO2.webp",
            description:
              "Bimbel persiapan masuk PTN dan Kedokteran terbaik di Indonesia.",
            address: {
              "@type": "PostalAddress",
              addressLocality: "Yogyakarta",
              addressCountry: "ID",
            },
            contactPoint: {
              "@type": "ContactPoint",
              telephone: "+62-822-5868-9993",
              contactType: "Customer Service",
            },
          })}
        </script>
      </Helmet>

      {/* Konten tetap sama, pastikan komponen di dalamnya menggunakan tag semantik (h1, h2, section) */}
      <main>
        <JumbotronLps />
        <LulusanLps />
        <AlumniPtnLps />
        <BenefitScLps />
        <FasilitasSupercamp />
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
        <ListKotaHalamanPtn />
        <FaqScLps />
        <BottomCtaLps />
      </main>
    </>
  );
};

export default HomePage;
