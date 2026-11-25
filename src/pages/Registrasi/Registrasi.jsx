import { faWhatsapp } from "@fortawesome/free-brands-svg-icons";
import {
  faArrowRight,
  faChevronDown,
  faGraduationCap,
  faHeadset,
  faShieldHalved,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useEffect, useState } from "react";
import { Helmet } from "react-helmet-async";
import "./Registrasi.css";

const WEBSITE_URL = "https://supercampmatrix.com";
const STORAGE_KEY = "supercamp_registrasi_cs_rotation";

const customerServices = [
  {
    name: "Kak Fina",
    phone: "6281311778441",
    display: "0813-1177-8441",
  },
  {
    name: "Kak Fani",
    phone: "6282258689993",
    display: "0822-5868-9993",
  },
  {
    name: "Kak Ririn",
    phone: "6285774023474",
    display: "0857-7402-3474",
  },
];

const programOptions = [
  {
    label: "Program Supercamp",
    options: ["Supercamp Victory", "Supercamp Champion", "Supercamp Mastery"],
  },
  {
    label: "Program Privat & Online Class",
    options: ["Privat Priority", "Privat Reguler", "Online Class"],
  },
  {
    label: "Konsultasi Program",
    options: ["Belum menentukan program"],
  },
];

const educationOptions = [
  "Kelas 10 SMA/SMK",
  "Kelas 11 SMA/SMK",
  "Kelas 12 SMA/SMK",
  "Lulusan SMA/SMK (Gap Year)",
  "Lainnya",
];

// Cache untuk mencegah rotasi ganda akibat React Strict Mode.
let cachedRotation = null;

const saveNextRotation = (index) => {
  try {
    localStorage.setItem(
      STORAGE_KEY,
      String((index + 1) % customerServices.length),
    );
  } catch {
    // Form tetap dapat digunakan jika localStorage tidak tersedia.
  }
};

const getRotationIndex = () => {
  if (cachedRotation !== null) {
    return cachedRotation;
  }

  // Pengunjung baru mendapatkan CS awal secara acak.
  let rotation = Math.floor(Math.random() * customerServices.length);

  try {
    const storedRotation = localStorage.getItem(STORAGE_KEY);
    const parsedRotation = Number(storedRotation);

    if (
      storedRotation !== null &&
      Number.isInteger(parsedRotation) &&
      parsedRotation >= 0
    ) {
      rotation = parsedRotation % customerServices.length;
    }
  } catch {
    // Gunakan rotasi acak sebagai fallback.
  }

  cachedRotation = rotation;
  saveNextRotation(rotation);

  return rotation;
};

const createWhatsappLink = (data, cs) => {
  const message = [
    `Halo ${cs.name}, saya ingin mendaftar atau berkonsultasi mengenai program belajar Supercamp Matrix.`,
    "",
    "*FORM PENDAFTARAN SISWA BARU*",
    "",
    `*Nama Siswa:* ${data.nama}`,
    `*Asal Sekolah:* ${data.sekolah}`,
    `*Kelas / Status:* ${data.kelas}`,
    `*Program Pilihan:* ${data.program}`,
    `*Target Jurusan & PTN:* ${data.target || "Belum menentukan"}`,
    "",
    `*Sumber Pendaftaran:* ${WEBSITE_URL}registrasi`,
    "",
    "Mohon informasi mengenai proses pendaftaran selanjutnya. Terima kasih.",
  ].join("\n");

  return `https://wa.me/${cs.phone}?text=${encodeURIComponent(message)}`;
};

