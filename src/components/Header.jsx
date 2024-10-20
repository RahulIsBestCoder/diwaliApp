import React from 'react';

function Header() {
  return (
    <header>
      <div className="logo">Diwali Festival</div>
      <nav>
        <ul>
          <li><a href="#home">Home</a></li>
          <li><a href="#greetings">Greetings</a></li>
          <li><a href="#recipes">Recipes</a></li>
          <li><a href="#gifts">Gifts</a></li>
        </ul>
      </nav>
      <button className="cta-button">Send E-Card</button>
    </header>
  );
}

export default Header;
