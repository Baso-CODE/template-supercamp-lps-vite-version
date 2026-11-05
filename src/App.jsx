import { useEffect, useState } from "react";
import { BrowserRouter, Route, Routes, useLocation } from "react-router-dom";
import LoadingBar from "react-top-loading-bar";
import "./App.css";
import Floatingcta from "./Components/FloatingCta/Floatingcta";
import Footer from "./Components/Footer/Footer";
import NavbarLps from "./Components/NavbarLps/NavbarLps";
import HalamanCbtUgm from "./pages/HalamanCbtUgm/HalamanCbtUgm";
import HalamanKabCbtUgm from "./pages/HalamanCbtUgm/HalamanKabCbtUgm";
import HalamanKecCbtUgm from "./pages/HalamanCbtUgm/HalamanKecCbtUgm";
import HalamanKelCbtUgm from "./pages/HalamanCbtUgm/HalamanKelCbtUgm";
import HalamanKotaCbtUgm from "./pages/HalamanCbtUgm/HalamanKotaCbtUgm";
import HalamanIupUgm from "./pages/HalamanIupUgm/HalamanIupUgm";
import HalamanKabIupUgm from "./pages/HalamanIupUgm/HalamanKabIupUgm";
import HalamanKecIupUgm from "./pages/HalamanIupUgm/HalamanKecIupUgm";
import HalamanKelIupUgm from "./pages/HalamanIupUgm/HalamanKelIupUgm";
import HalamanKotaIupUgm from "./pages/HalamanIupUgm/HalamanKotaIupUgm";
import HalamanKabLps from "./pages/HalamanKabLps/HalamanKabLps";
import HalamanKecLps from "./pages/HalamanKecLps/HalamanKecLps";
import HalamanKabKedokteran from "./pages/HalamanKedokteran/HalamanKabKedokteran";
import HalamanKecKedokteran from "./pages/HalamanKedokteran/HalamanKecKedokteran";
import HalamanKedokteran from "./pages/HalamanKedokteran/HalamanKedokteran";
import HalamanKelKedokteran from "./pages/HalamanKedokteran/HalamanKelKedokteran";
import HalamanKotaKedokteran from "./pages/HalamanKedokteran/HalamanKotaKedokteran";
import HalamanKelLps from "./pages/HalamanKelLps/HalamanKelLps";
import HalamanKotaLps from "./pages/HalamanKotaLps/HalamanKotaLps";
import HalamanKabPtn from "./pages/HalamanPtn/HalamanKabPtn";
import HalamanKecPtn from "./pages/HalamanPtn/HalamanKecPtn";
import HalamanKelPtn from "./pages/HalamanPtn/HalamanKelPtn";
import HalamanKotaPtn from "./pages/HalamanPtn/HalamanKotaPtn";
import HalamanPtn from "./pages/HalamanPtn/HalamanPtn";
import HalamanKabSimakUi from "./pages/HalamanSimakUi/HalamanKabSimakUi";
import HalamanKecSimakUi from "./pages/HalamanSimakUi/HalamanKecSimakUi";
import HalamanKelSimakUi from "./pages/HalamanSimakUi/HalamanKelSimakUi";
import HalamanKotaSimakUi from "./pages/HalamanSimakUi/HalamanKotaSimakUi";
import HalamanSimakUi from "./pages/HalamanSimakUi/HalamanSimakUi";
import HomePage from "./pages/Homepage/HomePage";
import NotFound from "./pages/NotFound/NotFound";
import { Registrasi } from "./pages/Registrasi/Registrasi";

