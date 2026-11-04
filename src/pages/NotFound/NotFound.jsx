import { Link } from "react-router-dom";

export default function NotFound() {
  return (
    <main
      style={{
        minHeight: "70vh",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        flexDirection: "column",
        textAlign: "center",
        padding: "40px 20px",
      }}>
      <h1>404 - Halaman Tidak Ditemukan</h1>

      <p>Maaf, halaman yang Anda cari tidak tersedia.</p>

      <Link
        to="/"
        style={{
          marginTop: "20px",
          padding: "12px 24px",
          backgroundColor: "#17337C",
          color: "#fff",
          borderRadius: "8px",
          textDecoration: "none",
        }}>
        Kembali ke Beranda
      </Link>
    </main>
  );
}
