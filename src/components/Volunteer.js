import React from "react";

function Volunteer() {
    return (
       
        <div className="Volunteer" style={{ width: 800, height: 700 }}>
            <h3 className="voltxt text-light">Volunteer</h3>
            <div className="PAB">
                <img src="./images/hme.jpg" className='hmeimg' alt='' style={{ height: 50 }} />
                <h5 className="itbtxt text-light">Head of Freshman Development </h5>
                <p className="itbtxt-sm text-light"> Himpunan Mahasiswa Elektroteknik ITB </p>
                <p className="timeitb text-muted">Apr 2022 - Present</p>
                <p className="hmedetil-sm text-light" style={{width:700}}> helping new members develop themselves in their first year at the organization with several projects such
                    as student orientation, internship, and seminar. </p>


            </div>

            <div className="MBC">
                <img src="./images/hme.jpg" className='hmeimg' alt='' style={{ height: 50 }} />
                <h5 className="itbtxt text-light">Head of Human Resources MBC </h5>
                <p className="itbtxt-sm text-light"> Himpunan Mahasiswa Elektroteknik ITB </p>
                <p className="timeitb text-muted">Feb 2021 - Jul 2021</p>
                <p className="hmedetil-sm text-light" style={{width:700}}>MBC is an orientation event for the freshmen in Himpunan Mahasiswa Elektroteknik ITB.
                    Im help evaluating the performances of freshman students that participated in MBC 2021 and take care of the freshman students data. </p>
            </div>

            <div className="Wispril">
                <img src="./images/hme.jpg" className='hmeimg' alt='' style={{ height: 50 }} />
                <h5 className="itbtxt text-light">Head of Internal Division Wisuda April HME 2020 </h5>
                <p className="itbtxt-sm text-light"> Himpunan Mahasiswa Elektroteknik ITB </p>
                <p className="timeitb text-muted">Mar 2021 - May 2021</p>
                <p className="hmedetil-sm text-light" style={{width:700}}>creating a successful team by create an internal events.</p>
            </div>
            
            <div className="riset">
                <img src="./images/hme.jpg" className='hmeimg' alt='' style={{ height: 50 }} />
                <h5 className="itbtxt text-light">Research Intern </h5>
                <p className="itbtxt-sm text-light"> Himpunan Mahasiswa Elektroteknik ITB </p>
                <p className="timeitb text-muted">Sep 2020 - Apr 2021</p>
                <p className="hmedetil-sm text-light" style={{width:700}}>helping team to create internal competitions, conduct electrical engineering research, etc.</p>

            </div>

            <div className="oskm">
                <img src="./images/oskm.jpg" className='hmeimg' alt='' style={{ height: 50 }} />
                <h5 className="itbtxt text-light">Head of Mentor Battallion </h5>
                <p className="itbtxt-sm text-light"> OSKM ITB 2020 </p>
                <p className="timeitb text-muted">Jul 2020 - Aug 2020</p>
                <p className="hmedetil-sm text-light" style={{width:700}}>helping my team (battalion) to be a good mentor in OSKM ITB.</p>

            </div>
        </div>
    );
}
export default Volunteer;