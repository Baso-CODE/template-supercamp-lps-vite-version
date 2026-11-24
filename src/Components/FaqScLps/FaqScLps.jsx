import React, { useState } from "react";
import "./FaqScLpsc.css";

const FaqScLps = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isOpen2, setIsOpen2] = useState(false);
  const [isOpen3, setIsOpen3] = useState(false);
  const [isOpen4, setIsOpen4] = useState(false);
  const [isOpen5, setIsOpen5] = useState(false);
  const [isOpen6, setIsOpen6] = useState(false);
  const [isOpen7, setIsOpen7] = useState(false);
  const [isOpen8, setIsOpen8] = useState(false);
  const [isOpen9, setIsOpen9] = useState(false);
  const [isOpen10, setIsOpen10] = useState(false);

  return (
    <React.Fragment>
      <div className="parent-faq-sc-lps">
        <h1 className="title-faq-sc-lps">FREQUENTLY ASKED QUESTION</h1>
        <div className="accordion-container-lps">
          <div
            className="accordion-header-lps"
            onClick={() => setIsOpen(!isOpen)}>
            <h2 className="subtitle-faq-lps">
              Apa itu Program Supercamp Matrix?
            </h2>
            <span>{isOpen ? "-" : "+"}</span>
          </div>
          <div className={`accordion-body-lps ${isOpen ? "open" : ""}`}>
            <p className="desk-faq-lps">
              Program Supercamp MATRIX adalah program persiapan untuk lulus
              ujian UTBK SNBT, SIMAK UI, UTUL UGM, UTM IPB dan Ujian Mandiri
              Universitas Negeri lainnya dengan Sistem Karantina. Disebut
              Program Supercamp karena program menginap selama waktu tertentu
              dan didampingi TIM KHUSUS Sukses Masuk PTN alumni dari UI, UNPAD,
              UGM dan PTN Terbaik lain untuk meningkatkan skill dan kemampuan
              dalam mengerjakan soal dengan target masuk Jurusan dan Universitas
              yang diinginkan.
            </p>
          </div>
        </div>
        <div className="accordion-container-lps">
          <div
            className="accordion-header-lps"
            onClick={() => setIsOpen2(!isOpen2)}>
            <h2 className="subtitle-faq-lps">
              Mengapa Siswa Supercamp Matrix harus menginap?
            </h2>
            <span>{isOpen2 ? "-" : "+"}</span>
          </div>
          <div className={`accordion-body-lps ${isOpen2 ? "open" : ""}`}>
            <span className="desk-faq-lps">
              Pendampingan akademik dan non akademik setiap hari (24 jam)
              <ul>
                <li className="parent-faq-2">
                  <span class="material-symbols-outlined">check_small</span>
                  Siswa lebih fokus dalam belajar, terhindar dari gangguan yang
                  tidak perlu
                </li>
                <li className="parent-faq-2">
                  <span class="material-symbols-outlined">check_small</span>
                  Program belajar sangat terencana dan terukur hasilnya
                </li>
                <li className="parent-faq-2">
                  <span class="material-symbols-outlined">check_small</span>
                  Metode belajar yang personal, sistematis dan terstruktur
                </li>
                <li className="parent-faq-2">
                  <span class="material-symbols-outlined">check_small</span>
                  Proses belajar yang efektif, efisien dan tertarget
                </li>
              </ul>
              Penanganan lebih holistik mulai dari pemahaman materi, skill dan
              kemampuan mengerjakan soal, motivasi, dan ibadah/pendekatan diri
              kepada Sang Pencipta
            </span>
          </div>
        </div>
        <div className="accordion-container-lps">
          <div
            className="accordion-header-lps"
            onClick={() => setIsOpen3(!isOpen3)}>
            <h2 className="subtitle-faq-lps">
              Berapa Biaya Program Supercamp Matrix?
            </h2>
            <span>{isOpen3 ? "-" : "+"}</span>
          </div>
          <div className={`accordion-body-lps ${isOpen3 ? "open" : ""}`}>
            <p className="desk-faq-lps">
              Biaya Program Supercamp Matrix tergantung dari paket yang dipilih.
              Silahkan hubungi kami untuk mendapatkan informasi lebih lengkap.
            </p>
          </div>
        </div>
        <div className="accordion-container-lps">
          <div
            className="accordion-header-lps"
            onClick={() => setIsOpen4(!isOpen4)}>
            <h2 className="subtitle-faq-lps">
              Tanggal berapa Program Supercamp Matrix Dimulai?
            </h2>
            <span>{isOpen4 ? "-" : "+"}</span>
          </div>
          <div className={`accordion-body-lps ${isOpen4 ? "open" : ""}`}>
            <p className="desk-faq-lps">
              Program Supercamp UTBK SNBT dilaksanakan menyesuaikan jadwal
              resmi.
              {/* . Demikian juga untuk Supercamp SIMAK UI & UM PTN, jadwal
              diinfokan kemudian, menyesuaikan jadwal Simak UI dan Ujian Mandiri
              PTN. */}
            </p>
          </div>
        </div>
        <div className="accordion-container-lps">
          <div
            className="accordion-header-lps"
            onClick={() => setIsOpen5(!isOpen5)}>
            <h2 className="subtitle-faq-lps">
              Program belajar di Bimbel Supercamp bergaransi seperti apa?
            </h2>
            <span>{isOpen5 ? "-" : "+"}</span>
          </div>
          <div className={`accordion-body-lps ${isOpen5 ? "open" : ""}`}>
            <p className="desk-faq-lps">
              Komitmen kami yaitu memberikan layanan dan hasil terbaik.
              Kesuksesan Siswa Masuk PTN yang diinginkan adalah kesuksesan bagi
              kami. Silakan konsultasikan detailnya dengan Koordinator Program.
            </p>
          </div>
        </div>
        <div className="accordion-container-lps">
          <div
            className="accordion-header-lps"
            onClick={() => setIsOpen6(!isOpen6)}>
            <h2 className="subtitle-faq-lps">
              Siapa nanti yang mengajar siswa-siswi Program Supercamp Matrix?
            </h2>
            <span>{isOpen6 ? "-" : "+"}</span>
          </div>
          <div className={`accordion-body-lps ${isOpen6 ? "open" : ""}`}>
            <p className="desk-faq-lps">
              Tim Pengajar Program Supercamp MATRIX terdiri dari Dosen, Asisten
              Dosen, Alumni dan Mahasiswa dari UI, UNPAD, UGM dan PTN Terbaik
              lain. Seluruh tim terseleksi, berpengalaman dan berkompeten untuk
              membimbing siswa-siswi agar lolos ujian SNBT, SIMAK UI, UTUL UGM
              dan Ujian Mandiri Universitas Negeri lainnya sesuai dengan target
              yang diinginkan.
            </p>
          </div>
        </div>
        <div className="accordion-container-lps">
          <div
            className="accordion-header-lps"
            onClick={() => setIsOpen7(!isOpen7)}>
            <h2 className="subtitle-faq-lps">
              Bagaimana Tim Supercamp Matrix bisa membantu siswa bisa masuk PTN
              Favorit?
            </h2>
            <span>{isOpen7 ? "-" : "+"}</span>
          </div>
          <div className={`accordion-body-lps ${isOpen7 ? "open" : ""}`}>
            <p className="desk-faq-lps">
              Sejak awal pendaftaran siswa akan mendapatkan konsultasi dan
              arahan secara intensif. Dilanjutkan dengan asessment dan mapping
              kebutuhan belajar siswa. Setelah itu disusun peta kebutuhan
              belajar untuk setiap siswa. Sistem akademik dibuat personal dan
              tertarget dengan didukung analisa progress akademik. Program
              belajar didesain sistematis, terstruktur, terukur dan teruji.
              Target dan komitmen kami yaitu siswa dapat meraih Jurusan dan
              Universitas pilihannya.
            </p>
          </div>
        </div>
        <div className="accordion-container-lps">
          <div
            className="accordion-header-lps"
            onClick={() => setIsOpen8(!isOpen8)}>
            <h2 className="subtitle-faq-lps">
              Bagaimana alur pendaftaran Program Supercamp Matrix?
            </h2>
            <span>{isOpen8 ? "-" : "+"}</span>
          </div>
          <div className={`accordion-body-lps ${isOpen8 ? "open" : ""}`}>
            <ul className="desk-faq-lps">
              <li className="parent-faq-2">
                <span class="material-symbols-outlined">check_small</span>
                Pendaftaran dapat dilakukan melalui Telepon/WhatsApp.
              </li>
              <li className="parent-faq-2">
                <span class="material-symbols-outlined">check_small</span>
                Siswa dan orang tua dapat berkunjung ke Office kami untuk
                melakukan konsultasi terlebih dahulu agar dapat memilih program
                bimbingan yang paling tepat dan sesuai dengan kebutuhan Ananda.
              </li>
              <li className="parent-faq-2">
                <span class="material-symbols-outlined">check_small</span>
                Setelah siswa terdaftar maka siswa perlu membayar Booking Seat
                dan melunasi pembayaran sesuai dengan tanggal yang ditentukan.
              </li>
            </ul>
          </div>
        </div>
        <div className="accordion-container-lps">
          <div
            className="accordion-header-lps"
            onClick={() => setIsOpen9(!isOpen9)}>
            <h2 className="subtitle-faq-lps">
              Di mana lokasi Program Supercamp Matrix dilaksanakan ?
            </h2>
            <span>{isOpen9 ? "-" : "+"}</span>
          </div>
          <div className={`accordion-body-lps ${isOpen9 ? "open" : ""}`}>
            <span className="desk-faq-lps">
              Kegiatan dilaksanakan di lokasi yang nyaman dan strategis
              <br />
              <p className="child-desk-lps">
                <span class="material-symbols-outlined">check_small</span>
                Event Supercamp Depok dilaksanakan di DAVE Apartment dekat
                Universitas Indonesia
              </p>
              <p className="child-desk-lps">
                <span class="material-symbols-outlined">check_small</span>
                Event Supercamp Yogyakarta di Hotel Citra Dream/MM UGM dekat
                Universitas Gajah Mada
              </p>
            </span>
          </div>
        </div>
        <div className="accordion-container-lps">
          <div
            className="accordion-header-lps"
            onClick={() => setIsOpen10(!isOpen10)}>
            <h2 className="subtitle-faq-lps">
              Bisakah saya berkunjung ke lokasi sebelum daftar?
            </h2>
            <span>{isOpen10 ? "-" : "+"}</span>
          </div>
          <div className={`accordion-body-lps ${isOpen10 ? "open" : ""}`}>
            <p className="desk-faq-lps">
              Silakan berkunjung, kami akan menyambut dengan senang hati. Lokasi
              kegiatan terletak di DAVE Apartment, dekat Universitas Indonesia.
              Tempat yang aman, nyaman dan kondusif untuk belajar. Selama
              program akan didampingi 24 jam, termasuk antar jemput saat
              melaksanakan ujian SNBT dan Simak UI.
            </p>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};

export default FaqScLps;
