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
import ListKotaHalamanKedokteran from "../../Components/ListKotaLps/ListHalamanKedokteran/ListKotaHalamanKedokteran";
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

const HalamanKedokteran = () => {
  return (
    <>
      <Helmet>
        {/* Fix Title: Menggunakan string tunggal untuk menghindari error Helmet */}
        <title>{`Bimbel & Les Privat Masuk Kedokteran 2027 - Karantina Supercamp Matrix`}</title>

        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />

        {/* Meta Description: Fokus pada urgensi, fasilitas, dan target kampus Top Tier */}
        <meta
          name="description"
          content="Bimbel & Les Privat khusus masuk Kedokteran 2027. Program Supercamp Karantina lulus FK UI, UGM, UNAIR, UNPAD. Master Teacher Expert, modul akurat, & karantina intensif. Raih kursi FK impian Anda bersama Edumatrix!"
        />
        <meta
          name="keywords"
          content="bimbel masuk kedokteran, les privat kedokteran, karantina fk ui, karantina fk ugm, supercamp kedokteran, bimbel kedokteran terbaik, persiapan ujian masuk kedokteran"
        />

        <link
          rel="canonical"
          href="https://supercampmatrix.com/bimbel-masuk-kedokteran"
        />

        {/* Open Graph (Sangat penting karena niche kedokteran sering dibagikan antar orang tua di WA) */}
        <meta property="og:type" content="website" />
        <meta
          property="og:title"
          content="Bimbel & Les Privat Spesialis Kedokteran 2027 - Bimbel LPS"
        />
        <meta
          property="og:description"
          content="Program bimbingan intensif dan karantina (Supercamp) khusus persiapan masuk Fakultas Kedokteran PTN Favorit."
        />
        <meta
          property="og:url"
          content="https://supercampmatrix.com/bimbel-masuk-kedokteran"
        />
        <meta
          property="og:image"
          content="https://supercampmatrix.com/images/banner.webp"
        />

        {/* Schema Markup JSON-LD: Menampilkan program sebagai layanan profesional di Google */}
        <script type="application/ld+json">
          {JSON.stringify([
            {
              "@context": "https://schema.org",
              "@type": "Service",
              name: "Bimbel & Les Privat Kedokteran",
              serviceType: "Medical Entrance Prep",
              provider: {
                "@type": "EducationalOrganization",
                name: "Bimbel LPS",
                url: "https://supercampmatrix.com",
              },
              description:
                "Program bimbingan belajar khusus untuk persiapan masuk Fakultas Kedokteran melalui jalur SNBT, SIMAK UI, dan CBT UGM.",
            },
            {
              "@context": "https://schema.org",
              "@type": "FAQPage",
              mainEntity: [
                {
                  "@type": "Question",
                  name: "Apakah ada garansi masuk Kedokteran?",
                  acceptedAnswer: {
                    "@type": "Answer",
                    text: "Kami memberikan pendampingan belajar maksimal dengan Master Teacher expert dan metode proven untuk meningkatkan peluang kelulusan siswa di Fakultas Kedokteran impian.",
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
      <ListKotaHalamanKedokteran />
      <FaqScLps />
      <BottomCtaLps />
    </>
  );
};

export default HalamanKedokteran;
