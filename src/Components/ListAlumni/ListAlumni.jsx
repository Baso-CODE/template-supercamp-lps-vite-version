import { useMemo, useRef, useState } from "react";
import alumniData from "./alumniData.json";
import "./ListAlumni.css";

const normalize = (value) =>
  String(value ?? "")
    .toLowerCase()
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .replace(/\bsma\s*(?:negeri|n)\s*(?=\d)/g, "sman ")
    .replace(/[^\p{L}\p{N}]+/gu, " ")
    .trim();

const searchableAlumni = alumniData.map((student) => ({
  ...student,
  searchText: normalize(
    [
      student.name,
      student.school,
      student.major,
      student.university,
      student.year,
      student.route,
    ].join(" "),
  ),
}));
const years = [
  ...new Set(alumniData.map((student) => student.year).filter(Boolean)),
].sort((a, b) => b - a);
const formatNumber = (number) => number.toLocaleString("id-ID");

const ListAlumni = () => {
  const [query, setQuery] = useState("");
  const [year, setYear] = useState("all");
  const tableRef = useRef(null);

  const filteredStudents = useMemo(() => {
    const words = normalize(query).split(" ").filter(Boolean);
    return searchableAlumni.filter((student) => {
      const matchesYear = year === "all" || String(student.year) === year;
      return (
        matchesYear && words.every((word) => student.searchText.includes(word))
      );
    });
  }, [query, year]);

  const resetScroll = () => {
    if (tableRef.current) tableRef.current.scrollTop = 0;
  };
  const resetFilters = () => {
    setQuery("");
    setYear("all");
    resetScroll();
  };

  return (
    <section
      className="parent-table-student sc-alumni"
      aria-labelledby="sc-alumni-heading">
      <div className="sc-alumni-inner">
        <header className="sc-alumni-heading">
          {/* <span className="sc-alumni-kicker">Jejak Prestasi Alumni</span> */}
          <h2 id="sc-alumni-heading" className="main-title-list-student">
            Success Stories
          </h2>
          <p className="child-title-list-student">
            Terbukti membantu siswa lolos Kedokteran dan PTN Favorit, sekarang
            saatnya untuk kamu!
          </p>
        </header>
        <div className="sc-alumni-glass">
          <div className="sc-alumni-toolbar">
            <div className="sc-alumni-search">
              <svg
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                aria-hidden="true">
                <circle cx="11" cy="11" r="7" />
                <path d="m16 16 4 4" />
              </svg>
              <label className="sc-alumni-sr-only" htmlFor="sc-alumni-search">
                Cari alumni, sekolah, jurusan atau universitas
              </label>
              <input
                id="sc-alumni-search"
                type="search"
                value={query}
                placeholder="Cari nama, sekolah, jurusan atau PTN..."
                onChange={(event) => {
                  setQuery(event.target.value);
                  resetScroll();
                }}
              />
            </div>
            <div className="sc-alumni-year">
              <label className="sc-alumni-sr-only" htmlFor="sc-alumni-year">
                Filter tahun penerimaan
              </label>
              <select
                id="sc-alumni-year"
                value={year}
                onChange={(event) => {
                  setYear(event.target.value);
                  resetScroll();
                }}>
                <option value="all">Semua Tahun</option>
                {years.map((item) => (
                  <option key={item} value={item}>
                    {item}
                  </option>
                ))}
              </select>
            </div>
          </div>
          <div className="sc-alumni-status">
            <p role="status" aria-live="polite">
              <strong>{formatNumber(filteredStudents.length)}</strong> dari{" "}
              {formatNumber(alumniData.length)} data penerimaan
            </p>
            {(query || year !== "all") && (
              <button type="button" onClick={resetFilters}>
                Reset filter
              </button>
            )}
          </div>
          <div
            className="sc-alumni-scroll"
            ref={tableRef}
            tabIndex={0}
            role="region"
            aria-label="Tabel alumni, dapat digulir">
            <table className="student-table">
              <caption className="sc-alumni-sr-only">
                Daftar alumni Supercamp Matrix dan LPS
              </caption>
              <thead>
                <tr>
                  <th scope="col">No.</th>
                  <th scope="col">Nama Siswa</th>
                  <th scope="col">Asal Sekolah</th>
                  <th scope="col">Jurusan / PTN</th>
                  <th scope="col">Tahun</th>
                </tr>
              </thead>
              <tbody>
                {filteredStudents.map((student, index) => (
                  <tr key={student.id}>
                    <td>{index + 1}</td>
                    <td className="sc-alumni-name">{student.name}</td>
                    <td>{student.school || "—"}</td>
                    <td>
                      <span className="sc-alumni-major">{student.major}</span>
                      {student.university && (
                        <span className="sc-alumni-university">
                          {student.university}
                        </span>
                      )}
                      {student.route && (
                        <span className="sc-alumni-route">{student.route}</span>
                      )}
                    </td>
                    <td>{student.year || "—"}</td>
                  </tr>
                ))}
                {!filteredStudents.length && (
                  <tr>
                    <td colSpan={5} className="sc-alumni-empty">
                      Tidak ada data yang cocok. Coba kata kunci atau tahun
                      lainnya.
                    </td>
                  </tr>
                )}
              </tbody>
            </table>
          </div>
          <footer className="sc-alumni-footer">
            <span>Gulir tabel untuk melihat lebih banyak data.</span>
            <span>— : Informasi belum tersedia.</span>
          </footer>
        </div>
      </div>
    </section>
  );
};

export default ListAlumni;
