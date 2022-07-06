import React from "react";

function Education() {
    return (
       
        <div className="Education" style={{ width: 800, height: 250 }}>
            <h3 className="edtxt text-light">Education</h3>
            <div className="ITB">
                <img src="./images/itb.png" className='paragonimg' alt='' style={{ height: 50 }} />
                <h5 className="itbtxt text-light">Institut Teknologi Bandung </h5>
                <p className="itbtxt-sm text-light"> Bachelor of Engineering - BE, Electrical Engineering </p>
                <p className="timeitb text-muted">2019 - Present</p>
            </div>
            <div className="smantibo">
            <img src="./images/smanti.jpg" className='paragonimg' alt='' style={{ height: 50 }} />
            <h5 className="smantitxt text-light">SMA Negeri 3 Bogor </h5>
            <p className="timesmanti text-muted">2015 - 2018</p>
            </div>
        </div>
    );
}
export default Education;