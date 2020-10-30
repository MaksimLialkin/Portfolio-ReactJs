import React, { Component } from 'react';
// import logo from './logo.svg';
import './App.css';
import Header from './components/Header/Header';
import Menu from './components/Menu/Menu';


const App = () => {
    return ( <div className = 'wrapper' >
        <Menu / >
        <Header name="Меня зовут Максим" / >
        </div> 
    )

};


export default App;

