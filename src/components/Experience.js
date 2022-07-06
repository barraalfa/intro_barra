import React from "react";

function Experience() {
    return (
        <div className="Experience" style={{ width: 800, height: 160 }}>
            <h3 className="exptxt text-light">Experience</h3>
            <img src="./images/paragon.jpg" className='paragonimg' alt='' style={{ height: 50 }} />
            <h5 className="internparagon text-light">Software Engineer </h5>
            <p className="internparagon-sm text-light"> Paragon Technology and Inovation - Internship </p>
            <p className="timeintern text-muted">Jul 2022 - Present</p>
        </div>
    );
}
export default Experience;