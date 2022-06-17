import React, {useState, useEffect} from 'react';
import VisitCard from '../VisitCard/VisitCard.js';
import './MyVisits.css';


function MyVisits({ user, houses }) {
    const [visits, setVisits] = useState([])

    useEffect(() => {
        fetch(`/visits/by_user/${user.id}`)
        .then(r => r.json())
        .then(data => setVisits(data))
    },[])
    

    const renderVisits = visits.map(visit => <VisitCard visit={visit} key={visit.id} houses={houses} user={user} />)

    return(
        <div>
            <div className='visits-header-div'>
                <h1>MY VISITS</h1>
            </div>
            <div className='all-my-visits'>
                {renderVisits}
            </div>
        </div>
    )
}

export default MyVisits;