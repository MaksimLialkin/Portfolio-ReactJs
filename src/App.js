import React from 'react';
// import logo from './logo.svg';
import './App.css';


const App = () => {
  return (
    <div className='wrapper'>
      <header className='header'>
       <img src='https://www.designmantic.com/blog/wp-content/uploads/2019/11/Travel-Logo-1-1.jpg' />
      </header>
      <nav className='menu'>
          <ul>
            <li>Profile</li>
            <li>Messages</li>
            <li>News</li>
            <li>Music</li>
            <li>Settings</li>
          </ul>
        </nav>
      <div className='content'>
        <div>
          <img src='https://images.pexels.com/photos/753626/pexels-photo-753626.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500' />
        </div>
        <div>
          <img src='https://images.pexels.com/photos/1049764/pexels-photo-1049764.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500' />
          description
        </div>
        <div>My posts</div>
        <div>New posts</div>
        <div>Post 1</div>
        <div>Post 2</div>
      </div>
    </div>
  );
}


export default App;
