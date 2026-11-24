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

const HalamanPtn = () => {
  return (
    <>
      <Helmet>
        {/* Basic SEO - Menggabungkan Bimbel & Les Privat dengan Fokus PTN 2027 */}
        <title>
          Bimbel & Les Privat Masuk PTN 2027 - Spesialis Kedokteran & PTN
          Favorit
        </title>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />

        {/* Meta Description - Mengandung Fitur Unggulan & Social Proof */}
        <meta
          name="description"
          content="Bimbel & Les Privat Masuk PTN #1. Program intensif UTBK SNBT, SIMAK UI, & CBT UGM. Modul lengkap, Master Teacher berpengalaman, & Tryout akurat. Guru ke rumah atau Online. Garansi kualitas terbaik!"
        />
        <meta
          name="keywords"
          content="bimbel masuk ptn, les privat utbk snbt, bimbel kedokteran terbaik, persiapan simak ui, cbt ugm 2027, karantina ptn, Bimbel LPS, guru privat ptn"
        />

        <link
          rel="canonical"
          href="https://supercampmatrix.com/bimbel-masuk-ptn"
        />

        {/* Open Graph (Optimal untuk Share ke Orang Tua Siswa via WA) */}
        <meta property="og:type" content="website" />
        <meta
          property="og:title"
          content="Bimbel & Les Privat Masuk PTN 2027 - Bimbel LPS"
        />
        <meta
          property="og:description"
          content="Raih kursi PTN Impian (UI, UGM, UNPAD, UNAIR) dengan program belajar intensif dan terukur."
        />
        <meta
          property="og:url"
          content="https://supercampmatrix.com/bimbel-masuk-ptn"
        />
        <meta
          property="og:image"
          content="https://supercampmatrix.com/images/banner.webp"
        />

        {/* Schema Markup JSON-LD - Membuat Google memberikan 'Bintang' atau 'FAQ' di hasil pencarian */}
        <script type="application/ld+json">
          {JSON.stringify([
            {
              "@context": "https://schema.org",
              "@type": "Service",
              name: "Bimbel & Les Privat Masuk PTN",
              serviceType: "Education",
              provider: {
                "@type": "EducationalOrganization",
                name: "Bimbel LPS",
                url: "https://supercampmatrix.com",
              },
              description:
                "Program bimbingan belajar intensif persiapan UTBK SNBT, SIMAK UI, dan CBT UGM.",
            },
            {
              "@context": "https://schema.org",
              "@type": "FAQPage",
              mainEntity: [
                {
                  "@type": "Question",
                  name: "Apa keunggulan Bimbel & Les Privat di Edumatrix?",
                  acceptedAnswer: {
                    "@type": "Answer",
                    text: "Kami menyediakan Master Teacher berpengalaman, modul belajar prediksi akurat, tryout rutin, dan laporan perkembangan belajar siswa secara berkala.",
                  },
                },
                {
                  "@type": "Question",
                  name: "Apakah tersedia layanan guru datang ke rumah?",
                  acceptedAnswer: {
                    "@type": "Answer",
                    text: "Ya, kami menyediakan layanan les privat guru datang ke rumah untuk berbagai wilayah di Indonesia serta pilihan kelas online interaktif.",
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
      <ListKotaHalamanPtn />
      <FaqScLps />
      <BottomCtaLps />
    </>
  );
};

export default HalamanPtn;
