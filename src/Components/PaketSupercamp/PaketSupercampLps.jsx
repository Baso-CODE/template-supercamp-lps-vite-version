import { useEffect, useState } from "react";
import "./PaketSupercampLps.css";

const WEBSITE_URL = "https://supercampmatrix.co.id/";
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

// Cache rotasi selama satu kali pemuatan halaman.
// Mencegah rotasi ganda akibat React Strict Mode.
let cachedRotation = null;

const getRotationIndex = () => {
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

const PaketSupercampLps = () => {
  const [rotation, setRotation] = useState(0);

  useEffect(() => {
    setRotation(getRotationIndex());
  }, []);

  return (
    <section className="super-parent-paket-belajar-supercamp-lps">
      <h2 className="title-paket-belajar-supercamp-lps">
        Paket Program Supercamp untuk Persiapan UTBK SNBT & Masuk Kedokteran
      </h2>

      <div className="box-paket-belajar-supercamp-lps">
        {paketData.map((item, index) => {
          // Card benefit hanya menampilkan gambar.
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

          // Card paket utama menggunakan rotasi CS.
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
    </section>
  );
};

export default PaketSupercampLps;
