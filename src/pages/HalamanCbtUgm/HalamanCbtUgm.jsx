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
import ListKotaHalamanCbtUgm from "../../Components/ListKotaLps/ListHalamanCbtUgm/ListKotaHalamanCbtUgm";
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

const HalamanCbtUgm = () => {
  return (
    <>
      <Helmet>
        {/* Anti-Error Title: String tunggal di dalam kurung kurawal */}
        <title>{`Bimbel & Les Privat CBT UGM 2027 - Spesialis Lolos UTUL UGM #1`}</title>

        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />

        {/* Meta Description: Hybrid Keyword + Target CBT UGM + Keunggulan Program */}
        <meta
          name="description"
          content="Bimbel & Les Privat CBT UGM terbaik. Persiapan intensif UTUL UGM 2027 Saintek, Soshum, & IPC. Modul prediksi akurat, Master Teacher berpengalaman, & drilling soal CBT UGM. Guru ke rumah atau Online. Daftar Sekarang!"
        />
        <meta
          name="keywords"
          content="bimbel cbt ugm, les privat cbt ugm, persiapan utul ugm, bimbel utul ugm terbaik, drilling soal cbt ugm, tutor privat ugm, karantina ptn ugm, Bimbel LPS"
        />

        <link
          rel="canonical"
          href="https://supercampmatrix.com/bimbel-cbt-ugm"
        />

        {/* Open Graph (WhatsApp & Social Media) */}
        <meta property="og:type" content="website" />
        <meta
          property="og:title"
          content="Bimbel & Les Privat CBT UGM 2027 - Bimbel LPS"
        />
        <meta
          property="og:description"
          content="Raih kursi Gadjah Mada melalui program spesialis Bimbel & Les Privat CBT UGM dengan metode belajar terukur."
        />
        <meta
          property="og:url"
          content="https://supercampmatrix.com/bimbel-cbt-ugm"
        />
        <meta
          property="og:image"
          content="https://supercampmatrix.com/images/banner.webp"
        />

        {/* Schema Markup JSON-LD: Untuk Rich Snippets agar Google menampilkan FAQ */}
        <script type="application/ld+json">
          {JSON.stringify([
            {
              "@context": "https://schema.org",
              "@type": "Service",
              name: "Bimbel & Les Privat CBT UGM",
              serviceType: "University Entrance Prep",
              provider: {
                "@type": "EducationalOrganization",
                name: "Bimbel LPS",
                url: "https://supercampmatrix.com",
              },
              description:
                "Program bimbingan belajar khusus untuk persiapan ujian mandiri CBT UGM (UTUL UGM).",
            },
            {
              "@context": "https://schema.org",
              "@type": "FAQPage",
              mainEntity: [
                {
                  "@type": "Question",
                  name: "Apa keunggulan program CBT UGM di Edumatrix?",
                  acceptedAnswer: {
                    "@type": "Answer",
                    text: "Kami fokus pada drilling soal prediksi CBT UGM terbaru, pendampingan oleh Master Teacher spesialis UGM, dan sistem evaluasi progress belajar berkala.",
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
      <ListKotaHalamanCbtUgm />
      <FaqScLps />
      <BottomCtaLps />
    </>
  );
};

export default HalamanCbtUgm;
