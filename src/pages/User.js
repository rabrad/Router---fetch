import React, { useState, useEffect } from 'react';
import Nav from '../components/Nav';
import { Link } from 'react-router-dom';

function User({ id }) {
  const [items, setItems] = useState([]);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const res = await fetch(`https://jsonplaceholder.typicode.com/users`);
      const data = await res.json();
      setItems(data);

      console.log('SHOP DATA:', data);
    } catch (error) {
      console.log('Error:', error);
    }
  };

  return (
    <div>
      <div>
        <Nav />
        <p className="page-sub-title">Users list</p> <br />
      </div>
      {items.map(item => (
        <p className="users-col" key={item.id}>
          <Link to={`/user/${item.id}`}> {item.name} </Link>
        </p>
      ))}
    </div>
  );
}

export default User;
