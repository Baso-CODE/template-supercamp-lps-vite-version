import { faWhatsapp } from "@fortawesome/free-brands-svg-icons";
import { faClose } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useCallback, useEffect, useRef, useState } from "react";
import "./Floatingcta.css";

const WEBSITE_URL = "https://supercampmatrix.com/";
const STORAGE_KEY = "supercamp_cs_rotation";

const customerServices = [
  {
    name: "Kak Fina",
    phone: "0813-1177-8441",
    whatsapp: "6281311778441",
  },
  {
    name: "Kak Fani",
    phone: "0822-5868-9993",
    whatsapp: "6282258689993",
  },
  {
    name: "Kak Ririn",
    phone: "0857-7402-3474",
    whatsapp: "6285774023474",
  },
];

// Cache rotasi selama satu kali pemuatan halaman.
let cachedRotation = null;

const getRotatedCustomerServices = () => {
  if (cachedRotation) return cachedRotation;

  const total = customerServices.length;
  let rotation = 0;

  try {
    const stored = localStorage.getItem(STORAGE_KEY);
    const parsed = Number(stored);

    if (stored !== null && Number.isInteger(parsed) && parsed >= 0) {
      rotation = parsed % total;
    }

    localStorage.setItem(STORAGE_KEY, String((rotation + 1) % total));
  } catch (error) {
    console.warn("Rotasi CS memakai urutan default:", error);
  }

  // Rotasi ke kanan: CS terbawah naik ke atas.
  const start = (total - rotation) % total;

  cachedRotation = [
    ...customerServices.slice(start),
    ...customerServices.slice(0, start),
  ];

  return cachedRotation;
};

const Floatingcta = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isClosing, setIsClosing] = useState(false);
  const [rotatedCS, setRotatedCS] = useState(customerServices);

  const containerRef = useRef(null);
  const closeTimerRef = useRef(null);

  useEffect(() => {
    setRotatedCS(getRotatedCustomerServices());

    return () => {
      if (closeTimerRef.current) {
        clearTimeout(closeTimerRef.current);
      }
    };
  }, []);

  const openModal = () => {
    if (closeTimerRef.current) {
      clearTimeout(closeTimerRef.current);
      closeTimerRef.current = null;
    }

    setIsClosing(false);
    setIsModalOpen(true);
  };

  const closeModal = useCallback(() => {
    if (isClosing) return;

    setIsClosing(true);

    if (closeTimerRef.current) {
      clearTimeout(closeTimerRef.current);
    }

    closeTimerRef.current = setTimeout(() => {
      setIsModalOpen(false);
      setIsClosing(false);
      closeTimerRef.current = null;
    }, 240);
  }, [isClosing]);

  // Tutup ketika klik di luar atau menekan Escape.
  useEffect(() => {
    if (!isModalOpen) return;

    const handleOutsideClick = (event) => {
      if (
        containerRef.current &&
        !containerRef.current.contains(event.target)
      ) {
        closeModal();
      }
    };

    const handleKeyDown = (event) => {
      if (event.key === "Escape") {
        closeModal();
      }
    };

    document.addEventListener("pointerdown", handleOutsideClick);
    document.addEventListener("keydown", handleKeyDown);

    return () => {
      document.removeEventListener("pointerdown", handleOutsideClick);
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, [isModalOpen, closeModal]);

  const getWhatsappLink = (cs) => {
    const message = `Halo ${cs.name}, saya ingin konsultasi dan daftar program Supercamp Matrix melalui ${WEBSITE_URL}`;

    return `https://wa.me/${cs.whatsapp}?text=${encodeURIComponent(message)}`;
  };

  return (
    <div className="whatsapp-container" ref={containerRef}>
      {isModalOpen && (
        <div
          id="supercampmatrix-cs-modal"
          className={`modal glass-panel ${isClosing ? "fade-down" : ""}`}
          role="dialog"
          aria-modal="false"
          aria-labelledby="modal-title">
          <div className="modal-content">
            <div className="parent-title-modal">
              <div className="modal-heading">
                <span className="glass-heading-icon" aria-hidden="true">
                  <FontAwesomeIcon icon={faWhatsapp} />
                </span>

                <div className="modal-heading-text">
                  <h3 id="modal-title" className="text-pilih-cs">
                    Pilih Customer Service
                  </h3>
                  <p className="modal-subtitle">
                    Konsultasikan kebutuhan belajarmu
                  </p>
                </div>
              </div>

              <button
                type="button"
                className="close"
                onClick={closeModal}
                aria-label="Tutup pilihan customer service">
                <FontAwesomeIcon icon={faClose} aria-hidden="true" />
              </button>
            </div>

            <ul className="service-list">
              {rotatedCS.map((cs) => (
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
                      <span className="service-name">{cs.name}</span>
                      <span className="service-phone">{cs.phone}</span>
                      <span className="text-cs-edm">CS Supercamp Matrix</span>
                    </span>

                    <span className="service-arrow" aria-hidden="true">
                      ↗
                    </span>
                  </a>
                </li>
              ))}
            </ul>

            <div className="glass-modal-footer">
              <span className="glass-footer-dot" aria-hidden="true" />
              Pilih salah satu CS untuk konsultasi via WhatsApp
            </div>
          </div>
        </div>
      )}

      <div className="main-parent-float-wa">
        <span className="label-cta">Konsultasi Sekarang!</span>

        <div className="whatsapp-float">
          <button
            type="button"
            className={`whatsapp-btn ${isModalOpen ? "is-active" : ""}`}
            onClick={isModalOpen ? closeModal : openModal}
            aria-label={
              isModalOpen
                ? "Tutup pilihan customer service WhatsApp"
                : "Buka pilihan customer service WhatsApp"
            }
            aria-expanded={isModalOpen}
            aria-controls={
              isModalOpen ? "supercampmatrix-cs-modal" : undefined
            }>
            <FontAwesomeIcon
              className="icon-wa"
              icon={faWhatsapp}
              aria-hidden="true"
            />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Floatingcta;
