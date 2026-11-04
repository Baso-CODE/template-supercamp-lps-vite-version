import "./FasilitasSuperCamp.css";

const FasilitasSupercamp = () => {
  const fasilitasList = [
    {
      kategori: "Akomodasi & Lingkungan",
      icon: "🏡",
      items: [
        "Lokasi Supercamp nyaman, aman, dan memotivasi belajar.",
        "Dikelola secara profesional dengan fasilitas lengkap.",
        "Kamar tidur: Meja Belajar, Springbed, TV, Kulkas, AC, Kamar Mandi Dalam.",
        "Ruang santai siswa dan ruang kelas terpisah.",
        "Makan 3x sehari & Snack selama program berlangsung.",
        "Layanan Laundry harian.",
      ],
    },
    {
      kategori: "Sistem Pembelajaran",
      icon: "📚",
      items: [
        "Modul Belajar Lengkap & Prediktif UTBK SNBT.",
        "Sistem Privat (1-on-1) atau Small Class (Maks 6 Siswa).",
        "4 Sesi Belajar + 1 Sesi Klinik Malam (Senin - Jumat).",
        "Try Out UTBK Online Mingguan + Pembahasan.",
        "Intensive Quiz Harian (Senin - Jumat).",
        "Konsultasi Progres & Evaluasi Belajar Harian.",
        "Bebas Ganti Pengajar jika merasa tidak cocok.",
      ],
    },
    {
      kategori: "Layanan Eksklusif",
      icon: "✨",
      items: [
        "Asesmen Pra-Karantina (Mapping Kemampuan).",
        "Gratis Live Class Pra & Pasca Karantina.",
        "Gratis Biaya Pendaftaran UTBK SNBT.",
        "Gratis Pendaftaran 1 Ujian Mandiri.",
        "Motivation Training & Workshop Strategi Sukses.",
        "Pendampingan ke Lokasi Ujian (Area Jabodetabek).",
        "Konsultasi Pemilihan Jurusan & PTN Terarah.",
      ],
    },
  ];

  return (
    <div className="supercamp-fasilitas-container">
      <div className="header-section">
        <h2 className="supercamp-fasilitas-title">
          Fasilitas Program Supercamp
        </h2>
        <p className="supercamp-fasilitas-subtitle">
          Kenyamanan dan fasilitas terbaik untuk menunjang fokus belajarmu.
        </p>
      </div>

      <div className="fasilitas-grid">
        {fasilitasList.map((group, index) => (
          <div key={index} className="fasilitas-group-card">
            <div className="card-header">
              <div className="icon-wrapper">{group.icon}</div>
              <h3 className="fasilitas-kategori">{group.kategori}</h3>
            </div>
            <div className="divider"></div>
            <ul className="fasilitas-list">
              {group.items.map((item, itemIndex) => (
                <li key={itemIndex} className="fasilitas-item">
                  <span className="check-icon">✔</span>
                  <span className="item-text">{item}</span>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FasilitasSupercamp;
