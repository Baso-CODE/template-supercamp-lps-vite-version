import "./KerjaSamaHotel.css";

const KerjasamaHotel = () => {
  return (
    <section className="partnership-section-lps">
      <div className="partnership-card">
        <h2 className="partnership-title">
          Kerjasama Venue Supercamp dengan Hotel & Apartemen Terpercaya
        </h2>

        <div className="partnership-logos">
          {/* Hotel UGM */}
          <div className="logo-wrapper">
            <img
              src={"/images/kerjasama/Hotel_UGM.webp"}
              alt="Kerjasama Supercamp dengan Hotel MM UGM Yogyakarta sebagai lokasi program karantina belajar"
              className="partner-logo"
              loading="lazy"
              decoding="async"
            />
          </div>

          {/* Dave Apartment */}
          <div className="logo-wrapper">
            <img
              src={"/images/kerjasama/dave_logo.png"}
              alt="Kerjasama Supercamp dengan Dave Apartment Depok untuk program bimbel karantina UTBK SNBT"
              className="partner-logo"
              loading="lazy"
              decoding="async"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default KerjasamaHotel;
