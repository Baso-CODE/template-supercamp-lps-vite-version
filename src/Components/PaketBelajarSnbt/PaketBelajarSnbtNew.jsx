import { faCheckCircle } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "./PaketBelajarSnbtNew.css";

const packageData = [
  {
    id: "priority",
    badge: "PROGRAM UNGGULAN",
    label: "PAKET PRIVAT",
    title: "PRIORITY",
    session: "Paket 10, 20, atau 40 sesi",
    description:
      "Layanan lebih fleksibel untuk pengalaman belajar yang lebih maksimal.",
    buttonText: "Pilih Paket Priority",
    whatsappName: "Kak Fina",
    whatsappNumber: "6281311778441",
    isPopular: true,
    features: [
      "One on one tutoring",
      "Pilihan durasi belajar 90 atau 120 menit",
      "Bebas memilih tutor sesuai preferensi",
      "Jadwal belajar lebih fleksibel",
      "Kemudahan dalam pengajuan reschedule",
      "Prioritas penggantian tutor apabila kurang sesuai",
      "Modul persiapan UTBK SNBT",
      "E-Book latihan soal UTBK",
      "Free Asesmen UTBK",
      "Free Tryout Online UTBK SNBT",
      "Laporan perkembangan belajar",
      "Gabung grup WA siswa",
      "Pendampingan belajar yang lebih personal",
    ],
  },
  {
    id: "reguler",
    badge: "PAKET HEMAT",
    label: "PAKET PRIVAT",
    title: "REGULER",
    session: "Paket 4, 8, atau 12 sesi",
    description: "Pilihan hemat dengan fasilitas belajar lengkap.",
    buttonText: "Pilih Paket Reguler",
    whatsappName: "Kak Fani",
    whatsappNumber: "6282258689993",
    features: [
      "One on one tutoring",
      "Pilihan durasi belajar 90 atau 120 menit",
      "Jadwal belajar tetap dan teratur setiap minggu",
      "Tutor direkomendasikan sesuai kebutuhan siswa",
      "E-Book latihan soal UTBK SNBT",
      "Free Asesmen UTBK",
      "Laporan perkembangan belajar",
      "Reschedule maksimal 2 kali selama masa paket",
      "Request penggantian tutor maksimal 2 kali selama masa paket",
      "Gabung grup WA siswa",
    ],
  },
  {
    id: "online-class",
    badge: "KELAS KELOMPOK",
    label: "PROGRAM ONLINE",
    title: "ONLINE CLASS",
    session: "Pembelajaran intensif sistem kelas kelompok",
    description:
      "Program belajar terarah dengan kelas kelompok yang interaktif dan fasilitas lengkap.",
    buttonText: "Pilih Online Class",
    whatsappName: "Kak Ririn",
    whatsappNumber: "6285774023474",
    features: [
      "Live Zoom interaktif - 12 sesi durasi 1,5 jam per sesi",
      "Asesmen Awal UTBK SNBT",
      "Tryout UTBK SNBT",
      "Worksheet soal prediktif UTBK SNBT",
      "Modul eksklusif UTBK SNBT 2027",
      "Rekaman kelas pembelajaran",
      "Grup WhatsApp eksklusif siswa",
      "Online class",
      "Laporan perkembangan belajar bulanan",
      "Sertifikat keikutsertaan",
    ],
  },
];

const createWhatsappLink = (pkg) => {
  const message = `Halo ${pkg.whatsappName}, saya ingin konsultasi dan daftar ${pkg.title} melalui https://supercampmatrix.com/`;
  return `https://wa.me/${pkg.whatsappNumber}?text=${encodeURIComponent(
    message,
  )}`;
};

const PaketBelajarSnbtNew = () => {
  return (
    <section className="top-parent-paket-snbt-new">
      <div className="heading-paket-wrapper">
        <h2 className="title-paket-snbt-new">
          Selain Program Supercamp di Atas,
          <br />
          Tersedia Juga Program Privat & Online Class
        </h2>

        <p className="desk-main-paket-snbt-new">
          Pilih layanan belajar yang paling sesuai dengan kebutuhanmu:
          fleksibel, hemat, atau intensif bersama kelas kelompok.
        </p>
      </div>

      <div className="parent-paket-snbt-new">
        {packageData.map((pkg) => (
          <article
            className={`paket-card liquid-glass-card ${pkg.id}`}
            key={pkg.id}>
            {/* Ribbon kategori di pojok kartu */}
            <div className="paket-ribbon-wrapper">
              <span className="paket-ribbon">{pkg.badge}</span>
            </div>

            <div className="glass-highlight" aria-hidden="true" />

            <div className="paket-card-inner">
              <p className="text-paket-privat-lps">{pkg.label}</p>

              <h3 className="child-title-paket-snbt-new">{pkg.title}</h3>

              <p className="child-subtitle-paket-snbt-new">{pkg.session}</p>

              <p className="paket-description">{pkg.description}</p>

              <hr className="garis-paket-snbt-new" />

              <ul className="parent-rincian-paket">
                {pkg.features.map((feature, index) => (
                  <li className="rincian-paket" key={`${pkg.id}-${index}`}>
                    <span className="check-icon-wrap" aria-hidden="true">
                      <FontAwesomeIcon
                        className="color-check"
                        icon={faCheckCircle}
                      />
                    </span>

                    <span>{feature}</span>
                  </li>
                ))}
              </ul>

              <a
                href={createWhatsappLink(pkg)}
                target="_blank"
                rel="noopener noreferrer"
                className="paket-link-button btn-parent-paket-snbt-new"
                aria-label={`Pilih ${pkg.title} dan chat WhatsApp ${pkg.whatsappName}`}>
                {pkg.buttonText}
              </a>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
};

export default PaketBelajarSnbtNew;
