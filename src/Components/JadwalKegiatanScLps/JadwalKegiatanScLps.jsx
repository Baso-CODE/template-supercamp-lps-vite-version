import {
  faBookOpen,
  faClipboardCheck,
  faClock,
  faQuoteLeft,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "./JadwalKegiatanScLps.css";

const scheduleData = [
  {
    id: "weekday",
    title: "Senin – Jumat",
    subtitle: "Pembelajaran Intensif",
    icon: faBookOpen,
    activities: [
      {
        time: "05.00 – 06.30",
        activity: "Persiapan Diri",
        type: "regular",
      },
      {
        time: "06.30 – 07.00",
        activity: "Sarapan Pagi",
        type: "regular",
      },
      {
        time: "07.00 – 08.00",
        activity: "Kuis Intensif Online",
        type: "academic",
      },
      {
        time: "08.00 – 09.30",
        activity: "Sesi Belajar 1",
        type: "academic",
      },
      {
        time: "09.30 – 10.00",
        activity: "Break",
        type: "regular",
      },
      {
        time: "10.00 – 11.30",
        activity: "Sesi Belajar 2",
        type: "academic",
      },
      {
        time: "11.30 – 13.30",
        activity: "ISHOMA",
        type: "regular",
      },
      {
        time: "13.30 – 15.00",
        activity: "Sesi Belajar 3",
        type: "academic",
      },
      {
        time: "15.00 – 15.30",
        activity: "Break",
        type: "regular",
      },
      {
        time: "15.30 – 17.00",
        activity: "Sesi Belajar 4",
        type: "academic",
      },
      {
        time: "17.00 – 19.15",
        activity: "ISHOMA",
        type: "regular",
      },
      {
        time: "19.15 – 21.00",
        activity: "Klinik Malam & Diskusi Bersama Tutor",
        type: "academic",
      },
      {
        time: "21.00 – Pagi",
        activity: "Istirahat Malam (Tidur)",
        type: "regular",
      },
    ],
  },
  {
    id: "saturday",
    title: "Sabtu",
    subtitle: "Try Out & Evaluasi",
    icon: faClipboardCheck,
    activities: [
      {
        time: "05.00 – 06.30",
        activity: "Persiapan Diri & Aktivitas Pagi",
        type: "regular",
      },
      {
        time: "06.30 – 07.00",
        activity: "Sarapan Pagi",
        type: "regular",
      },
      {
        time: "07.00 – 08.00",
        activity: "Persiapan Try Out",
        type: "academic",
      },
      {
        time: "08.00 – 11.15",
        activity: "Try Out UTBK SNBT Online",
        type: "academic",
      },
      {
        time: "11.15 – 13.30",
        activity: "Break & ISHOMA",
        type: "regular",
      },
      {
        time: "13.30 – 15.00",
        activity: "Sesi Belajar 1",
        type: "academic",
      },
      {
        time: "15.00 – 15.30",
        activity: "ISHOMA",
        type: "regular",
      },
      {
        time: "15.30 – 17.00",
        activity: "Sesi Belajar 2",
        type: "academic",
      },
      {
        time: "17.00 – 19.00",
        activity: "Break & Makan Malam",
        type: "regular",
      },
      {
        time: "19.00 – 21.00",
        activity: "Belajar & Evaluasi Mandiri",
        type: "academic",
      },
      {
        time: "21.00 – Pagi",
        activity: "Istirahat Malam (Tidur)",
        type: "regular",
      },
    ],
    quote:
      "Disiplin dalam Belajar, Konsisten dalam Berproses, Siap Meraih Kampus Impian.",
  },
];

const JadwalKegiatanScLps = () => {
  return (
    <section
      className="parent-jadwal-kegiatan-sc-lps"
      aria-labelledby="sc-schedule-title">
      <div className="sc-schedule-container">
        <div className="sc-schedule-heading">
          {/* <span className="sc-schedule-eyebrow">
            <FontAwesomeIcon icon={faCalendarDays} aria-hidden="true" />
            DAILY ACTIVITY
          </span> */}

          <h2 id="sc-schedule-title" className="title-jadwal-kegiatan-sc-lps">
            Jadwal Kegiatan Supercamp UTBK SNBT 2027
          </h2>

          <p className="desk-jadwal-kegiatan">
            Berikut gambaran jadwal kegiatan harian program karantina belajar
            Supercamp untuk persiapan UTBK SNBT dan seleksi masuk Kedokteran.
            Program dilaksanakan di area dekat Universitas Indonesia (Depok) dan
            Universitas Gadjah Mada (Yogyakarta).
          </p>
        </div>

        <div className="sc-schedule-grid">
          {scheduleData.map((schedule) => (
            <article
              className={`sc-schedule-card sc-schedule-${schedule.id}`}
              key={schedule.id}
              aria-labelledby={`sc-schedule-${schedule.id}`}>
              <div className="sc-schedule-glass-shine" aria-hidden="true" />

              <div className="sc-schedule-card-header">
                <div className="sc-schedule-header-icon">
                  <FontAwesomeIcon icon={schedule.icon} aria-hidden="true" />
                </div>

                <div className="sc-schedule-header-text">
                  {/* <span>Jadwal Kegiatan</span> */}

                  <h3 id={`sc-schedule-${schedule.id}`}>{schedule.title}</h3>

                  <p>{schedule.subtitle}</p>
                </div>
              </div>

              <div className="sc-schedule-table-wrapper">
                <table
                  className="sc-schedule-table"
                  aria-labelledby={`sc-schedule-${schedule.id}`}>
                  <thead>
                    <tr>
                      <th scope="col">
                        <span className="sc-schedule-time-heading">
                          <FontAwesomeIcon icon={faClock} aria-hidden="true" />
                          Waktu
                        </span>
                      </th>

                      <th scope="col">Kegiatan Peserta</th>
                    </tr>
                  </thead>

                  <tbody>
                    {schedule.activities.map((item) => (
                      <tr
                        key={item.time}
                        className={`sc-schedule-row-${item.type}`}>
                        <td className="sc-schedule-time">{item.time}</td>

                        <td className="sc-schedule-activity">
                          <div className="sc-schedule-activity-content">
                            <span
                              className="sc-schedule-dot"
                              aria-hidden="true"
                            />

                            <span>{item.activity}</span>
                          </div>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>

              {schedule.quote && (
                <div className="sc-schedule-quote">
                  <FontAwesomeIcon
                    icon={faQuoteLeft}
                    className="sc-schedule-quote-icon"
                    aria-hidden="true"
                  />

                  <p>{schedule.quote}</p>
                </div>
              )}
            </article>
          ))}
        </div>

        <div className="sc-schedule-legend">
          <div className="sc-schedule-legend-item">
            <span
              className="sc-schedule-legend-dot academic"
              aria-hidden="true"
            />
            Kegiatan Akademik
          </div>

          <div className="sc-schedule-legend-item">
            <span
              className="sc-schedule-legend-dot regular"
              aria-hidden="true"
            />
            Aktivitas Harian & Istirahat
          </div>
        </div>
      </div>
    </section>
  );
};

export default JadwalKegiatanScLps;
