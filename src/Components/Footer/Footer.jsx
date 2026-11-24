import logo_lps from "../../assets/logo_lps.webp";
import imgCtaFooter from "../../assets/new/CTA_les privat utbk snbt.jpeg";
import "./Footer.css";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <div className="pg-bawah">
      <footer className="bawah">
        <div className="parent-line"></div>

        <div className="bawah-content">
          <div className="bawah-content-column">
            <div className="bawah-logo">
              <a className="bawah-logo-link" href="">
                <span className="hidden-link-text"></span>
                <img
                  className="logo-bawah"
                  src={logo_lps}
                  alt="Les Privat SBMPTN - Bimbel Terbaik Jabodetabek"
                />
              </a>
            </div>
            <div className="bawah-menu">
              <h2 className="bawah-menu-name">Les Privat SBMPTN</h2>
              <ul id="menu-get-started" className="bawah-menu-list">
                <li className="menu-item menu-item-type-post_type menu-item-object-product">
                  <a className="link-footer" href=""></a>
                  <p className="p-address">
                    Jl. Akses UI No 165, Tugu, Kec. Cimanggis, Kota Depok, Jawa
                    Barat (Lingkungan Pendidikan UI)
                  </p>
                </li>
              </ul>
            </div>
          </div>
          <div className="bawah-content-column">
            <div className="bawah-menu">
              <h2 className="bawah-menu-name"> Konsultasi Program</h2>
              <ul id="menu-company" className="bawah-menu-list">
                <li className="menu-item menu-item-type-taxonomy menu-item-object-category">
                  <a className="link-footer">0813-1177-8441 (Kak Fina)</a>
                </li>
                <li className="menu-item menu-item-type-taxonomy menu-item-object-category">
                  <a className="link-footer">0821-3409-3567 (Kak Lia)</a>
                </li>
                <li className="menu-item menu-item-type-taxonomy menu-item-object-category">
                  <a className="link-footer">0822-5868-9993 (Kak Nia)</a>
                </li>
              </ul>
            </div>
            <div className="bawah-menu">
              <h2 className="bawah-menu-name">Hot Program</h2>
              <ul id="menu-legal" className="bawah-menu-list">
                <li className="menu-item-hot-program menu-item-type-post_type menu-item-object-page menu-item-privacy-policy menu-item-170434">
                  <a
                    // onClick={() => goToBimbelSnbt()}
                    className="link-footer-hot-program">
                    Bimbel UTBK SNBT🔥
                  </a>
                </li>
                <br />
                <li className="menu-item-hot-program menu-item-type-post_type menu-item-object-page">
                  <a
                    // onClick={() => goToBimbelTni()}
                    className="link-footer-hot-program">
                    Bimbel TNI - POLRI🔥
                  </a>
                </li>
                <br />
                <li className="menu-item-hot-program menu-item-type-post_type menu-item-object-page">
                  <a
                    // onClick={() => goToBimbelOsn()}
                    className="link-footer-hot-program">
                    Bimbel OSN🔥
                  </a>
                </li>
              </ul>
            </div>
          </div>

          <div className="bawah-content-column">
            <div className="bawah-menu">
              <h2 className="bawah-menu-name">Tentang Supercamp Matrix</h2>
              <ul id="menu-quick-links" className="bawah-menu-list">
                <li className="menu-item menu-item-type-custom menu-item-object-custom">
                  <a
                    target="_blank"
                    rel="noopener noreferrer"
                    className="link-footer-about-sc-lps"
                    href="">
                    Supercamp MATRIX adalah lembaga bimbingan belajar dengan
                    sistem karantina. Program ini menjadi solusi terbaik untuk
                    siswa agar sukses masuk UI UNPAD UGM IPB Unpad & Perguruan
                    Tinggi Negeri Favorit.
                  </a>
                </li>
                <li className="menu-item menu-item-type-custom menu-item-object-custom">
                  <a
                    target="_blank"
                    rel="noopener noreferrer"
                    className="link-footer-about-sc-lps"
                    href="">
                    Metode Belajar yang digunakan yaitu one on one (1 siswa 1
                    mentor). Program belajar didesain secara sistematis,
                    terstruktur, terukur dan teruji. Pembelajaran Tematik
                    berdasar Statistik Soal yang diujikan. Fokus menerapkan Pola
                    Sukses yang sudah proven.
                  </a>
                </li>
                <li className="menu-item menu-item-type-post_type menu-item-object-page">
                  <a className="link-footer-about-sc-lps" href="">
                    Kami siap membantu meraih Jurusan Impian di PTN Favorit.
                    Pastikan pilih partner terbaik untuk kesuksesan dan masa
                    depanmu, Supercamp MATRIX !
                  </a>
                </li>
              </ul>
            </div>
          </div>
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
                href="https://api.whatsapp.com/send?phone=6281311778441&text=Halo%20Kak%20Fina%20https://supercampmatrix.com,%20Saya%20ingin%20tanya%20program%20belajar%20Supercamp%20UTBK%20SNBT"
                target="_self"
                aria-label="Hubungi admin Supercamp melalui WhatsApp untuk konsultasi program UTBK SNBT">
                <strong>Hubungi Kami</strong>
              </a>
            </div>

            <a
              href="https://api.whatsapp.com/send?phone=6281311778441&text=Halo%20Kak%20Fina%20https://supercampmatrix.com,%20Saya%20ingin%20tanya%20program%20belajar%20Supercamp%20Kedokteran%20UTBK%20SNBT"
              aria-label="Chat WhatsApp admin Supercamp untuk konsultasi program Kedokteran UTBK SNBT">
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

        <div className="bawah-copyright">
          <div className="bawah-copyright-wrapper">
            <p className="bawah-copyright-text">
              <a className="bawah-copyright-link" href="" target="_self">
                ©{currentYear}. | Les Privat SBMPTN | All rights reserved.{" "}
              </a>
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
