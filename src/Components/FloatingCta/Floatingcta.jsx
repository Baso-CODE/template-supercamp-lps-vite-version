import { faWhatsapp } from "@fortawesome/free-brands-svg-icons";
import { faClose } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useEffect, useRef, useState } from "react";
import "./Floatingcta.css";

const WEBSITE_URL = "https://supercampmatrix.com/";

const customerServices = [
  {
    name: "Kak Fina",
    phone: "0813-1177-8441",
    whatsapp: "6281311778441",
  },
  {
    name: "Kak Nia",
    phone: "0822-5868-9993",
    whatsapp: "6282258689993",
  },
  {
    name: "Kak Lia",
    phone: "0821-3409-3567",
    whatsapp: "6282134093567",
  },
];

const Floatingcta = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isClosing, setIsClosing] = useState(false);
  const closeTimerRef = useRef(null);

  const openModal = () => {
    if (closeTimerRef.current) {
      clearTimeout(closeTimerRef.current);
      closeTimerRef.current = null;
    }

    setIsModalOpen(true);
    setIsClosing(false);
  };

  const closeModal = () => {
    if (isClosing) return;

    setIsClosing(true);

    closeTimerRef.current = setTimeout(() => {
      setIsModalOpen(false);
      setIsClosing(false);
      closeTimerRef.current = null;
    }, 300);
  };

  useEffect(() => {
    return () => {
      if (closeTimerRef.current) {
        clearTimeout(closeTimerRef.current);
      }
    };
  }, []);

  const getWhatsappLink = (cs) => {
    const message = `Halo ${cs.name}, saya ingin konsultasi dan daftar program Supercamp Matrix melalui ${WEBSITE_URL}`;

    return `https://wa.me/${cs.whatsapp}?text=${encodeURIComponent(message)}`;
  };

  return (
    <div className="whatsapp-container">
      {isModalOpen && (
        <div
          id="supercampmatrix-cs-modal"
          className={`modal ${isClosing ? "fade-down" : ""}`}
          role="dialog"
          aria-modal="false"
          aria-labelledby="modal-title">
          <div className="modal-content">
            <div className="parent-title-modal">
              <h3 id="modal-title" className="text-pilih-cs">
                Pilih Customer Service
              </h3>

              <button
                type="button"
                className="close"
                onClick={closeModal}
                aria-label="Tutup pilihan customer service">
                <FontAwesomeIcon icon={faClose} aria-hidden="true" />
              </button>
            </div>

            <ul className="service-list">
              {customerServices.map((cs) => (
                <li className="service-item" key={cs.whatsapp}>
                  <a
                    href={getWhatsappLink(cs)}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="service-item-link"
                    aria-label={`Chat WhatsApp ${cs.name}, Customer Service Supercamp Matrix`}>
                    <span className="service-icon-wrapper">
                      <FontAwesomeIcon
                        icon={faWhatsapp}
                        className="service-wa-icon"
                        aria-hidden="true"
                      />
                    </span>

                    <span className="service-link">
                      <span className="service-name">
                        {cs.name} - {cs.phone}
                      </span>

                      <span className="text-cs-edm">(CS Supercamp Matrix)</span>
                    </span>
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>
      )}

      <div className="main-parent-float-wa">
        <span className="label-cta">Konsultasi Sekarang!</span>

        <div className="whatsapp-float">
          <button
            type="button"
            className="whatsapp-btn"
            onClick={isModalOpen ? closeModal : openModal}
            aria-label={
              isModalOpen
                ? "Tutup pilihan customer service WhatsApp"
                : "Buka pilihan customer service WhatsApp"
            }
            aria-expanded={isModalOpen}
            aria-controls="supercampmatrix-cs-modal">
            <FontAwesomeIcon
              className="icon-wa"
              icon={faWhatsapp}
              aria-hidden="true"
            />

            <span className="whatsapp-badge" aria-label="Satu notifikasi">
              1
            </span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Floatingcta;
