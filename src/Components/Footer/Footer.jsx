import { useEffect, useState } from "react";
import logo_lps from "../../assets/logo_lps.webp";
import imgCtaFooter from "../../assets/new/CTA_les privat utbk snbt.jpeg";
import "./Footer.css";

const WEBSITE_URL = "https://supercampmatrix.com";
const STORAGE_KEY = "supercamp_footer_cs_rotation";

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

// Cache untuk mencegah rotasi ganda pada React Strict Mode.
let cachedRotation = null;

const getRotatedCustomerServices = () => {
  if (cachedRotation !== null) {
    return cachedRotation;
  }

  const totalCS = customerServices.length;

  // Posisi awal pengunjung baru dipilih secara acak.
  let rotation = Math.floor(Math.random() * totalCS);

  try {
    const storedRotation = localStorage.getItem(STORAGE_KEY);
    const parsedRotation = Number(storedRotation);

    if (
      storedRotation !== null &&
      Number.isInteger(parsedRotation) &&
      parsedRotation >= 0
    ) {
      rotation = parsedRotation % totalCS;
    }

    localStorage.setItem(STORAGE_KEY, String((rotation + 1) % totalCS));
  } catch (error) {
    console.warn("Penyimpanan rotasi CS tidak tersedia:", error);
  }

  // CS terakhir berpindah ke posisi pertama.
  const start = (totalCS - rotation) % totalCS;

  cachedRotation = [
    ...customerServices.slice(start),
    ...customerServices.slice(0, start),
  ];

  return cachedRotation;
};

const createWhatsappLink = (cs, program = "Supercamp UTBK SNBT") => {
  const message = `Halo ${cs.name}, saya ingin berkonsultasi mengenai program belajar ${program} melalui ${WEBSITE_URL}`;

  return `https://wa.me/${cs.phone}?text=${encodeURIComponent(message)}`;
};

