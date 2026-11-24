// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import { Autoplay } from "swiper/modules";
import testimoni1 from "../../assets/Supercamp/testimoni/1.webp";
import testimoni10 from "../../assets/Supercamp/testimoni/10.webp";
import testimoni11 from "../../assets/Supercamp/testimoni/11.webp";
import testimoni12 from "../../assets/Supercamp/testimoni/12.webp";
import testimoni13 from "../../assets/Supercamp/testimoni/13.webp";
import testimoni14 from "../../assets/Supercamp/testimoni/14.webp";
import testimoni15 from "../../assets/Supercamp/testimoni/15.webp";
import testimoni16 from "../../assets/Supercamp/testimoni/16.webp";
import testimoni17 from "../../assets/Supercamp/testimoni/17.webp";
import testimoni18 from "../../assets/Supercamp/testimoni/18.webp";
import testimoni19 from "../../assets/Supercamp/testimoni/19.webp";
import testimoni2 from "../../assets/Supercamp/testimoni/2.webp";
import testimoni20 from "../../assets/Supercamp/testimoni/20.webp";
import testimoni21 from "../../assets/Supercamp/testimoni/21.webp";
import testimoni22 from "../../assets/Supercamp/testimoni/22.webp";
import testimoni23 from "../../assets/Supercamp/testimoni/23.webp";
import testimoni24 from "../../assets/Supercamp/testimoni/24.webp";
import testimoni25 from "../../assets/Supercamp/testimoni/25.webp";
import testimoni26 from "../../assets/Supercamp/testimoni/26.webp";
import testimoni27 from "../../assets/Supercamp/testimoni/27.webp";
import testimoni28 from "../../assets/Supercamp/testimoni/28.webp";
import testimoni29 from "../../assets/Supercamp/testimoni/29.webp";
import testimoni3 from "../../assets/Supercamp/testimoni/3.webp";
import testimoni30 from "../../assets/Supercamp/testimoni/30.webp";
import testimoni31 from "../../assets/Supercamp/testimoni/31.webp";
import testimoni32 from "../../assets/Supercamp/testimoni/32.webp";
import testimoni33 from "../../assets/Supercamp/testimoni/33.webp";
import testimoni34 from "../../assets/Supercamp/testimoni/34.webp";
import testimoni35 from "../../assets/Supercamp/testimoni/35.webp";
import testimoni36 from "../../assets/Supercamp/testimoni/36.webp";
import testimoni37 from "../../assets/Supercamp/testimoni/37.webp";
import testimoni38 from "../../assets/Supercamp/testimoni/38.webp";
import testimoni39 from "../../assets/Supercamp/testimoni/39.webp";
import testimoni4 from "../../assets/Supercamp/testimoni/4.webp";
import testimoni40 from "../../assets/Supercamp/testimoni/40.webp";
import testimoni41 from "../../assets/Supercamp/testimoni/41.webp";
import testimoni5 from "../../assets/Supercamp/testimoni/5.webp";
import testimoni6 from "../../assets/Supercamp/testimoni/6.webp";
import testimoni7 from "../../assets/Supercamp/testimoni/7.webp";
import testimoni8 from "../../assets/Supercamp/testimoni/8.webp";
import testimoni9 from "../../assets/Supercamp/testimoni/9.webp";
import "./TestimoniLps2.css";

const images = [
  testimoni1,
  testimoni2,
  testimoni3,
  testimoni4,
  testimoni5,
  testimoni6,
  testimoni7,
  testimoni8,
  testimoni9,
  testimoni10,
  testimoni11,
  testimoni12,
  testimoni13,
  testimoni14,
  testimoni15,
  testimoni16,
  testimoni17,
  testimoni18,
  testimoni19,
  testimoni20,
  testimoni21,
  testimoni22,
  testimoni23,
  testimoni24,
  testimoni25,
  testimoni26,
  testimoni27,
  testimoni28,
  testimoni29,
  testimoni30,
  testimoni31,
  testimoni32,
  testimoni33,
  testimoni34,
  testimoni35,
  testimoni36,
  testimoni37,
  testimoni38,
  testimoni39,
  testimoni40,
  testimoni41,
];

const TestimoniLps2 = () => {
  return (
    <section className="box-testimoni-lps-2">
      <h2 className="title-testimoni-lps2">
        Testimoni Lolos UTBK SNBT & PTN Favorit
      </h2>

      <p className="desc-testimoni-lps2">
        Puluhan siswa Supercamp berhasil masuk UI, UGM, UNPAD, Undip, Unpad, dan
        berbagai PTN favorit melalui program karantina intensif UTBK SNBT.
      </p>

      <Swiper
        slidesPerView={1}
        spaceBetween={30}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        breakpoints={{
          640: { slidesPerView: 1 },
          768: { slidesPerView: 1 },
          1024: { slidesPerView: 3 },
        }}
        modules={[Autoplay]}
        className="mySwiper">
        {images.map((img, index) => (
          <SwiperSlide key={index}>
            <img
              src={img}
              alt={`Testimoni siswa Supercamp lolos UTBK SNBT dan masuk PTN favorit - slide ${
                index + 1
              }`}
              className="img-testimoni-lps2"
              loading="lazy"
              decoding="async"
              width="400"
              height="400"
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
};

export default TestimoniLps2;
