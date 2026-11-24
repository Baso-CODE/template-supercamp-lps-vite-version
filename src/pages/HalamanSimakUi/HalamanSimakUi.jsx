import { Helmet } from "react-helmet-async";
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
import ListKotaHalamanSimakUi from "../../Components/ListHalamanSimakUi/ListKotaHalamanSimakUi";
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

const HalamanSimakUi = () => {
  return (
    <>
      <Helmet>
        {/* Anti-Error Title: Menggunakan satu string utuh agar aman di React Helmet */}
        <title>{`Bimbel & Les Privat SIMAK UI 2027 - Spesialis Kelas Reguler & KKI`}</title>

        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />

        {/* Meta Description: Fokus pada spesialisasi, modul, dan hasil lulusan */}
        <meta
          name="description"
          content="Bimbel & Les Privat SIMAK UI terbaik. Program intensif SIMAK UI Reguler & KKI (International Class). Modul prediksi akurat, Master Teacher berpengalaman, & Tryout khusus UI. Guru ke rumah atau Online. Daftar sekarang!"
        />
        <meta
          name="keywords"
          content="bimbel simak ui, les privat simak ui, persiapan simak kki, bimbel kki ui, drilling soal simak ui, tutor privat simak ui, karantina simak ui, Bimbel LPS"
        />

        <link
          rel="canonical"
          href="https://supercampmatrix.com/bimbel-simak-ui"
        />

        {/* Open Graph (Optimal untuk WhatsApp Preview) */}
        <meta property="og:type" content="website" />
        <meta
          property="og:title"
          content="Bimbel & Les Privat SIMAK UI & KKI 2027 - Bimbel LPS"
        />
        <meta
          property="og:description"
          content="Program bimbingan intensif spesialis lulus SIMAK UI dan Kelas Internasional (KKI) dengan metode belajar terukur."
        />
        <meta
          property="og:url"
          content="https://supercampmatrix.com/bimbel-simak-ui"
        />
        <meta
          property="og:image"
          content="https://supercampmatrix.com/images/banner.webp"
        />

        {/* Schema Markup JSON-LD: Untuk Rich Snippets di Google */}
        <script type="application/ld+json">
          {JSON.stringify([
            {
              "@context": "https://schema.org",
              "@type": "Service",
              name: "Bimbel & Les Privat SIMAK UI",
              serviceType: "University Entrance Prep",
              provider: {
                "@type": "EducationalOrganization",
                name: "Bimbel LPS",
                url: "https://supercampmatrix.com",
              },
              description:
                "Bimbingan belajar khusus persiapan SIMAK UI Reguler, Paralel, dan Kelas Internasional (KKI).",
            },
            {
              "@context": "https://schema.org",
              "@type": "FAQPage",
              mainEntity: [
                {
                  "@type": "Question",
                  name: "Apakah tersedia persiapan untuk SIMAK KKI UI?",
                  acceptedAnswer: {
                    "@type": "Answer",
                    text: "Ya, kami menyediakan program khusus SIMAK KKI dengan pengantar bahasa Inggris dan drilling soal sesuai standar Kelas Internasional UI.",
                  },
                },
              ],
            },
          ])}
        </script>
      </Helmet>
      <JumbotronLps />
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
      <ListKotaHalamanSimakUi />
      <FaqScLps />
      <BottomCtaLps />
    </>
  );
};

export default HalamanSimakUi;
