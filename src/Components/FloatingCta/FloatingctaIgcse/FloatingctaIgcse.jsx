import { faWhatsapp } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const FloatingctaIgcse = () => {
  // Ganti dengan nomor WhatsApp admin yang sebenarnya
  const whatsappNumber = "6281234567890";

  const message = "Halo Admin, saya ingin bertanya mengenai program IGCSE.";

  const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(message)}`;

  return (
    <div className="box-float-main">
      <div className="main-parent-wa">
        <label className="label-cta">Chat With Us</label>

        <a
          className="parent-btn-wa"
          href={whatsappUrl}
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Hubungi admin mengenai program IGCSE melalui WhatsApp">
          <span className="btn-float-wa">
            <span className="parent-icon-wa">
              <FontAwesomeIcon className="icon-wa" icon={faWhatsapp} />
            </span>
          </span>
        </a>
      </div>
    </div>
  );
};

export default FloatingctaIgcse;