function App() {
  const [progress, setProgress] = useState(0);

  const ScrollToTop = () => {
    const location = useLocation();

    useEffect(() => {
      window.scrollTo(0, 0);
    }, [location]);

    return null;
  };

  return (
    <>
      <BrowserRouter>
        <ScrollToTop />
        <NavbarLps />
        <LoadingBar
          color="white"
          progress={progress}
          onLoaderFinished={() => setProgress(0)}
        />
        <Floatingcta />
        <Routes>
          <Route
            exact
            path="/"
            element={<HomePage setProgress={setProgress} />}></Route>
          <Route
            exact
            path="/registrasi"
            element={<Registrasi setProgress={setProgress} />}></Route>

          {/* SUPERCAMP LPS */}
          <Route
            exact
            path="/bimbel-privat-supercamp-utbk-snbt/:id"
            element={<HalamanKotaLps />}></Route>
          <Route
            exact
            path="/les-privat-supercamp-utbk-snbt/:id"
            element={<HalamanKabLps />}></Route>
          <Route
            exact
            path="/guru-privat-supercamp-utbk-snbt/:kecSlug"
            element={<HalamanKecLps />}></Route>
          <Route
            exact
            path="/bimbingan-privat-supercamp-utbk-snbt/:kelSlug"
            element={<HalamanKelLps />}></Route>

          {/* HALAMAN PROGRAM MASUK PTN */}
          <Route
            exact
            path="/bimbel-masuk-ptn"
            element={<HalamanPtn />}></Route>
          {/* KOTA */}
          <Route
            exact
            path="/les-privat-masuk-ptn/:id"
            element={<HalamanKotaPtn />}></Route>
          {/* KAB */}
          <Route
            exact
            path="/bimbel-les-privat-masuk-ptn/:id"
            element={<HalamanKabPtn />}></Route>
          {/* KEC */}
          <Route
            exact
            path="/bimbingan-masuk-ptn/:kecSlug"
            element={<HalamanKecPtn />}></Route>
          {/* KEL */}
          <Route
            exact
            path="/guru-bimbel-masuk-ptn/:kelSlug"
            element={<HalamanKelPtn />}></Route>

          {/* HALAMAN PROGRAM KEDOKTERAN */}
          <Route
            exact
            path="/bimbel-masuk-kedokteran"
            element={<HalamanKedokteran />}></Route>
          {/* KOTA */}
          <Route
            exact
            path="/les-privat-masuk-kedokteran/:id"
            element={<HalamanKotaKedokteran />}></Route>
          {/* KAB */}
          <Route
            exact
            path="/bimbingan-masuk-kedokteran/:id"
            element={<HalamanKabKedokteran />}></Route>
          {/* KEC */}
          <Route
            exact
            path="/bimbel-les-privat-masuk-kedokteran/:kecSlug"
            element={<HalamanKecKedokteran />}></Route>
          {/* KEL */}
          <Route
            exact
            path="/guru-les-privat-masuk-kedokteran/:kelSlug"
            element={<HalamanKelKedokteran />}></Route>

          {/* HALAMAN PROGRAM SIMAK UI */}
          <Route
            exact
            path="/bimbel-simak-ui"
            element={<HalamanSimakUi />}></Route>
          {/* KOTA */}
          <Route
            exact
            path="/les-privat-simak-ui/:id"
            element={<HalamanKotaSimakUi />}></Route>
          {/* KAB */}
          <Route
            exact
            path="/bimbel-privat-simak-ui/:id"
            element={<HalamanKabSimakUi />}></Route>
          {/* KEC */}
          <Route
            exact
            path="/bimbingan-simak-ui/:kecSlug"
            element={<HalamanKecSimakUi />}></Route>
          {/* KEL */}
          <Route
            exact
            path="/guru-les-privat-simak-ui/:kelSlug"
            element={<HalamanKelSimakUi />}></Route>

          {/* HALAMAN PROGRAM CBT UGM */}
          <Route
            exact
            path="/bimbel-cbt-ugm"
            element={<HalamanCbtUgm />}></Route>
          {/* KOTA */}
          <Route
            exact
            path="/les-privat-cbt-ugm/:id"
            element={<HalamanKotaCbtUgm />}></Route>
          {/* KAB */}
          <Route
            exact
            path="/bimbel-privat-cbt-ugm/:id"
            element={<HalamanKabCbtUgm />}></Route>
          {/* KEC */}
          <Route
            exact
            path="/bimbingan-privat-cbt-ugm/:kecSlug"
            element={<HalamanKecCbtUgm />}></Route>
          {/* KEL */}
          <Route
            exact
            path="/guru-les-privat-cbt-ugm/:kelSlug"
            element={<HalamanKelCbtUgm />}></Route>

          {/* HALAMAN PROGRAM IUP UGM */}
          <Route
            exact
            path="/bimbel-iup-ugm"
            element={<HalamanIupUgm />}></Route>
          {/* KOTA */}
          <Route
            exact
            path="/bimbel-privat-iup-ugm/:id"
            element={<HalamanKotaIupUgm />}></Route>
          {/* KAB */}
          <Route
            exact
            path="/les-privat-iup-ugm/:id"
            element={<HalamanKabIupUgm />}></Route>
          {/* KEC */}
          <Route
            exact
            path="/bimbel-les-privat-iup-ugm/:kecSlug"
            element={<HalamanKecIupUgm />}></Route>
          {/* KEL */}
          <Route
            exact
            path="/bimbingan-privat-iup-ugm/:kelSlug"
            element={<HalamanKelIupUgm />}></Route>
          <Route path="*" element={<NotFound />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </>
  );
}

export default App;