export const Registrasi = () => {
  const [rotation, setRotation] = useState(null);
  const [lastSubmission, setLastSubmission] = useState(null);
  const [errorMessage, setErrorMessage] = useState("");

  useEffect(() => {
    setRotation(getRotationIndex());
  }, []);

  const activeCS = rotation !== null ? customerServices[rotation] : null;

  const rotateCustomerService = () => {
    const currentIndex = cachedRotation ?? getRotationIndex();

    const nextRotation = (currentIndex + 1) % customerServices.length;

    cachedRotation = nextRotation;

    saveNextRotation(nextRotation);
    setRotation(nextRotation);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    setErrorMessage("");

    if (!activeCS) return;

    const formData = new FormData(event.currentTarget);

    const data = {
      nama: String(formData.get("nama") || "").trim(),
      sekolah: String(formData.get("sekolah") || "").trim(),
      kelas: String(formData.get("kelas") || "").trim(),
      program: String(formData.get("program") || "").trim(),
      target: String(formData.get("target") || "").trim(),
    };

    if (!data.nama || !data.sekolah || !data.kelas || !data.program) {
      setErrorMessage("Mohon lengkapi seluruh data yang wajib diisi.");
      return;
    }

    const selectedCS = activeCS;
    const whatsappUrl = createWhatsappLink(data, selectedCS);

    // Buka WhatsApp langsung melalui interaksi pengguna.
    window.open(whatsappUrl, "_blank", "noopener,noreferrer");

    // Simpan link cadangan apabila tab WhatsApp tidak terbuka.
    setLastSubmission({
      name: selectedCS.name,
      url: whatsappUrl,
    });

    // Setelah tombol ditekan, giliran berpindah ke CS berikutnya.
    rotateCustomerService();
  };

  return (
    <>
      <Helmet>
        <html lang="id" />
        <title>Registrasi Siswa Baru | Supercamp Matrix UTBK SNBT 2027</title>
        <meta
          name="description"
          content="Daftar program Supercamp Matrix UTBK SNBT 2027, persiapan masuk Kedokteran dan PTN favorit, Privat Priority, Reguler, serta Online Class. Konsultasi langsung melalui WhatsApp."
        />
        <meta name="robots" content="index, follow" />
        <link rel="canonical" href={`${WEBSITE_URL}registrasi`} />
      </Helmet>

      <main className="sc-registration">
        <div className="sc-registration-container">
          <div className="sc-registration-heading">
            <div className="sc-registration-heading-icon" aria-hidden="true">
              <FontAwesomeIcon icon={faGraduationCap} />
            </div>

            <span className="sc-registration-eyebrow">
              SUPERCAMP MATRIX 2027
            </span>

            <h1 className="supertitle-registrasi">Registrasi Siswa Baru</h1>

            <p className="sc-registration-description">
              Mulai perjalanan menuju kampus impianmu. Lengkapi data singkat di
              bawah ini dan konsultasikan program pilihanmu bersama tim kami.
            </p>
          </div>

          <form
            className="container-form"
            onSubmit={handleSubmit}
            aria-labelledby="sc-registration-form-title">
            <div className="sc-registration-form-heading">
              <h2 id="sc-registration-form-title">Data Pendaftaran</h2>

              <p>Isi data berikut untuk melanjutkan ke WhatsApp.</p>
            </div>

            <div className="sc-registration-form-grid">
              {/* NAMA LENGKAP */}
              <div className="parent-form sc-form-full">
                <label className="label-form" htmlFor="registration-name">
                  Nama Lengkap Siswa
                  <span className="sc-required">*</span>
                </label>

                <input
                  id="registration-name"
                  className="form-input-resgitrasi"
                  name="nama"
                  type="text"
                  placeholder="Masukkan nama lengkap siswa"
                  autoComplete="section-student name"
                  maxLength={120}
                  required
                />
              </div>

              {/* ASAL SEKOLAH */}
              <div className="parent-form">
                <label className="label-form" htmlFor="registration-school">
                  Asal Sekolah
                  <span className="sc-required">*</span>
                </label>

                <input
                  id="registration-school"
                  className="form-input-resgitrasi"
                  name="sekolah"
                  type="text"
                  placeholder="Contoh: SMAN 8 Jakarta"
                  maxLength={150}
                  required
                />
              </div>

              {/* KELAS / STATUS PENDIDIKAN */}
              <div className="parent-form">
                <label className="label-form" htmlFor="registration-education">
                  Kelas / Status
                  <span className="sc-required">*</span>
                </label>

                <div className="sc-select-wrapper">
                  <select
                    id="registration-education"
                    className="form-input-resgitrasi sc-form-select"
                    name="kelas"
                    defaultValue=""
                    required>
                    <option value="" disabled>
                      Pilih kelas / status
                    </option>

                    {educationOptions.map((item) => (
                      <option key={item} value={item}>
                        {item}
                      </option>
                    ))}
                  </select>

                  <FontAwesomeIcon
                    icon={faChevronDown}
                    className="sc-select-icon"
                    aria-hidden="true"
                  />
                </div>
              </div>

              {/* PROGRAM PILIHAN */}
              <div className="parent-form sc-form-full">
                <label className="label-form" htmlFor="registration-program">
                  Program yang Diminati
                  <span className="sc-required">*</span>
                </label>

                <div className="sc-select-wrapper">
                  <select
                    id="registration-program"
                    className="form-input-resgitrasi sc-form-select"
                    name="program"
                    defaultValue=""
                    required>
                    <option value="" disabled>
                      Pilih program belajar
                    </option>

                    {programOptions.map((group) => (
                      <optgroup key={group.label} label={group.label}>
                        {group.options.map((program) => (
                          <option key={program} value={program}>
                            {program}
                          </option>
                        ))}
                      </optgroup>
                    ))}
                  </select>

                  <FontAwesomeIcon
                    icon={faChevronDown}
                    className="sc-select-icon"
                    aria-hidden="true"
                  />
                </div>
              </div>

              {/* TARGET JURUSAN DAN UNIVERSITAS */}
              <div className="parent-form sc-form-full">
                <label
                  className="label-form sc-optional-label"
                  htmlFor="registration-target">
                  Target Jurusan & PTN
                  <span className="sc-optional">Opsional</span>
                </label>

                <input
                  id="registration-target"
                  className="form-input-resgitrasi"
                  name="target"
                  type="text"
                  placeholder="Contoh: Kedokteran - Universitas Indonesia"
                  maxLength={200}
                />
              </div>
            </div>

            <div className="sc-registration-divider" />

            {/* CUSTOMER SERVICE OTOMATIS */}
            <div className="sc-registration-cs" aria-live="polite">
              <div className="sc-registration-cs-icon" aria-hidden="true">
                <FontAwesomeIcon icon={faHeadset} />
              </div>

              <div className="sc-registration-cs-info">
                <span className="sc-registration-cs-label">
                  Customer Service Anda
                </span>

                <strong className="sc-registration-cs-name">
                  {activeCS?.name || "Menyiapkan kontak..."}
                </strong>

                <span className="sc-registration-cs-phone">
                  {activeCS?.display || ""}
                </span>
              </div>

              <FontAwesomeIcon
                icon={faWhatsapp}
                className="sc-registration-cs-wa"
                aria-hidden="true"
              />
            </div>

            {errorMessage && (
              <p className="sc-registration-error" role="alert">
                {errorMessage}
              </p>
            )}

            {/* SUBMIT KE WHATSAPP */}
            <button
              type="submit"
              className="btn-input-resgitrasi"
              disabled={!activeCS}>
              <FontAwesomeIcon
                icon={faWhatsapp}
                className="sc-submit-wa-icon"
                aria-hidden="true"
              />

              <span>Lanjutkan via WhatsApp</span>

              <FontAwesomeIcon
                icon={faArrowRight}
                className="sc-submit-arrow-icon"
                aria-hidden="true"
              />
            </button>

            {lastSubmission && (
              <div className="sc-registration-notice" role="status">
                Lanjutkan pengiriman pesan kepada{" "}
                <strong>{lastSubmission.name}</strong> di WhatsApp.
                <a
                  href={lastSubmission.url}
                  target="_blank"
                  rel="noopener noreferrer">
                  Buka kembali WhatsApp jika belum terbuka
                </a>
              </div>
            )}

            <div className="sc-registration-security">
              <FontAwesomeIcon icon={faShieldHalved} aria-hidden="true" />

              <p>
                Data Anda akan disertakan dalam pesan WhatsApp. Periksa kembali
                sebelum mengirimkannya kepada Customer Service.
              </p>
            </div>
          </form>

          <p className="sc-registration-footer">
            Supercamp Matrix — Bimbingan Belajar Persiapan UTBK SNBT & Masuk
            Kedokteran
          </p>
        </div>
      </main>
    </>
  );
};
