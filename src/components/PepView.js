import React from "react";

function PepView() {
    return (
        <div className="PepView" style={{ width: 300, height: 480 }}>
            <h4 className="edtxt text-light">People also viewed</h4>
            <div className="orang">
                <img src="./images/dummy.jpg" className='paragonimg rounded-circle' alt='' style={{ height: 50 }} />
                <h5 className="orangtxt text-light">Budi</h5>
                <p className="job text-muted">Data Scientist at Tokopedia</p>
            </div>

            <div className="orang">
                <img src="./images/dummy.jpg" className='paragonimg rounded-circle' alt='' style={{ height: 50 }} />
                <h5 className="orangtxt text-light">Hafizh</h5>
                <p className="job text-muted">Biomedical Engineering Student</p>
            </div>

            <div className="orang">
                <img src="./images/dummy.jpg" className='paragonimg rounded-circle' alt='' style={{ height: 50 }} />
                <h5 className="orangtxt text-light">Alfa</h5>
                <p className="job text-muted">AI Enthusiast</p>
            </div>

            <div className="orang">
                <img src="./images/dummy.jpg" className='paragonimg rounded-circle' alt='' style={{ height: 50 }} />
                <h5 className="orangtxt text-light">Rara</h5>
                <p className="job text-muted">Student</p>
            </div>
        </div>
    );
}
export default PepView;