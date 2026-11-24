import iconBenefitSc from "../../assets/Supercamp/untungnya supercamp/icon_check.webp";
import "./BenefitScLPS.css";

const BenefitScLps = () => {
  return (
    <section className="benefit-supercamp-section">
      <h2 className="title-untungnya-supercamp">
        Keunggulan Program Supercamp untuk Persiapan UTBK SNBT & Kedokteran
      </h2>

      <div className="text-img-benefit-supercamp-lp">
        <ul className="parent-list-benefit-sc-lps">
          <li className="list-benefit-sc-lps">
            <img
              src={iconBenefitSc}
              alt=""
              className="icon-untungnya-sc-lps"
              loading="lazy"
            />
            Bimbingan akademik dan personal setiap hari
          </li>

          <li className="list-benefit-sc-lps">
            <img
              src={iconBenefitSc}
              alt=""
              className="icon-untungnya-sc-lps"
              loading="lazy"
            />
            Lingkungan karantina kondusif untuk belajar lebih fokus, disiplin,
            dan produktif
          </li>

          <li className="list-benefit-sc-lps">
            <img
              src={iconBenefitSc}
              alt=""
              className="icon-untungnya-sc-lps"
              loading="lazy"
            />
            Program terstruktur dengan target nilai dan evaluasi progres secara
            berkala
          </li>

          <li className="list-benefit-sc-lps">
            <img
              src={iconBenefitSc}
              alt=""
              className="icon-untungnya-sc-lps"
              loading="lazy"
            />
            Metode belajar yang disesuaikan dengan kebutuhan dan kemampuan
            setiap siswa
          </li>

          <li className="list-benefit-sc-lps">
            <img
              src={iconBenefitSc}
              alt=""
              className="icon-untungnya-sc-lps"
              loading="lazy"
            />
            Pembelajaran intensif, sistematis, dan tepat sasaran untuk
            memaksimalkan potensi akademik
          </li>

          <li className="list-benefit-sc-lps">
            <img
              src={iconBenefitSc}
              alt=""
              className="icon-untungnya-sc-lps"
              loading="lazy"
            />
            Tidak hanya menguasai materi, tetapi juga strategi ujian, motivasi,
            dan mentalitas juara
          </li>
        </ul>

        <img
          src="/images/model-benefit-supercamp.webp"
          alt="Siswa program Supercamp mengikuti bimbingan belajar intensif untuk persiapan UTBK SNBT dan masuk Kedokteran"
          className="img-benefit-supercamp-lps"
          loading="lazy"
          decoding="async"
        />
      </div>
    </section>
  );
};

export default BenefitScLps;
