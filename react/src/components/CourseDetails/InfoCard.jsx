import React, { useState } from 'react'
import { Card, CardBody, CardTitle } from 'reactstrap'
import BatchPopup from './BatchPopup';

const InfoCard = (props) => {

    const { details } = props;

    const [batchPopup, setBatchPopup] = useState(false);
    const toggleBatchPopup = () => { setBatchPopup(!batchPopup) };

    return (
        <div className='courseinfo-card-wrapper'>
            <Card>
                <div className='course-img-wrapper'>
                    <img src={require('../../assets/images/courses/' + details.thumbnail)} alt={details.name} />
                    <div className='course-badge'>
                        <div>{details.badge}</div>
                    </div>
                    {/* <p className='course-price'><span className="rupee">₹ </span>{details.fullPrice}</p> */}
                </div>

                <CardBody className='p-0'>
                    <CardTitle>
                        {/* Upcoming Batches */}
                        Coming Soon
                    </CardTitle>
                    {/* <div className='upcoming-batch-wrapper'>
                        {
                            details.upcomingBatches.map((batch, index) => (
                                <div className='upcoming-date-main' key={index}>
                                    <div className='date'>
                                        <p>{batch.date}<span>{batch.month}</span></p>
                                    </div>
                                    <p className='course-name'>{details.name}</p>
                                </div>
                            ))
                        }
                    </div> */}
                    {/* <button className='plain-btn' onClick={toggleBatchPopup}>View All</button> */}
                    <BatchPopup isOpen={batchPopup} toggle={toggleBatchPopup}
                    batches={details.upcomingBatches} courseName={details.name} />
                </CardBody>
            </Card>
        </div>
    )
}

export default InfoCard