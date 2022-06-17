import React from 'react';
import ReviewForm from '../ReviewForm/ReviewForm';
import './VisitCard.css'

function VisitCard({ visit, houses }) {
    const {start_date, end_date, house_id, user_id} = visit
    const houseVisit = houses.filter(house => house.id === house_id)

    return (
        <div className='visit-outer-div'>
            <div className='visit-card' style={{backgroundImage: `url(${houseVisit[0].image}})`}}>
                <div className='visit-form-div'>
                    <div className='visit-content'>
                        <ReviewForm house_id={houseVisit[0].id} user_id={user_id} />
                    </div>
                </div>
                <div className='visit-information-container'>
                    <div className='visit-info-div'>
                        <h2 className='visit-title'>{houseVisit[0].location}</h2>
                        <div className='visit-more-information'>
                            <div className='from-and-to-container'>
                                <div className='box from'>
                                    <p className='from'>From: {start_date}</p>
                                </div>
                                <div className='box to'>
                                    <p className='to'>To: {end_date}</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default VisitCard;