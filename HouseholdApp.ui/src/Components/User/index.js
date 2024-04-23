import React, { useState, createContext } from 'react';

export const UserContext = createContext();

export const UserProvider = (props) => {
  const [user, setUser] = useState([]);
  const [householdUsers, sethouseholdUsers] = useState([]);
  const getUsersByUserHousehold = (id) => fetch(`https://localhost:44316/api/Users/${id}`)
    .then((res) => res.json())
    .then(setUser);

  const getUserById = (id) => fetch(`https://localhost:44316/api/Users/UserHousehold/${id}`)
    .then((res) => res.json)
    .then(sethouseholdUsers);

  return (
        <UserContext.Provider value={{
          user, householdUsers, getUserById, getUsersByUserHousehold,
        }}>
            {props.children}
        </UserContext.Provider>
  );
};
