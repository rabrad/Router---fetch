import React, { useState, useEffect } from 'react';
import Nav from '../components/Nav';

function Item({ match }) {
  const [userSubInfo, setUserSubInfo] = useState({});
  const [userInfo, setUserInfo] = useState({});

  const fetchItem = async () => {
    try {
      const res = await fetch(`https://jsonplaceholder.typicode.com/users/${match.params.id}`);
      const data = await res.json();

      setUserSubInfo(data.address);
      setUserInfo(data);
    } catch (error) {
      console.log('Error:', error);
    }
  };

  useEffect(() => {
    fetchItem();
    console.log('MATCH::', match);
    // eslint-disable-next-line
  }, []);

  return (
    <div>
      <Nav />
      <p className="page-sub-title">User information</p> <br />
      <h2>{userInfo.name}</h2>
      <div>{userSubInfo.city}</div>
    </div>
  );
}

export default Item;
