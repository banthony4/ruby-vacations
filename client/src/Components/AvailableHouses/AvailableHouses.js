import React from 'react';
import HouseCard from '../HouseCard/HouseCard.js';
import './AvailableHouses.css';

function AvailableHouses({houses, setSelectedState, selectedState}) {
    // const [selectedState, setSelectedState] = useState('All')
    
    // const filterHouses = () => {
    //     if(selectedState === "All"){
    //         return houses
    //     } else {
    //         return houses.filter(h => h.location.toLowerCase().includes(selectedState.toLowerCase()))
    //     }
    // }

    // const test = filterHouses()

    const renderHouses = houses.map(house => <HouseCard house={house} key={house.id} />)
    
    return (
        <div>
            <div className='houses-header-div'>
                <h1>AVAILABLE HOUSES</h1>
            </div>
            <div className='selector-div'>
                <label>
                Select State:
                <select name='state' onChange={(e) =>{ setSelectedState(e.target.value) }} value={selectedState} >
                <option value='All'>All</option>
                    <option value='Alaska'>Alaska</option>
                    <option value='California'>California</option>
                    <option value='Colorado'>Colorado</option>
                    <option value='Florida'>Florida</option>
                    <option value='Illinios'>Illinios</option>
                    <option value='Montana'>Montana</option>
                    <option value='New York'>New York</option>
                    <option value='Texas'>Texas</option>
                    <option value='Utah'>Utah</option>
                    <option value='Washington'>Washington</option>
                </select>
                </label>
            </div>
            <div className='available-houses'>
                {renderHouses}
            </div>
        </div>
    )
}

export default AvailableHouses;