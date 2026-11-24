import { faWhatsapp } from "@fortawesome/free-brands-svg-icons";
import {
  faHeadset,
  faPhone,
  faShieldHalved,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useEffect, useState } from "react";
import "./BottomCtaLps.css";

const WEBSITE_URL = "https://supercampmatrix.co.id/";
const STORAGE_KEY = "supercamp_bottom_cta_rotation";

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
  let rotation = 0;

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
    console.warn("Rotasi CS menggunakan urutan default:", error);
  }

  // CS terakhir berpindah ke posisi pertama setiap refresh.
  const start = (totalCS - rotation) % totalCS;

  cachedRotation = [
    ...customerServices.slice(start),
    ...customerServices.slice(0, start),
  ];

  return cachedRotation;
};

const createWhatsappLink = (admin) => {
  const message = `Halo ${admin.name}, saya ingin berkonsultasi mengenai program Supercamp dan Privat Persiapan UTBK SNBT serta Masuk PTN melalui ${WEBSITE_URL}`;

  return `https://wa.me/${admin.phone}?text=${encodeURIComponent(message)}`;
};

const BottomCtaLps = () => {
  const [admins, setAdmins] = useState(customerServices);

  useEffect(() => {
    setAdmins(getRotatedCustomerServices());
  }, []);

  return (
    <section className="box-cta-bottom" aria-labelledby="sc-bottom-cta-title">
      <div className="sc-bottom-cta-container">
        <div className="sc-bottom-cta-heading">
          <h2 id="sc-bottom-cta-title" className="title-cta-bottom-lps">
            Raih Masa Depan Terbaik
          </h2>

          <p className="desk-cta-bottom-lps">
            Gabung Sekarang, Sebelum Kehabisan Kursi!
          </p>
        </div>

        <div className="parent-button-cta">
          {admins.map((admin) => (
            <article key={admin.phone} className="child-cta-bottom-lps">
              <div className="sc-bottom-glass-reflection" aria-hidden="true" />

              <div className="sc-bottom-cs-icon">
                <FontAwesomeIcon icon={faHeadset} aria-hidden="true" />
              </div>

              <span className="sc-bottom-cs-label">CUSTOMER SERVICE</span>

              <h3 className="title-cs-lps">{admin.name}</h3>

              <p className="no-cs-lps">{admin.display}</p>

              <div className="sc-bottom-cta-divider" aria-hidden="true" />

              <div className="parent-btn-call-chat">
                <a
                  href={createWhatsappLink(admin)}
                  className="btn-cta-link chat"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={`Chat WhatsApp dengan ${admin.name}`}>
                  <FontAwesomeIcon icon={faWhatsapp} aria-hidden="true" />
                  <span>CHAT</span>
                </a>

                <a
                  href={`tel:+${admin.phone}`}
                  className="btn-cta-link call"
                  aria-label={`Telepon ${admin.name}`}>
                  <FontAwesomeIcon icon={faPhone} aria-hidden="true" />
                  <span>CALL</span>
                </a>
              </div>
            </article>
          ))}
        </div>

        <div className="sc-bottom-cta-footer">
          <FontAwesomeIcon icon={faShieldHalved} aria-hidden="true" />
          <p>Konsultasikan kebutuhan belajarmu bersama tim Supercamp Matrix.</p>
        </div>
      </div>
    </section>
  );
};

export default BottomCtaLps;
