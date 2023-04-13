import logo from '../logo.svg';
import Navbar from '../Navbar/Navbar';
import React, { useState, useEffect, Component } from 'react';
import { Container } from '@mui/system';
import axios from 'axios';

function Messagerie() {
    const [users, setUsers] = useState([]);
    useEffect(() => {
      axios
        .get('http://localhost:3000/users')
        .then(res => {
          console.log(res);
          setUsers(res.data);
        })
        .catch(err => {
          console.log(err);
        });
    }, []);


      return (
        <div className="App">
          <Navbar />
          <nav className="navbar" style={{ backgroundColor: 'green' }}>
            {users.map((user) => (
              <div>
                <a href={user.userId} style={{ borderRadius: '10px', backgroundColor: 'darkgreen', padding: '10px', margin: '5px', color: 'white', display: 'block' }}>
                  <i class="fa fa-user" style={{ marginRight: '5px' }}></i>{user.name}
                </a>
              </div>
            ))}
          </nav>
        </div>
      );
  }
  

export default Messagerie;