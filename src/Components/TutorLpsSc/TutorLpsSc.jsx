import {
  faChevronLeft,
  faChevronRight,
  faGraduationCap,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useRef, useState } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick-theme.css";
import "slick-carousel/slick/slick.css";
import "./TutorLpsSc.css";

const TUTOR_IMAGE_PATH = "/images/tutor";
const TUTOR_IMAGE_PREFIX = "section-bimbel-snbt-img-master-teacher";

const tutorData = [
  { name: "Kak Aida", slug: "aida" },
  { name: "Kak Aisyah Juwita", slug: "aisyah-juwita" },
  { name: "Kak Aisyah", slug: "aisyah" },
  { name: "Kak Annahal", slug: "annahal" },
  { name: "Kak Antoni", slug: "antoni" },
  { name: "Kak Dari Atul", slug: "dariatul" },
  { name: "Kak Elsi", slug: "elsi" },
  { name: "Kak Fariz", slug: "fariz" },
  { name: "Kak Gracia", slug: "gracia" },
  // { name: "Kak Iis", slug: "iis" },
  { name: "Kak Liziana", slug: "liziana" },
  { name: "Kak Maulana", slug: "maulana" },
  { name: "Kak Putri", slug: "putri" },
  { name: "Kak Rahayu", slug: "rahayu" },
  { name: "Kak Riefky", slug: "riefky" },
  { name: "Kak Roes", slug: "roes" },
  { name: "Kak Rudy", slug: "rudy" },
  { name: "Kak Selly", slug: "selly" },
  { name: "Kak Suci", slug: "suci" },
  { name: "Kak Suryani", slug: "suryani" },
  { name: "Kak Sustika", slug: "sustika" },
  { name: "Kak Syarifah", slug: "syarifah" },
  { name: "Kak Tolib", slug: "tolib" },
  { name: "Kak Ulfa", slug: "ulfa" },
  { name: "Kak Vivi Oktaviani", slug: "vivi" },
];

const getTutorImage = (slug) =>
  `${TUTOR_IMAGE_PATH}/${TUTOR_IMAGE_PREFIX}-${slug}.webp`;

const TutorLpsSc = () => {
  const sliderRef = useRef(null);
  const [currentSlide, setCurrentSlide] = useState(0);

  const totalTutors = tutorData.length;
  const progress = ((currentSlide + 1) / totalTutors) * 100;

  const formatNumber = (number) => String(number).padStart(2, "0");

  const settings = {
    dots: false,
    arrows: false,
    autoplay: false,
    infinite: true,
    speed: 450,
    slidesToShow: 4,
    slidesToScroll: 1,
    adaptiveHeight: false,
    swipe: true,
    swipeToSlide: true,
    draggable: true,
    touchMove: true,
    accessibility: true,
    lazyLoad: "ondemand",
    pauseOnHover: true,

    afterChange: (index) => {
      const normalizedIndex =
        ((index % totalTutors) + totalTutors) % totalTutors;

      setCurrentSlide(normalizedIndex);
    },

    responsive: [
      {
        breakpoint: 1100,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 540,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          centerMode: true,
          centerPadding: "30px",
        },
      },
    ],
  };

  return (
    <section className="parent-all-tutor-lps" aria-labelledby="sc-tutor-title">
      <div className="sc-tutor-container">
        <div className="sc-tutor-heading">
          <span className="sc-tutor-eyebrow">
            <FontAwesomeIcon icon={faGraduationCap} aria-hidden="true" />
            MASTER TEACHER
          </span>

          <h2 id="sc-tutor-title" className="text-all-tutor-lps">
            Tutor Profesional Supercamp UTBK SNBT 2027
          </h2>

          <p className="desk-tutor-lps">
            Tim pengajar berpengalaman yang mendampingi siswa secara intensif
            dalam persiapan UTBK SNBT dan seleksi masuk Fakultas Kedokteran
            serta PTN favorit.
          </p>
        </div>

        <div className="slider-top-lps">
          <Slider ref={sliderRef} {...settings}>
            {tutorData.map((tutor) => (
              <div key={tutor.slug} className="sc-tutor-slide">
                <div className="sc-tutor-glass-card">
                  <div className="sc-tutor-image-wrapper">
                    <img
                      className="sc-tutor-image"
                      src={getTutorImage(tutor.slug)}
                      alt={`Profil ${tutor.name}, tutor program Supercamp Matrix untuk persiapan UTBK SNBT dan masuk Kedokteran`}
                      loading="lazy"
                      decoding="async"
                      draggable={false}
                    />
                  </div>
                </div>
              </div>
            ))}
          </Slider>
        </div>

        {/* LIQUID GLASS NAVIGATION */}
        <div className="sc-tutor-navigation">
          <button
            type="button"
            className="sc-tutor-nav-btn sc-tutor-prev"
            onClick={() => sliderRef.current?.slickPrev()}
            aria-label="Lihat tutor sebelumnya">
            <FontAwesomeIcon icon={faChevronLeft} aria-hidden="true" />
          </button>

          <div
            className="sc-tutor-pagination"
            aria-live="polite"
            aria-atomic="true">
            <div className="sc-tutor-pagination-number">
              <span className="sc-tutor-current">
                {formatNumber(currentSlide + 1)}
              </span>

              <span className="sc-tutor-separator">/</span>

              <span className="sc-tutor-total">
                {formatNumber(totalTutors)}
              </span>
            </div>

            <div className="sc-tutor-progress-track" aria-hidden="true">
              <div
                className="sc-tutor-progress-bar"
                style={{ width: `${progress}%` }}
              />
            </div>
          </div>

          <button
            type="button"
            className="sc-tutor-nav-btn sc-tutor-next"
            onClick={() => sliderRef.current?.slickNext()}
            aria-label="Lihat tutor berikutnya">
            <FontAwesomeIcon icon={faChevronRight} aria-hidden="true" />
          </button>
        </div>

        <p className="sc-tutor-swipe-info">Geser untuk melihat tutor lainnya</p>
      </div>
    </section>
  );
};

export default TutorLpsSc;
