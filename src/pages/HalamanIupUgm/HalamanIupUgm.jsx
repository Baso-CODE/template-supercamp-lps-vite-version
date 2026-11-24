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
import ListKotaHalamanIupUgm from "../../Components/ListKotaLps/ListHalamanIupUgm/ListKotaHalamanIupUgm";
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

const HalamanIupUgm = () => {
  return (
    <>
      <Helmet>
        {/* Anti-Error Title: String tunggal di dalam kurung kurawal */}
        <title>{`Bimbel & Les Privat IUP UGM 2027 - Spesialis Intake 1, 2, & 3`}</title>

        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />

        {/* Meta Description: Fokus pada urgensi, persiapan subtest (GMST/AcEPT), dan target FK/Non-FK */}
        <meta
          name="description"
          content="Bimbel & Les Privat IUP UGM terbaik 2027. Persiapan intensif GMST, AcEPT, Interview, & Microteaching. Spesialis lulus IUP Kedokteran (FK) & Non-FK. Master Teacher Expert & drilling soal terbaru. Daftar Sekarang!"
        />
        <meta
          name="keywords"
          content="bimbel iup ugm, les privat iup ugm, persiapan gmst ugm, pelatihan acept ugm, bimbel iup kedokteran, tutor privat iup ugm, intake iup ugm, Bimbel LPS"
        />

        <link
          rel="canonical"
          href="https://supercampmatrix.com/bimbel-iup-ugm"
        />

        {/* Open Graph (WhatsApp Preview Premium) */}
        <meta property="og:type" content="website" />
        <meta
          property="og:title"
          content="Bimbel & Les Privat IUP UGM 2027 - Spesialis Lolos Intake UGM"
        />
        <meta
          property="og:description"
          content="Program bimbingan intensif spesialis lulus International Undergraduate Program (IUP) UGM dengan metode belajar terukur."
        />
        <meta
          property="og:url"
          content="https://supercampmatrix.com/bimbel-iup-ugm"
        />
        <meta
          property="og:image"
          content="https://supercampmatrix.com/images/banner.webp"
        />

        {/* Schema Markup JSON-LD: Menampilkan program sebagai layanan profesional untuk Rich Snippets */}
        <script type="application/ld+json">
          {JSON.stringify([
            {
              "@context": "https://schema.org",
              "@type": "Service",
              name: "Bimbel & Les Privat IUP UGM",
              serviceType: "International Program Entrance Prep",
              provider: {
                "@type": "EducationalOrganization",
                name: "Bimbel LPS",
                url: "https://supercampmatrix.com",
              },
              description:
                "Bimbingan belajar khusus persiapan masuk IUP UGM mencakup GMST, AcEPT, dan Interview.",
            },
            {
              "@context": "https://schema.org",
              "@type": "FAQPage",
              mainEntity: [
                {
                  "@type": "Question",
                  name: "Apakah Edumatrix menyediakan persiapan GMST dan AcEPT?",
                  acceptedAnswer: {
                    "@type": "Answer",
                    text: "Ya, kami fokus pada materi GMST (Gadjah Mada Scholastic Test) dan AcEPT untuk memastikan siswa siap menghadapi seleksi IUP UGM.",
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
      <ListKotaHalamanIupUgm />
      <FaqScLps />
      <BottomCtaLps />
    </>
  );
};

export default HalamanIupUgm;
