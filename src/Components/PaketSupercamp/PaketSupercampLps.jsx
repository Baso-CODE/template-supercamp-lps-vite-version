import { useEffect, useState } from "react";
import "./PaketSupercampLps.css";

const WEBSITE_URL = "https://supercampmatrix.com";
const STORAGE_KEY = "supercamp_package_cs_rotation";

const customerServices = [
  {
    name: "Kak Fina",
    phone: "6281311778441",
  },
  {
    name: "Kak Fani",
    phone: "6282258689993",
  },
  {
    name: "Kak Ririn",
    phone: "6285774023474",
  },
];

const paketData = [
  {
    id: 1,
    name: "Victory",
    img: "/images/paket/supercamp-victory.webp",
    isClickable: true,
  },
  {
    id: 2,
    name: "Champion",
    img: "/images/paket/supercamp-champion.webp",
    isClickable: true,
  },
  {
    id: 3,
    name: "Mastery",
    img: "/images/paket/supercamp-mastery.webp",
    isClickable: true,
  },
  {
    id: 4,
    name: "Benefit Paket",
    img: "/images/paket/supercamp-umum.webp",
    isClickable: false,
  },
];

// Cache rotasi untuk mencegah rotasi ganda
// akibat React Strict Mode.
let cachedRotation = null;

const getRotationIndex = () => {
  if (cachedRotation !== null) {
    return cachedRotation;
  }

  const totalCS = customerServices.length;

  // Pengunjung baru mendapatkan CS awal secara acak.
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
    console.warn("Rotasi CS menggunakan urutan acak:", error);
  }

  cachedRotation = rotation;

  return rotation;
};

const getCustomerService = (packageIndex, rotation) => {
  const totalCS = customerServices.length;

  return customerServices[(packageIndex + totalCS - rotation) % totalCS];
};

const createWhatsappLink = (paket, cs) => {
  const message = `Halo ${cs.name}, saya ingin konsultasi dan daftar Program Supercamp UTBK SNBT Paket ${paket.name} melalui ${WEBSITE_URL}`;

  return `https://wa.me/${cs.phone}?text=${encodeURIComponent(message)}`;
};

// Pesan khusus untuk promo Early Bird.
const createEarlyBirdLink = (cs) => {
  const message = `Halo ${cs.name}, saya tertarik dengan Promo Early Bird Special Supercamp UTBK SNBT 2027 melalui ${WEBSITE_URL}.

Saya ingin mendapatkan informasi mengenai booking seat Rp5.000.000, extra diskon Rp500.000, dan bonus akses video pembelajaran bedah soal UTBK.

Mohon informasi mengenai ketersediaan kuota dan cara pendaftarannya. Terima kasih.`;

  return `https://wa.me/${cs.phone}?text=${encodeURIComponent(message)}`;
};

const PaketSupercampLps = () => {
  const [rotation, setRotation] = useState(0);

  useEffect(() => {
    setRotation(getRotationIndex());
  }, []);

  const earlyBirdCS = getCustomerService(0, rotation);

  return (
    <section className="super-parent-paket-belajar-supercamp-lps">
      <h2 className="title-paket-belajar-supercamp-lps">
        Paket Program Supercamp untuk Persiapan UTBK SNBT & Masuk Kedokteran
      </h2>

      {/* PAKET SUPERCAMP */}
      <div className="box-paket-belajar-supercamp-lps">
        {paketData.map((item, index) => {
          // Benefit Paket tidak memiliki link WhatsApp.
          if (!item.isClickable) {
            return (
              <div
                key={item.id}
                className="img-paket-supercamp-lps paket-benefit-static">
                <img
                  className="img-paket-supercamp-lps-images"
                  src={item.img}
                  alt="Benefit dan fasilitas program Supercamp Matrix untuk persiapan UTBK SNBT dan masuk Kedokteran"
                  loading="lazy"
                  decoding="async"
                />
              </div>
            );
          }

          const cs = getCustomerService(index, rotation);

          return (
            <a
              key={item.id}
              className="img-paket-supercamp-lps"
              href={createWhatsappLink(item, cs)}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`Daftar Paket Supercamp ${item.name} melalui WhatsApp ${cs.name} untuk persiapan UTBK SNBT dan masuk PTN favorit`}>
              <img
                className="img-paket-supercamp-lps-images"
                src={item.img}
                alt={`Paket Supercamp ${item.name} untuk bimbel intensif UTBK SNBT dan persiapan masuk Kedokteran`}
                loading="lazy"
                decoding="async"
              />
            </a>
          );
        })}
      </div>

      {/* POSTER PROMO EARLY BIRD */}
      <div className="sc-early-bird-container">
        <a
          href={createEarlyBirdLink(earlyBirdCS)}
          className="sc-early-bird-link"
          target="_blank"
          rel="noopener noreferrer"
          aria-label={`Konsultasi Promo Early Bird Supercamp UTBK SNBT 2027 melalui WhatsApp ${earlyBirdCS.name}`}>
          <img
            src="/images/paket/supercamp-early-bird.webp"
            alt="Promo Early Bird Special Supercamp UTBK SNBT 2027, booking seat Rp5.000.000, extra diskon Rp500.000 dan bonus video pembelajaran bedah soal UTBK untuk 10 pendaftar pertama"
            className="sc-early-bird-image"
            width="1402"
            height="1122"
            loading="lazy"
            decoding="async"
          />
        </a>
      </div>
    </section>
  );
};

export default PaketSupercampLps;
