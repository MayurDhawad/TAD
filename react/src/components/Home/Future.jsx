import React, { useState } from 'react'
import Rs from '../../assets/images/home/future/Rs.svg';
import Opening from '../../assets/images/home/future/Opening.svg';
import Increase from '../../assets/images/home/future/Increase.svg';
import Designers from '../../assets/images/home/future/Designers.svg';
import EnrollNowModal from "../Common/EnrollNowModal";
const Future = () => {

  const [modal, setModal] = useState(false);

  const toggle = () => setModal(!modal);

  const [future] = useState([
    {
      description: "7.5 LPA",
      badge: "Average Salary",
      img: Rs,
    },
    {
      description: "24,000+",
      badge: "Annual Job Openings",
      img: Opening,
    },
    {
      description: "21%",
      badge: "Annual Increase In Demand",
      img: Increase,
    },
    {
      description: "11%",
      badge: "Rise in development projects",
      img: Increase,
    },
    // {
    //   description: "497.72",
    //   badge: "Hourly Rate For UX/UI Designers",
    //   img: Designers,
    // }
  ]);

  return (
    <section className='setfuture'>
      <div className='container'>
        <div className="row">
          <div className="col-12 text-center">
            <h2>Your Future With TAD Online Training Courses</h2>
          </div>
          {
            future.map((future, index) => (
              <div className='col-lg-3 col-md-6 col-6' key={index}>
                <div className='d-flex future-item'>
                  <img src={future.img} className='futureimg' alt={future.description} />
                  <span className='futurecont'>
                    <h4>{future.description}</h4>
                    <p>{future.badge}</p>
                  </span>
                </div>

              </div>
            ))
          }
          <div className='col-sm-12 text-center cusnecessary'>
            {/* <h5>Acquire the necessary competencies for your future</h5> */}
            <button className='common-btn red' onClick={toggle}>Enroll Now</button>
          </div>
        </div>
      </div>
      <EnrollNowModal modal={modal} toggle={toggle} />
    </section>
  )
}

export default Future
