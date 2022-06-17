import React, { useEffect, useState } from "react";
import { Route, Switch, Redirect } from 'react-router-dom';
import NavBar from '../Components/NavBar/NavBar.js';
import AvailableHouses from '../Components/AvailableHouses/AvailableHouses.js';
import UserProfile from '../Components/UserProfile/UserProfile.js';
import MyReviews from '../Components/MyReviews/MyReviews.js';
import MyVisits from '../Components/MyVisits/MyVisits.js';
import LoginSignUpPage from '../Components/LoginSignUpPage/LoginSignUpPage.js';
import HouseProfile from '../Components/HouseProfile/HouseProfile.js';
import './App.css';

function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [user, setUser] = useState(null);
  const [houses, setHouses] = useState([])
  const [reviews, setReviews] = useState([])
  const [selectedState, setSelectedState] = useState('All')

  useEffect(() => {
    fetch('/authorized_user')
    .then(r => {
      if(r.ok){
        r.json()
        .then(user => {
          setIsAuthenticated(true)
          setUser(user)
        })
        .then(unlockHouses)
        .then(unlockReviews)
      }
    })
  }, []);

  const unlockHouses = () => {
    fetch('/houses')
    .then(r => r.json())
    .then(data => setHouses(data))
    }
  const unlockReviews = () => {
    fetch(`http://localhost:3000/reviews/${user.id}`)
      .then((res) => res.json())
      .then((data) => setReviews(data))
  }

  const filterHouses = () => {
    if(selectedState === "All"){
        return houses
    } else {
        return houses.filter(h => h.location.toLowerCase().includes(selectedState.toLowerCase()))
    }
}

  if(!isAuthenticated) return <LoginSignUpPage setUser={setUser} setIsAuthenticated={setIsAuthenticated} />
  return (
      <div className="app">
        <Switch>
          <Route exact path="/">
            {isAuthenticated ? <Redirect to= "/availablehouses"/> : <LoginSignUpPage  setUser={setUser} setIsAuthenticated={setIsAuthenticated}/>}
          </Route>
          <div>
            <NavBar setUser={setUser} setIsAuthenticated={setIsAuthenticated} />
            <div className="body">
              <Route exact path="/availablehouses">
                  {isAuthenticated ? <AvailableHouses houses={filterHouses()} setSelectedState={setSelectedState} selectedState={selectedState} /> : <Redirect to="/"/>}
              </Route>
              <Route path="/userprofile">
                {isAuthenticated ? <UserProfile user={user}/> : <Redirect to="/"/>}
              </Route>
              <Route path="/myvisits">
                {isAuthenticated ? <MyVisits user={user} houses={houses}/> : <Redirect to="/"/>}
              </Route>
              <Route path="/myreviews">
                {isAuthenticated ? <MyReviews user={user} reviews={reviews} setReviews={setReviews} houses={houses}/>  : <Redirect to="/"/>}
              </Route>
              <Route path="/availablehouses/:id">
                {isAuthenticated ? <HouseProfile user={user}/>  : <Redirect to="/"/>}
              </Route>
            </div>
          </div>
        </Switch>
      </div>
  );
}
export default App;