const Footer = () => {
  const currentYear = new Date().getFullYear();
  const [admins, setAdmins] = useState(customerServices);

  useEffect(() => {
    setAdmins(getRotatedCustomerServices());
  }, []);

  // CTA utama mengikuti CS yang berada di urutan pertama.
  const primaryCS = admins[0];

  return (
    <div className="pg-bawah">
      <footer className="bawah">
        <div className="parent-line"></div>

        <div className="bawah-content">
          {/* KOLOM 1 - LOGO DAN ALAMAT */}
          <div className="bawah-content-column">
            <div className="bawah-logo">
              <a
                className="bawah-logo-link"
                href="/"
                aria-label="Halaman utama Supercamp Matrix">
                <img
                  className="logo-bawah"
                  src={logo_lps}
                  alt="Bimbel LPS - Supercamp Matrix"
                  loading="lazy"
                  decoding="async"
                />
              </a>
            </div>

            <div className="bawah-menu">
              <h2 className="bawah-menu-name">Les Privat SBMPTN</h2>

              <ul id="menu-get-started" className="bawah-menu-list">
                <li className="menu-item menu-item-type-post_type menu-item-object-product">
                  <p className="p-address">
                    Jl. Akses UI No 165, Tugu, Kec. Cimanggis, Kota Depok, Jawa
                    Barat (Lingkungan Pendidikan UI)
                  </p>
                </li>
              </ul>
            </div>
          </div>

          {/* KOLOM 2 - CUSTOMER SERVICE */}
          <div className="bawah-content-column">
            <div className="bawah-menu">
              <h2 className="bawah-menu-name">Konsultasi Program</h2>

              <ul id="menu-company" className="bawah-menu-list">
                {admins.map((cs) => (
                  <li
                    key={cs.phone}
                    className="menu-item menu-item-type-taxonomy menu-item-object-category">
                    <a
                      className="link-footer"
                      href={createWhatsappLink(cs)}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={`Konsultasi melalui WhatsApp ${cs.name}`}>
                      {cs.display} ({cs.name})
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* HOT PROGRAM */}
            <div className="bawah-menu">
              <h2 className="bawah-menu-name">Hot Program</h2>

              <ul id="menu-legal" className="bawah-menu-list">
                <li className="menu-item-hot-program menu-item-type-post_type menu-item-object-page">
                  <a className="link-footer-hot-program">Bimbel UTBK SNBT🔥</a>
                </li>

                <br />

                <li className="menu-item-hot-program menu-item-type-post_type menu-item-object-page">
                  <a className="link-footer-hot-program">
                    Bimbel TNI - POLRI🔥
                  </a>
                </li>

                <br />

                <li className="menu-item-hot-program menu-item-type-post_type menu-item-object-page">
                  <a className="link-footer-hot-program">Bimbel OSN🔥</a>
                </li>
              </ul>
            </div>
          </div>

          {/* KOLOM 3 - TENTANG SUPERCAMP */}
          <div className="bawah-content-column">
            <div className="bawah-menu">
              <h2 className="bawah-menu-name">Tentang Supercamp Matrix</h2>

              <ul id="menu-quick-links" className="bawah-menu-list">
                <li className="menu-item menu-item-type-custom menu-item-object-custom">
                  <p className="link-footer-about-sc-lps">
                    Supercamp MATRIX adalah lembaga bimbingan belajar dengan
                    sistem karantina. Program ini menjadi solusi terbaik untuk
                    siswa agar sukses masuk UI, UNPAD, UGM, IPB, dan Perguruan
                    Tinggi Negeri Favorit.
                  </p>
                </li>

                <li className="menu-item menu-item-type-custom menu-item-object-custom">
                  <p className="link-footer-about-sc-lps">
                    Metode Belajar yang digunakan yaitu one on one (1 siswa 1
                    mentor). Program belajar didesain secara sistematis,
                    terstruktur, terukur dan teruji. Pembelajaran Tematik
                    berdasar Statistik Soal yang diujikan. Fokus menerapkan Pola
                    Sukses yang sudah proven.
                  </p>
                </li>

                <li className="menu-item menu-item-type-post_type menu-item-object-page">
                  <p className="link-footer-about-sc-lps">
                    Kami siap membantu meraih Jurusan Impian di PTN Favorit.
                    Pastikan pilih partner terbaik untuk kesuksesan dan masa
                    depanmu, Supercamp MATRIX!
                  </p>
                </li>
              </ul>
            </div>
          </div>

          {/* KOLOM 4 - CTA KONSULTASI */}
          <div
            className="bawah-content-column"
            aria-labelledby="cta-konsultasi-title">
            <div className="bawah-call-to-action">
              <h2
                id="cta-konsultasi-title"
                className="bawah-call-to-action-title">
                Konsultasi Gratis
              </h2>

              <p className="bawah-call-to-action-description">
                Punya Pertanyaan?
              </p>

              <a
                className="bawah-call-to-action-button button"
                href={createWhatsappLink(primaryCS, "Supercamp UTBK SNBT")}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={`Hubungi ${primaryCS.name} melalui WhatsApp untuk konsultasi program UTBK SNBT`}>
                <strong>Hubungi Kami</strong>
              </a>
            </div>

            {/* GAMBAR CTA MENGIKUTI ROTASI CS */}
            <a
              href={createWhatsappLink(
                primaryCS,
                "Supercamp Kedokteran UTBK SNBT",
              )}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`Chat WhatsApp ${primaryCS.name} untuk konsultasi program Kedokteran UTBK SNBT`}>
              <img
                className="cta-wa-footer"
                src={imgCtaFooter}
                alt="Chat WhatsApp Supercamp untuk konsultasi program belajar"
                loading="lazy"
                decoding="async"
              />
            </a>
          </div>
        </div>

        {/* COPYRIGHT */}
        <div className="bawah-copyright">
          <div className="bawah-copyright-wrapper">
            <p className="bawah-copyright-text">
              <a className="bawah-copyright-link" href="/">
                ©{currentYear}. | Les Privat SBMPTN | All rights reserved.
              </a>
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
