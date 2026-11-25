import lulusanLps from "../../assets/Supercamp/lulusan/lulusan.webp";
import successStory from "../../assets/Supercamp/lulusan/success-story.webp";
import "./LulusanLPS.css";

const LulusanLps = () => {
  return (
    <section
      className="box-lulusan-lps"
      aria-label="Success Stories Alumni Supercamp Matrix">
      <div className="lulusan-lps-container">
        {/* GAMBAR LULUSAN UTAMA */}
        <img
          src={lulusanLps}
          alt="Daftar siswa Supercamp yang lolos ke PTN favorit seperti UI, UGM, UNPAD, UNAIR, dan kampus negeri terbaik lainnya"
          className="img-lulusan-lps"
          loading="lazy"
          decoding="async"
        />

        {/* SUCCESS STORIES TAMBAHAN */}
        <div className="lulusan-lps-glass-card">
          <img
            src={successStory}
            alt="Success Stories alumni Supercamp Matrix yang berhasil lolos seleksi masuk Fakultas Kedokteran dan Perguruan Tinggi Negeri favorit"
            className="img-success-story-lps"
            loading="lazy"
            decoding="async"
            width="1268"
            height="1173"
          />
        </div>
      </div>
    </section>
  );
};

export default LulusanLps;
