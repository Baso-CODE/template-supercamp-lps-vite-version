import mm_1 from "../../assets/new/venue_supercamp_/fasilitas_bimbel_masuk_ptn_1.webp";
import mm_2 from "../../assets/new/venue_supercamp_/fasilitas_bimbel_masuk_ptn_2.webp";
import mm_3 from "../../assets/new/venue_supercamp_/fasilitas_bimbel_masuk_ptn_3.webp";
import venueUtama from "../../assets/new/venue_supercamp_/fasilitas_bimbel_supercamp_kedokteran.webp";
import iconLokasi from "../../assets/Supercamp/untungnya supercamp/icon_check.webp";
import "./VenueScLps.css";

const VenueScLps = () => {
  return (
    <section className="venue-section-supercamp">
      {/* VENUE UTAMA */}
      <div className="text-img-venue-sc-lps">
        <img
          src={venueUtama}
          alt="Fasilitas menginap Supercamp untuk persiapan UTBK SNBT dan masuk Kedokteran dekat kampus UGM"
          className="venue-utama-sc-lps"
          loading="lazy"
          decoding="async"
        />

        <div className="combine-text-img-venue">
          <span className="text-venue-sc-lps">Venue Supercamp UTBK SNBT</span>

          <h2 className="title-venue-sc-lps">
            Fasilitas Menginap Nyaman untuk Program Bimbel Masuk PTN &
            Kedokteran
          </h2>

          <p className="desk-sc-lps">
            Program Supercamp menyediakan fasilitas hotel yang nyaman dan
            kondusif untuk mendukung fokus belajar siswa dalam menghadapi UTBK
            SNBT dan seleksi masuk Fakultas Kedokteran. Lokasi strategis dekat
            kampus ternama memudahkan akses dan simulasi CBT.
          </p>

          <div className="parent-rincian-venue-sc-lps">
            <img
              src={mm_1}
              alt="Kamar hotel program karantina belajar Supercamp untuk persiapan UTBK SNBT"
              className="img-rincian-venue-sc-lps"
              loading="lazy"
              decoding="async"
            />
            <img
              src={mm_2}
              alt="Fasilitas ruang belajar dan karantina siswa bimbel masuk PTN Supercamp"
              className="img-rincian-venue-sc-lps"
              loading="lazy"
              decoding="async"
            />
            <img
              src={mm_3}
              alt="Lingkungan nyaman venue Supercamp dekat kampus UGM dan UI"
              className="img-rincian-venue-sc-lps"
              loading="lazy"
              decoding="async"
            />
          </div>
        </div>
      </div>

      {/* LOKASI KARANTINA */}
      <div className="parent-lokasi-karantina-sc-lps">
        <h2 className="title-lokasi-karantina-sc-lps">
          Lokasi Karantina Supercamp
        </h2>

        <span className="parent-text-icon-lokasi-sc-lps">
          <img
            src={iconLokasi}
            alt=""
            aria-hidden="true"
            className="icon-lokasi-sc-lps"
          />
          Jabodetabek dilaksanakan di Dave Apartment, Depok (dekat Universitas
          Indonesia)
        </span>

        <span className="parent-text-icon-lokasi-sc-lps">
          <img
            src={iconLokasi}
            alt=""
            aria-hidden="true"
            className="icon-lokasi-sc-lps"
          />
          Yogyakarta dilaksanakan di Hotel MIC Residence, dekat Universitas
          Gadjah Mada
        </span>
      </div>

      {/* WAKTU KARANTINA */}
      <div className="parent-lokasi-karantina-sc-lps">
        <h2 className="title-lokasi-karantina-sc-lps">
          Jadwal Program Supercamp 2027
        </h2>

        <span className="parent-text-icon-lokasi-sc-lps">
          <img
            src={iconLokasi}
            alt=""
            aria-hidden="true"
            className="icon-lokasi-sc-lps"
          />
          Program Intensif dapat dimulai sekarang
        </span>

        <span className="parent-text-icon-lokasi-sc-lps">
          <img
            src={iconLokasi}
            alt=""
            aria-hidden="true"
            className="icon-lokasi-sc-lps"
          />
          Batch 1: Maret 2027
        </span>

        <span className="parent-text-icon-lokasi-sc-lps">
          <img
            src={iconLokasi}
            alt=""
            aria-hidden="true"
            className="icon-lokasi-sc-lps"
          />
          Batch 2: April 2027
        </span>
      </div>
    </section>
  );
};

export default VenueScLps;
