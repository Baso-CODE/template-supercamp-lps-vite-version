import "./WaktuPelaksanaanSc.css";

const WaktuPelaksanaanSc = () => {
  return (
    <section className="superparent-waktu-pelaksanaan-sc">
      <div className="text-waktu-pelaksanaa">
        <span className="text-pelaksanaan-with-bg">
          Jadwal Pelaksanaan UTBK SNBT Maret 2027
        </span>

        <h2 className="title-pelaksanaan-sc">
          Tersisa 15 Kursi Program Supercamp <br />
          Persiapan UTBK SNBT & Masuk Kedokteran
        </h2>

        <p className="desk-pelaksanaan-sc">
          Program bimbel intensif Supercamp dirancang untuk membantu siswa
          meraih skor terbaik pada UTBK SNBT 2027 dan meningkatkan peluang lolos
          ke Fakultas Kedokteran serta PTN favorit. Kursi terbatas, segera
          amankan tempat Anda.
        </p>
      </div>

      <img
        src="/images/icon-waktu-pelaksanaan.webp"
        alt="Ilustrasi persiapan UTBK SNBT 2027 bersama program bimbel intensif Supercamp"
        className="img-waktu-pelaksanaan"
        loading="lazy"
        decoding="async"
      />
    </section>
  );
};

export default WaktuPelaksanaanSc;
