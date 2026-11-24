import React from "react";
import lulusanLps from "../../assets/Supercamp/lulusan/lulusan.webp";
import "./LulusanLPS.css";

const LulusanLps = () => {
  return (
    <React.Fragment>
      <div className="box-lulusan-lps">
        <img
          src={lulusanLps}
          alt="Daftar siswa Supercamp yang lolos ke PTN favorit seperti UI, UGM, UNPAD, UNAIR, dan kampus negeri terbaik lainnya"
          className="img-lulusan-lps"
          loading="lazy"
        />
      </div>
    </React.Fragment>
  );
};

export default LulusanLps;
