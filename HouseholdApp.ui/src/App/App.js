import React, { useEffect, useState } from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import Routes from '../helpers/Routes';
import Nav from '../Components/Nav';
import './App.scss';
import { getAuth, onAuthStateChanged } from 'firebase/auth';
import Household from '../helpers/data/houseHoldUsers';
import Footer from '../Components/Footer';

function App() {
  const [user, setUser] = useState(null);
  const [uid, setUid] = useState('');
  const [authed, setAuthed] = useState(false);
  const [userHousehold, setUserHousehold] = useState([]);
  const [householdId, setHouseholdId] = useState(0);

  
    const auth = getAuth();
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        user.getIdToken().then((token) => {
          window.sessionStorage.setItem('token', token);
        });
        setUser(user);
        setUid(user.uid);
        setAuthed(true);
        
      } else {
        setUser(null);
        setAuthed(false);
      }
      return () => unsubscribe();
    }, []);

   useEffect(() => {
  if (user) {
    // Fetch user household
    Household.getUsersHousehold(user.uid)
      .then((resp) => {
        if (resp && resp.length > 0) {
          setUserHousehold(resp[0]);
        } else {
          setUserHousehold(null); // Handle the case where resp is empty or null
        }
      })
      .catch((error) => {
        setUserHousehold(null); // Handle error case
      });

    // Fetch household ID
    Household.getHousehold(user.uid)
      .then((resp) => {
        if (resp) {
        
          setHouseholdId(resp.householdId);
        } else {
          setHouseholdId(null); // Handle the case where resp is empty or null
        }
      })
      .catch((error) => {
        setHouseholdId(null); // Handle error case
      });
  }
}, [user]);


  return (
    <div className='App'>
      <Router>
        <Nav user={user} />
        <Routes
          authed={authed}
          showFooter={true}
          uid={uid}
          user={user}
          householdId={householdId}
          userHousehold={userHousehold}
        />
        <Footer />
      </Router>
    </div>
  );
}

export default App;
