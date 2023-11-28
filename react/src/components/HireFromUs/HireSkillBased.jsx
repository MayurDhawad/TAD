import React, { useState } from 'react'
import videoImg from '../../assets/images/hire/skill-based/hire-skill-based.svg'
import EnrollNowModal from '../Common/EnrollNowModal'

const HireSkillBased = () => {
  const [modal, setModal] = useState(false);

  const toggle = () => setModal(!modal);

  return (
    <section className='cuspreferredlanguage hire-skill-based-main'>
        <div className='container'>
            <div className="row">
                <div className='col-sm-7 preferredcont'>
                    <h2>Hire candidates based on skills</h2>
                    <p>Avail the skill set that best fits your business needs. Hire TAD professionals for unmatched expertise and trusted success.</p>
                    <button className='common-btn' onClick={toggle}>Start Hiring</button>
                </div>
                <div className='col-sm-5'>
                    <div className='preferredimg'>
                        <img src={videoImg} className="img-fluid" alt="" title=''/>
                    </div>
                </div>
            </div>
        </div>
        <EnrollNowModal modal={modal} toggle={toggle} />
    </section>
  )
}

export default HireSkillBased
