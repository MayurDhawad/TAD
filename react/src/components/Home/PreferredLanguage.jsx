import React, { useState } from 'react'
import videoImg from '../../assets/images/home/preferredLanguage/bhaasha.png'
import EnrollNowModal from "../Common/EnrollNowModal";
const PreferredLanguage = () => {

    const [modal, setModal] = useState(false);

    const toggle = () => setModal(!modal);

    return (
        <section className='cuspreferredlanguage'>
            <div className='container'>
                <div className="row">
                    <div className='col-sm-7 preferredcont'>
                        <h2>Learn in your preferred language</h2>
                        <p>Break down language barriers to learning and gain new skills with TAD online learning courses powered by Bhaasha, allowing you to expand your knowledge in your preferred language.</p>
                        <button className='common-btn' onClick={toggle}>Join Now</button>
                    </div>
                    <div className='col-sm-5'>
                        <div className='preferredimg'>
                            <img src={videoImg} className="img-fluid" alt="" title='' />
                        </div>
                        {/* <video controls width="100%">
                        <source src={src} type="video/mp4" />
                    </video> */}
                    </div>
                </div>
            </div>
            <EnrollNowModal modal={modal} toggle={toggle} />
        </section>
    )
}

export default PreferredLanguage
