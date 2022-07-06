import React from "react";
import Contact from "./Contact";

function Biodata() {
    return (
        <div className="Biodata" style={{ width: 800, height: 390 }}>
            <img src="./images/header.jpg" className='header' alt='...' style={{ height: 160, width: 800 }} />
            <img src="./images/profpic.jpg" className='profpic rounded-circle' alt='' style={{ height: 150 }} />
            <h4 className="namague text-light">Barra Alfarisi Abadi</h4>
            <p className="tagline text-light">Electrical Engineering Student at Institut Teknologi Bandung</p>
            <p className="location text-muted">Bandung, West Java, Indonesia</p>
            <Contact/>
        </div>
    );
}
export default Biodata;