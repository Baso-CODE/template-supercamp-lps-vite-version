// ==========================================
// UTILITY: FORMAT NAMA KOTA DARI SLUG
// ==========================================

const NAMA_KOTA_KHUSUS = {
  jakarta: "Jakarta",
  "dki-jakarta": "DKI Jakarta",
  makassar: "Makassar",
  yogyakarta: "Yogyakarta",

  // Kota dengan nama lebih dari satu kata
  "palangka-raya": "Palangka Raya",
  palangkaraya: "Palangka Raya",

  "banda-aceh": "Banda Aceh",
  "bandar-lampung": "Bandar Lampung",

  "tanjung-pinang": "Tanjung Pinang",
  tanjungpinang: "Tanjung Pinang",

  "lubuk-linggau": "Lubuk Linggau",
  lubuklinggau: "Lubuk Linggau",

  // Tambahkan nama khusus lainnya jika diperlukan
};

/**
 * Mengubah slug URL menjadi nama kota.
 *
 * Contoh:
 * makassar      -> Makassar
 * jakarta       -> Jakarta
 * palangka-raya -> Palangka Raya
 * banda-aceh    -> Banda Aceh
 *
 * @param {string} slug
 * @returns {string}
 */
export function formatNamaWilayah(slug = "") {
  if (typeof slug !== "string") {
    return "";
  }

  const normalizedSlug = slug.trim().toLowerCase();

  if (!normalizedSlug) {
    return "";
  }

  // Periksa apakah termasuk nama khusus
  if (NAMA_KOTA_KHUSUS[normalizedSlug]) {
    return NAMA_KOTA_KHUSUS[normalizedSlug];
  }

  // Format nama kota otomatis
  return normalizedSlug
    .replace(/[-_]+/g, " ")
    .split(/\s+/)
    .filter(Boolean)
    .map((kata) => {
      return kata.charAt(0).toUpperCase() + kata.slice(1);
    })
    .join(" ");
}

export default formatNamaWilayah;
