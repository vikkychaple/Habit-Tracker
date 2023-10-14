import React from 'react';

function Navbar() {
    const navbarBrandStyle = {
        color: 'orange',
        fontWeight: 'bold',
        //margin: '10px', // You can adjust the margin size as needed
        padding: '10px', // You can adjust the padding size as needed
      };
  return (
    <nav className="navbar navbar-expand navbar-dark bg-dark">
      <span style={navbarBrandStyle} className="navbar-brand">Habit Tracker</span>
      
    </nav>
  );
}

export default Navbar;
